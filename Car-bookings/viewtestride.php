
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
	<div class=" col-md-3"></div>
<div class=" col-md-6	">
	<center>
  <div class="card-body">
    <h5 class="card-title">TEST RIDES BOOKING</h5>
    <br>
    <p class="card-text"><table class="table table-striped">

	<thead class="thead-dark">
<tr>
	
<th width="15%">Test Ride Id</th>
<th width="15%">Car</th>
<th width="15%">Model</th>
<th width="15%">Date</th>

</tr>
</thead>
<?php
$q=mysqli_query($con,"select * from tbltestride,tblcar,tblmodel where tblcar.cid=tbltestride.cid and tblmodel.mid=tbltestride.mid and tbltestride.status='1' and tbltestride.uid=".$_SESSION['uid']);
while ($r=mysqli_fetch_array($q)) {
	?>
	
	<Tr>
		<td >
	<?php echo $r["tid"];?>
</td>
		<td >
	<?php echo $r["cname"];?>
</td>
<td >
	<?php echo $r["mname"];?>
</td>
<td >
	<?php echo $r["date"];?>
</td></Tr>

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
<br>
<?php require 'footer.php';?>
</body>
</html>