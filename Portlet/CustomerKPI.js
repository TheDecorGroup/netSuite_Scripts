function customerkpi(portlet, column, entityid)
{
	portlet.setTitle('Customer KPI');
	var myCustomer, custname, content, html;
	if(entityid){
    	myCustomer = entityid;
    }
	//Create Objects for HTML Table Rows
	
	
 	var cdRows = [];
		cdRows[0] = "C Lights";
		cdRows[1] = "Mini Lights";
		cdRows[2] = "Greenery";
		cdRows[3] = "Commercial";
		cdRows[4] = "Electrical";
		cdRows[5] = "Fasteners";
		cdRows[6] = "Sockets and Wire";
		cdRows[7] = "Bows";
		cdRows[8] = "Other";
	
	var barRows = [];
		barRows[0] = "Trees";
		barRows[1] = "Formations";
		barRows[2] = "Illuminations";
		barRows[3] = "Ornaments";
		barRows[4] = "FDS";
		barRows[5] = "Displays";
		barRows[6] = "Other";
		
	var ntdRows = [];
		ntdRows[0] = "Fixtures";
		ntdRows[1] = "Lamps";
		ntdRows[2] = "Transformers";
		ntdRows[3] = "Wire / Accessories";
		ntdRows[4] = "Other";
		
	var ilRows = [];
		ilRows[0] = "Bases";
		ilRows[1] = "Controllers";
		ilRows[2] = "Demo Kits";
		ilRows[3] = "Electrical";
		ilRows[4] = "Lighting";
		ilRows[5] = "Transformers";
		
	
	var afilters = [];
		afilters[0] = new nlobjSearchFilter('entity', 'transaction', 'anyof', myCustomer);
		afilters[1] = new nlobjSearchFilter('custitem_item_family', null, 'anyof', 'HL');
	var aSearch = nlapiSearchRecord('item', 869, afilters, null);
	
	var bfilters = [];
		bfilters[0] = new nlobjSearchFilter('entity', 'transaction', 'anyof', myCustomer);
		bfilters[1] = new nlobjSearchFilter('custitem_item_family', null, 'anyof', 'BAR');
	var bSearch = nlapiSearchRecord('item', 869, bfilters, null);

	var cfilters = [];
		cfilters[0] = new nlobjSearchFilter('entity', 'transaction', 'anyof', myCustomer);
		cfilters[1] = new nlobjSearchFilter('custitem_item_family', null, 'anyof', 'LL');
	var cSearch = nlapiSearchRecord('item', 869, cfilters, null);

	var dfilters = [];
		dfilters[0] = new nlobjSearchFilter('entity', 'transaction', 'anyof', myCustomer);
		dfilters[1] = new nlobjSearchFilter('custitem_item_family', null, 'anyof', 'IL');
	var dSearch = nlapiSearchRecord('item', 869, dfilters, null);

	
	
	//Christmas Decor Data
	
	

		// Style Sheet
		html = "<style>";
		html += "table.kpi {border-collapse: collapse; width: 100%}";
		html += "th.kpi {height: 20px; padding-left: 5px;}";
		html += "td.kpi {width: 15%;}"
		html += ".label {font-weight: bold; width: 25%; padding-left: 15px;}";
		html += ".kpiheader {background-color: grey; color: white; padding-left: 5px;}";
		//html += "tr.kpi:hover{background-color:#e6e6e6}";
		html += "tr.kpi:nth-child(even){background-color: #f2f2f2}";
		html += "</style>";
	    // Christmas Decor
		if(aSearch){
			var data = getSearchResultsObjTranspose(aSearch);
			setUndefZero(data, cdRows);
			var cdTable = createHTMLTable("Christmas Decor", data, cdRows);
			html += cdTable;
		}

		// Barcana
		if(bSearch){
			var bData = getSearchResultsObjTranspose(bSearch);
			setUndefZero(bData, barRows);
			var barTable = createHTMLTable("Barcana", bData, barRows);
			html += barTable;
		}
		// NTD
		if(cSearch){
			var cData = getSearchResultsObjTranspose(cSearch);
			setUndefZero(cData, ntdRows);
			var ntdTable = createHTMLTable("Nite Time Decor", cData, ntdRows);
			html += ntdTable;
		}
		// Inception
		if(dSearch){
			var dData = getSearchResultsObjTranspose(dSearch);
			setUndefZero(dData, ilRows);
			var ilTable = createHTMLTable("Inception", dData, ilRows);
			html += ilTable;
		}
	    
	content = '<td><span>'+ html +'</span></td>'
	portlet.setHtml( content );
	
	
}
function getSearchResultsObj(results){
	var dataset = [];
	if(results){
		var resultslen = results.length;
		for (var b = 0; b < resultslen; b++){
			var columns = results[b].getAllColumns();
			var labels = [];
			var values = [];
			for (var a = 0; a < columns.length; a++){
				labels.push(columns[a].getLabel() ? columns[a].getLabel() : columns[a].getName());
				values.push(results[b].getText(columns[a]) ? results[b].getText(columns[a]) : results[b].getValue(columns[a]));
			}
			var record = {};
			for (r in labels){
				record[labels[r]] = values[r];
			}
			dataset.push(record);
		}
		return dataset;
	} else {
		return null;
	}	
}
function getSearchResultsObjTranspose(results){
	var dataset = [];
	if(results){
		var resultslen = results.length;
		var rows = [];
		var x;
		for (x = 0; x < resultslen; x++){
			var col = results[x].getAllColumns();
			rows.push(results[x].getText(col[0]) ? results[x].getText(col[0]) : results[x].getValue(col[0]));
		}
		for (var b = 0; b < rows.length; b++){
			var columns = results[b].getAllColumns();
			var values = [];
			var c = b + 1;
			
			for (var a = 0; a < resultslen; a++){
				values.push(results[a].getText(columns[c]) ? results[a].getText(columns[c]) : results[a].getValue(columns[c]));
			}
			var record = {};
			for (r in rows){
				record[rows[r]] = values[r];
			}
			dataset.push(record);
		}
		return dataset;
	} else {
		return null;
	}	
}
function setUndefZero(dataset, rowArray){
	var datalen = dataset.length;
	var cdRowslen = rowArray.length;
	var i;
	var n;
	for (i = 0; i < datalen; i++){
		for (n = 0; n < cdRowslen; n++){
			if(!dataset[i][rowArray[n]]){
				dataset[i][rowArray[n]] = "0.00";
			}
		}
	}
}
function createHTMLTable(title, dataset, rowArray){
	var html, a;
	html = "<div class=\"kpiheader\"><h2>" + title + "</h2></div>";
	html += "<table class=\"kpi\"><tr><th class=\"kpi\"><h3>Category</h3></th><th><h3>2015</h3></th><th><h3>2016</h3></th><th><h3>2016 YTD</h3></th><th><h3>2016 EOY</h3></th><th><h3>2017</h3></th></tr>";
	for (a = 0; a < rowArray.length; a++){
    	html += "<tr class=\"kpi\"><td class=\"label\">" + rowArray[a] + "</td><td class=\"kpi\">" + dataset[0][rowArray[a]] + "</td><td class=\"kpi\">" + dataset[1][rowArray[a]] + "</td><td class=\"kpi\">" + dataset[2][rowArray[a]] + "</td><td class=\"kpi\">" + dataset[3][rowArray[a]] + "</td><td class=\"kpi\">" + dataset[4][rowArray[a]] + "</td></tr>";
    }
	html += "</table>";
	return html;
}