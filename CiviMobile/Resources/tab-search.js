// Create the search bar

var search = Titanium.UI.createSearchBar({
	barColor:'#000', 
	showCancel:true,
	height:43,
	top:0
});

window_search.add(search);



// Create search results data array
var data = [
	{title:'John Smith', hasDetail:true, ContactID:'123'},
	{title:'Robert Smith', hasDetail:true, ContactID:'456'},
	{title:'Jane Smith', hasDetail:true, ContactID:'789'},
	{title:'William Smith', hasDetail:true, ContactID:'101112'}
	

];

// Create the table of results
var searchresults = Titanium.UI.createTableView({
	data:data,
	top:43
});

// Set the action for when you click on a row
searchresults.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	
	// custom property
	var prop = e.rowData.ContactID;
	
	Titanium.UI.createAlertDialog({title:'Open Record #',message:'custom value ' + prop}).show();
});

// add table view to the window
window_search.add(searchresults);
