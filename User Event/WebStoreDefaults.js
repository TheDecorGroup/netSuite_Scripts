/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       13 Oct 2016     ChrisS
 *
 */

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 * 
 * @param {String} type Operation types: create, edit, delete, xedit
 *                      approve, reject, cancel (SO, ER, Time Bill, PO & RMA only)
 *                      pack, ship (IF)
 *                      markcomplete (Call, Task)
 *                      reassign (Case)
 *                      editforecast (Opp, Estimate)
 * @returns {Void}
 */
function setWebStoreDefaults(type){
	var rec = nlapiGetNewRecord();
	var rectype = rec.getRecordType();
	var recid = rec.getId();
	var reccontext = nlapiGetContext();
	var execution = reccontext.getExecutionContext();
	
	if(type == 'create'){
		if(execution == 'webstore'){
			rec.setFieldValue('category', 8);
			rec.setFieldValue('taxitem', 5756);
			rec.setFieldValue('taxable', 'T');
			
			//nlapiSubmitRecord(rec);
		}
	}
}