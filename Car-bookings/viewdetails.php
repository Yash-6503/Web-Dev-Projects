
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
	<br>

<center>
<div class="row">
<?php
$q=mysqli_query($con,"select * from tblcar where cid=".$_GET['id']);
while ($r=mysqli_fetch_array($q)) {
	?>
	<div class="col-md-3"></div>
	<div class="col-md-6">
	<div class="card">
  <img src="admin/<?php echo $r['cimg'];?>" class="card-img-top" alt="Fissure in Sandstone"/>
  <div class="card-body">
    <h5 class="card-title"><?php
	echo $r["cname"];?></h5>
	<center>
    <p class="card-text">
    	<form method="post">
    	<table class="table">
    		<tR>
    			
    				<?php echo $r['cddesc'];?>
    			    		</tR>
    				<tr>
    				<td >
    				Car Price
    			</td>
    			<td align=center> 
    				₹<?php echo $r['cprice'];?>/-
    			</td>
    		</tr>
    		
    		<tR>
    				<td >
    				Car Discount Price
    			</td>
    			<td align=center>
    				₹<?php echo $r['cdprice'];?>/-
    			</td>
    		</tR>
    		<tR>
    				<td >
    				Car Booking Price
    			</td>
    			<td align=center>
    				₹<?php echo $r['cbprice'];?>/-
    			</td>
    		</tR>
    			<tR>
    				<td >
    				Expected Waiting Period
    			</td>
    			<td align=center>
    				<?php echo $r['cwp'];?>
    			</td>
    		</tR>
    		<tr>
    			<Td align=center>
    				<a href="bookcar.php?id=<?php echo $r['cid'];?>"><input type="button" value="Book Car" name="" class="btn btn-success" ></a>
    			</Td>
    			<Td align=center >
    				
    		<a href="booktestride.php?id=<?php echo $r['cid'];?>"><input type="button" value="Book A Ride" name="" class="btn btn-success" ></a>

    		</Td>
    		</tr>
    	</table>
    </form>


    </p>
    </center>
  </div>
</div>
</div>
</center>
<?php
}

?>
<br>
	<br>
	<br>
	<br>
	<br>
<?php require 'footer.php';?>
</body>
</html>