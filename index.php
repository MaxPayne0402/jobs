<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<?php
if (isset($_SESSION['userid'])) {
    echo "<a href='#'>". $_SESSION['useruid'] . "</a><br/>";
    echo "<a href='includes/logout.inc.php'>LOGOUT</a>";
} else {

?>
    <h4>SIGNUP</h4>

    <form action="./includes/signup.inc.php" method="POST">
        <input type="text" name="uid" placeholder="Username"></br></br>
        <input type="password" name="pwd" placeholder="Password"></br></br>
        <input type="password" name="pwdrepeat" placeholder="Repeat Password"></br></br>
        <input type="text" name="email" placeholder="E-mail"></br></br>
        <label><span>I understend a rules and privacy policy.</span><input type="checkbox" name="rules"/></label></br></br>
        <input type="submit" name="sub" value="SIGN UP">
    </form>
    <br /><br /><br /><br />

    <h4>SIGNIN</h4>

    <form action="./includes/login.inc.php" method="POST">
        <input type="text" name="uid" placeholder="Username"></br></br>
        <input type="password" name="pwd" placeholder="Password"></br></br>
        <label><span>Remember me</span><input type="checkbox" name="remember"/></label></br></br>
        <input type="submit" name="sub" value="SIGN IN">
    </form>

    <?php } ?>
</body>

</html>