
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
if(isset($_POST["btnbooktestride"])){
extract($_POST);
mysqli_query($con,"insert into tbltestride(cid,uid,mid,date,status)values('".$_GET["id"]."','".$_SESSION['uid']."','$model','$txtdate','0')");
header("location: confirmtestride.php");
}
?>
<center>
<div class="row">
  <?php
$q=mysqli_query($con,"select count(*) as totaluser from tbltestride where tbltestride.uid=".$_SESSION['uid']);
$r=mysqli_fetch_array($q);
if ($r['totaluser']<5){

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
        <tR>
          <tD>
        Select Date
      </tD>
          <td>
            <input type="date" class="form-control" name="txtdate" required>
          </td>
        </tR>
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
          <Td>
            <input type="submit" name="btnbooktestride" value="Book Test Ride" class="btn btn-success">
          </Td>
        </tr>
      </table>
    </form>



    </p>
    <p class="text-center"> <h8 class="">Note:Test Rides will be carried During 10 am - 5 pm</h8> </p>
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
        <p class="text-center"> <h8 class="">Note: Maximum 5 Test Rides can be booked from an Account</h8> </p>
      
</center>
</div>
    </div>
            <?php
        }  
?>
</div>


<div class="row"><br>
  <br>
  <br>
  <br>
  <br></div>
<?php require 'footer.php';?>
</body>
</html>