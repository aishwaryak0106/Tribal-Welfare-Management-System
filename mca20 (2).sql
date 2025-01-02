-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 18, 2022 at 04:51 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mca20`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminlogin`
--

DROP TABLE IF EXISTS `adminlogin`;
CREATE TABLE IF NOT EXISTS `adminlogin` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminlogin`
--

INSERT INTO `adminlogin` (`aid`, `username`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `allotpackage`
--

DROP TABLE IF EXISTS `allotpackage`;
CREATE TABLE IF NOT EXISTS `allotpackage` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `package` varchar(30) NOT NULL,
  `district` varchar(20) NOT NULL,
  `pdate` date NOT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `allotpackage`
--

INSERT INTO `allotpackage` (`aid`, `package`, `district`, `pdate`) VALUES
(1, 'Old Age Package', 'Kannur', '2022-06-03'),
(2, 'Woman Package', 'Malappuram', '2022-06-06');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
CREATE TABLE IF NOT EXISTS `booking` (
  `bid` int(11) NOT NULL AUTO_INCREMENT,
  `bookdate` date NOT NULL,
  `cid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `refamnt` int(11) DEFAULT NULL,
  `refdate` date DEFAULT NULL,
  `shipdate` date DEFAULT NULL,
  `deliverydate` date DEFAULT NULL,
  `feedback` varchar(50) DEFAULT NULL,
  `feedbackdate` date DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`bid`, `bookdate`, `cid`, `pid`, `quantity`, `price`, `status`, `refamnt`, `refdate`, `shipdate`, `deliverydate`, `feedback`, `feedbackdate`) VALUES
