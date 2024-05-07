
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
<?php
if(isset($_POST["btnaddcar"])){
	extract($_POST);
	$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
	 if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) 
	mysqli_query($conn,"INSERT INTO `tblcar`(`cprice`, `cdprice`,`cbprice`, `cname`,`cwp`, `cimg`, `cddesc`) VALUES ('$txtcprice','$txtcdprice','$txtcbprice','$txtcname','$txtwaitingperiod','$target_file','$txtcddesc')");
header("location:caraddedsuccessfully.php");
}

?>
<div class="row">
	<div class="col-md-3"></div>
	<div class="card col-md-6">
<form method="post"  enctype="multipart/form-data">
	<table class="table">
		<tr>
			<td colspan=2 align=center>
				
				<h5>ADD CAR</h5>


			</td>
		</tr>

		<tr>

			<tD>

				 Car Name
			</tD>
			<td>
				<input type="text" class="form-control" name="txtcname" required>
			</td>
		</tr>
		<tr>
			<tD>
				Car Price
			</tD>
			<td>
				<input type="text" class="form-control" name="txtcprice" required>
			</td>
		</tr>
		<tr>
			<tD>
				Car Discount Price
			</tD>
			<td>
				<input type="text" name="txtcdprice" class="form-control" required>
			</td>
		</tr>
		<tr>
			<tD>
				Car Booking Price
			</tD>
			<td>
				<input type="text" name="txtcbprice" class="form-control" required>
			</td>
		</tr>
		<tr>
			<tD>
				Car Waiting Period
			</tD>
			<td>
				<input type="text" name="txtwaitingperiod" class="form-control" required>
			</td>
		</tr>
		
		<tr>
			<tD>
				Car Description
			</tD>
			<td>
				<textarea name="txtcddesc" class="form-control" required></textarea>
			</td>
		</tr>

		<tr>
			<tD>
				Car Image
			</tD>
			<td>
				<input type="file" required name="fileToUpload">
			</td>
		</tr>
		
		<tr>
			<td colspan="2" align="center">
				<input type="submit" class="btn btn-primary" name="btnaddcar" value="Add Car">		
			</td>
		</tr>
	</table>
</form>
</div>
<div class="row"><br>
	<br>
	<br>
	<br>
	<br></div>
	
<?php require 'footer.php';?>
</body>
</html>