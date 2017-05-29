igracApp.controller('LoginController',function($location,$rootScope,$scope,loginService){
	
	$scope.logujse=function(){	
	console.log("test");
	  var user=$scope.user;
		  
	  loginService.getpodaci(user).success(function(data) {
		  console.log(data);
		  if (data=="true"){
			$rootScope.auth=true;
			$location.path('/'); 
		  }
			
	});
	}
});