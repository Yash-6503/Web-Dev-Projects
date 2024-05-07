
<html>
<head>
	<title></title>
	<?php require 'head.php';?>
</head>
<body>

<?php require 'menu.php';?>
<table class="table">
	<tr>
		<td>Product Name</td>
		<td>Product Price</td>
		<td>Quantity</td>
	</tr>


<?php
$q=mysqli_query($con,"select * from tblcart,tblproduct where tblproduct.pid=tblcart.pid and tblcart.uid=".$_SESSION['uid']);
while ($r=mysqli_fetch_array($q)) {
	?>
	<Tr>
		<td>
	<?php echo $r["pname"];?>
</td>
<td>
	<?php echo $r["pdprice"];?>
</td>
<td>
	<?php echo $r["qty"];?>
</td>
<td>
	<?php echo $total= $r["qty"]*$r["pdprice"];$ftotal+=$total;?>
</td>
<td>
	<a href="cancel.php?cartid=<?php echo $r['cartid'];?>"> Cancel</a>
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
</table>
<?php require 'footer.php';?>
</body>
</html>