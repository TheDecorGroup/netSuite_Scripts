/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       21 Sep 2016     Chris Smith
 *
 */
//var type = 'edit';
//updateBoxes('shipped');

function updateBoxes(type){
	if(type != 'delete'){
		var recID = nlapiGetRecordId();
		//var recID = '73563';
		var rec = nlapiLoadRecord('itemfulfillment', recID);
		var status = rec.getFieldText('shipstatus');
		nlapiLogExecution('DEBUG', 'recID: '+recID+' status: '+status);
		switch(status){
		case 'Packed':
			//var rec = '47506';  //Debug
			//Get All Box Records
			var filters = [];
			filters[0] = new nlobjSearchFilter('custrecord_pt_item_fulfillment', null, 'anyof', recID);
			
			var columns = [];
			columns[0] = new nlobjSearchColumn('custrecord_ship_orderno'); //CASI - ORDERNO
			columns[1] = new nlobjSearchColumn('custrecord_ship_pkgcount'); //CASI - TOTALPACKAGES
			columns[2] = new nlobjSearchColumn('custrecord_ship_pkgno'); //CASI - PACKAGENO
			columns[3] = new nlobjSearchColumn('custrecord_ship_servicelevel'); //CASI - SERVICELEVEL
			
			var search = nlapiSearchRecord('customrecord_ship_manifest', null, filters, columns);
			if(search != null){
				var boxes = search.length;
				var boxcount = boxes.toString();
				
				for(var i = 0; i < boxes; i++){
					var box = search[i];
					var boxid = box.getId();
					var boxtype = box.getRecordType();
					var boxnum = i + 1;
					var boxstr = boxnum.toString();
					var boxmethod = box.getValue('custrecord_ship_servicelevel');
					
					var boxrec = nlapiLoadRecord(boxtype, boxid);
					boxrec.setFieldValue('custrecord_ship_pkgcount', boxcount);
					boxrec.setFieldValue('custrecord_ship_pkgno', boxstr);
					boxrec.setFieldValue('custrecord_ready_to_be_processed', 'T');
					if(boxmethod == 'UPS Ground w/Freight Pricing'){
						boxrec.setFieldValue('custrecord_ship_multipackage', 'Y');
					}
					
					nlapiSubmitRecord(boxrec);
				}
			}
			break;
			
		case 'Shipped':
			/*
				var packages = rec.getLineItemCount('package');
				
				//Get Boxes				
				var filters = [];
				filters[0] = new nlobjSearchFilter('custrecord_pt_item_fulfillment', null, 'anyof', recID);
				filters[1] = new nlobjSearchFilter('custrecord_ship_trackno', null, 'isnotempty');
				
				var columns = [];
				columns[0] = new nlobjSearchColumn('custrecord_ship_orderno'); //CASI - ORDERNO
				columns[1] = new nlobjSearchColumn('custrecord_ship_pkgcount'); //CASI - TOTALPACKAGES
				columns[2] = new nlobjSearchColumn('custrecord_ship_pkgno'); //CASI - PACKAGENO
				columns[3] = new nlobjSearchColumn('custrecord_ship_actwght'); //CASI - ACTUALWGHT
				columns[4] = new nlobjSearchColumn('custrecord_ship_trackno'); //CASI TRACKING #
				
				var search = nlapiSearchRecord('customrecord_ship_manifest', null, filters, columns);
				
				
				if(search !== null){
					var boxes = search.length;
					//Add Boxes to Packages
					for(i = 0; i < boxes; i++){
						var trackingno = search[i].getValue('custrecord_ship_trackno');
						var weight = search[i].getValue('custrecord_ship_actwght');
						var packageno = search[i].getValue('custrecord_ship_pkgno');
						var match = 0;
						for(n = 0; n < packages; n++){
							var ptrackingno = rec.getLineItemValue('package', 'packagetrackingnumber', n);
							if(ptrackingno == trackingno){
								match++;
							}							
						}
						if(match == 0){
							rec.selectNewLineItem('package');
							rec.setCurrentLineItemValue('package', 'packagetrackingnumber', trackingno);
							rec.setCurrentLineItemValue('package', 'packageweight', weight);
							rec.setCurrentLineItemValue('package', 'packagedescr', packageno);
							rec.commitLineItem('package');
						}										
					}
					nlapiSubmitRecord(rec);					
				}
				*/
			break;		
		}
	}	
}
