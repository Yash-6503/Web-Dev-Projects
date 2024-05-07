
<html>
<head>
	<title></title>
	<?php require 'head.php';?>

</head>
<body>


<?php
if(isset($_POST['btnregister'])){
	extract($_POST);
	mysqli_query($con,"insert into tbluser(uname,upass,email,phone,address,gender)values('$txtname','$txtpass','$txtemail','$txtphone','$txtaddress','$rbgender')");
	header("location:signupsuccess.php");
}

?>
<?php require 'menu.php';?>
<section class="" style="background-image: url(proimages/rbackground.jpg); background-repeat: no-repeat;background-size: cover;">
<br>
<br>
<br>
<br>


<div class="row">

	<div class="col-md-7">
	</div>
	<div class="col-md-4	">
 
<form method="post">
	<table class="  table bg-white  rounded-5 shadow-5-strong p-5" >
		<tr>
			<td colspan=2 align=center>
				
				CUSTOMER SIGNUP
				<br>
			</td>
		</tr>
		<tr>
			<td>
				Name
			</td>
			<td>
				<input type="text" class="form-control" placeholder="Enter Letters Only" pattern="[a-zA-Z][a-zA-Z\s]*" name="txtname" required>
			</td>
		</tr>
		<tr>
			<td>
				Password
			</td>
			<td>
				<input type="password" class="form-control" placeholder="Enter Password"name="txtpass" required>
			</td>
		</tr>
		<tr>
			<td>
				Gender
			</td>
			<td>
				<input type="radio" checked name="rbgender" value="Male">Male
				<input type="radio" name="rbgender" value="Female">Female
			</td>
		</tr>
		<tr>
			<td>
				Email
			</td>
			<td>
				<input type="email" class="form-control" pattern="[a-z]+[0-9]*@[a-z]+[0-9]*\.[a-z]{2,3}" placeholder="Enter Valid Email Format" name="txtemail" required>
			</td>
		</tr>
		<tr>
			<td>
				Phone
			</td>
			<td>
				<input type="text" class="form-control" pattern="[0-9]{10}" name="txtphone" placeholder="Enter Numbers Only" required>
			</td>
		</tr>
		<tr>
			<td>
				Address
			</td>
			<td>
				<textarea name="txtaddress" class="form-control" placeholder="Enter Address" required></textarea>
			</td>
		</tr>
		
		<tR>
			<Td align="center" colspan=2>
				<input type="submit" class="btn btn-dark" name="btnregister" value="Sign Up">
			</Td>
		</tR>
	</table>
</form>
    
  </div>
  
</div>


	<div class="col-md-3">
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