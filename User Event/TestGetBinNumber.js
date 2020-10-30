/*******************************************************
 * Sets the bin number on a sales order's line items
 * 
 * 
 */

function onBeforeSubmit(){
	try{
		var salesOrder = nlapiGetNewRecord();
//		if(salesOrder.getFieldValue('customform') != '123'){
//            return;
//		}
		var item = null;
		var itemId = null;
		for(var i=1; i<= salesOrder.getLineItemCount('item'); i++){
			if(!Util.isEmptyString(salesOrder.getLineItemValue('item', 'custcol_bin_number', i)) && !Util.isEmptyString(salesOrder.getLineItemValue('item', 'custcol_available_bins', i))){
				continue;
			}
			itemId = salesOrder.getLineItemValue('item', 'item', i);
			nlapiLogExecution('debug', 'onBeforeSubmit', 'item= ' + itemId)
			//item = nlapiLoadRecord('inventoryitem', itemId);
			var binResults = getBin(itemId, salesOrder.getFieldValue('location'));
			if(binResults < 1){
				continue;
			}
			var bin = binResults[0].getText('binnumber','inventorydetail','group');
			nlapiLogExecution('debug', 'onBeforeSubmit', 'bin= ' + bin);
			salesOrder.setLineItemValue('item', 'custcol_bin_number', i, bin);
			
//			var availableBins = getAvailableBins(itemId, salesOrder.getFieldValue('location'));
			if(binResults.length <= 1){
				continue;
			}
			var availableBins = getAvailableBins(binResults);
			salesOrder.setLineItemValue('item', 'custcol_available_bins', i, availableBins);
			
			
		}
	}catch(e){
		
		nlapiLogExecution('Error', 'onBeforeSubmit', 'error...' + e.message);
	}
}


/*******************************************************
 * Searches for the bin numbers for the item using a
 * saved search
 * 
 *******************************************************/
function getBin(item, location){
	nlapiLogExecution('debug', 'onBeforeSubmit', 'location= ' + location)
	try{
		var binId = '';
		var filters = [];
		filters[0] = new nlobjSearchFilter('internalid',null,'is',item); 
		filters[1] = new nlobjSearchFilter('internalid','inventorylocation','is',location); 
		var search = new Search(null,'customsearch_bin_number_search',filters);
		var results = search.getResults();
		nlapiLogExecution('Debug', 'getBin', 'Results Length - ' + results.length);
		
		nlapiLogExecution('Debug', 'getBin', 'Results Length - ' + JSON.stringify(results));
		
//		for(var j=0; j < results.length; j++){
		if(results > 0){
			nlapiLogExecution('Debug', 'getBin', 'Results Name - ' + results[0].getValue('binnumber','inventorydetail','group'));
		}

		return results;
		}catch(e){
			nlapiLogExecution('Error', 'getBin', 'error...' + e.message);
		}
	
	return null;
	
}

/*******************************************************
 * Puts the other bins in an array to be put in the 
 * available bins column
 * 
 *******************************************************/
function getAvailableBins(bins){
	try{
		var availableBins = [];
//		var bins = getBin(item, location);
		nlapiLogExecution('Debug', 'getAvailableBins', 'bins lenth - ' + bins.length);

		for(var i=1; i < bins.length; i++){
//			nlapiLogExecution('Debug', 'getAvailableBins', 'bins - ' + JSON.stringify(bins[i]));
			var bin = bins[i].getText('binnumber','inventorydetail','group');
			var qty = bins[i].getValue('quantityonhand','binonhand','group');
			if(qty < 1){
				continue;
			}
			var line = 'Bin: ' + bin + ', Qty: ' + qty;
			availableBins.push(line);
//			availableBins[bin] = qty;
		}
		nlapiLogExecution('Debug', 'getAvailableBins', 'availableBins - ' + JSON.stringify(availableBins));
		return availableBins;
	}catch(e){
		nlapiLogExecution('Error', 'getAvailableBins', 'error - ' + e.message);
	}
	
}
