
<html>
<head>
	<title></title>
	<?php require 'head.php';?>
</head>
<body>
<style>
	.table{
  background-color: transparent;
  
}
</style>
<?php require 'menu.php';?>
<section class="" style="background-image: url(proimages/background.jpg); background-repeat: no-repeat;background-size: cover;">
<?php
if(isset($_POST['btnlogin'])){
	extract($_POST);
	$q=mysqli_query($con,"select * from tbluser where email='$txtemail' and upass='$txtpass'");
	if(mysqli_num_rows($q)>0){
		$_SESSION["email"]=$txtemail;
		$q1=mysqli_query($con,"select * from tbluser where email='".$_SESSION['email']."'");
		$r1=mysqli_fetch_array($q1);
		$_SESSION["uid"]=$r1["uid"];
		$_SESSION["uname"]=$r1["uname"];
		$_SESSION["email"]=$r1["email"];
		$_SESSION["address"]=$r1["address"];
		$_SESSION["phone"]=$r1["phone"];
		header("location:welcome.php");
	}
	else{
	echo "Invalid Credentials";
	}
}

?>
<div class="row">
	<div class="col-md-8"></div>
	<div class="col-md-3">
		<br></br>
		<br></br>
		
<form method="post">

	<table class="table bg-  rounded-5 shadow-5-strong p-5">
		<tr>
			<td colspan=2 align=center>
				
				CUSTOMER LOGIN

			</td>
		</tr>
		<tr align="center">
			
			<td>
				<input type="email" class="form-control"placeholder="Email" name="txtemail">
			</td>
		</tr>
		<tr>
			
			<td >
				<input type="password" class="form-control"placeholder="Password" name="txtpass">
			</td>
		</tr>
		
		<tR>
			<Td colspan=2 align=center>
				<input type="submit" class="btn btn-dark" name="btnlogin" value="Sign In">
			</Td>
		</tR>
		<tr>
			<td colspan=2 align=center>
    <p>Not a member? <a href="register.php">Register</a></p>
    		</td>
		</tr>
	</table>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
</form>
</div>

</div>
<br></br>
	<br></br>
	<br></br>
	<br></br>
<?php require 'footer.php';?>
</body>
</html>