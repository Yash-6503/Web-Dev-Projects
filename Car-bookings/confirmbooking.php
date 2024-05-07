
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
	mysqli_query($con,"update tblbookings set status='1' where uid=".$_SESSION['uid']);
	header("location:paid.php");
}

?>
<div class="row">
	<?php
$q=mysqli_query($con,"select count(*) as totaluser from tblbookings where tblbookings.status='0'");
$r=mysqli_fetch_array($q);
if ($r['totaluser']>0){

?>
	<div class=" col-md-3"></div>
<div class="card col-md-6">
	<center>
  <div class="card-body">
    <h5 class="card-title">CONFIRM BOOKING</h5>
    <p class="card-text">
    	<table class="table">
<?php
$q=mysqli_query($con,"select * from tblbookings,tblcar,tblmodel,tblcolor where tblcar.cid=tblbookings.cid and tblmodel.mid=tblbookings.mid and tblcolor.clrid=tblbookings.clrid and tblbookings.status='0' and tblbookings.uid=".$_SESSION['uid']);
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

<Tr>
		<td>Expected Waiting Period</td>
		<td>
	<?php echo $r["cwp"];?>
</td>
</Tr>
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
		<?php echo $r["cbprice"];?>
	</td>
</Tr>
<?php
}

?>

	</table>



<form method="post">
<table>
	<button type="submit" name="btnctn" class="btn btn-primary">PAY</button>
</table>
</form>



</center></p>
  </div>
</div>
<?php
    }
    else{
                ?>
            <div class=" col-md-2"></div>
    <div class="card col-md-8">
        <center>
      <div class="card-body">
        <h2></h2>   
        		<br>
        		<br>

            <h1 class="text-center">Kindly Select A Car Before Confirming</h1>
            <tr>
    	<br>
	<br>
	
			<td colspan=2 align=center>
    <p>See available cars? <a href="welcome.php">Click Here</a></p>
    		</td>
		</tr>
          
    </center>
    </div>
        </div>
                <?php
            }  
    ?>
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