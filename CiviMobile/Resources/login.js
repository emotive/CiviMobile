//Add scrolling form window with logo

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:false,
    showHorizontalScrollIndicator:false
});
var loginform = Ti.UI.createView({
    width:'auto',
    height:2000,
    top:200
});


scrollView.add(loginform);
background.add(scrollView);

var logo = Titanium.UI.createImageView({
url:'images/civi-logo.png',
top:10,
width:194,
height:189
});

scrollView.add(logo);


// Create login form


var loginuser = Titanium.UI.createTextField({
	value:'username',
	height:35,
	width:238,
	top:220,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var loginpass = Titanium.UI.createTextField({
	value:'password',
	height:35,
	width:238,
	top:267,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var loginapi = Titanium.UI.createTextField({
	value:'api key',
	height:35,
	width:238,
	top:314,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var loginurl = Titanium.UI.createTextField({
	value:'url',
	height:35,
	width:238,
	top:361,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var loginbutton = Titanium.UI.createButton({
    title: 'Login',
	height:43,
	width:238,
	top:408,
	backgroundImage:'images/button_green.png',
    color:'#fff',
    font:{fontWeight:'bold',fontSize:20}

});
loginbutton.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});


scrollView.add(loginuser);
scrollView.add(loginpass);
scrollView.add(loginapi);
scrollView.add(loginurl);
scrollView.add(loginbutton);
