/*********
 * Automates the creation of AS-IS boxes
 * Populates a customer record called Ship Manifest when an Item Fulfillment is 
 * created.
 * 
 * Herb Joseph hjoseph@cumula3.com
 ************************************************************************************/


var AS_IS = '1';
var PICK_PACK_STRING = 'Pick Pack'
var UNIQUE_RECORD_TYPE = 'customrecord_unique_pick_ticket_number';
var UNIQUE_RECORD_FIELD = 'custrecord_unique_number';
var UNIQUE_RECORD_ID = '2';
var DEFAULT_BOX_NAME = 'To Be Generated';
var BOX_PREFIX = 'APIC';
var PICK_PACK_PREFIX = 'APIK';
var MAX_BOXES = 500;
var USAGE_LIMIT = 500;
var COUNT_BOXES;
var CREATE_BOXES;


/*******************************************************
 * Before the record is submitted generate a new
 * license plate number if it is a new record that is 
 * being created
 * 
 * @param type
 *******************************************************/
function onBeforeSubmit(type) {
    try {
        //only run the Ship Manifest deployment
        var context = nlapiGetContext();
        if (context.getDeploymentId() != 'customdeploy_pt_shipping_manifest') return;
        nlapiLogExecution('Debug', 'onBeforeSubmit', 'script triggered');
        var box = nlapiGetNewRecord();
        var boxId = box.getId();
        if (box.getFieldValue('name') == DEFAULT_BOX_NAME) {
            var uniqueNum = new UniqueNumber(UNIQUE_RECORD_TYPE, UNIQUE_RECORD_ID, UNIQUE_RECORD_FIELD);
            var prefix = '';
            if (box.getFieldValue('custrecord_ship_pkgtype') == PICK_PACK_STRING) {
                prefix = PICK_PACK_PREFIX;
            } else {
                prefix = BOX_PREFIX;
            }
            var uNumber = uniqueNum.getNextNumber(prefix)
            box.setFieldValue('name', uNumber);
            box.setFieldValue('custrecord_ship_contlp', uNumber);
        }
    } catch (e) {

        nlapiLogExecution('Error', 'onBeforeSubmit', 'Error - ' + e.message);
    }

}


/*******************************************************
 * When an item fulfillment is submitted, auto create
 * boxes for AS-IS items.
 * 
 * When a ship manifest is updated determine if
 * the box record has been updated by CASI, if so
 * flag item fulfillment as shipped
 * 
 * @param type
 ******************************************************/
