/*********************************************************
 * Suitelet: creates the License Plate label for
 * the boxes (CASI)
 * 
 * @param request
 * @param response
 * 
 *********************************************************/
function createPdf(request, response){
	try{
		var boxId = request.getParameter('boxid');
		var box = nlapiLoadRecord('customrecord_ship_manifest', boxId);
		//response.write('got here - BOX ID= ' + boxId);
		var xml = getXML(box);
		nlapiLogExecution('Debug', 'createPDF', 'xml = ' + xml);
		var pdf = nlapiXMLToPDF(getXML(box));
		response.setContentType('PDF');
		response.write(pdf.getValue()); 
	}catch(e){
		
		var message = 'Error while creating pdf - ' + e.message;
		
		nlapiLogExecution('Debug', 'createPdf', message);
		response.write(message);
	}
	
}

function getXML(box){
	
	var xml = '<pdf>' +
	  '<body size="letter" margin="0.5in">' +
	    box.getFieldValue('name') + '<br/>' +
	    '<barcode codetype="code128" value="' + box.getFieldValue('name') + '" style="margin:4px"/>' +
	  '</body>' +
	'</pdf>';
	
	return xml;
}