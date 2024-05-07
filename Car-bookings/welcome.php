
<html>
<head>
	<title></title>
	<?php require 'head.php';?>
</head>
<body p-5>
	<section class="" style="background-image: url(proimages/bg.jpg); background-repeat: no-repeat;background-size: cover;">
<style>
	.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>
<?php require 'menu.php';?>
<br>
	<br>
	<br>
	<div id="" style="text-align:center;padding:50px 80px;text-align: justify;">
	

<div class="row ">
	
<?php
$q=mysqli_query($con,"select * from tblcar");
while ($r=mysqli_fetch_array($q)) {
	?>
	
	<div class="col-md-4">
	<div class="card rounded-5 shadow-5-strong ">
  <img src="admin/<?php echo $r['cimg'];?>" class="card-img-top" style =" padding: 10px 10px 10px 10px;"alt="Fissure in Sandstone"/>
  <div class="card-body">
  	<center>
    <h5 class="card-title"><?php
	echo $r["cname"];?></h5>
    <p class="card-text">
    	<table class="table">
    		<tR>
    			<td>
    				Car Price
    			</td>
    			<td>
    				₹<?php echo $r['cprice'];?>/-
    			</td>
    		</tR>
    		<tR>
    			<td>
    				Car Discount Price
    			</td>
    			<td>
    				₹<?php echo $r['cdprice'];?>/-
    			</td>
    		</tR>
    	</table>


    </p>
    <a href="viewdetails.php?id=<?php echo $r['cid'];?>" class="btn btn-primary">View Details</a>
  </center>
  </div>
</div>
<br>
	<br>
	

</div>

<?php
}

?>
</div>

</div>

<?php require 'footer.php';?>
</body>
</html>