(1, '2022-06-06', 1, 202, 1, 800, 1, 400, '2022-06-06', '2022-06-13', '2022-06-13', 'Good', '2022-06-13'),
(2, '2022-06-06', 1, 203, 2, 300, 1, NULL, NULL, '2022-06-13', NULL, NULL, NULL),
(3, '2022-06-06', 1, 206, 1, 900, 1, NULL, NULL, '2022-06-06', NULL, NULL, NULL),
(4, '2022-06-06', 1, 209, 1, 800, 1, NULL, NULL, '2022-06-06', '2022-06-06', 'Nice One', '2022-06-06'),
(5, '2022-06-06', 3, 205, 1, 850, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(6, '2022-06-06', 3, 208, 2, 850, 5, NULL, NULL, '2022-06-06', '2022-06-06', 'Completely Satisfying', '2022-06-06'),
(7, '2022-06-06', 3, 208, 2, 850, 2, 425, '2022-06-06', NULL, NULL, NULL, NULL),
(9, '2022-06-07', 1, 207, 1, 1800, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(14, '2022-06-13', 1, 206, 1, 900, 5, NULL, NULL, '2022-06-13', '2022-06-13', 'Nice', '2022-06-13'),
(15, '2022-06-18', 11, 206, 2, 900, 4, NULL, NULL, '2022-06-18', '2022-06-18', NULL, NULL),
(16, '2022-06-18', 11, 209, 1, 800, 4, NULL, NULL, '2022-06-18', '2022-06-18', NULL, NULL),
(17, '2022-06-18', 11, 204, 2, 450, 1, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `cname` varchar(25) NOT NULL,
  `cimage` varchar(10) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=141 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cid`, `cname`, `cimage`) VALUES
(20, 'Tribal Jwellery', 'jpg'),
(40, 'Metal Crafts', 'jpg'),
(60, 'Tribal Textiles', 'jpg'),
(80, 'Cane and Bamboo', 'jpg'),
(100, 'Organic and natural', 'jpg'),
(120, 'Gift and Novelties', 'webp'),
(140, 'Warli Art', 'jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `subject` varchar(40) NOT NULL,
  `message` varchar(60) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`cid`, `name`, `email`, `subject`, `message`) VALUES
(1, 'Ramya', 'ramya@yahoo.in', 'Shopping Request', 'Need to purchase art works from tribes');

-- --------------------------------------------------------

--
-- Table structure for table `coordinator`
--

DROP TABLE IF EXISTS `coordinator`;
CREATE TABLE IF NOT EXISTS `coordinator` (
  `coid` int(11) NOT NULL AUTO_INCREMENT,
  `coname` varchar(20) NOT NULL,
  `coaddress` varchar(50) NOT NULL,
  `coemail` varchar(20) NOT NULL,
  `comobile` varchar(12) NOT NULL,
  `cogender` varchar(10) NOT NULL,
  `cousername` varchar(15) NOT NULL,
  `copassword` varchar(16) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`coid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coordinator`
--

INSERT INTO `coordinator` (`coid`, `coname`, `coaddress`, `coemail`, `comobile`, `cogender`, `cousername`, `copassword`, `status`) VALUES
(1, 'Kavya KP', '        \"Sree Nilayam\" House', 'kavya@gmail.com', '9846376837', 'Female', 'kavya', 'kavya', 1),
(2, 'David', '        \"Love Shore\" House', 'david@gmail.com', '7994055242', 'Male', 'david', 'david', 1),
(3, 'Rakhila', '\"Nivedya\" House                    ', 'rakhila@gmail.com', '9768341658', 'Female', 'rakhila', 'rakhila', 1);

-- --------------------------------------------------------

--
-- Table structure for table `councillordetails`
--

DROP TABLE IF EXISTS `councillordetails`;
CREATE TABLE IF NOT EXISTS `councillordetails` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `cname` varchar(20) DEFAULT NULL,
  `caddress` varchar(50) DEFAULT NULL,
  `cemail` varchar(20) DEFAULT NULL,
  `cmobile` varchar(12) DEFAULT NULL,
  `cgender` varchar(10) DEFAULT NULL,
  `cusername` varchar(15) DEFAULT NULL,
  `cpassword` varchar(16) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `councillordetails`
--

INSERT INTO `councillordetails` (`cid`, `cname`, `caddress`, `cemail`, `cmobile`, `cgender`, `cusername`, `cpassword`, `status`) VALUES
(1, 'Silja', '\"Ponnambath\"  House', 'silja@gmail.com', '9656008950', 'Female', 'silja', 'silja', 1),
(2, 'Albin', '\"Jasmine Willa\"                  ', 'albin@yahoo.in', '9774343321', 'Male', 'albin', 'albin', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customerdetails`
--

DROP TABLE IF EXISTS `customerdetails`;
CREATE TABLE IF NOT EXISTS `customerdetails` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `cname` varchar(20) NOT NULL,
  `cemail` varchar(40) NOT NULL,
  `cmobile` varchar(12) NOT NULL,
  `cpassword` varchar(16) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerdetails`
--

INSERT INTO `customerdetails` (`cid`, `cname`, `cemail`, `cmobile`, `cpassword`, `status`) VALUES
(1, 'Aishwarya', 'aishwaryak@depaul.edu.in', '7025419128', '12345678', 1),
(2, 'George', 'george@gmail.com', '9744549258', '12345678', 1),
(3, 'Trinita', 'trinita@gmail.com', '8547471243', '12345678', 1),
(4, 'Maya', 'maya@yahoo.in', '9768453234', 'maya', 1),
(5, 'Ragesh', 'raghesh@gmail.com', '98452134478', 'raghesh', 1),
(6, 'Teena', 'teena@gmail.com', '9765435689', 'teena', 1),
(7, 'Rani Mariya', 'rani@depaul.edu.in', '7065347890', 'rani', 1),
(8, 'Vismaya', 'vismaya@gmail.com', '7065342135', 'vismaya', 1),
(9, 'Jose', 'jose@gmail.com', '7098453234', 'jose', 1),
(10, 'Amaya', 'amaya@gmail.com', '9876453245', 'amaya', 1),
(11, 'Albin George', 'albin@yahoo.in', '9856342134', 'albin123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

DROP TABLE IF EXISTS `district`;
CREATE TABLE IF NOT EXISTS `district` (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `dname` varchar(25) NOT NULL,
  PRIMARY KEY (`did`),
  UNIQUE KEY `dname` (`dname`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`did`, `dname`) VALUES
(1, 'Kasargod'),
(2, 'Kannur'),
(3, 'Kozhikode'),
(4, 'Wayanad'),
(5, 'Malappuram'),
(6, 'Palakkad'),
(7, 'Thrissur');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `eid` int(11) NOT NULL AUTO_INCREMENT,
  `ename` varchar(20) NOT NULL,
  `eage` int(3) NOT NULL,
  `eaddress` varchar(50) NOT NULL,
  `salary` int(11) NOT NULL,
  PRIMARY KEY (`eid`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`eid`, `ename`, `eage`, `eaddress`, `salary`) VALUES
(1, 'Anu', 12, 'acb', 12345),
(2, 'Sam', 45, 'agh', 56778),
(3, 'Sam', 45, 'agh', 56778),
(4, 'Sam', 45, 'agh', 56778),
(6, 'Sam', 45, 'agh', 56778),
(8, 'Anu', 12, 'acb', 56778),
(10, '123', 12, 'acb', 56778),
(12, 'ab', 12, 'acb', 56778);

-- --------------------------------------------------------

--
-- Table structure for table `eventdetails`
--

DROP TABLE IF EXISTS `eventdetails`;
CREATE TABLE IF NOT EXISTS `eventdetails` (
  `eid` int(11) NOT NULL AUTO_INCREMENT,
  `ename` varchar(50) NOT NULL,
  `edesc` varchar(200) NOT NULL,
  `addedate` date NOT NULL,
  `img` varchar(10) NOT NULL,
  PRIMARY KEY (`eid`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eventdetails`
--

INSERT INTO `eventdetails` (`eid`, `ename`, `edesc`, `addedate`, `img`) VALUES
(3, 'Cleanliness Drive', 'The motive of activity was door to door awareness campaign about health and hygiene, sanitation and hazardous impact of polythene on the environment', '2021-12-02', 'jpeg'),
(6, 'Blood Donation Camp', 'TWMS organized a blood donation camp in collaboration with blood bank of Medical College, Kannur. The camp began at 10.00 am                  ', '2022-04-13', 'jpg'),
(9, 'Plastic free Campaign', 'The main motto of the program was to eradicate the use of plastic', '2022-04-27', 'jpg');

-- --------------------------------------------------------

--
-- Table structure for table `managerdetails`
--

DROP TABLE IF EXISTS `managerdetails`;
CREATE TABLE IF NOT EXISTS `managerdetails` (
  `mnid` int(11) NOT NULL AUTO_INCREMENT,
  `mname` varchar(20) NOT NULL,
  `mnaddress` varchar(50) NOT NULL,
  `mnemail` varchar(20) NOT NULL,
  `mnmobile` varchar(12) NOT NULL,
  `mngender` varchar(10) NOT NULL,
  `mnusername` varchar(15) NOT NULL,
  `mnpassword` varchar(16) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`mnid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `managerdetails`
--

INSERT INTO `managerdetails` (`mnid`, `mname`, `mnaddress`, `mnemail`, `mnmobile`, `mngender`, `mnusername`, `mnpassword`, `status`) VALUES
(1, 'Riyas P', '        \"Baithul Arsh\" House', 'riyas@gmail.com', '9745584836', 'Male', 'riyas', 'riyas', 1),
(2, 'George', 'Love Shore Willa                    ', 'george@yahoo.in', '7025437819', 'Male', 'george', 'george', 1);

-- --------------------------------------------------------

--
-- Table structure for table `officerdetails`
--

DROP TABLE IF EXISTS `officerdetails`;
CREATE TABLE IF NOT EXISTS `officerdetails` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `oname` varchar(20) DEFAULT NULL,
  `oaddress` varchar(80) DEFAULT NULL,
  `oemail` varchar(40) DEFAULT NULL,
  `omobile` varchar(12) DEFAULT NULL,
  `ogender` varchar(10) DEFAULT NULL,
  `ousername` varchar(15) DEFAULT NULL,
  `opassword` varchar(16) DEFAULT NULL,
  `district` varchar(20) DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `officerdetails`
--

INSERT INTO `officerdetails` (`oid`, `oname`, `oaddress`, `oemail`, `omobile`, `ogender`, `ousername`, `opassword`, `district`, `status`) VALUES
(1, 'Gayathri', '\"Love Shore\" House                  ', 'gayathri@gmail.com', '7025419129', 'Female', 'gayathri', 'gayathri', 'Palakkad', 1),
(2, 'Anna Jose', '\"Golden Willa\"                  ', 'anna@yahoo.in', '9744549258', 'Female', 'anna', 'anna', 'Wayanad', 1),
(3, 'George', '\"Bathlahem Willa\"                  ', 'george@gmail.com', '8547471243', 'Male', 'george', 'george', 'Kasargod', 1);

-- --------------------------------------------------------

--
-- Table structure for table `packagedetails`
--

DROP TABLE IF EXISTS `packagedetails`;
CREATE TABLE IF NOT EXISTS `packagedetails` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `pname` varchar(35) NOT NULL,
  `pdesc` varchar(50) NOT NULL,
  `paddedate` date NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `packagedetails`
--

INSERT INTO `packagedetails` (`pid`, `pname`, `pdesc`, `paddedate`, `status`) VALUES
(1, 'Old Age Package', 'Medicines, Dress, Groceries            ', '2022-06-02', 1),
(2, 'Education Package', 'Note Book, Pen, text book                  ', '2022-06-02', 1),
(3, 'Woman Package', 'Sanitaries, Dress                  ', '2022-06-02', 1),
(4, 'Food Package', 'Rice, Vegetables, Sugar                  ', '2022-06-02', 1);

-- --------------------------------------------------------

--
-- Table structure for table `productdetails`
--

DROP TABLE IF EXISTS `productdetails`;
CREATE TABLE IF NOT EXISTS `productdetails` (
  `pid` int(11) NOT NULL,
  `pname` varchar(50) NOT NULL,
  `cid` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `offer` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `img` varchar(10) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productdetails`
--

INSERT INTO `productdetails` (`pid`, `pname`, `cid`, `price`, `offer`, `stock`, `img`, `status`) VALUES
(201, 'Choker Necklace', 20, 2300, 1500, 30, 'jpeg', 1),
(202, 'Afghani Earrings', 20, 1000, 800, 8, 'jpeg', 1),
(203, 'Swan Boat Showpiece', 40, 3000, 300, 3, 'jpg', 1),
(204, 'Lamp Light', 80, 5000, 450, 13, 'jpg', 1),
(205, 'Hair Cleanser', 100, 1500, 850, 29, 'png', 1),
(206, 'Wooden Table Top', 120, 950, 900, 6, 'jpg', 1),
(207, 'Bath Products', 100, 2000, 1800, 39, 'jpg', 1),
(208, 'Sarees', 60, 1000, 850, 46, 'jpg', 1),
(209, 'Round Canvas Painting', 140, 1000, 800, 28, 'jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tribalmembers`
--

DROP TABLE IF EXISTS `tribalmembers`;
CREATE TABLE IF NOT EXISTS `tribalmembers` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `mname` varchar(20) NOT NULL,
  `tname` varchar(40) NOT NULL,
  `mgender` varchar(10) NOT NULL,
  `dob` date NOT NULL,
  `edu` varchar(10) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tribalmembers`
--

INSERT INTO `tribalmembers` (`mid`, `mname`, `tname`, `mgender`, `dob`, `edu`, `status`) VALUES
(1, 'Raghu', 'Adiyan', 'Male', '1993-06-15', 'LP', 1),
(2, 'Vimala', 'Kurumbar', 'Female', '1981-10-06', 'None', 1),
(3, 'Haritha', 'Hill Pulaya', 'Female', '2000-05-25', 'HSS', 1),
(4, 'Kalesh', 'Karimpalan', 'Male', '1996-01-11', 'Others', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tribefamily`
--

DROP TABLE IF EXISTS `tribefamily`;
CREATE TABLE IF NOT EXISTS `tribefamily` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `hname` varchar(40) NOT NULL,
  `tname` varchar(40) NOT NULL,
  `district` varchar(20) NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tribefamily`
--

INSERT INTO `tribefamily` (`fid`, `hname`, `tname`, `district`) VALUES
(1, 'Vadakkeparambil House', 'Hill Pulaya', 'Palakkad'),
(2, 'Ponnambath House', 'Adiyan', 'Wayanad');

-- --------------------------------------------------------

--
-- Table structure for table `tribeinfo`
--

DROP TABLE IF EXISTS `tribeinfo`;
CREATE TABLE IF NOT EXISTS `tribeinfo` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `tname` varchar(25) DEFAULT NULL,
  `tinfo` varchar(300) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tribeinfo`
--

INSERT INTO `tribeinfo` (`tid`, `tname`, `tinfo`, `status`) VALUES
(1, 'Adiyan', 'ADIYANS (Adiyars, Adigals) are inhabitants of the Wayanad District. They are found in Edappady, Cherur, Mottonkara, Kuppathode and Mudiramula, Bavali and in the low lying lands of Thaliparamba and North Waynad Taluks.', 1),
(2, 'Hill Pulaya', 'HILL PULAYAS are inhabitants of the Kottayam and Idukki District. They are seen at Kummithankuzhi, Thattikkad, Nachivayal, Malakkad,and Chavakkalam in the Chinnar and Marayoor villages of the Devikulam Taluk.                  ', 1),
(3, 'Kattunayakan', 'KATTUNAYAKANS are inhabitants of the Kozhikode and Kannur Districts. They are seen in the deep forests of high mountains of Kidaganad, Purakadi, Pulpalli, Noolpuzha, Maruthenkara, Tharuvana and Nallornad Amsoms of the Vythiri Taluk; Kattikulam Vemom, Chempara Peak and Nathapuram.                    ', 1),
(4, 'Kurumbar', 'KURUMBA live in the dense forests of Attappadi Valley, Palakkad District. They are popularly known as Kurumba Pulayans, Mala Pulayans, Hill Pulayans and Pamba Pulayans. The Kurumba have dialect of their own, locally called Kurumba Basha.                      ', 1),
(5, 'Malai Pandaram', 'MALAI PANDARAM or otherwise termed as Hill Pandaram is a scheduled tribe. They are settled along the Pamba river, Achan koil river and in Pathanapuram and near Shencotta ranges in Kollam District. Some have migrated now to Srikrishnapuram in the Palakkad District.                       ', 1),
(6, 'Karimpalan', 'KARIMPALANS are inhabitants of the Kannur and Kozhikode Districts                  ', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
