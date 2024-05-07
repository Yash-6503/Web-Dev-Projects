
<html>
<head>
	<title></title>
	<?php require 'head.php';?>
</head>
<body>

<?php require 'menu.php';?>

<?php
if(isset($_POST['btnlogin'])){
	extract($_POST);
	$q=mysqli_query($conn,"select * from tlbadmin where aemail='$txtaemail' and apass='$txtapass'");
	if(mysqli_num_rows($q)>0){
		$_SESSION["email"]=$txtaemail;
		$q1=mysqli_query($conn,"select * from tlbadmin where aemail='".$_SESSION['email']."'");
		$r1=mysqli_fetch_array($q1);
		$_SESSION["aid"]=$r1["aid"];
		header("location:reports.php");
	}
	else{
		echo "Invalid Credentials";
	}
}

?>
<div
	class="bg-image img-fluid"
  style="background-image: url('proimages/bg.jpg');
    height: 100vh; ">
<div class="row">
	<div class="col-md-8"></div>
	<div class="  col-md-3">
		<br></br>
		<br></br>
<form method="post">
	<table class=" table bg-  rounded-5 shadow-5-strong p-5">
		<tr>
			<td colspan=2 align=center>
				
				ADMIN LOGIN

			</td>
		</tr>
		<tr>
			<td>
		
				<input type="email" placeholder="Email"class="form-control" name="txtaemail">
			</td>
		</tr>
		<tr>
			
			<td>
				<input type="password" placeholder="Password" class="form-control" name="txtapass">
			</td>
		</tr>
		
		<tR>
			<Td colspan=2 align=center>
				<input type="submit" class="btn btn-primary" name="btnlogin" value="Sign In">
			</Td>
		</tR>
	</table>
</form>
</div>
<div class="col-md-3"></div>
</div>
</div>
<?php require 'footer.php';?>
</body>
</html>