/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       21 Feb 2019     JBowyer		Script to update item costing information
 *
 */

/**
 * @param {String} type Context Types: scheduled, ondemand, userinterface, aborted, skipped
 * @returns {Void}
 */
var savedId = 0;
function updateItems(type) {
	nlapiLogExecution('AUDIT', 'Start of Process - Update Item Costs');
	var nextid = 0;	
	var increment = 500;
	var finished = false;
	var search = nlapiLoadSearch('item','customsearch1545'); // Production
	var resultSet = search.runSearch();
	do 	{
			var results = resultSet.getResults(nextid, nextid+increment);
			if (results.length == 0){
				finished = true;
			}
			else
			{
				nextid = nextid +increment;
				for (var i = 0; i < results.length; i++) {
				    processNextItem(results[i]);	    
			        
				}
				context = nlapiGetContext();
				usage = context.getRemainingUsage();			        
		        if (parseInt(usage) < 5000) {
		        	//nlapiScheduleScript(context.getScriptId(), context.getDeploymentId(),
		            //        {custscript_images_mininternalid:internalid});
		        	var msg = "Items Read = " + i + " - Usage = " + usage;
		        	nlapiLogExecution('AUDIT', 'Yield - ', msg);			        	
		        	nlapiYieldScript();			        	            	
		        }
				nlapiLogExecution('AUDIT', 'Last Record Processed = ', nextid-1);
			}
		}
	while (!finished);		
	nlapiLogExecution('AUDIT', 'End of Process - Update Item Costs');
	
}
function processNextItem(item) {
	try{
    	var context = nlapiGetContext();
    	
        var usage = context.getRemainingUsage();
        
        
        var itemId = item.getValue('internalid',null,'GROUP');
        // Only look at the first (newest item Receipt) record and product cost not = 0 - skip the others
        
        if (itemId != savedId ) 
        { 
        	
        	savedId = itemId;
        	var itemRecordType = item.getValue('type',null,'GROUP');
        	var recType = getRecordType(itemRecordType)
            var quantity = item.getValue('quantity','transaction','MAX');
            var saleUnit = item.getText('saleunit',null,'GROUP');
            var purchaseUnit = item.getValue('purchaseunit',null,'GROUP');            
            var lastTotalCost = item.getValue('custitem_last_total_cost',null,'GROUP');
            var unitsType = item.getValue('unitstype', null,'GROUP');
            var tranUnit = item.getValue('unit','transaction','MAX');
            var caseQuantity = getTranCount(tranUnit,unitsType);
            var saleQuantity = getTranCount(saleUnit,unitsType);
            var productCosts = 0;
            var landedCosts = 0;
            // Bypass item if not quantity
            if (quantity!=0) {
                var cols = item.getAllColumns();
                cols.forEach(function(col){
                	var a = col;
                	switch(col.getLabel()){
	                	case 'Product Cost': productCosts = +item.getValue(col)/quantity*saleQuantity; break;
	                	case 'Landing Cost': landedCosts = +item.getValue(col)/quantity*saleQuantity; break;
                	}
                })
                //var productCosts = item.getValue('amount', 'transaction', 'SUM')/quantity*caseQuantity;                
                //var landedCosts = item.getValue('formulacurrency', null, 'SUM')/quantity*caseQuantity;
                // Load the item record and update fields
                var itemUpdate = nlapiLoadRecord(recType,itemId);
                var totalCosts = +productCosts + landedCosts;
                if (lastTotalCost != totalCosts)
                {
                	itemUpdate.setFieldValue('custitem_last_product_cost', productCosts);
                    itemUpdate.setFieldValue('custitem_last_landed_cost', landedCosts);
                    itemUpdate.setFieldValue('custitem_last_total_cost', totalCosts);
                    itemUpdate.setFieldValue('custitem_last_uom', tranUnit);
    	            nlapiSubmitRecord(itemUpdate, true);
                }
                
            }
        }
                
        return true;
       
    }
    catch(e) {
    	var errorMessage = e;
        nlapiLogExecution('ERROR', 'e', e);
    }
    
}
	function getTranCount(tranUnit,unitsType) {
		
		var uom = nlapiLoadRecord('unitstype', unitsType);
		var tranLine = uom.findLineItemValue('uom','unitname',tranUnit);
		var tranCount = uom.getLineItemValue('uom','conversionrate',tranLine);
		return tranCount;
	}
	function getRecordType(itemType){		
		var recordType = '';
        switch (itemType) {   // Compare item type to its record type counterpart
            case 'InvtPart':
            	recordType = 'inventoryitem';
                break;
            case 'NonInvtPart':
            	recordType = 'noninventoryitem';
                break;
            case 'Kit':
            	recordType = 'kititem';
                break;
            case 'Service':
            	recordType = 'serviceitem';
                break;
            case 'Assembly':
            	recordType = 'assemblyitem';
                break;
            case 'GiftCert':
            	recordType = 'giftcertificateitem';
                break;
            default:
            	return;
       }
        return recordType;
	}