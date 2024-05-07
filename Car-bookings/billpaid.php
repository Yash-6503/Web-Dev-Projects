
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
<div class="row">

<div class="col-md-5">
	</div>
<div class="card col-md-3">

  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
  	<br>
  	<center>
    <img src="proimages/tick.png" style= "width: 200px" class="img-fluid"/>
    </center>
    <br>
	<br>
	
  </div>
  <div class="card-body"><table class="table">
  	<center>
    <h5 class="card-title">BILL PAID!!!</h5>
    
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
	
<table class="table">
<?php
$q=mysqli_query($con,"select * from tblbookings,tblcar,tblmodel,tblcolor where tblcar.cid=tblbookings.cid and tblmodel.mid=tblbookings.mid and tblcolor.clrid=tblbookings.clrid and tblbookings.bid=".$_GET['bid']" and tblbookings.uid=".$_SESSION['uid']);
while ($r=mysqli_fetch_array($q)) {
	?>
	<Tr>
		<td>Car Name</td>
		<td>
	<?php echo $r["cname"];?>
</td>
</Tr>
<Tr>
	<?php $total= $r["cprice"]+$r["mprice"];?>
	<Tr>
		<td>Car Price</td>
		<td>
	<?php echo $total;?>
</td>
</Tr>
<td>Car Bookings Price</td>
<td>
	<?php echo $r["cbprice"];?>
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

<?php
}?>
    <tr>
    	<br>
	<br>
	
			<td colspan=2 align=center>
    <p>Back to Home Page ? <a href="index.php">Home</a></p>
    		</td>
		</tr>
    </center>
  </table>
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