function onAfterSubmit(type) {

    try {

        //only run the Item Fulfillment deployment
        var context = nlapiGetContext();
        if (context.getDeploymentId() == 'customdeploy_pt_create_as_is_casi_boxes') {
            if (type != 'create') return;
            nlapiLogExecution('Audit', 'AfterSubmit', 'script triggered');

            var fulfillment = nlapiGetNewRecord();
            //var salesOrder = nlapiLoadRecord('salesorder', fulfillment.getFieldValue('createdfrom'))
            nlapiLogExecution('Debug', 'AfterSubmit', 'customform - ' + fulfillment.getFieldValue('customform'));
            if (fulfillment.getFieldValue('customform') == '121') {
                return;
            }
            //				var qty = getQuantityCount(fulfillment);
            // We are unable to create more than 30 boxes in this user event. Pass onto a scheduled script if greater than 30.
            //				if(qty){
            //					try{
            //						nlapiLogExecution('Audit', 'createBatchBoxes', 'Qty is greater than or equal to ' + MAX_BOXES);
            //						var params = {};
            //						params.custscript_fulfillment_id = fulfillment.getId();
            //						
            //						var script = nlapiScheduleScript('customscript_ship_manifest_scheduled', 'customdeploy_ship_manifest_scheduled', params);
            //						nlapiLogExecution('Debug', 'onAfterSubmit', 'script - ' + script);
            //						
            //						return;
            //					}catch(e){
            //						nlapiLogExecution('Error', 'onAfterSubmit', 'error message - ' + e);
            //					}
            //					
            //				}


            //			}

            nlapiLogExecution('Audit', 'createBatchBoxes', 'Qty is less than ' + MAX_BOXES);
            var hasAsIs = false;
            var uniqueNum = new UniqueNumber(UNIQUE_RECORD_TYPE, UNIQUE_RECORD_ID, UNIQUE_RECORD_FIELD, true);
            for (var x = 1; x <= fulfillment.getLineItemCount('item'); x++) {

                if (fulfillment.getLineItemValue('item', 'custcol_pack_type', x) == AS_IS) {

                    try {
                        //							nlapiLogExecution('Debug', 'AfterSubmit', 'found an AS_IS item');
                        if (!Util.isEmptyString(fulfillment.getLineItemValue('item', 'quantity', x))) {
                            hasAsIs = true;
                            createBoxRecord(fulfillment, x, context, uniqueNum);
                        }
                    } catch (e) {
                        nlapiLogExecution('Debug', 'onAfterSubmit', 'Error while creating box record - ' + e.message);
                    }
                }

            }
            if (hasAsIs) {
                uniqueNum.endEfficientMode();
            }

            //if box record is complete by CASI, flag mark item fulfillmnet as shipped
        } else if (context.getDeploymentId() == 'customdeploy_pt_shipping_manifest') {
            var box = nlapiGetNewRecord();
            if (!Util.isEmptyString(box.getFieldValue('custrecord_ship_trackno'))) {
                if (Util.isEmptyString(box.getFieldValue('custrecord_pt_item_fulfillment'))) {
                    nlapiLogExecution('debug', 'AfterSubmit', 'no item fulfillment on box record');
                    return;
                }
                //update itemfulfillment to shipped
                var itemFulfillment = nlapiLoadRecord('itemfulfillment', box.getFieldValue('custrecord_pt_item_fulfillment'));
                var packagecount = itemFulfillment.getLineItemCount('package');
                var trackno = box.getFieldValue('custrecord_ship_trackno');
                var boxweight = box.getFieldValue('custrecord_ship_actwght');
                var boxno = box.getFieldValue('custrecord_ship_pkgno');
                var match = 0;

                nlapiLogExecution('debug', 'AfterSubmit', 'packagecount: ' + packagecount);
                if (packagecount > 0) {
                    for (n = 1; n <= packagecount; n++) {
                        var ptrackingno = itemFulfillment.getLineItemValue('package', 'packagetrackingnumber', n);
                        nlapiLogExecution('debug', 'AfterSubmit', 'ptrackingno: ' + ptrackingno);
                        if (ptrackingno == trackno) {
                            match++;
                        }
                    }
                }

                nlapiLogExecution('debug', 'AfterSubmit', 'trackno: ' + trackno);
                if (match == 0) {
                    itemFulfillment.selectNewLineItem('package');
                    itemFulfillment.setCurrentLineItemValue('package', 'packagetrackingnumber', trackno);
                    itemFulfillment.setCurrentLineItemValue('package', 'packageweight', boxweight);
                    itemFulfillment.setCurrentLineItemValue('package', 'packagedescr', boxno);
                    itemFulfillment.commitLineItem('package');
                }

                if (itemFulfillment.getFieldValue('shipstatus') != 'C') {
                    itemFulfillment.setFieldValue('shipstatus', 'C');
                }
                nlapiSubmitRecord(itemFulfillment);
            }

        }
    } catch (e) {

        nlapiLogExecution('Error', 'onAfterSubmit', 'unexpected error - ' + e.message);
    }
}

// We are unable to create more than 200 boxes in this user event.
function getQuantityCount(fulfillment) {

    var qty = getCount(fulfillment);

    if (qty >= MAX_BOXES) {
        return true;
    } else {
        return false;
    }
}

/**************************************************
 * Counts the number of AS_IS boxes on the item fulfillment
 * 
 * @param fulfillment
 * @returns {Number}
 */
