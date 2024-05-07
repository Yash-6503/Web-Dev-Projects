<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
  <style>
    .navbar-dark{
        background: rgba(0, 0, 0,.3);
    }
   

  </style>
  <div class="container-fluid">
    <a class="navbar-brand" href="\carbookings\index.php">Car Bookings.com</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        </li>
        <?php
        if($_SESSION['aid']==null){
          ?>
        <li class="nav-item">
          <a class="nav-link" href="login.php">Sign In</a>
        </li>
          <?php
        }  
       else{
        ?>
         <li class="nav-item">
          <a class="nav-link" href="addcar.php">Add Car</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="addservice.php">Add Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="addcolor.php">Add Color</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="addmodel.php">Add Model</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="reports.php">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="viewservices.php">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="logout.php">Logout</a>
        </li>
        <?php
       }
       ?>
      </ul>
      
    </div>
  </div>
</nav>