'use strict';

igracApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
		controller:"HomeController"
    })
    .when("/dodaj", {
        templateUrl : "dodaj.html",
		controller:"DodajController"
    })  
	.when("/pojedinacni/:Id", {
        templateUrl : "pojedinacni.html",
		controller:"PojedinacniController"
    }) 
	.when("/igrac/:Id", {
        templateUrl : "igrac.html",
		controller:"IgracController"
    })
	.when("/login", {
        templateUrl : "login.html",
		controller:"LoginController"
    })

	.when("/sakriveni", {
        templateUrl : "sakriveni.html",
		controller:"SakriveniController",
resolve:{
        "check":function($location,$rootScope){   
            if(!$rootScope.auth){ 
               
				$location.path('/login'); 
                console.log("You don't have access here");
            }else{
				console.log("uspjesno logovan");
            }
}
}
    }) .otherwise({
		redirectTo:'/'
	});
});