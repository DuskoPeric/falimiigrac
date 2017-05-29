igracApp.controller('HomeController',function($rootScope,$scope,$location,podaciService){
	$scope.timovi = null;
	$scope.igraci = null;
	//$scope.izl=null;
	  podaciService.getpodaci('timovi').success(function(data) {
		//$scope.timovi = data; 
		$scope.timovi = data;
		console.log(data);
		//$scope.igraci = data.igraci;
		//console.log($scope.timovi);
	});
	podaciService.getpodaci('igraci').success(function(data) {
		//$scope.timovi = data; 
		$scope.igraci = data;
		//$scope.igraci = data.igraci;
		//console.log($scope.timovi);
	});
	$scope.datumFilter=function(datum){
		var today=new Date();
		var thisdate= new Date(datum);
		if(thisdate<=today){
			return false;
		}else{
			return true;
		}
	}
	$scope.redirektuj=function(){
		$location.path('/sakriveni');
	}
	$scope.promjeni=function(){
		$rootScope.auth=true;
	}
});