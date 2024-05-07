<?php
require 'head.php';
mysqli_query($con,"delete from tblbookings where bid=".$_GET["bid"]);
header("location: confirmbooking.php");
?>