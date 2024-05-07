
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
	<br>
	<br>
		<div class="row row-cols-1 row-cols-md-3 g-4">

			<div class="col-md-4"></div>
<?php
$q=mysqli_query($con,"select * from tblcar where cid=".$_GET['id']);
while ($r=mysqli_fetch_array($q)) {
	?>
		<div class="card mb-3" style=>
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="admin/<?php echo $r['cimg'];?>" class="card-img-top" alt="Fissure in Sandstone"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><?php
	echo $r["cname"];?></h5>
        <p class="card-text">
          <form method="post">
    	<table class="table">
    				<tr>
    				<td>
    				Car Price
    			</td>
    			<td>
    				₹<strike><?php echo $r['cprice'];?></strike>/-
    			</td>
    		</tr>
    		
    		<tR>
    				<td>
    				Car Discount Price
    			</td>
    			<td>
    				₹<?php echo $r['cdprice'];?>/-
    			</td>
    		</tR>
    		<tR>
    				<td>
    				Car Booking Price
    			</td>
    			<td>
    				₹<?php echo $r['cbprice'];?>/-
    			</td>
    		</tR>
    		<tr>
    			<Td>
    				<input type="submit" name="btnbookcar" value="Book Now" class="btn btn-success">
    			</Td>
    			<Td>
    				
    		<a href="booktestride.php?id=<?php echo $r['cid'];?>"><input type="button" value="Book A Ride" name="" class="btn btn-success" ></a>

    		</Td>
    		</tr>
    	</table>
    </form>
        </p>
      </div>
    </div>
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
<?php
}
?>
<?php require 'footer.php';?>

</body>
</html>