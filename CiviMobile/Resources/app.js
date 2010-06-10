// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#93aaaf');

//Create background container
var background = Titanium.UI.createWindow({  
    backgroundImage: 'images/bg.png',
    top:0,
    left:0,
    height:461,
    width:320
});

background.open();

// Login Page
//Ti.include("login.js");


//Tabbed Pages
Ti.include("tabs.js");