/************************************************************
 * Suitelet that creates the UI for selecting orders 
 * to be added to a Batch Pick Ticket
 * 
 * @param request
 * @param response
 ***********************************************************/

var TYPE_AS_IS = '1';
var TYPE_PICK_PACK = '2';
function run(request, response){
	try{
		
		if(request.getMethod() == 'GET'){
			var form = createUI();
			response.writePage(form);
			
		}else{
			nlapiLogExecution('Debug', 'run', 'running post');
			//process the users selection(s)
			var salesOrderIds = [];
			
			var count = request.getLineItemCount('custpage_orderslist');
			
			nlapiLogExecution('Debug', 'run', 'count=' + count);
			for(var i=1; i<= count; i++){
				var addToBatch = request.getLineItemValue('custpage_orderslist', 'custpage_addtobatch', i);
				
				if (addToBatch == 'T'){
					salesOrderIds.push(request.getLineItemValue('custpage_orderslist', 'custpage_internalid', i))
				}
				
			 }
			if (salesOrderIds.length > 0){
				createBatchPickTicket(salesOrderIds);
			}
		}
		
	}catch(e){
		
		nlapiLogExecution('Error', 'run', e.message);
	}
	
		
		
	
}



/**************************************************
 * Creates the user interface with the list to select
 * Sales Orders
 * 
 * 
 **************************************************/
function createUI(){
	
	var form = nlapiCreateForm('Select Sales Orders To Add To Batch Pick Ticket', false);
	var subList = form.addSubList('custpage_orderslist', 'list', 'Select Orders');
	
	
	subList.addField("custpage_addtobatch", "checkbox", "select");
	subList.addField("custpage_tranid", "text", "Number");
	subList.addField("custpage_internalid", "text", "Internal id");
	subList.addField("custpage_customer", "text", "Customer");
	subList.addField("custpage_datecreated", "text", "Date Created");
	subList.addField("custpage_total", "text", "Total");
	subList.addMarkAllButtons();
	var searchResults = null;
	try{
		searchResults = getSalesOrders('110');
	}catch(e){
		throw {'message': 'Error while searching for sales orders - ' + e.message};
	}
	
	
	for(var i=0; i< searchResults.length; i++ ) {
		
		subList.setLineItemValue("custpage_tranid", (i + 1), searchResults[i].getValue('tranid')); 
		subList.setLineItemValue("custpage_internalid", (i + 1), searchResults[i].getId()); 
		subList.setLineItemValue("custpage_customer", (i + 1), searchResults[i].getText('entity'));
		subList.setLineItemValue("custpage_datecreated", (i + 1), searchResults[i].getValue('datecreated'));
		subList.setLineItemValue("custpage_total", (i + 1), searchResults[i].getValue('total')); 
	}
	var customerField = form.addField('custpage_customers', 'select', 'Filter by Customer', "customer");
	
	nlapiLogExecution('Debug', 'getSalesOrders', 'list count - ' + subList.getLineItemCount());
	form.addSubmitButton('save ' + subList.getLineItemCount());
	return form;
}

function getSalesOrders(customerId){
	
	var columns = [];
	var filters = [];
	columns[0] =  new nlobjSearchColumn('tranid'); 
	columns[1] =  new nlobjSearchColumn('entity');
	columns[2] =  new nlobjSearchColumn('datecreated');
	columns[3] =  new nlobjSearchColumn('total'); 
	
	filters[0] = new nlobjSearchFilter('entity', null, 'is', customerId);
	filters[1] = new nlobjSearchFilter('mainline', null, 'is', 'T');
	var searchResults = nlapiSearchRecord('salesorder', null, filters, columns);
	if (searchResults != null){
		nlapiLogExecution('Debug', 'getSalesOrders', 'sales orders return - ' + searchResults.length);
	}
	return searchResults;
}

function createBatchPickTicket(salesOrderIds){
	
	var bpt = null;
	for(var i=0; i<salesOrderIds.length; i++){
		bpt = new BatchPickTicket(salesOrderIds[i],TYPE_AS_IS);
		bpt.submit();
		nlapiLogExecution('Debug', 'createBatchPickTicket', JSON.stringify(bpt));
		
	}
}