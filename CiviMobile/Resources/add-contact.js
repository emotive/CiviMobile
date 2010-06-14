// Create window for contact view

var add_contact = Titanium.UI.createWindow({  
	backgroundImage: 'images/bg.png',
   	title:'Add New Contact'
});


// create a button to close window
	var close_button = Titanium.UI.createButton({
		title:'Back',
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		
	});
	add_contact.setLeftNavButton(close_button);
	close_button.addEventListener('click', function()
	{
		add_contact.close();
	});


// Testing label

var test_label = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 4',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

add_contact.add(test_label);

add_contact.open({modal:true});