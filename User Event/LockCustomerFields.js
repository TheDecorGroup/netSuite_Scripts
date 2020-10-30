/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */

var Allowed_Users = [13,79712,21,10,91304];    //Brandon, Kurt, Kathy, Becky and JC
var Allowed_Roles = [1026,1064,1006,3,1008];    //TDG-Sales VP and TDG-Marketing Director, TDG Sales Administrator, Admnistrator

define(['N/error', 'N/record', 'N/runtime', 'N/ui/serverWidget'],
/**
 * @param {error} error
 * @param {record} record
 * @param {runtime} runtime
 * @param {serverWidget} serverWidget
 */
function(error, record, runtime, serverWidget) {
   
    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {string} scriptContext.type - Trigger type
     * @param {Form} scriptContext.form - Current form
     * @Since 2015.2
     */
	function beforeLoad(context) {
    	if (context.type == context.UserEventType.EDIT) {			
    	
    		// Check if this user is allowed to change sales rep field
    		var userId = runtime.getCurrentUser().id;
	        if (Allowed_Users.indexOf(userId) >= 0)  {
	            return;  // exit - This user is OK to edit this field
	        }
	        // Check if this role is allowed to change sales rep field
	        var userRole = runtime.getCurrentUser().role;
	        if (Allowed_Roles.indexOf(userRole) >= 0)  {
	            return;  // exit - This role is OK to edit this field
	        } 
	    	
	    	if ((runtime.executionContext == runtime.ContextType.USER_INTERFACE)) {
	    		var fld = context.form.getField('salesrep');
	    		//fld.updateDisplayType({displayType: serverWidget.FieldDisplayType.DISABLED});
	    		fld.updateDisplayType({displayType: serverWidget.FieldDisplayType.INLINE});
	    	} 
    	}
    	return;
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
	function beforeSubmit(context) {
		if (context.type != context.UserEventType.XEDIT) {
			return;
		}
		var recNew = context.newRecord;
		var newValue = recNew.getValue('salesrep');
		if (newValue){
			var recOld = context.oldRecord;
			var oldValue = recOld.getValue('salesrep');
			if (newValue == oldValue) {
				return;
			}
			// Check if this user is allowed to change sales rep field
    		var userId = runtime.getCurrentUser().id;
	        if (Allowed_Users.indexOf(userId) >= 0)  {
	            return;  // exit - This user is OK to edit this field
	        }
	        // Check if this role is allowed to change sales rep field
	        var userRole = runtime.getCurrentUser().role;
	        if (Allowed_Roles.indexOf(userRole) >= 0)  {
	            return;  // exit - This role is OK to edit this field
	        } 
			// throw an error that update is not allowed
		    
		    throw 'You are not authorized to change the sales rep field.';	
		}
		return;
		
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

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit
    };
    
});