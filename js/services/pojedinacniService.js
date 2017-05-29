igracApp.service('pojedinacniService',function($http){
 this.getpodaci=function(id){
  
     return $http.get('http://localhost/falimiigrac/pojedinacni.php?id='+id+'');
      
}

});