function initialize() {
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(-2.2116245, -79.8892658), //change the coordinates
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(-2.2116245, -79.8892658) //change the coordinates
	});
	google.maps.event.addListener(marker, "click", function () {
		infowindow.open(map, marker);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);