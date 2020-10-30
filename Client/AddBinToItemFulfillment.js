function onFieldChange1(name){
//	alert('Script Triggered');
//	nlapiLogExecution('Debug', 'fillInventoryDetail', 'Script Triggered');
	
	if(name == 'item'){
		fillInventoryDetail();
	}
	
}

function fillInventoryDetail(){
	try{
		alert('inside fillInventoryDetail');
		var record = nlapiGetNewRecord();
//		if(record.getFieldValue('customform') == '121'){
			var qty,bin;
			var salesOrder = record.getFieldValue('createdfrom');
			salesOrder = nlapiLoadRecord('salesorder',salesOrder);
			
			
			for(var i=1; i <= record.getLineItemCount('item'); i++){
				alert('inside line item count');
				qty = record.getLineItemValue('item','quantitycommitted', i);
				record.setLineItemValue('item','quantity',i,qty);
				nlapiLogExecution('Debug', 'fillInventoryDetail', 'qty - ' + qty);
				var inventoryDetail = record.createSubrecord('inventorydetail');
				//nlapiLogExecution('Debug', 'onBeforeSubmit', 'inventoryDetail - ' + JSON.stringify(inventoryDetail));
				for(var j = 1; j <= 1; j++){
					alert('inside subrecord');
					inventoryDetail.selectNewLineItem('inventoryassignment');
					inventoryDetail.setCurrentLineItemValue('inventoryassignment', 'binnumber', salesOrder.getLineItemValue('item','custcol_bin_number',i));
					inventoryDetail.setCurrentLineItemValue('inventoryassignment', 'quantity', quantity);
					inventoryDetail.commitLineItem('inventoryassignment');
				}
				inventoryDetail.commit();


			}
//			}	
	}catch(e){
		nlapiLogExecution('Error', 'fillInventoryDetail', 'unexpected error=' + e.message);
	}
	
	
	return true;
}