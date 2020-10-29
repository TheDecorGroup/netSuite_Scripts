/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       02 Jan 2020     JBowyer		Update annual sales by customer
 *
 */

/**
 * @param {String} type Context Types: scheduled, ondemand, userinterface, aborted, skipped
 * @returns {Void}
 */
function updateSalesbyCustomer(type) {
	nlapiLogExecution('AUDIT', 'Start of Process - Update Sales by Customer');
	var nextid = 0;	
	var increment = 500;
	var finished = false;
	var search = nlapiLoadSearch('transaction','customsearch2131'); // Production
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
				    processNextCustomer(results[i]);	    
			        
				}
				context = nlapiGetContext();
				usage = context.getRemainingUsage();			        
		        if (parseInt(usage) < 5000) {
		        	//nlapiScheduleScript(context.getScriptId(), context.getDeploymentId(),
		            //        {custscript_images_mininternalid:internalid});
		        	var msg = "Customers Read = " + i + " - Usage = " + usage;
		        	nlapiLogExecution('AUDIT', 'Yield - ', msg);			        	
		        	nlapiYieldScript();			        	            	
		        }
				nlapiLogExecution('AUDIT', 'Last Record Processed = ', nextid-1);
			}
		}
	while (!finished);		
	nlapiLogExecution('AUDIT', 'End of Process - Update Sales by Customer');
	
}
function processNextCustomer(customer) {
	try{
    	var context = nlapiGetContext();
    	
        var usage = context.getRemainingUsage();        
        
        var customerId = customer.getValue('internalid','customer','GROUP');
       
        var allColumns = customer.getAllColumns();
        
        var currentTotal = customer.getValue(allColumns[2]);
        
        var salesTotal = customer.getValue(allColumns[3]);  
        
        if (currentTotal != salesTotal) {
        	
        	// Current total is different - Update all of the customer sales order fields 
        	var customerUpdate = nlapiLoadRecord('customer',customerId);
        	
        	var sales2020 = customer.getValue(allColumns[4]);            
            var sales2019 = customer.getValue(allColumns[5]);            
            var sales2018 = customer.getValue(allColumns[6]);            
            var sales2017 = customer.getValue(allColumns[7]);            
            var salesPre2017 = customer.getValue(allColumns[8]);
        	
        	customerUpdate.setFieldValue('custentity_tdg_totalsales', salesTotal);
        	customerUpdate.setFieldValue('custentity28', sales2017);
        	customerUpdate.setFieldValue('custentity29', sales2018);
        	customerUpdate.setFieldValue('custentity30', sales2019);
        	customerUpdate.setFieldValue('custentity32', sales2020);
        	customerUpdate.setFieldValue('custentity33', salesPre2017); 
        	nlapiSubmitRecord(customerUpdate, true);
        }
        
        
            
                
        return true;
       
    }
    catch(e) {
    	var errorMessage = e;
        nlapiLogExecution('ERROR', 'e', e);
    }
    
}
updateSalesbyCustomer();