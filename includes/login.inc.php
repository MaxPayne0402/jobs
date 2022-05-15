<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 0);

/*echo json_encode("success");
exit;*/

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$uid = $_POST['uid'];
$pwd = $_POST['pwd'];

// Instantiate SignupContr class
include "../classes/dbh.classes.php";
include "../classes/login.classes.php";
include "../classes/login-contr.classes.php";

$login = new LoginContr($uid, $pwd);

//  Running error handlers and user signup

$login->loginUser();

echo json_encode("SUCCESSFUL!");

// Going to back to front page

//header("Location: ../index.php?success=true");


