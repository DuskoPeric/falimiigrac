igracApp.service('igracService',function($http){
 this.getpodaci=function(id){
  
     return $http.get('http://localhost/falimiigrac/igrac.php?id='+id+'');
      
}

});