<?php
	$username = "root";
	$password = "";
	$database = "falimiigrac";
/* define('SALT', 'whateveryouwant'); 
	function encrypt($text) 
	{ 
		return trim(base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, SALT, $text, MCRYPT_MODE_ECB, mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB), MCRYPT_RAND)))); 
	} 

	function decrypt($text) 
	{ 
		return trim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, SALT, base64_decode($text), MCRYPT_MODE_ECB, mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB), MCRYPT_RAND))); 
	} 

	$encryptedmessage = encrypt("your message"); 
	echo decrypt($encryptedmessage); 	 */
	
	
	$connection = new mysqli("localhost", $username, $password, $database);
    //fetch table rows from mysql db
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$usernames = $request->username;
	@$passwords = $request->password;
	//$encryptedmessage = encrypt($passwords); 
	
		
    $sql = "SELECT password FROM users WHERE name = '{$usernames}'";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		if($row["password"]==$passwords){
		echo "true";
        // $row["password"];
		}
    }
} else {
    echo "false";
}
    //close the db connection
    mysqli_close($connection);
	
?>