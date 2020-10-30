/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       06 Feb 2019     JBowyer
 * 1.01		  06 Sep 2019	  JBowyer		Add stored On Order and Back ordered fields
 *
 */

/**
 * @param {String} type Context Types: scheduled, ondemand, userinterface, aborted, skipped
 * @returns {Void}
 */
function scheduled(type) {
	try{
				
		var context = nlapiGetContext();
    	var items = nlapiSearchRecord('item', 'customsearch_kits_available_2');
        var usage = context.getRemainingUsage();
        var processed = 0;
        var updated = 0;
        for (var i = 0; (i < items.length); i++) 
        {
            var item = items[i];
            var itemID = item.getValue('internalid',null,'GROUP');            
            var calcKits = item.getValue('formulanumeric',null,'MIN');
            var allColumns = items[i].getAllColumns();            
            var calcNetAvailable = items[i].getValue(allColumns[3]);
            var itemChanged = false;
            processed += 1;
			try 
        	{
				var itemRec = nlapiLoadRecord('kititem', itemID);
            	if (itemRec.getFieldValue('custitem_kits_available_stored')!= calcKits) {
            		itemRec.setFieldValue('custitem_kits_available_stored', calcKits);
            		itemChanged = true;
            	}
            	if (itemRec.getFieldValue('custitem_kits_net_available')!= calcNetAvailable) {
            		itemRec.setFieldValue('custitem_kits_net_available', calcNetAvailable);
            		itemChanged = true;
            	}
                if (itemChanged){
                	nlapiSubmitRecord(itemRec, true);
                    updated += 1;
                }       	                
                
            }
        	catch(e) {
        		var errorMessage = e;
                nlapiLogExecution('ERROR', 'e', e);
        	}
    		
            context = nlapiGetContext();
            usage = context.getRemainingUsage();
            
            if (parseInt(usage) < 500) {
            	            	
            	nlapiYieldScript();
            	            	
            }

        }
        nlapiLogExecution('DEBUG', 'Processed = ' + processed + ' Updated = ' + updated);
       
    }
    catch(e) {
    	var errorMessage = e;
        nlapiLogExecution('ERROR', 'e', e);
    }

}
