<?php
	$username = "root";
	$password = "";
	$database = "falimiigrac";

	$connection = new mysqli("localhost", $username, $password, $database);
    //fetch table rows from mysql db
	$id=$_GET["id"];
	
	
    $sql = "DELETE FROM `timovi` WHERE tim_id=$id";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

	
	echo $id;
    //close the db connection
    mysqli_close($connection);
	
?>