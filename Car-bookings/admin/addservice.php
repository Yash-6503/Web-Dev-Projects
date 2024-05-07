
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
if(isset($_POST["btnaddservice"])){
	extract($_POST); 
	mysqli_query($conn,"INSERT INTO `tblservices`(`uid`,`sname`, `sdesc`, `cnp`, `sprice`,`status`) VALUES ('$customername','$txtsname','$txtsdesc','$txtcnp','$txtsprice','0')");
	header("location:serviceaddedsuccessfully.php");
}

?>
<div class="row">
	<div class="col-md-3"></div>
	<div class="card col-md-6">
<form method="post"  enctype="multipart/form-data">
	<table class="table">
		<tr>
			<td colspan=2 align=center>
				
				<h5>ADD SERVICE</h5>


			</td>
		</tr>
		
		<tr>
			<tD>
				 Customer Name
			</tD>
			<td>
				<select name="customername" class="form-control">
					<?php
						$q=mysqli_query($conn,"select * from tbluser");
						while ($r=mysqli_fetch_array($q)) {
							?>
							<option value="<?php echo $r['uid'];?>"><?php echo $r["uname"];?></option>
							<?php
						}
					?>
				</td>
			</tr>
		<tr>
			<tD>
				 Service Name
			</tD>
			<td>
				<input type="text" class="form-control" required name="txtsname">
			</td>
		</tr>
		<tr>
			<tD>
				Service Description
			</tD>
			<td>
				<input type="text" class="form-control" required name="txtsdesc">
			</td>
		</tr>
		<tr>
			<tD>
				Car Number Plate
			</tD>
			<td>
				<input type="text" name="txtcnp" required class="form-control">
			</td>
		</tr>
		<tr>
			<tD>
				Service Price
			</tD>
			<td>
				<input type="text" name="txtsprice" required class="form-control">
			</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<input type="submit" class="btn btn-primary" name="btnaddservice" value="Add Service">		
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