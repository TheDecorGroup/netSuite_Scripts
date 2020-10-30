/************************************************
 * This suitelet searches and returns search results
 * back to a client script.  This is a workaround for a current
 * issue NetSuite is having searching from a client script
 * 
 * ***************************************************/

function run(request, response){
	
	var resultObj = {};
	resultObj.success = true;
	resultObj.message = '';
	
	try{
		var fulfillmentId = request.getParameter('fulfillmentId');
		var filters = [];
		filters[0] = new nlobjSearchFilter('custrecord_pt_item_fulfillment',null,'anyof',fulfillmentId);
		
		var results = nlapiSearchRecord('customrecord_ship_manifest',null,filters);
		
		if (results == null){
			resultObj.message = 'No boxes found. Unable to complete packing.';
			response.write(JSON.stringify(resultObj));
			return;
		}
		
		var multi = 'N';
		var boxCnt = results.length;
		if(results.length > 1){
			multi = 'Y';
		}else{
			index = 0;
			boxCnt = 0;
		}
		for(var i = 0; i < results.length; i++){
			try{
			var index = i + 1;
			
			var fields = ['custrecord_ship_pkgcount','custrecord_ship_pkgno','custrecord_ship_multipackage','custrecord_ready_to_be_processed'];
			var values = [boxCnt,index,multi,'T'];
			//alert(fields + ' ' + values);
			nlapiSubmitField('customrecord_ship_manifest', results[i].getId(), fields, values);
			}catch(e){
				resultObj.success = false;
				resultObj.message = 'At least one box has failed with...' + e.message;
				nlapiLogExecution('Error',  'run', 'Unexpected updateing box record..' + e.message);
			}
		}
		
		if (resultObj.success){
			resultObj.message = 'All boxes have been updated...Packing is complete';
		}
		response.write(JSON.stringify(resultObj));
	}catch(e){
		
		nlapiLogExecution('Error',  'run', 'Unexpected error while searching..' + e.message);
		resultObj.success = false;
		resultObj.message = 'Unexpected error while searching..' + e.message;
		

		response.write(JSON.stringify(resultObj));
		
		
	}
	
}