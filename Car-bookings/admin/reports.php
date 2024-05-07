
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
    <h5 class="card-title">USERS</h5>
<table class="table table-striped">
	<thead class="thead-dark">
		<tr><br></tr>
<tr>
	
<th width="15%">NAME</th>
<th width="15%">ADDRESS</th>
<th width="15%">EMAIL</th>
<th width="15%">PHONE</th>
</tr>
</thead>
	
<?php
$q=mysqli_query($conn,"select * from tbluser");
while ($r=mysqli_fetch_array($q)) {
	?>
	<Tr>
		<td>
	<?php echo $r["uname"];?>
</td>
<td>
	<?php echo $r["address"];?>
</td>
<td>
	<?php echo $r["email"];?>
</td>
<td>
	<?php echo $r["phone"];?>
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
<input type="button" onclick="print()" name="" value="Print"><br>
<?php require 'footer.php';?>
</body>
</html>