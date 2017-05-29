<?php
	$username = "root";
	$password = "";
	$database = "falimiigrac";

	$connection = new mysqli("localhost", $username, $password, $database);
    //fetch table rows from mysql db
	$sta=$_GET["sta"];
    $sql = "select * from {$sta}";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);
	return json_encode($emparray);
    //close the db connection
    mysqli_close($connection);
	
?>