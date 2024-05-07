-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2022 at 01:48 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carbookings`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblbookings`
--

CREATE TABLE `tblbookings` (
  `bid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `clrid` int(11) NOT NULL,
  `mid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblbookings`
--

INSERT INTO `tblbookings` (`bid`, `cid`, `clrid`, `mid`, `uid`, `status`) VALUES
(1, 1, 2, 3, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblcar`
--

CREATE TABLE `tblcar` (
  `cid` int(11) NOT NULL,
  `cprice` bigint(20) NOT NULL,
  `cbprice` int(11) NOT NULL,
  `cdprice` bigint(20) NOT NULL,
  `cname` varchar(20) NOT NULL,
  `cwp` varchar(10) NOT NULL,
  `cimg` text NOT NULL,
  `cddesc` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblcar`
--

INSERT INTO `tblcar` (`cid`, `cprice`, `cbprice`, `cdprice`, `cname`, `cwp`, `cimg`, `cddesc`) VALUES
(1, 1000000, 5000, 20000, 'Xuv300', '3 month', 'uploads/mxuv300.jpg', 'The Mahindra XUV300 is a subcompact crossover modern SUV.\r\nPropulsion duties are carried out by a 1.2-litre turbo-petrol (110PS/200Nm) and a 1.5-litre diesel engine (117PS/300Nm).\r\nIt is equipped with a sunroof, cruise control, and a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay. It also gets rain-sensing wipers, auto AC, and connected car tech.\r\nSafety features onboard consist of up to seven airbags, corner braking control, and front and rear parking sensors.'),
(2, 1500000, 5000, 30000, 'Xuv700', '12 months', 'uploads/mxuv700.jpg', 'The Mahindra XUV700 is a compact crossover modern SUV .\r\nXuv 700 gets the choice of a 200PS/380Nm 2-litre turbo-petrol and a 2.2-litre diesel with an output of up to 185PS/450Nm. Both the units are coupled with standard 6-speed manual. It also gets the option of an all-wheel drivetrain.\r\nThe features list comprises a 10.25-inch touchscreen infotainment system, a 10.25-inch digital driver’s display, panoramic sunroof, dual-zone climate control, and a 360-degree camera.\r\nThe SUV gets numerous Advanced Driver-Assistance Systems (ADAS) including emergency autonomous braking, lane keeping assist, and adaptive cruise control. Other safety features consist of seven airbags and an electronic parking brake.'),
(3, 1800000, 5000, 50000, 'Thar', '8 months', 'uploads/mthar.jpg', 'The Mahindra Thar is a compact, four-wheel drive, off-road modern SUV.\r\nThe Thar comes with both petrol and diesel engine options: a 2-litre turbocharged petrol unit (150PS/up to 320Nm) and a 2.2-litre diesel engine (130PS/300Nm). Both units are paired to a 6-speed manual. Being a proper off-roader, it gets 4X4 with both the powertrains.\r\n Mahindra has equipped it with cruise control, a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, halogen headlamps with LED DRLs, electrically operated AC, steering-mounted controls, and a digital MID in the instrument cluster. It also gets a washable interior and removable roof panels.\r\n'),
(4, 900000, 2000, 50000, 'Balero neo', '3 month', 'uploads/boleroneo.jpg', 'The Mahindra Bolero is a modern SUV.\r\n It gets a 1.5-litre unit paired to a 5-speed manual with an output of 100PS and 260Nm. It also gets a mechanical locking differential.\r\nFeatures on offer include a 7-inch touchscreen infotainment system cruise control, a height-adjustable driver seat and keyless entry.'),
(5, 1800000, 10000, 40000, 'Scorpio Neo', '12 months', 'uploads/scorpio.jpg', 'The Mahindra Scorpio is a modern mid-size SUV\r\nThe new-gen SUV has both petrol and diesel unit options. While the 2.2-litre diesel engine is available in two states of tune: 132PS/300Nm and 175PS (370Nm and 400Nm), the 2-litre turbo-petrol has an output of 200PS (370Nm and 380Nm).\r\nAll the powertrains are rear-wheel drive as standard.\r\n It is packed with an 8-inch touchscreen infotainment system, dual-zone climate control, cruise control, wireless phone charging, and a 360-degree camera. It also has steering-mounted controls, a non-panoramic sunroof, and a semi-digital instrument cluster.\r\nPassenger safety is ensured by multiple airbags, a rear parking camera, hill assist control, and electronic stability control.'),
(6, 1100000, 5000, 70000, 'Marazzo', '10 months', 'uploads/marazo.jpg', 'The Mahindra Marazzo is a compact MPV.\r\n Under the hood is a 1.5-litre diesel engine (122PS/300Nm) and 1.2-litre petrol engine (110PS/250Nm) paired with a 6-speed manual. There’s also an ‘Eco’ mode that reduces the engine output to a modest 100PS.\r\nThe MPV packs a 7-inch touchscreen infotainment system with Android Auto and Apple CarPlay, and auto climate control. The Marazzo also gets 17-inch alloy wheels and remote keyless entry.\r\nSafety of the passenger is taken care of by dual front airbags, ABS with EBD, and ISOFIX child seat anchors.');

-- --------------------------------------------------------

--
-- Table structure for table `tblcolor`
--

CREATE TABLE `tblcolor` (
  `clrid` int(11) NOT NULL,
  `clrname` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblcolor`
--

INSERT INTO `tblcolor` (`clrid`, `clrname`) VALUES
(4, 'Aqua Marine'),
(2, 'Matte Black'),
(1, 'Pearl White'),
(3, 'Red Rage');

-- --------------------------------------------------------

--
-- Table structure for table `tblmodel`
--

CREATE TABLE `tblmodel` (
  `mid` int(11) NOT NULL,
  `mname` varchar(20) NOT NULL,
  `mprice` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblmodel`
--

INSERT INTO `tblmodel` (`mid`, `mname`, `mprice`) VALUES
(1, 'Petrol-W4', 0),
(2, 'Diesel-W4', 100000),
(3, 'Petrol-W6', 200000),
(4, 'Diesel-W6', 280000),
(5, 'Petrol-W8', 400000),
(6, 'Diesel-W8', 590000);

-- --------------------------------------------------------

--
-- Table structure for table `tblservices`
--

CREATE TABLE `tblservices` (
  `sid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `sname` varchar(20) NOT NULL,
  `sdesc` text NOT NULL,
  `cnp` varchar(10) NOT NULL,
  `sprice` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblservices`
--

INSERT INTO `tblservices` (`sid`, `uid`, `sname`, `sdesc`, `cnp`, `sprice`, `status`) VALUES
(1, 1, 'Regular', 'tire repair,wash', 'mh15hm8015', 2000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbltestride`
--

CREATE TABLE `tbltestride` (
  `tid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `mid` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbltestride`
--

INSERT INTO `tbltestride` (`tid`, `uid`, `cid`, `mid`, `date`, `status`) VALUES
(1, 1, 2, 5, '2022-06-30', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `uid` int(11) NOT NULL,
  `uname` varchar(20) NOT NULL,
  `upass` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbluser`
--

INSERT INTO `tbluser` (`uid`, `uname`, `upass`, `email`, `gender`, `phone`, `address`) VALUES
(1, 'Gaurav Bhamare', 'gaurav', 'gauravbhamare33@gmail.com', 'Male', 9922832133, 'Row house no 1, survey no 250/1/5, Ambaji nagar,behind varad vinayak ganesh mandir, panchavati,Nashik-422003');

-- --------------------------------------------------------

--
-- Table structure for table `tlbadmin`
--

CREATE TABLE `tlbadmin` (
  `aid` int(11) NOT NULL,
  `aemail` varchar(20) NOT NULL,
  `apass` varchar(20) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tlbadmin`
--

INSERT INTO `tlbadmin` (`aid`, `aemail`, `apass`, `phone`, `address`) VALUES
(1, 'admin@gmail.com', 'admin@123', 9922832133, 'abc');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblbookings`
--
ALTER TABLE `tblbookings`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `tblcar`
--
ALTER TABLE `tblcar`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `tblcolor`
--
ALTER TABLE `tblcolor`
  ADD PRIMARY KEY (`clrid`),
  ADD UNIQUE KEY `clrname` (`clrname`);

--
-- Indexes for table `tblmodel`
--
ALTER TABLE `tblmodel`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `tblservices`
--
ALTER TABLE `tblservices`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `tbltestride`
--
ALTER TABLE `tbltestride`
  ADD PRIMARY KEY (`tid`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `tlbadmin`
--
ALTER TABLE `tlbadmin`
  ADD PRIMARY KEY (`aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblbookings`
--
ALTER TABLE `tblbookings`
  MODIFY `bid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tblcar`
--
ALTER TABLE `tblcar`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tblcolor`
--
ALTER TABLE `tblcolor`
  MODIFY `clrid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tblmodel`
--
ALTER TABLE `tblmodel`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tblservices`
--
ALTER TABLE `tblservices`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbltestride`
--
ALTER TABLE `tbltestride`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbluser`
--
ALTER TABLE `tbluser`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tlbadmin`
--
ALTER TABLE `tlbadmin`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
