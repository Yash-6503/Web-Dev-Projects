
<html>
<head>
	<title></title>
	<?php require 'head.php';?>
</head>
<body>
<?php require 'menu.php';?>
<section class="" style="background-image: url(proimages/bg.jpg); background-repeat: no-repeat;background-size: cover;">
	
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
<?php
if(isset($_POST["btnaddmodel"])){
	extract($_POST); 
	mysqli_query($conn,"INSERT INTO `tblmodel`(`mname`,`mprice`) VALUES ('$txtmname','$txtmprice')");
	header("location:modelsuccess.php");
}

?>
<div class="row">
	<div class="col-md-3"></div>
	<div class="card col-md-6">
<form method="post"  enctype="multipart/form-data">
	<table class="table">
		<tr>
			<td colspan=2 align=center>
				
				<h5>ADD MODEL</h5>


			</td>
		</tr>
		
		
		<tr>
			<tD>
				Model Name
			</tD>
			<td>
				<input type="text" name="txtmname" required class="form-control">
			</td>
		</tr>
		<tr>
			<tD>
				Model Price
			</tD>
			<td>
				<input type="text" name="txtmprice" required class="form-control">
			</td>
		</tr>
		
		<tr>
			<td colspan="2" align="center">
				<input type="submit" class="btn btn-primary" name="btnaddmodel" value="Add Model">		
			</td>
		</tr>
	</table>
</form>
</div>
<div class="row"><br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br></div>
<?php require 'footer.php';?>
</body>
</html>