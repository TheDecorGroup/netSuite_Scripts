/**
 * @NApiVersion 2.x
 * @NScriptType Portlet
 * @NModuleScope SameAccount
 */
define(['N/search'],
/**
 * @param {search} search
 */
function(search) {
   
    /**
     * Definition of the Portlet script trigger point.
     * 
     * @param {Object} params
     * @param {Portlet} params.portlet - The portlet object used for rendering
     * @param {number} params.column - Specifies whether portlet is placed in left (1), center (2) or right (3) column of the dashboard
     * @param {string} params.entity - (For custom portlets only) references the customer ID for the selected customer
     * @Since 2015.2
     */
	var thisMTDCount = 0;
	var lastYearMTDCount = 0;
	var totalCompanies = 0;
	var noSalesCount = 0;
	var cols = [];
    function render(params) {
    	try {
    		var mySearch = search.load ({
    			id:'customsearch2437'
    		});  		
    		    		
    		var resultSet = mySearch.run();
    		
    		resultSet.each(getMTD);
    		// Process the total results here 
    		var a = noSalesCount;
    		var b = thisMTDCount;
    		var c = lastYearMTDCount;
    		log.audit({title:"No sales = " + noSalesCount + " This MTD is Higher = " + thisMTDCount + " Last Year MTD is Higher = " + lastYearMTDCount})
    		// ******************************
    		return;
    	}
    	catch(e) {
    		var errorMessage = e; 
    		var a = 1;
    	}
    }
    		
    		
	function getMTD(result){
		try {
			totalCompanies += 1;
			var cols = result.columns;
			var thisMTDSales = 0;
			var lastYearMTDSales = 0;
			cols.forEach(function(col){
				switch(col.label){
					case 'This Year MTD' : thisMTDSales = result.getValue(col); break;
					case 'Last Year MTD' : lastYearMTDSales = result.getValue(col); break;
				}
			})
			
			if (thisMTDSales == 0 && lastYearMTDSales == 0){
    			noSalesCount += 1;
    		} else {
    			if (thisMTDSales > lastYearMTDSales){
    				thisMTDCount += 1;
    			} else {lastYearMTDCount += 1}    			
    		}
			
			return true;			
			    		
		}
    		
		catch(e) {
			var errorMessage = e; 
			var a = 1;
		}
    		
	};
		  
    return {
        render: render
    };
    
});