function getCount(fulfillment) {
    var qty = 0;
    var lineqty = null;
    nlapiLogExecution('Debug', 'getCount', 'line item count - ' + fulfillment.getLineItemCount('item'));



    for (var i = 1; i <= fulfillment.getLineItemCount('item'); i++) {

        if (fulfillment.getLineItemValue('item', 'custcol_pack_type', i) == AS_IS) {
            lineqty = fulfillment.getLineItemValue('item', 'quantity', i);
            //			nlapiLogExecution('Debug', 'getCount', 'lineqty - ' + lineqty);
            if (Util.isEmptyString(lineqty)) {
                nlapiLogExecution('Debug', 'getCount', 'lineqty is empty');
                continue;
            }
            qty += parseFloat(lineqty);
        }
    }
    nlapiLogExecution('Debug', 'getCount', 'qty - ' + qty);
    return qty;
}





/************************************************************
 * Server Side:  
 * Creates the 'License Plate Button'
 * Populates a new Box record
 * Creates the 'Packing Completed' button on the item fulfillment
 * 
 * @param type
 * @param form
 ***********************************************************/
function onBeforeLoad(type, form) {

    try {
        form.setScript('customscript_pt_call_print_suitelet');

        //only run the Ship Manifest deployment
        var context = nlapiGetContext();
        if (context.getDeploymentId() == 'customdeploy_pt_shipping_manifest') {

            var box = nlapiGetNewRecord();

            if (!isBoxRecord(box)) return;
            var boxId = box.getId();

            if (type == 'view') {
                form.setScript('customscript_pt_call_print_suitelet');
                var btn = form.addButton('custpage_LicenseBtn', 'Print License Plate', 'onclick_printLicense(' + boxId + ')');

            } else if (type == 'create') {
                //Manually creating a Pick Pack box
                //Set unique Number
                var boxName = box.getFieldValue('name');
                if (Util.isEmptyString(boxName)) box.setFieldValue('name', DEFAULT_BOX_NAME);
                var fulfillment = nlapiLoadRecord('itemfulfillment', box.getFieldValue('custrecord_pt_item_fulfillment'));

                //populateBoxRecord(box, fulfillment);
                populateBoxRecord(box, fulfillment, PICK_PACK_STRING);
            }


            //process the fulfillment record
        } else if (context.getDeploymentId() == 'customdeploy_pt_create_as_is_casi_boxes') {
            if (type == 'view') {

                //only display the button if there are boxes on the fulfillment
                var fulfillment = nlapiGetNewRecord();
				/*
				var filters = [];
				
				filters[0] = new nlobjSearchFilter('custrecord_pt_item_fulfillment',null,'anyof',fulfillment.getId());
				var results = nlapiSearchRecord('customrecord_ship_manifest',null,filters);
				*/
                var results = searchByFulfillment(fulfillment.getId());
                if (results != null && results.length > 0) {
                    nlapiLogExecution('Debug', 'onBeforeLoad', 'get results - ' + results.length);
                    //create button
                    var fulfillmentId = fulfillment.getId();
                    var packingBtn = form.addButton('custpage_packingCompleted', 'Packing Completed', 'onClick_packingcomplete(' + fulfillmentId + ')');
                }



            }
        }
    } catch (e) {
        nlapiLogExecution('Error', 'onBeforeLoad', 'Unexpected Error - ' + e.message);
    }
}

/*******************************************************
 * Client script: Called when the 'Print License Plate'
 * button is clicked
 * @param recId
 * @param form
 *******************************************************/
function onclick_printLicense(boxId) {
    try {
        //

        var url = nlapiResolveURL('SUITELET', 'customscript_pt_create_box_license_plate', 'customdeploy_pt_create_box_license_plate', false);

        url += '&boxid=' + boxId;
        //alert(url);
        window.open(url);

    } catch (e) {

        nlapiLogExecution('Error', 'onclick_printLicense', 'Unexpected Error - ' + e.message);
    }

}

