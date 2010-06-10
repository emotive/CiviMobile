// Need to build array of map points using the code below

var mountainView = Titanium.Map.createAnnotation({
    latitude:37.390749,
    longitude:-122.081651,
    title:"Appcelerator Headquarters",
    subtitle:'Mountain View, CA',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    leftButton: '../images/appcelerator_small.png',
    myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});


// Request user's location and show map
// Need to insert annotations to corespond with map points from above
// Need to set the zoom level based on the zoomSlider value


	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	Titanium.Geolocation.distanceFilter = 10;
	
	Titanium.Geolocation.getCurrentPosition(function(e)
	{
		if (e.error)
		{
			alert('error: ' + JSON.stringify(e.error));
			return;
		}

		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;

		// alert('long:' + longitude + ' lat: ' + latitude);  // Used for debugging map coordinates
		
		Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
		
		var mapview = Titanium.Map.createView({
    		mapType: Titanium.Map.STANDARD_TYPE,
    		region: {latitude:latitude, longitude:longitude, 
            		latitudeDelta:0.01, longitudeDelta:0.01},
    		animate:true,
    		regionFit:true,
    		top:40,
    		userLocation:true,
    		annotations:[mountainView]
		});
 
window_nearby.add(mapview);		
		
		
	});




//Set zoom level

var window_zoom = Titanium.UI.createWindow({
	backgroundImage: 'images/black-bar.png',
	top:0,
	height:40  
});
window_nearby.add(window_zoom);

var zoomLabel = Titanium.UI.createLabel({
	text:'5 miles' ,
	color:'#fff',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:14
	},
	textAlign:'center',
	top:10,
	width:'auto',
	left:10,
	height:'auto'
});


var zoomSlider = Titanium.UI.createSlider({
	min:1,
	max:100,
	value:5,
	width:200,
	height:'auto',
	top:8,
	left:100
});
zoomSlider.addEventListener('change',function(e)
{
	zoomLabel.text = Math.round(zoomSlider.value) + ' miles';
});

window_zoom.add(zoomLabel);
window_zoom.add(zoomSlider);
