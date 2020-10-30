function FieldChanged(type, name){
	switch (name){
	case 'saleunit':
		//nlapiLogExecution('DEBUG', 'name= '+name);
		var convert = {
				"Case-10":10,
				"Case-100":100,
				"Case-1000":1000,
				"Case-12":12,
				"Case-15":15,
				"Case-2":2,
				"Case-20":20,
				"Case-200":200,
				"Case-2000":2000,
				"Case-225":225,
				"Case-24":24,
				"Case-25":25,
				"Case-250":250,
				"Case-3":3,
				"Case-300":300,
				"Case-315":315,
				"Case-32":32,
				"Case-36":36,
				"Case-4":4,
				"Case-48":48,
				"Case-5":5,
				"Case-50":50,
				"Case-500":500,
				"Case-6":6,
				"Case-72":72,
				"Case-8":8,
				"Case-9":9,
				"Each":1};
		var caseqty = nlapiGetFieldText('saleunit');
		//nlapiLogExecution('DEBUG', 'caseqty= '+caseqty);
		//nlapiLogExecution('DEBUG', 'caseqty= '+convert.caseqty);
		if(convert[caseqty]){
			nlapiSetFieldValue('custitem_tdg_caseqtynum', convert[caseqty]);
		}
		break;
	case 'custitem_tdg_itemcost':
		var ic = 0, cc = 0, lc = 0, tc = 0;
		if(nlapiGetFieldValue('custitem_tdg_itemcost')){
			ic = parseFloat(nlapiGetFieldValue('custitem_tdg_itemcost'));
		}
		if(nlapiGetFieldValue('custitem_tdg_componentcost')){
			cc = parseFloat(nlapiGetFieldValue('custitem_tdg_componentcost'));
		}
		if(nlapiGetFieldValue('custitem_tdg_landedcost')){
			lc = parseFloat(nlapiGetFieldValue('custitem_tdg_landedcost'));
		}	
		var tc = ic + cc + lc;
		nlapiSetFieldValue('custitem_tdg_totalcost', tc);
		break;
	case 'custitem_tdg_componentcost':
		var ic = 0, cc = 0, lc = 0, tc = 0;
		if(nlapiGetFieldValue('custitem_tdg_itemcost')){
			ic = parseFloat(nlapiGetFieldValue('custitem_tdg_itemcost'));
		}
		if(nlapiGetFieldValue('custitem_tdg_componentcost')){
			cc = parseFloat(nlapiGetFieldValue('custitem_tdg_componentcost'));
		}
		if(nlapiGetFieldValue('custitem_tdg_landedcost')){
			lc = parseFloat(nlapiGetFieldValue('custitem_tdg_landedcost'));
		}	
		var tc = ic + cc + lc;
		nlapiSetFieldValue('custitem_tdg_totalcost', tc);
		break;
	case 'custitem_tdg_landedcost':
		var ic = 0, cc = 0, lc = 0, tc = 0;
		if(nlapiGetFieldValue('custitem_tdg_itemcost')){
			ic = parseFloat(nlapiGetFieldValue('custitem_tdg_itemcost'));
		}
		if(nlapiGetFieldValue('custitem_tdg_componentcost')){
			cc = parseFloat(nlapiGetFieldValue('custitem_tdg_componentcost'));
		}
		if(nlapiGetFieldValue('custitem_tdg_landedcost')){
			lc = parseFloat(nlapiGetFieldValue('custitem_tdg_landedcost'));
		}	
		var tc = ic + cc + lc;
		nlapiSetFieldValue('custitem_tdg_totalcost', tc);
		break;
	case 'itemid':
		var itemname = nlapiGetFieldValue('itemid');
		nlapiSetFieldValue('custitem_tdg_itemnum', itemname);
		break;
	}
		
}