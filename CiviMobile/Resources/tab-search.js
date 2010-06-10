// Create the search bar

var searchbar = Titanium.UI.createWindow({  
height:43,
top:0,
width:320,
backgroundImage:'images/bg-menu-grey.png'
});
window_search.add(searchbar);


var search = Titanium.UI.createSearchBar({
	barColor:'#ccc', 
	showCancel:false,
	height:43,
	top:0,
	left:0,
	width:280

});

window_search.add(search);

// Handel what happens when you search

search.addEventListener('return', function(e)
{
	Titanium.UI.createAlertDialog({title:'Search', message:'You typed ' + e.value }).show();
   	search.blur();
});




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


// Setup add button

var addbutton = Titanium.UI.createButton({
	height:31,
	width:31,
	backgroundImage:'images/button-add.png'
});

window_search.setRightNavButton(addbutton);

// Set what happens when you click the add button

addbutton.addEventListener('click',function(e)
{
   alert("You clicked the button");
});


window_search.add(addbutton);
