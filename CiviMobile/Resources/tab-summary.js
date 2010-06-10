// Read in the data into an array - headers declare the section heads

var summaryData = [
	{title:'New Supporters', hasChild:true, value:'50', header:'Last 7 Days'},
	{title:'Money Raised', hasChild:true, value:'50'},
	{title:'Event Registrations', hasChild:true, value:'50'},
	{title:'Total Supporters', hasChild:true, value:'50', header:'Database Snapshot'},
	{title:'Raised YTD', hasChild:true, value:'50'},
	{title:'Active Members', hasChild:true, value:'50'}

]; 
var summaryView = Titanium.UI.createTableView({ 
	data:summaryData, 
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED
}); 

window_summary.add(summaryView);
