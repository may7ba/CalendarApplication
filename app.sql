-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2016 at 04:39 AM
-- Server version: 5.6.17
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `apoint_id` int(5) NOT NULL,
  `doc_id` int(5) NOT NULL,
  `time` varchar(20) NOT NULL,
  `subject` varchar(30) NOT NULL,
  `notes` varchar(50) NOT NULL,
  `date` varchar(30) NOT NULL,
  `p_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`apoint_id`, `doc_id`, `time`, `subject`, `notes`, `date`, `p_name`) VALUES
(87, 3, '19:00', 'Blood test to check diabates', 'Morning blood test for sugar', '2016-12-18', 'Felicity Smoak'),
(89, 4, '22:30', 'Report ', 'patients wants to review report', '2016-12-18', 'John Doe');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doc_id` int(5) NOT NULL,
  `Doc_fname` varchar(20) NOT NULL,
  `doc_lname` varchar(20) NOT NULL,
  `phone` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doc_id`, `Doc_fname`, `doc_lname`, `phone`) VALUES
(1, 'John', 'Watson', '3855281000'),
(2, 'Sherlock', 'Holmes', '3855289000'),
(3, 'Ray', 'Palmer', '3855287786'),
(4, 'Tony', 'Stark', '3854567780'),
(5, 'James', 'Bond', '9009001007');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`apoint_id`),
  ADD KEY `doc_id` (`doc_id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doc_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `apoint_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doc_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `Doc_fkey` FOREIGN KEY (`doc_id`) REFERENCES `doctor` (`doc_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
