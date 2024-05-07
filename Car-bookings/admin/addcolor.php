
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
<?php
if(isset($_POST["btnaddcolor"])){
	extract($_POST); 
	mysqli_query($conn,"INSERT INTO `tblcolor`(`clrname`) VALUES ('$txtcolor')");
	header("location:colorsuccess.php");
}

?>
<div class="row">
	<div class="col-md-3"></div>
	<div class="card col-md-6">
<form method="post"  enctype="multipart/form-data">
	<table class="table">
		<tr>
			<td colspan=2 align=center>
				
				<h5>ADD COLOR</h5>


			</td>
		</tr>
		
		
		<tr>
			<tD>
				Color
			</tD>
			<td>
				<input type="text" name="txtcolor" required class="form-control">
			</td>
		</tr>
		
		<tr>
			<td colspan="2" align="center">
				<input type="submit" class="btn btn-primary" name="btnaddcolor" value="Add Color">		
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