function searchByFulfillment(fulfillmentId) {

    var filters = [];
    filters[0] = new nlobjSearchFilter('custrecord_pt_item_fulfillment', null, 'anyof', fulfillmentId);

    var results = nlapiSearchRecord('customrecord_ship_manifest', null, filters);


    return results;
}

/*********************************************************
 * Client Script: 
 * Add the box counts to the box/CASI records
 * @param fulfillentId
 */
function onClick_packingcomplete(fulfillmentId) {
    try {
        fulfillment = nlapiLoadRecord('itemfulfillment', fulfillmentId)
        var qty = getCount(fulfillment);

        var results = searchByFulfillment(fulfillmentId);
        if (results == null) {
            alert('unable to find any CASI boxes for this Item Fulfillment');
            return;
        }
		/*
		if(results.length != qty){
			alert('Unable to complete packing as some of the box records are still being created.  Please try again in about 1 min.');
			return;
		}*/

        //		Send to schedule script if over 30 boxes need to be checked
		/*
			if(results.length == qty && qty >= MAX_BOXES){
				try{
					nlapiLogExecution('Audit', 'onClick_packingcomplete', 'Qty is greater than or equal to ' + MAX_BOXES);
					var params = {};
					params.custscript_fulfillment_id = fulfillment.getId();
					var script = nlapiScheduleScript('customscript_fill_packing_complete', 'customdeploy_fill_packing_complete', params);
					nlapiLogExecution('Debug', 'onClick_packingcomplete', 'script - ' + script);
					
					return;
				}catch(e){
					nlapiLogExecution('Error', 'onClick_packingcomplete', 'error message - ' + e);
				}	
			}
			
//			return;
//		}*/

        //Update all with box number
        var multi = 'N';
        var boxCnt = results.length;
        if (results.length > 1) {
            multi = 'Y';
        } else {
            index = 0;
            boxCnt = 0;
        }
        var success = true;
        var message = '';
        var fields = ['custrecord_ship_pkgcount', 'custrecord_ship_pkgno', 'custrecord_ship_multipackage', 'custrecord_ready_to_be_processed'];
        for (var i = 0; i < results.length; i++) {
            try {
                var index = i + 1;
                var values = [boxCnt, index, multi, 'T'];
                //alert(fields + ' ' + values);
                nlapiSubmitField('customrecord_ship_manifest', results[i].getId(), fields, values);
            } catch (e) {
                success = false;
                message = 'At least one box has failed with...' + e.message;
                nlapiLogExecution('Error', 'run', message);
            }
        }
        if (success) {
            var iFields = ['shipstatus'];
            var iValues = ['B'];
            //Update status on item filfillment to packed
            nlapiSubmitField('itemfulfillment', fulfillmentId, iFields, iValues);
            alert('All boxes have been updated...Packing is complete');
            location.reload();

        } else {
            alert(message);
        }

    } catch (e) {
        alert('Unexpected error while completing packing - ' + e.message);
        nlapiLogExecution('Error', 'onClick_packingcomplete', 'Unexpected Error - ' + e.message);
    }
}

/************************************************************
 * Client Script: 
 * validates that the width, length, and height fields to be a decimal
 * number
 * @param fulfillmentId
 */
