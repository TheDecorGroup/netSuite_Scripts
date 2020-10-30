/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @appliedtorecord phonecall
 * @NModuleScope SameAccount
 */
define([],

function() {
   
    function beforeSubmit(scriptContext) {
    	log.debug({"title":"beforeSubmit","details":"We are here"});
    	var callRecord = scriptContext.newRecord;
    	var prevcallRecord = scriptContext.oldRecord;
    	
		updateCallResults(callRecord);
    	
    	return;  	

    }
    function updateCallResults(callRecord){
    	try {
	    	log.debug({"title":"updateCallResults","details":"We are here"});
	    	var message = callRecord.getValue({"fieldId":"message"});
	    	var phone8x8Call = message.indexOf("Call started at:");
	    	// make sure this is an 8x8 call based on start of message
	    	if (phone8x8Call != 0) {
	    		// non-8x8 portlet call - bypass 
	    		return;
			}
	    	
	    	// Get the Call result field
	    	var startPosition = message.indexOf("Call result:");
	    	var stopPosition = message.indexOf("Comments:");
	    	if (startPosition == -1 || stopPosition == -1) {
	    		log.debug({
	        		"title":"Update Routine",
	        		"details":"Call result not found. Start = " + startPosition + " Stop =  " + stopPosition + "message = " + message
	        	});
	    		return;
	    	}
	    	
	    	var newCallResults = message.substring(startPosition+13, stopPosition-1).trim();
	    	 
	    	log.debug({
	    		"title":"Update Routine",
	    		"details":"message = " + message + " start=" + startPosition + " end=" + stopPosition + " newCallResultes = " + newCallResults 
			});
	    	
			callRecord.setText( "custeventcti_call_result",  newCallResults);
	    	
	    	// Now check for call duration
	    	var startPosition = message.indexOf("Duration of the call:");
	    	
	    	if (startPosition == -1) {
	    		log.debug({
	        		"title":"Update Routine",
	        		"details":"Call Duration not found. Start = " + startPosition + " Stop =  " + stopPosition + "message = " + message
	        	});
	    		return;
	    	}
	    
	    	var callDurationStr = message.substring(startPosition+22, startPosition+30).trim();
	    	log.debug({"title":"beforeDuration","details":"callDurationStr" + callDurationStr});
	    	var timeSplit = callDurationStr.split(":");
	    	var callDuration = (parseInt(timeSplit[0],10)*60) + (parseInt(timeSplit[1],10)) + (parseInt(timeSplit[2],10)/60);
	    	callDuration = Math.round(callDuration * 100) / 100;
	    	log.debug({
	    		"title":"Update Routine",
	    		"details":"message = " + message + " start=" + startPosition + " end=" + stopPosition + " Call durationStr = " + callDurationStr + " duration = " + callDuration
	    	});
	    	callRecord.setText( "custevent_duration_minutes",  callDuration);
	    	
	    	return;
    	}
    	catch(err){
    		log.debug({"title":"Error","details": err.message});
    		return;
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
    
    return {        
        beforeSubmit: beforeSubmit
    };
    
});