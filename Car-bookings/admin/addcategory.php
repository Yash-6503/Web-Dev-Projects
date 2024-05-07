
<html>
<head>
	<title></title>
	<?php require 'head.php';?>
</head>
<body>
<?php require 'menu.php';?>
<?php
if(isset($_POST["btnsave"])){
	extract($_POST);
	mysqli_query($con,"insert into tblcategory(cname)values('$txtcname')");
}

?>
<form method="post">
	<table class="table">
		<tr>
			<tD>
				Category Name
			</tD>
			<td>
				<input type="text" class="form-control" name="txtcname">
			</td>
		</tr>
		<tr>
			<td>
				<input type="submit" class="btn btn-success" name="btnsave" value="Add Category">		
			</td>
		</tr>
	</table>
</form>
	</table>
<?php require 'footer.php';?>
</body>
</html>