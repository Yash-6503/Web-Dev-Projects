
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
<?php
if(isset($_POST["btnbookcar"])){
extract($_POST);
mysqli_query($con,"insert into tblbookings(cid,clrid,mid,uid,status)values('".$_GET["id"]."','$color','$model','".$_SESSION['uid']."','0')");
header("location: confirmbooking.php");
}
?>
<center>
<div class="row">
  <?php
$q=mysqli_query($con,"select count(*) as totaluser from tblbookings where tblbookings.uid=".$_SESSION['uid']);
$r=mysqli_fetch_array($q);
if ($r['totaluser']<3){

?>
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
      <table class="table ">
        <Tr>
<td>Discount Price</td>
<td>
  <?php echo $r["cdprice"];?>
</td>
</Tr>
        <Tr>
<td>Car Bookings Price</td>
<td>
  <?php echo $r["cbprice"];?>
</td>
</Tr>
<Tr>
<td>Expected Waiting Period</td>
<td>
  <?php echo $r["cwp"];?>
</td>
</Tr>
<tr>
      <tD>
         Color
      </tD>
      <td>
        <select name="color" class="form-control">
          <?php
            $q=mysqli_query($con,"select * from tblcolor");
            while ($r=mysqli_fetch_array($q)) {
              ?>
              <option value="<?php echo $r['clrid'];?>"><?php echo $r["clrname"];?></option>
              <?php
            }
          ?>
        </td>
      </tr>
      <tr>
      <tD>
         Model
      </tD>
      <td>
        <select name="model" class="form-control">
          <?php
            $q=mysqli_query($con,"select * from tblmodel");
            while ($r=mysqli_fetch_array($q)) {
              ?>
              <option value="<?php echo $r['mid'];?>"><?php echo $r["mname"];?></option>
              
              <?php
            }
          ?>
        </td>
      </tr>


        <tr>
          <Td >
            <input type="submit" name="btnbookcar" value="Book Car" class="btn btn-success">
          </Td>
        </tr>
      </table>
    </form>



    </p>
    </center>
  </div>
</div>
<?php
}
}
else{
            ?>
        <div class=" col-md-2"></div>
<div class="card col-md-8">
    <center>
  <div class="card-body">
    <h2></h2>   
    
        <h2 class="text-center">MAXIMUM BOOKINGS REACHED</h2>
        <br>
        <br>
        <p class="text-center"> <h8 class="">Note: Maximum 3 cars can be booked from an Account</h8> </p>
      
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
<?php require 'footer.php';?>
</body>
</html>