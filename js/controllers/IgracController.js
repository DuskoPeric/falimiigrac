igracApp.controller('IgracController',function($routeParams,$location,$scope,igracService){
$scope.igracid=$routeParams.Id;
	$scope.igrac = null;
	
	  igracService.getpodaci($scope.igracid).success(function(data) {  
		$scope.igrac = data;
	});

});