function onFieldChange(type, name) {
    var context = nlapiGetContext();
    if (context.getDeploymentId() == 'customdeploy_pt_call_print_suitelet') {
        nlapiLogExecution('Debug', 'onFieldChange', 'name - ' + name);
        if (name == 'custrecord_ship_length' || name == 'custrecord_ship_width' || name == 'custrecord_ship_height') {

            validateLines(name);

        } else if (name == 'custrecord_ship_box_dimensions') {

            var boxDimensionId = nlapiGetFieldValue('custrecord_ship_box_dimensions');
            nlapiLogExecution('Debug', 'onFieldChange', 'boxDimensionId - ' + boxDimensionId);
            if (!Util.isEmptyString(boxDimensionId)) {
                nlapiLogExecution('Debug', 'onFieldChange', 'Loading box dimension record');
                var boxDimRec = nlapiLoadRecord('customrecord_box_dimensions', boxDimensionId);
                nlapiLogExecution('Debug', 'onFieldChange', 'Record loaded');

                var length = boxDimRec.getFieldValue('custrecord_box_length');
                var width = boxDimRec.getFieldValue('custrecord_box_width');
                var height = boxDimRec.getFieldValue('custrecord_box_height');

                nlapiLogExecution('Debug', 'onFieldChange', 'length - ' + length + ', width - ' + width + ', height - ' + height);

                nlapiSetFieldValue('custrecord_ship_length', length);
                nlapiSetFieldValue('custrecord_ship_width', width);
                nlapiSetFieldValue('custrecord_ship_height', height);
            }

        }
    }


}

function onSave() {
    var context = nlapiGetContext();
    if (context.getDeploymentId() == 'customdeploy_pt_call_print_suitelet') {
        var arr = ['custrecord_ship_length', 'custrecord_ship_width', 'custrecord_ship_height'];
        var fieldValue = true;
        for (var i = 0; i < arr.length; i++) {
            nlapiLogExecution('Debug', 'onSave', 'name - ' + arr[i]);
            fieldValue = validateLines(arr[i]);
            nlapiLogExecution('Debug', 'onSave', 'fieldValue - ' + fieldValue);
            if (fieldValue == false) {
                break;
            }
            //nlapiSetFieldValue(name,changeToDecimal(fieldValue),false);
        };

        return fieldValue;
    }

    if (context.getDeploymentId() == 'customdeploy_item_fulfill_cs') {
        var lineqty = null;
        var qty = 0;
        for (var i = 1; i <= nlapiGetLineItemCount('item'); i++) {

            if (nlapiGetLineItemValue('item', 'custcol_pack_type', i) == AS_IS) {
                lineqty = nlapiGetLineItemValue('item', 'quantity', i);
                //				alert('lineqty - ' + lineqty);
                if (Util.isEmptyString(lineqty)) {
                    nlapiLogExecution('Debug', 'getCount', 'lineqty is empty');
                    //					alert('lineqty is empty')
                    continue;
                }
                qty += parseFloat(lineqty);
            }
        }
        //		alert('qty' + qty);
        if (qty > MAX_BOXES) {
            alert('Quantity is over ' + MAX_BOXES + ', please break up your item fulfillment to be under ' + MAX_BOXES);
            return false;
        } else {
            return true;
        }
    }
}


function changeToDecimal(aValue) {

    if (!isNaN(aValue)) {
        aValue = parseFloat(aValue);
        aValue = aValue.toFixed(2);
        return aValue;

    } else {
        return;
    }

}

function validateLines(name) {
    nlapiLogExecution('Debug', 'validateLines', 'name - ' + name);
    var fieldValue = nlapiGetFieldValue(name);
    nlapiLogExecution('Debug', 'validateLines', 'fieldValue - ' + fieldValue);
    if (Util.isEmptyString(fieldValue)) return true;

    if (isNaN(fieldValue)) {
        nlapiLogExecution('Debug', 'validateLines', 'Inside NaN');
        var field = nlapiGetField(name);
        alert('Please enter a numeric value for the ' + field.getLabel() + ' field');
        return false;
    } else {
        nlapiLogExecution('Debug', 'validateLines', 'Inside else');
        nlapiSetFieldValue(name, changeToDecimal(fieldValue), false);
        return true;
    }
}







/**********************************************************
 * Create the box record
 * @param item
 * @param qty
 * @param fulfillment
 * @returns
 **********************************************************/
