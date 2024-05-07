
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
if(isset($_POST['btnpay'])){
	extract($_POST);
	mysqli_query($con,"update tblbookings set status='1' where uid=".$_SESSION['uid']);
	header("location:paid.php");
}

?>


<div class="row">
	<div class="col-md-4"></div>
<div class="card col-md-4">
  <center>
  <div class="card-body">

    <h5 class="card-title">BILL</h5>
    <p class="card-text"><table class="table">
	<Tr>
		<TD>
			User name
		</TD>
		<td>
			<?php echo $_SESSION['uname'];?>
		</td>
	</Tr>
	<Tr>
		<td>
			Address
		</td>
		<td>
			<?php echo $_SESSION['address'];?>
		</td>
	</Tr>
	<Tr>
		<td>
			Phone
		</td>
		<td>
			<?php echo $_SESSION['phone'];?>
		</td>
	</Tr>
	
<?php
$q=mysqli_query($con,"select * from tblbookings,tblcar,tblmodel,tblcolor where tblcolor.clrid=tblbookings.clrid and tblmodel.mid=tblbookings.mid and tblcar.cid=tblbookings.cid and tblbookings.status='0' and tblbookings.uid=".$_SESSION['uid']);
while ($r=mysqli_fetch_array($q)) {
	?>
	<Tr>
		<td>Car Name</td>
		<td>
	<?php echo $r["cname"];?>
</td>
</Tr>
<Tr>
		<td>Color</td>
		<td>
	<?php echo $r["clrname"];?>
</td>
</Tr>
<Tr>
		<td>Model</td>
		<td>
	<?php echo $r["mname"];?>
</td>
</Tr>
<Tr>
		<td>Model</td>
		<td>
	<?php echo $r["mprice"];?>
</td>
</Tr>
<Tr>
		<td>Expected Waiting Period</td>
		<td>
	<?php echo $r["cwp"];?>
</td>
</Tr>
<tr>
	
	<?php $ctotal= $r["cprice"]-$r["cbprice"]-$r["cdprice"];?>
	<?php $fntotal= $ctotal+$r["mid"."mprice"];?>
	<Tr>
		<td>Total Car Price</td>
		<td>
	<?php echo $fntotal;?>
</td>
</Tr>
	<td>Car Booking  Price</td>
<td>
	<?php echo $r["cbprice"];?>
</td>

</Tr>
<?php $total= $r["cbprice"];$ftotal+=$total;?>
<?php
}

?>
<Tr>
	<td>
		Bill
	</td>
	<td>
		<?php echo $ftotal;?>
	</td>
</Tr>
</table>
<form method="post">
<table>
	<button type="submit" name="btnpay" class="btn btn-primary">PAY</button>
</table>
</form></p>
    
  </center>
  </div>

</div>
</div>
<br>
	<br>
	<br>
	<br>
	<input type="button" value="Print" onclick="print()" name="">
<?php require 'footer.php';?>
</body>
</html>