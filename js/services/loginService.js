igracApp.service('loginService',function($http){
 this.getpodaci=function(user){
  console.log(user);
     return $http.post('http://localhost/falimiigrac/login.php',user);
      
}

});