/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       29 Jan 2019     JBowyer
 *
 */

/**
 * @param {String} type Context Types: scheduled, ondemand, userinterface, aborted, skipped
 * @returns {Void}
 */
function updateCustomer(type) {
	try{
    	var context = nlapiGetContext();
    	//var customers = nlapiSearchRecord('customer','customsearch1439'); - Sandbox
    	var customers = nlapiSearchRecord('customer','customsearch1510'); // Production
    	
        var usage = context.getRemainingUsage();
        var processed = 0;

        for (var i = 0; (i < customers.length); i++) 
        {
            var customer = customers[i];
            var internalid = customer.id;            
            var custRec = nlapiLoadRecord(customer.recordType,customer.id);
            var reps = custRec.getLineItemCount('grouppricing');
            for (var j = 1; (j <= reps); j++) 
            {
            	//if (custRec.getLineItemValue('grouppricing','group',j) == 4)
        		//{
            		if (custRec.getLineItemValue('grouppricing','level',j) != 32)
            			{
		            		custRec.selectLineItem('grouppricing',j);
		            		custRec.setCurrentLineItemValue('grouppricing','level',32);
		            		custRec.commitLineItem('grouppricing');   
		            		// update
		                    
            			}
            		
            	//}
            }
            var custId = nlapiSubmitRecord(custRec, true);
            context = nlapiGetContext();
            usage = context.getRemainingUsage();
            
            if (parseInt(usage) < 500) {
            	//nlapiScheduleScript(context.getScriptId(), context.getDeploymentId(),
                //        {custscript_images_mininternalid:internalid});
            	var msg = "Customers Read = " + i;
            	nlapiLogExecution('ERROR', 'Yield - ', msg);
            	// Update item record to show image has been loaded
            	
            	nlapiYieldScript();
            	            	
            }

        }
       
    }
    catch(e) {
    	var errorMessage = e;
        nlapiLogExecution('ERROR', 'e', e);
    }

}