/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       25 Oct 2016     ChrisS
 *
 */

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 * 
 * @param {String} type Operation types: create, edit, delete, xedit,
 *                      approve, cancel, reject (SO, ER, Time Bill, PO & RMA only)
 *                      pack, ship (IF only)
 *                      dropship, specialorder, orderitems (PO only) 
 *                      paybills (vendor payments)
 * @returns {Void}
 */
trackingnumber('edit');
function trackingnumber(type){
  if(type != 'delete'){
	  var recID = nlapiGetRecordId();
	  //var recID = '50475';
	  var rec = nlapiLoadRecord('customrecord_ship_manifest', recID);
	  var trackingno = rec.getFieldValue('custrecord_ship_trackno');
	  var weight = rec.getFieldValue('custrecord_ship_actwght');
	  var packageno = rec.getFieldValue('custrecord_ship_pkgno');
	  var ifid = rec.getFieldValue('custrecord_pt_item_fulfillment');
	  var match = 0;
	  
	  if(trackingno){
		  var ifrec = nlapiLoadRecord('itemfulfillment', ifid);
		  var packages = ifrec.getLineItemCount('package');
		  if(packages == 0){
			  ifrec.selectNewLineItem('package');
			  ifrec.setCurrentLineItemValue('package', 'packagetrackingnumber', trackingno);
			  ifrec.setCurrentLineItemValue('package', 'packageweight', weight);
			  ifrec.setCurrentLineItemValue('package', 'packagedescr', packageno);
			  ifrec.commitLineItem('package');
		  } else {
			  for(x = 1; x <= packages; x++){
				  var ptrackingno = ifrec.getLineItemValue('package', 'packagetrackingnumber', x);
				  if(ptrackingno == trackingno){
					  match++;
				  }
			  }
			  if(match == 0){
				  ifrec.selectNewLineItem('package');
				  ifrec.setCurrentLineItemValue('package', 'packagetrackingnumber', trackingno);
				  ifrec.setCurrentLineItemValue('package', 'packageweight', weight);
				  ifrec.setCurrentLineItemValue('package', 'packagedescr', packageno);
				  ifrec.commitLineItem('package');
			  }
		  }
		  nlapiSubmitRecord(ifrec);
	  }
  }
}