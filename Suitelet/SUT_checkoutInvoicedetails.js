function htmlSuitelet(request, response) {
	try {

		// log all parameters
		logParameters(request);
		var year = request.getParameter('syear');
		var customerInternalId = request.getParameter('custId');
		nlapiLogExecution("DEBUG", "Enter into suitelet", "Enter into suitelet");
		var searchFilters = [];
		var searchcoloms = [];
		// searchFilters[0] = new nlobjSearchFilter('custrecordsuiteletflag', null, 'is', 'T');
		searchFilters[0] = new nlobjSearchFilter('custrecord6', null, 'startswith', year);
		searchFilters[1] = new nlobjSearchFilter('custrecord5', null, 'is', customerInternalId);
		searchcoloms[0] = new nlobjSearchColumn('custrecord5');
		// customrecord156 is the Sales History record
		var searchRecord = nlapiSearchRecord('customrecord156', null, searchFilters, searchcoloms);
		nlapiLogExecution("DEBUG", 'search result', JSON.stringify(searchRecord));

		if (searchRecord != null) {

			nlapiLogExecution("DEBUG", "searchRecord", searchRecord.length);
			var salehist_recorId = searchRecord[0].getId();
			nlapiSubmitField('customrecord156', salehist_recorId, 'custrecordsuiteletflag', 'F');
			//saleHistory_LoadRecord.setFieldValue('custrecordsuiteletflag','F');//Setting the flag false
			var saleHistory_LoadRecord = nlapiLoadRecord('customrecord156', salehist_recorId);
			var customer_Id = saleHistory_LoadRecord.getFieldValue('custrecord5');
			var companyname_Customer = nlapiLookupField('customer', customer_Id, 'companyname');
			var companyname_CustomerFranchise = saleHistory_LoadRecord.getFieldValue('custrecord_franchise_nbr_sales_hist');
			var salesHistory_Year = saleHistory_LoadRecord.getFieldValue('custrecord6');
			var salesHistory_New = saleHistory_LoadRecord.getFieldValue('custrecord8');
			var salesHistory_ReInstall = saleHistory_LoadRecord.getFieldValue('custrecord9');
			var salesHistory_TakeDownSales = saleHistory_LoadRecord.getFieldValue('custrecord10');
			var salesHistory_totalCDI = saleHistory_LoadRecord.getFieldValue('custrecordpastduecdiopeninvoices');
			var salesHistory_totalACLS = saleHistory_LoadRecord.getFieldValue('custrecordpastdueaclschargesopeninv');
			var salesHistory_InvoiceId = saleHistory_LoadRecord.getFieldValue('custrecordsalesinvoiceid');
			var Invoice_Number = nlapiLookupField('invoice', salesHistory_InvoiceId, 'tranid');
			nlapiLogExecution("DEBUG", "transaction invoice internalid", Invoice_Number);

			//-----------------Validation------------------------------- 
			if (companyname_CustomerFranchise == null) {
				companyname_CustomerFranchise = "";
			}
			if (salesHistory_Year == null) {
				salesHistory_Year = "";
			}
			if (salesHistory_New == null) {
				salesHistory_New = 0.0;
			}
			if (salesHistory_ReInstall == null) {
				salesHistory_ReInstall = 0.0;
			}
			if (salesHistory_TakeDownSales == null) {
				salesHistory_TakeDownSales = 0.0;
			}
			//------------End validation----------------------------------- 
			var salesHistory_AnnualSales = parseFloat(salesHistory_New) + parseFloat(salesHistory_ReInstall);
			if (salesHistory_AnnualSales == NaN) {
				salesHistory_AnnualSales = 0.0;
			}
			var salesHistory_RltyPercentage = saleHistory_LoadRecord.getFieldValue('custrecord44');
			if (salesHistory_RltyPercentage == null) {
				salesHistory_RltyPercentage = 0;
			}
			var salesHistory_CalculatedRoyalty = saleHistory_LoadRecord.getFieldValue('custrecord17');
			if (salesHistory_CalculatedRoyalty == null) {
				salesHistory_CalculatedRoyalty = 0.0;
			}
			var salesHistory_MinimumRoyalty = saleHistory_LoadRecord.getFieldValue('custrecord19'); //Rolty PD
			if (salesHistory_MinimumRoyalty == null) {
				salesHistory_MinimumRoyalty = 0.0;
			}
			var salesHistory_RoyaltyDue = saleHistory_LoadRecord.getFieldValue('custrecord18');
			if (salesHistory_RoyaltyDue == null) {
				salesHistory_RoyaltyDue = 0.0;
			}
			var salesHistory_RoyaltyDueBefor = parseFloat(saleHistory_LoadRecord.getFieldValue('custrecord18')); // - parseFloat(salesHistory_totalCDI) - parseFloat(salesHistory_totalACLS);
			if (salesHistory_RoyaltyDueBefor == null) {
				salesHistory_RoyaltyDueBefor = 0.0;
			}
			//For MDF
			var salesHistory_MdfPercentage = saleHistory_LoadRecord.getFieldValue('custrecord58');
			var salesHistory_calculatedMdf = saleHistory_LoadRecord.getFieldValue('custrecord59');
			var salesHistory_MinMdf = saleHistory_LoadRecord.getFieldValue('custrecord60');
			var salesHistory_MdfDate = saleHistory_LoadRecord.getFieldValue('custrecord55');
			var salesHistory_MdfDue = saleHistory_LoadRecord.getFieldValue('custrecord62');

			//---------------Start validation-----------------------------------
			if (salesHistory_MdfPercentage == null) {
				salesHistory_MdfPercentage = 0.0;
			}
			if (salesHistory_calculatedMdf == null) {
				salesHistory_calculatedMdf = 0.0;
			}
			if (salesHistory_MinMdf == null) {
				salesHistory_MinMdf = 0.0;
			}
			if (salesHistory_MdfDate == null) {
				salesHistory_MdfDate = 0.0;
			}
			if (salesHistory_MdfDue == null) {
				salesHistory_MdfDue = 0.0;
			}
			//---------------End validation-------------------------------------
			var grandToatal = parseFloat(salesHistory_RoyaltyDue) + parseFloat(salesHistory_MdfDue); //This is MDF amount
			if (grandToatal == NaN) {
				grandToatal = 0.0;
			}

			var html = '<html><head><script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"' + 
				'type="text/javascript"></script></head>' + 
				'<script type="text/javascript">  $(document).ready(function () {  ' + 
				'$("#btn").click(function () { window.location.href="https://4149002.app.netsuite.com/app/center/card.nl?sc=-47&whence="; }); $("#ptrnt").click(function () {window.print();}); });</script> <body bgcolor="#E6E6FA"><h3 align="center">Invoice Details:' + Invoice_Number + ' </h3>' +
				'<br/>' +
				'<div>' +
				'<table width="100%" style="border: thin solid black">' +
				'<tr  bgcolor="#000000">' +
				'<th width="6%"><font color="#fff">Franchise No</font>' +
				'</th>' +
				'<th width="6%"><font color="#fff">Company Name</font>' +
				'</th>' +
				'<th  width="6%"><font color="#fff">Year</font>' +
				'</th>' +
				'<th  width="6%"><font color="#fff">New Sales</font>' +
				'</th>' +
				'<th  width="6%"><font color="#fff">ReInstall Sales</font>' +
				'</th>' +
				'<th width="6%"><font color="#fff">Anual Sales</font>' +
				'</th>' +
				'<th width="6%"><font color="#fff">Rlty %</font>' +
				'</th>' +
				'<th width="6%"><font color="#fff">Calculated Royalty</font>' +
				'</th>' +
				'<th width="6%"><font color="#fff">Royalty Paid</font>' +
				'</th>' +
				'<th width="6%"><font color="#fff">Total Royalty Due</font>' +
				'</th>' +
				'</tr>' +
				'<tr bgcolor="#FFFFFF">' +
				'<td>' + companyname_CustomerFranchise + '</td>' +
				'<td>' + companyname_Customer +
				'</td>' +
				'<td align="right">' + salesHistory_Year +
				'</td>' +
				'<td align="right">$' + convertToUSD(salesHistory_New) +
				'</td>' +
				'<td align="right">$' + convertToUSD(salesHistory_ReInstall) +
				'</td>' +
				'<td align="right"> $' + convertToUSD(salesHistory_AnnualSales) +
				'</td>' +
				'<td align="right">' + convertToUSD(salesHistory_RltyPercentage) +
				'</td>' +
				'<td align="right">$' + convertToUSD(salesHistory_CalculatedRoyalty) +
				'</td>' +
				'<td align="right">$' + convertToUSD(salesHistory_MinimumRoyalty) +
				'</td>' +
				'<td align="right">$' + convertToUSD(salesHistory_RoyaltyDueBefor) +
				'</td>' +
				'</tr>' +
				'</table> ' +
				'<table width="100%" style="border: thin solid black"> ' +
				'<tr bgColor="red">' +
				'<td width="54%" align="right"><b>Past Due Amount CDI:</b>' +
				'</td>' +
				'<td width="6%" align="right"><b>$' + convertToUSD(salesHistory_totalCDI) +
				'</b>' +
				'</td>' +
				'</tr>' +
				'</table>' +
				'<table width="100%" style="border: thin solid black"> ' +
				'<tr bgColor="#000">' +
				'<th width="6%"><font color="#fff">Franchise #</font>' +
				'</th>' +
				'<th width="24%">' +
				'</th>' +
				'<th  width="6%"><font color="#fff">MDF %</font>' +
				'</th>' +
				'<th width="6%"><font color="#fff">Calculated MDF</font>' +
				'</th>' +
				'<th width="6%"><font color="#fff">Min Annual MDF</font>' +
				'</th>' +
				'<th width="6%"><font color="#fff">MDF Paid to Date</font>' +
				'</th>' +
				'<th width="6%"><font color="#fff">MDF Due</font>' +
				'</th>' +
				'</tr>' +
				'<tr bgColor="#FFF">' +
				'<td>' + companyname_CustomerFranchise +
				'</td>' +
				'<td>' +
				'</td>' +
				'<td align="right"> ' + salesHistory_MdfPercentage +
				'</td>' +
				'<td align="right"> $' + convertToUSD(salesHistory_calculatedMdf) +
				'</td>' +
				'<td align="right"> $' + convertToUSD(salesHistory_MinMdf) +
				'</td>' +
				'<td align="right">$' + convertToUSD(salesHistory_MdfDate) +
				'</td>' +
				'<td align="right"> $' + convertToUSD(salesHistory_MdfDue) +
				'</td>' +
				'</tr>' +
				'</table> ' +
				'<table width="100%" style="border: thin solid black"> ' +
				'<tr bgColor="red">' +
				'<td width="54%" align="right"><b>Past Due ACLS:</b>' +
				'</td>' +
				'<td width="6%" align="right"><b>$' + convertToUSD(salesHistory_totalACLS) +
				'</b>' +
				'</td>' +
				'</tr>' +
				'</table>' +
				'<table width="100%" style="border: thin solid black"> ' +
				'<tr bgColor="#FFF">' +
				'<td width="54%" align="right"><b>Grand Total:</b>' +
				'</td>' +
				'<td width="6%" align="right"><b>$' + convertToUSD(grandToatal) +
				'</b>' +
				'</td>' +
				'</tr>' +
				'</table> ' +
				'<br/>' +
				'<br/>' +
				'<div align="center">' +
				'<br>' +
				'<br>' +
				'<br>' +
				'<p><b>"This Invoice marks the completion of the Year-End Reporting process.  After you hit SUBMIT, the accounting department will process your payment <br> according  to the information you supplied earlier in the process.  You will receive a receipt via email as usual. Thank you for another great season."</b></p>' +
				'</div>' +
				'<br>' +
				'<br>' +
				'<div align="center" width="60%" color="blue">' +
				// '<button id="ptrnt" style="height:40px;width:100px;"> Print</button>&nbsp&nbsp&nbsp' +
				// '<button id="btn" style="height:40px;width:100px;"> Submit</button>' +
				'<button onclick="https://4149002.app.netsuite.com/app/center/card.nl?sc=-47&whence=" style="height:40px;width:100px;" type="button">Back to Home</button>' +
				'</div>' +
				'<input type="hidden" id="invoiceid"  name="invoiceid" value=' + salesHistory_InvoiceId + '>' +
				'</body></html>';
			response.write(html);
		}
	} catch (e) {

		nlapiLogExecution("ERROR", e.getCode(), e.getDetails() + '  |  ' + e.getStackTrace() + ' ' + e.toString());
	}
}

function convertToUSD(number) {

	var number = number.toString(),
		dollars = number.split('.')[0],
		cents = (number.split('.')[1] || '') + '00';
	dollars = dollars.split('').reverse().join('')
		.replace(/(\d{3}(?!$))/g, '$1,')
		.split('').reverse().join('');
	return dollars + '.' + cents.slice(0, 2);
}

function logParameters(request) {
	var params = request.getAllParameters()
	var json_params = [];
	var p = {};
	for (param in params) {
		nlapiLogExecution('DEBUG', 'parameter: ' + param);
		p[param] = params[param];
	}
	json_params.push(p);
	nlapiLogExecution('DEBUG', 'parameters', JSON.stringify(json_params));
}