igracApp.controller('PojedinacniController',function($routeParams,$location,$scope,pojedinacniService,uiGmapIsReady){
$scope.timid=$routeParams.Id;


var geocoder = new google.maps.Geocoder();

var longi=null;
var latit=null;


	$scope.tim = null;
	
	  pojedinacniService.getpodaci($scope.timid).success(function(data) {
		  console.log(data[0].adresa + ' ' + data[0].grad);

		  geocoder.geocode({
    "address": data[0].adresa + ' ' + data[0].grad
}, function(results) {
    longi=results[0].geometry.location.lat(); //LatLng
	console.log(results[0].geometry.location.lat());
	latit=results[0].geometry.location.lng(); //LatLng
	console.log(results[0].geometry.location.lng());
	
	$scope.sho=true;
});

		  
					
function initialize() {
	console.log("pause2");
						var styles = [
						{
							stylers: [
							{ hue: "#0AADCF" },
							{ saturation: -20 }
							]
						},{
							featureType: "road",
							elementType: "geometry",
							stylers: [
							{ lightness: 100 },
							{ visibility: "simplified" }
							]
						},{
							featureType: "road",
							elementType: "labels",
							stylers: [
							{ visibility: "off" }
							]
						}
						];
						var styledMap = new google.maps.StyledMapType(styles,
							{name: "Styled Map"});
						var mapCanvas = document.getElementById('map');
						var mapOptions = {
							center: new google.maps.LatLng(longi, latit),
							zoom: 16,
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							draggableCursor: 'default',
							scrollwheel: false
						}
						var map = new google.maps.Map(mapCanvas, mapOptions);

						var myLatLng = {lat: longi, lng: latit};
						var marker = new google.maps.Marker({
							position: myLatLng,
							map: map,
							title: 'MediaSkills'
						});
						//Associate the styled map with the MapTypeId and set it to display.
						map.mapTypes.set('map_style', styledMap);
						map.setMapTypeId('map_style');
					}  
		  
		  
		  


		$scope.tim = data;
	
	setTimeout(function(){ console.log("pause"); initialize();	 }, 2000);
	});

});