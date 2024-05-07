
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
if(isset($_POST['btnconfirmtestride'])){
	extract($_POST);
	mysqli_query($con,"update tbltestride set status='1' where uid=".$_SESSION['uid']);
	header("location:testridesuccess.php");
}

?>
<div class="row">
	<?php
$q=mysqli_query($con,"select count(*) as totaluser from tbltestride where tbltestride.status='0'");
$r=mysqli_fetch_array($q);
if ($r['totaluser']>0){

?>
	<div class=" col-md-3"></div>
<div class="card col-md-6">
	<center>
  <div class="card-body">
    <h5 class="card-title">CONFIRM TESTRIDE</h5>
    <p class="card-text"><table class="table">
<?php
$q=mysqli_query($con,"select * from tbltestride,tblcar,tblmodel where tblcar.cid=tbltestride.cid and tblmodel.mid=tbltestride.mid and tbltestride.status='0' and tbltestride.uid=".$_SESSION['uid']);
while ($r=mysqli_fetch_array($q)) {
	?>
	<td>Test Ride ID</td>
<td>
	<?php echo $r["tid"];?>
</td>

	

	<Tr>
		<td>Car Name</td>
		<td>
	<?php echo $r["cname"];?>
</td>
</Tr>
<Tr>
		<td>Car Model</td>
		<td>
	<?php echo $r["mname"];?>
</td>
</Tr>
<Tr>
<td>Date</td>
<td>
	<?php echo $r["date"];?>
</td>
</Tr>
	
<tr>
	<td></td>
	<td>
	<a href="tcancel.php?tid=<?php echo $r['tid'];?>"> Cancel</a>
	</td>
	</tr>
<?php
}

?>

<form method="post">
<table>
	<button type="submit" name="btnconfirmtestride" class="btn btn-primary">CONFIRM</button>
</table>
</form>
</table>
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