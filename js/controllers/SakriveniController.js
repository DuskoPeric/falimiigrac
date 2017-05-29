igracApp.controller('SakriveniController',function($rootScope, $location,$scope,$route,sakriveniService){
	
	if($rootScope.auth==false){
		console.log("test");
		$location.path('/test');
	}
	$scope.timovi = null;
	$scope.igraci = null;
	//$scope.izl=null;
	  sakriveniService.getpodaci('timovi').success(function(data) {
		//$scope.timovi = data; 
		$scope.timovi = data;
		console.log("sakriveni podaci");
		console.log($scope.timovi);
		//$scope.igraci = data.igraci;
		//console.log($scope.timovi);
	});
	  sakriveniService.getpodaci('igraci').success(function(data) {
		//$scope.timovi = data; 
		$scope.igraci = data;
		console.log("sakriveni podaci");
		console.log($scope.igraci);
		//$scope.igraci = data.igraci;
		//console.log($scope.timovi);
	});
	$scope.datumFilter=function(datum){
		var today=new Date();
		var thisdate= new Date(datum);
		if(thisdate>today){
			return false;
		}else{
			return true;
		}
	}
		$scope.obrisi=function(id){
		  sakriveniService.obrisipodaci(id).success(function(data) {
			console.log(data);
			$route.reload();
		});		
	}
	
});