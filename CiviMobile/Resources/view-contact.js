// Create window for contact view

var view_contact = Titanium.UI.createWindow({  
	backgroundImage: 'images/bg.png',
   	title:'First Last Suffix'
   	numProp1 = prop;
});


// create a button to close window
	var close_button = Titanium.UI.createButton({
		title:'Back',
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		
	});
	view_contact.setLeftNavButton(close_button);
	close_button.addEventListener('click', function()
	{
		view_contact.close();
	});


// Testing label

var test_label = Titanium.UI.createLabel({
	color:'#999',
	text: numProp1,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

view_contact.add(test_label);

view_contact.open({modal:true});