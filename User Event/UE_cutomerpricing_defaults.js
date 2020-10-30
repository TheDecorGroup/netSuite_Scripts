/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/search'],
/**
 * @param {record} record
 * @param {search} search
 */
function(record, search) {
   
    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {string} scriptContext.type - Trigger type
     * @param {Form} scriptContext.form - Current form
     * @Since 2015.2
     */
    function beforeLoad(scriptContext) {

    }

    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {Record} scriptContext.oldRecord - Old record
     * @param {string} scriptContext.type - Trigger type
     * @Since 2015.2
     */
    function beforeSubmit(scriptContext) {
    	var type = scriptContext.type;
    	if(type == 'create'){
    		var rec = scriptContext.newRecord;
    		var newCust = rec.getValue({fieldId: 'category'});
          //log.debug({title:'Customer Category', details:newCust});
    		switch(newCust){
    		case '1':
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 0,
    			    value: 3
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 0,
    			    value: 33
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 1,
    			    value: 2
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 1,
    			    value: 33
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 2,
    			    value: 1
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 2,
    			    value: 32
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 3,
    			    value: 4
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 3,
    			    value: 32
    			});
    			break;
    			
    		case '27':
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 0,
    			    value: 3
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 0,
    			    value: 32
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 1,
    			    value: 2
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 1,
    			    value: 32
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 2,
    			    value: 1
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 2,
    			    value: 32
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 3,
    			    value: 4
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 3,
    			    value: 32
    			});
    			break;
			default : 
				rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 0,
    			    value: 3
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 0,
    			    value: 32
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 1,
    			    value: 2
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 1,
    			    value: 32
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 2,
    			    value: 1
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 2,
    			    value: 32
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'group',
    			    line: 3,
    			    value: 4
    			});
    			rec.setSublistValue({
    			    sublistId: 'grouppricing',
    			    fieldId: 'level',
    			    line: 3,
    			    value: 31
    			});
    				
    		}
    
    	  		
    		
    	}

    }


    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {Record} scriptContext.oldRecord - Old record
     * @param {string} scriptContext.type - Trigger type
     * @Since 2015.2
     */
    function afterSubmit(scriptContext) {

    }

    return {
        //beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit
        //afterSubmit: afterSubmit
    };
    
});