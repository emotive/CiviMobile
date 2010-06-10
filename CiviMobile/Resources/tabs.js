// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//Create windows for tabs

var window_summary = Titanium.UI.createWindow({  
    title:'Database Snapshot'
});
var window_search = Titanium.UI.createWindow({  
    title:'Search'
});
var window_nearby = Titanium.UI.createWindow({  
    title:'Who is Nearby?'
});
var window_reports = Titanium.UI.createWindow({  
    title:'Reports'
});


// Create tabs

var tab_summary = Titanium.UI.createTab({  
    icon:'images/tab-summary.png',
    title:'Snapshot',
    window:window_summary
});

var tab_search = Titanium.UI.createTab({  
    icon:'images/tab-search.png',
    title:'Search',
    window:window_search
});

var tab_nearby = Titanium.UI.createTab({  
    icon:'images/tab-nearby.png',
    title:'Nearby',
    window:window_nearby
});

var tab_reports = Titanium.UI.createTab({  
    icon:'images/tab-reports.png',
    title:'Reports',
    window:window_reports
});


tabGroup.addTab(tab_summary);  
tabGroup.addTab(tab_search);  
tabGroup.addTab(tab_nearby);  
tabGroup.addTab(tab_reports);  


// Add content

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

window_summary.add(label1);

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

window_search.add(label2);


Ti.include("tab-nearby.js");


var label4 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 4',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

window_reports.add(label4);




// open tab group
tabGroup.open();
