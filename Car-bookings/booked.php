
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
<div class="row">
	<div class=" col-md-2"></div>
<div class="col-md-8">
	<center>
  <div class="card-body">
    <h5 class="card-title">YOUR BOOKINGS</h5>
    <br>
    <br>
    <p class="card-text">
    	
    	<table class="table table-striped rounded-5 shadow-5-strong p-5">
    	 <thead class="thead-dark">
<tr>
<th width="10%">BOOKING ID</th>
<th width="15%">Car</th>
<th width="20%">Expected Waiting Period</th>
<th width="10%">Booking Price</th>

</tr>
</thead>
<?php
$q=mysqli_query($con,"select * from tblbookings,tblcar where tblcar.cid=tblbookings.cid and tblbookings.status='1'and tblbookings.uid=".$_SESSION['uid']);
while ($r=mysqli_fetch_array($q)) {
	?>
	<Tr>
		
<td>
	<?php echo $r["bid"];?>
</td>
<td>
	<?php echo $r["cname"];?>
</td>
<td>
	<?php echo $r["cwp"];?>
</td>
<td>
	<?php echo $r["cbprice"];?>
</td>
</Tr>

<?php
}

?>

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