
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
<br>
<br>
<div class="row">
    <?php
$q=mysqli_query($con,"select count(*) as totaluser from tblservices where tblservices.status='0'");
$r=mysqli_fetch_array($q);
if ($r['totaluser']>0){

?>

    
<?php
if(isset($_POST['btnpays'])){
    extract($_POST);
    mysqli_query($con,"update tblservices set status='1' where uid=".$_SESSION['uid']);
    header("location:servicesuccess.php");
}

?>
    <div class=" col-md-2"></div>
<div class="card col-md-8">
    <center>
  <div class="card-body">
    <h2></h2>   
    <h5 class="card-title">YOUR SERVICES</h5>
<table class="table table-striped">
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
</table></center>
<form method="post">
<table>
    <center>
    <button type="submit" name="btnpays" class="btn btn-primary">PAY</button>
</center>
</table></p>
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
        
            <h1 class="text-center">YOU DONT HAVE ANY PENDING SERVICES</h1>
            <p class="text-center"> </p>
          
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

<input type="button" onclick="print()" name="" value="Print"><br>
<?php require 'footer.php';?>
</body>
</html>