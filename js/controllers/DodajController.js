igracApp.controller('DodajController',function($location,$scope,dodajService){
	
	$scope.dodajtim=function(){	
	  var datas=$scope.datas;
		  
	  dodajService.getpodaci(datas).success(function(data) {
		$location.path('/');
	});
	}
});