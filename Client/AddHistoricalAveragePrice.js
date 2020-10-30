/*********************************************************
 * Sources the Historical Average Price field on the item 
 * and adds it to the est. unit cost on the line item of 
 * the Inventory Adjustment.
 * 
 * 
 *  author: hjoseph@cumula3.com
 *   
 *************************************************************/
function onValidateLine(form){
	try{
		if(nlapiGetFieldValue('customform') == '120'){

			nlapiLogExecution('Debug', 'onValidateLine', 'Script Triggered');
			
			var item = nlapiGetCurrentLineItemValue('inventory','item');
			nlapiLogExecution('Debug', 'onValidateLine', 'item - ' + item);
			
			var fields = ['custitem_historical_avg', 'cost']
			var avg = nlapiLookupField('inventoryitem', item, fields);
			nlapiLogExecution('Debug', 'onValidateLine', 'avg - ' + avg);
			
			if(!Util.isEmptyString(avg.custitem_historical_avg)){
				nlapiSetCurrentLineItemValue('inventory','unitcost',avg.custitem_historical_avg,false);
			}
			else if(!Util.isEmptyString(avg.cost)){
				nlapiSetCurrentLineItemValue('inventory','unitcost',avg.cost,false);
			}else{
				nlapiSetCurrentLineItemValue('inventory','unitcost','0.00',false);
			}
			
			
		}
		return true;
	}catch(e){
		nlapiLogExecution('Error', 'onValidateLine', 'unexpected error=' + e.message);
	}
	
}