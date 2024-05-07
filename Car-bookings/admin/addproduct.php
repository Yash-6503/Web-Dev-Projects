
<html>
<head>
	<title></title>
	<?php require 'head.php';?>
</head>
<body>
<?php require 'menu.php';?>
<?php
if(isset($_POST["btnaddproduct"])){
	extract($_POST);
	mysqli_query($con,"insert into tblproduct(pname,pprice,pdprice,pdesc,pimage,cid)values('$txtpname','$txtpprice','$txtpdprice','$txtpdesc','$txtpimage','$cmbcategory')");
}

?>
<div class="row">
	<div class="col-md-3"></div>
	<div class="col-md-6">
<form method="post">
	<table class="table">
		<tr>
			<tD>
				 Car Name
			</tD>
			<td>
				<input type="text" class="form-control" name="txtpname">
			</td>
		</tr>
		<tr>
			<tD>
				Product Price
			</tD>
			<td>
				<input type="text" class="form-control" name="txtpprice">
			</td>
		</tr>
		<tr>
			<tD>
				Product Discount Price
			</tD>
			<td>
				<input type="text" name="txtpdprice" class="form-control">
			</td>
		</tr>
		<tr>
			<tD>
				Product Description
			</tD>
			<td>
				<textarea name="txtpdesc" class="form-control"></textarea>
			</td>
		</tr>
		<tr>
			<tD>
				Product Image
			</tD>
			<td>
				<input type="file"  name="txtpimage">
			</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<input type="submit" class="btn btn-warning" name="btnaddproduct" value="Add Product">		
			</td>
		</tr>
	</table>
</form>
</div>
<?php require 'footer.php';?>
</body>
</html>