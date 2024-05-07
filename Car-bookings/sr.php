
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
	<?php
if(isset($_POST['btnpays'])){
    extract($_POST);
    mysqli_query($con,"update tblservices set status='1' where uid=".$_SESSION['uid']);
    header("location:servicesuccess.php");
}

?>
	<div class=" col-md-3"></div>
<div class=" col-md-7	">
	<center>
  <div class="card-body">
    <h5 class="card-title">YOUR SERVICES</h5>
    <p class="card-text"><table class="table table-striped">

	<thead class="thead-dark">
        <tr><br></tr>
<tr>
<th width="15%">SERVICE ID</th>

<th width="20%">SERVICE NAME</th>
<th width="15%">DESCRIPTION</th>
<th width="20%">CAR NUMBER PLATE</th>
<th width="10%">SERVICE PRICE</th>
</tr>
</thead>
 <?php
$q=mysqli_query($con,"select * from tblservices,tbluser where tbluser.uid=tblservices.uid and tblservices.status='0' and tbluser.uid=".$_SESSION['uid']);

while ($r=mysqli_fetch_array($q)) {
?>  
	
	<Tr>
        <td>
    <?php echo $r["sid"];?>
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
<?php $total= $r["sprice"];$ftotal+=$total;?>

<?php
}

?>
<Tr>
    <td colspan="4">
        Total:
    </td>
    <td>
        ₹<?php echo $ftotal;?>/-
    </td>
</Tr>
</table>
</center>
<form method="post">
<table>
    <center>
    <button type="submit" name="btnpays" class="btn btn-primary">PAY</button>
</center>
</table></form>

</p>
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