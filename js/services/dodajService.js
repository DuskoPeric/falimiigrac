igracApp.service('dodajService',function($http){
 this.getpodaci=function(datas){
  
     return $http.post('http://localhost/falimiigrac/dodaj.php',datas);
      
}

});