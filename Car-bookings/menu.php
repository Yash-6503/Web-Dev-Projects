<nav class="navbar fixed-top navbar-expand-lg navbar-dark ">
  <style>
    .navbar-dark{
        background: rgba(0, 0, 0,.3);
    }
   

  </style>
  <div class="container-fluid">
    <a class="navbar-brand" href="index.php">Car Bookings.com</a>
    <div class="collapse navbar-collapse" id="navbarRightAlignExample">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto">
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
    
        
        <?php
        if($_SESSION['uid']==null){
          ?>
           <li class="nav-item">
          <a class="nav-link" href="register.php">Sign Up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="login.php">Sign In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="admin/login.php">ADMIN</a>
        </li>
          <?php
        }  
       else{
        ?>
        <li class="nav-item">
          <a class="nav-link" href="welcome.php">View Cars</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="viewservices.php">View Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="booked.php">Your Bookings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="viewtestride.php">Your Test Rides</a>
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
</div>
</nav>