
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
if(isset($_POST['btnctn'])){
	extract($_POST);
	mysqli_query($con,"update tblbookings set `clrid`='$color',`mid`='$model' where uid=".$_SESSION['uid']);
	header("location:bill.php");
}

?>
<div class="row">
	<div class=" col-md-3"></div>
<div class="card col-md-6">
	<center>
  <div class="card-body">
    <h5 class="card-title">CONFIRM BOOKING</h5>
    <p class="card-text">
    	<table class="table">
<?php
$q=mysqli_query($con,"select * from tblbookings,tblcar where tblcar.cid=tblbookings.cid and tblbookings.status='0'and tblbookings.uid=".$_SESSION['uid']);
while ($r=mysqli_fetch_array($q)) {
	?>
	<Tr>
		<td>Car Name</td>
		<td>
	<?php echo $r["cname"];?>
</td>
</Tr>
<Tr>
<td>Car Bookings Price</td>
<td>
	<?php echo $r["cbprice"];?>
</td>
</Tr>
<?php $ctotal= $r["cprice"]-$r["cbprice"]-$r["cdprice"];?>
<form method="post"  >
	<table class="table">
<Tr>
		<td>Expected Waiting Period</td>
		<td>
	<?php echo $r["cwp"];?>
</td>
</Tr>
<tr>
			<tD>
				 Color
			</tD>
			<td>
				<select name="color" class="form-control">
					<?php
						$q=mysqli_query($con,"select * from tblcolor");
						while ($r=mysqli_fetch_array($q)) {
							?>
							<option value="<?php echo $r['clrid'];?>"><?php echo $r["clrname"];?></option>
							<?php
						}
					?>
				</td>
			</tr>
			<tr>
			<tD>
				 Model
			</tD>
			<td>
				<select name="model" class="form-control">
					<?php
						$q=mysqli_query($con,"select * from tblmodel");
						while ($r=mysqli_fetch_array($q)) {
							?>
							<option value="<?php echo $r['mid'];?>"><?php echo $r["mname"];?></option>
							
							<?php
						}
					?>
				</td>
			</tr>
			
<?php
}

?>
<tr>
	<td></td>
	<td>
	<a href="cancel.php?bid=<?php echo $r['bid'];?>"> Cancel</a>
	</td>
	</tr>
<Tr>
	<td>
		Total Ammount To Be Paid
	</td>
	<td>
		<?php echo $fntotal;?>
	</td>
</Tr>
<tr>
	<Td colspan=3 align=center>
		<input type="submit" class="btn btn-success" value="CONTINUE TO PAY" name="btnctn"> </a>
	</Td>
</tr>
	</table>

</form>


</table>
</center></p>
  </div>
</div>
</div>
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
<?php require 'footer.php';?>
</body>
</html>