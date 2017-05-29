<?php
	$username = "root";
	$password = "";
	$database = "falimiigrac";

	$connection = new mysqli("localhost", $username, $password, $database);
    //fetch table rows from mysql db
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$sport = $request->sport;
	@$datum = $request->datum;
	@$vreme = $request->vreme;
	@$grad = $request->grad;
	@$adresa = $request->adresa;
	@$objekat = $request->objekat;
	@$broj_igraca = $request->broj_igraca;
	@$starost = $request->starost;
	@$cena = $request->cena;
	@$napomena = $request->napomena;
	@$telefon = $request->telefon;
	@$email = $request->email;
	
	
    $sql = "INSERT INTO `timovi` ( `datum_unosa`, `sport`, `datum`, `vreme`, `grad`, `adresa`, `objekat`, `broj_igraca`, `starost`, `cena`, `napomena`, `telefon`, `email`) VALUES
( CURRENT_TIMESTAMP,'{$sport}', '{$datum}', '{$vreme}','{$grad}','{$adresa}','{$objekat}',{$broj_igraca},'{$starost}','{$cena}','{$napomena}','{$telefon}','{$email}');";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

	
	echo $sport;
    //close the db connection
    mysqli_close($connection);
	
?>