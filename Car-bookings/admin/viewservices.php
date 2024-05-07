
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
<div class="row">
	<div class=" col-md-2"></div>
<div class="card col-md-8">
	<center>
  <div class="card-body">
  	<h2></h2>	
    <h5 class="card-title">SERVICES</h5>
<table class="table table-striped">
	<thead class="thead-dark">
		<tr><br></tr>
<tr>
<th width="15%">SERVICE ID</th>
<th width="15%">NAME</th>
<th width="20%">SERVICE NAME</th>
<th width="15%">DESCRIPTION</th>
<th width="20%">CAR NUMBER PLATE</th>
<th width="10%">SERVICE PRICE</th>
</tr>
</thead>
	
<?php
$q=mysqli_query($conn,"select * from tblservices,tbluser where tbluser.uid=tblservices.uid");
while ($r=mysqli_fetch_array($q)) {
	?>
	<Tr>
		<td>
	<?php echo $r["sid"];?>
</td>
		<td>
	<?php echo $r["uname"];?>
</td>
<td>
	<?php echo $r["sname"];?>
</td>
<td>
	<?php echo $r["sdesc"];?>
</td>
<td>
	<?php echo $r["cnp"];?>
</td>
<td>
	₹<?php echo $r['sprice'];?>/-
</td>
</Tr>
<?php
}

?>

</table></center></p>
  </div>
</div>
</div>
<br>
<br>
<br>
<br>
<br>
<input type="button" onclick="print()" name="" value="Print"><br>
<?php require 'footer.php';?>
</body>
</html>