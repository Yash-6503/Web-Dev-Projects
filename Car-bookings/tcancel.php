<?php
require 'head.php';
mysqli_query($con,"delete from tbltestride where tid=".$_GET["tid"]);
header("location: confirmtestride.php");
?>