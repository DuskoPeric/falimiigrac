igracApp.service('podaciService',function($http){
 this.getpodaci=function(timovi){
  
     return $http.get('http://localhost/falimiigrac/tim.php?sta='+timovi+'');
      
}

});