function createBoxRecord(fulfillment, index, context, uniqueNum) {

    nlapiLogExecution('Debug', 'createBoxRecord', 'Creating an AS-IS box');
    var qty = fulfillment.getLineItemValue('item', 'quantity', index);
    //	var itemId = fulfillment.getLineItemValue('item', 'item', index);
    //	var item = nlapiLoadRecord('inventoryitem', itemId);
    //var saleOrder = fulfillment.getFieldText('createdfrom');
    //	var uniqueNum = new UniqueNumber(UNIQUE_RECORD_TYPE, UNIQUE_RECORD_ID, UNIQUE_RECORD_FIELD, true);


    for (var i = 0; i < qty; i++) {
        try {
            var box = nlapiCreateRecord('customrecord_ship_manifest');

            box.setFieldValue('name', uniqueNum.getNextNumber('APIC'));
            //box.setFieldValue('altname', 'test23');
            box = populateBoxRecord(box, fulfillment, null, index);


            nlapiSubmitRecord(box);
            //checkGovernance(context)
        } catch (e) {

            nlapiLogExecution('Error', 'createBoxRecord', 'Error while creating a box record - ' + e.message);
        }

    }
    //	uniqueNum.endEfficientMode();



}

/**********************************************************************
 * Copies values from the itemfulfillment and the item
 * and populates the box object
 * 
 * @param box
 * @param fulfillment
 * @param item
 * @param qty
 **********************************************************************/
function populateBoxRecord(box, fulfillment, pickPack, index) {

    //	var salesOrder = nlapiLoadRecord('salesorder', fulfillment.getFieldValue('createdfrom'));
    //	var customer = nlapiLoadRecord('customer', salesOrder.getFieldValue('entity'));

    //	var salesOrderNo = salesOrder.getFieldValue('tranid');
    var salesOrderNo = fulfillment.getFieldText('createdfrom');
    var pos = salesOrderNo.indexOf('SO');
    if (pos > -1) salesOrderNo = salesOrderNo.substring(pos + 2);
    box.setFieldValue('custrecord_pt_item_fulfillment', fulfillment.getId());

    box.setFieldValue('custrecord_ship_orderno', salesOrderNo);
    box.setFieldValue('custrecord_ship_order', fulfillment.getFieldValue('createdfrom'));
    box.setFieldValue('custrecord_ship_servicelevel', fulfillment.getFieldText('shipmethod'));

    var shipMethod = fulfillment.getFieldText('shipmethod');
    var carrier = '';
    if (shipMethod.indexOf('UPS LTL') > -1) {
        carrier = 'LTL';
    } else if (shipMethod.indexOf('UPS') > -1) {
        carrier = 'UPS';
    } else if (shipMethod.indexOf('PICK UP') > -1) {
        carrier = 'P-UP';
    } else if (shipMethod.indexOf('ABF Commercial') > -1) {
        carrier = 'LTL LTL';
    }

    if (!Util.isEmptyString(carrier)) {
        box.setFieldValue('custrecord_ship_carrier', carrier);
    }

    //box.setFieldValue('custrecord_ship_charges', fulfillment.getFieldValue('shippingcost'));
    //box.setFieldValue('custrecord_ship_custid', fulfillment.getFieldValue('shippingcost'));

    box.setFieldValue('custrecord_ship_contlp', box.getFieldValue('name'));


    box.setFieldValue('custrecord_ship_addr1', fulfillment.getFieldValue('shipaddr1'));
    box.setFieldValue('custrecord_ship_addr2', fulfillment.getFieldValue('shipaddr2'));
    box.setFieldValue('custrecord_ship_city', fulfillment.getFieldValue('shipcity'));
    box.setFieldValue('custrecord_ship_state', fulfillment.getFieldValue('shipstate'));
    box.setFieldValue('custrecord_ship_country', fulfillment.getFieldValue('shipcountry'));
    box.setFieldValue('custrecord_ship_zip', fulfillment.getFieldValue('shipzip'));

    if (pickPack) {
        box.setFieldValue('custrecord_ship_pkgtype', PICK_PACK_STRING);
    } else {
        //if (item != null){

        nlapiLogExecution('Debug', 'populateBoxRecord', 'getting values from the item record');

        //			box.setFieldValue('custrecord_ship_pkgtype', item.getFieldText('custitem_pack_type'));
        //			box.setFieldValue('custrecord_ship_ref1', item.getFieldValue('itemid'));
        //			box.setFieldValue('custrecord_ship_length', changeToDecimal(item.getFieldValue('custitem_pacejet_item_length')));
        //			box.setFieldValue('custrecord_ship_width', changeToDecimal(item.getFieldValue('custitem_pacejet_item_width')));
        //			box.setFieldValue('custrecord_ship_height', changeToDecimal(item.getFieldValue('custitem_pacejet_item_height')));
        //			for(var i=1; i<=fulfillment.getLineItemCount('item'); i++){
        box.setFieldValue('custrecord_ship_pkgtype', fulfillment.getLineItemText('item', 'custcol_pack_type', index));
        box.setFieldValue('custrecord_ship_ref1', fulfillment.getLineItemText('item', 'item', index));
        box.setFieldValue('custrecord_ship_length', changeToDecimal(fulfillment.getLineItemValue('item', 'custcol_item_pacejet_length', index)));
        box.setFieldValue('custrecord_ship_width', changeToDecimal(fulfillment.getLineItemValue('item', 'custcol_item_pacejet_width', index)));
        box.setFieldValue('custrecord_ship_height', changeToDecimal(fulfillment.getLineItemValue('item', 'custcol_item_pacejet_height', index)));
        //			}
    }

    //		}
    //	}


    //	box.setFieldValue('custrecord_ship_consignee', salesOrder.getFieldText('entity'));
    box.setFieldValue('custrecord_ship_consignee', fulfillment.getFieldText('entity'));
    //	box.setFieldValue('custrecord_ship_contactname', salesOrder.getFieldValue('shipaddressee'));
    box.setFieldValue('custrecord_ship_contactname', fulfillment.getFieldValue('shipcompany'));
    //	box.setFieldValue('custrecord_ship_satflag', convertToCasiBoolean(salesOrder.getFieldValue('custbody_pj_sssdelivery')));
    box.setFieldValue('custrecord_ship_satflag', convertToCasiBoolean(fulfillment.getFieldValue('custbody_pj_sssdelivery')));


    //	box.setFieldValue('custrecord_ship_custid', customer.getFieldValue('entityid'));
    box.setFieldValue('custrecord_ship_custid', fulfillment.getFieldValue('custbody_customer_id'));
    //	box.setFieldValue('custrecord_ship_phone', customer.getFieldValue('phone'));
    box.setFieldValue('custrecord_ship_phone', fulfillment.getFieldValue('custbody_customer_phone'));



    return box;
}


