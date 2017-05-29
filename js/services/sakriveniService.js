igracApp.service('sakriveniService',function($http){
 this.getpodaci=function(timovi){
  
     return $http.get('http://localhost/falimiigrac/tim.php?sta='+timovi+'');
      
}
 this.obrisipodaci=function(id){
    return $http.delete('http://localhost/falimiigrac/delete.php?id='+id+'');
      
}
});