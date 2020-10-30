/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       27 Oct 2016     ChrisS
 *
 */

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 * 
 * @param {String} type Sublist internal id
 * @param {String} name Field internal id
 * @param {Number} linenum Optional line item number, starts from 1
 * @returns {Void}
 */
function customerFieldChange(type, name){
	if(name == 'category'){
		var cat = nlapiGetFieldValue('category');
		//alert('Category is: ' + cat);
		if(cat == 8){
			nlapiSetFieldValue('taxitem', 5756);
			nlapiSetFieldValue('taxable', 'T');
		} else {
			nlapiSetFieldValue('taxitem', -7);
			nlapiSetFieldValue('taxable', 'F');
		}
	}	
}