/************************************************
 * CASI boolean values are Y/N.  Convert
 * any true/false or T/F to Y/N
 * @param aValue
 ***********************************************/
function convertToCasiBoolean(aValue) {
    if (Util.isEmptyString(aValue)) return 'N';
    if (aValue == true) return 'Y';
    if (aValue == false) return 'N';

    if (aValue == 'T' || aValue == 't') return 'Y';
    if (aValue == 'F' || aValue == 'F') return 'N';



}
function isBoxRecord(box) {

    if (Util.isEmptyString(box.getFieldValue('custrecord_pt_item_fulfillment'))) return false;

    return true;
}

function checkGovernance(context) {
    nlapiLogExecution('Debug', 'checkGovernance', 'Inside check governance');

    if (context.getRemainingUsage() < USAGE_LIMIT) {
        //		 nlapiLogExecution('Debug', 'ajaxRequest', 'Inside remaining usage check governance');
        var state = nlapiYieldScript();
        if (state.status == 'FAILURE') {
            nlapiLogExecution("ERROR", "Failed to yield script, exiting: Reason = " + state.reason + " / Size = " + state.size);
            throw "Failed to yield script";
        }
        else if (state.status == 'RESUME') {

            nlapiLogExecution("AUDIT", "Resuming script because of " + state.reason + ".  Size = " + state.size);
        }

    }
}