
<html>
<head>
	<title></title>
	<?php require 'head.php';?>
</head>
<body>

<?php require 'menu.php';?>
<table class="table">
	<tr>
		<td>Car Name</td>
		<td>Car Bookings Price</td>
	</tr>


<?php
$q=mysqli_query($conn,"select * from tblbookings,tblcar where tblcar.cid=tblbookings.cid and tblbookings.uid=".$_SESSION['uid']);
while ($r=mysqli_fetch_array($q)) {
	?>
	<Tr>
		<td>
	<?php echo $r["cname"];?>
</td>
<td>
	<?php echo $r["cbprice"];?>
</td>
<td>
	<?php echo $total= $r["cbprice"];$ftotal+=$total;?>
</td>
</Tr>
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
<tr>
	<Td>
		<a href="bill.php"><input type="button" class="btn btn-success" value="Pay Bill" name=""> </a>
	</Td>
</tr>
</table>
<?php require 'footer.php';?>
</body>
</html>