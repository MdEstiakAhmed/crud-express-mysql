-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2023 at 04:35 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_mysql_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT 'admin',
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `attempt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `avatar`, `role`, `password`, `status`, `attempt`) VALUES
(2, 'Admin', 'IAmAdmin', 'admin@app.com', NULL, 'admin', '$2a$10$ucpJ6bOHzemxF4k0k9w9FuxDHSziKJcXPCl1MrLgUQmFWWeOsApvC', 1, 0),
(3, 'md. Estiak Ahmed', 'MdEstiakAhmed', 'estiak97@gmail.com', NULL, 'admin', '$2a$10$.T09hH.Li7TLm.b5GIgWJ.y8JHk2Zp0A.Yj5nPSGHc1EdWO2bNytK', 1, 0),
(4, 'fahim ahmed', 'fahimahmed', 'fahim@gmail.com', NULL, 'admin', '$2a$10$urur.zXO6incFTB2BNDun.pzHVmpjD7DMDLYMZtSPfyg6Ea4XJETe', 1, 0),
(7, 'Admin2', 'IAmAdmin2', 'admin2@app.com', '', 'admin', '$2a$10$ucpJ6bOHzemxF4k0k9w9FuxDHSziKJcXPCl1MrLgUQmFWWeOsApvC', 1, 0),
(8, 'Admin3', 'IAmAdmin3', 'admin3@app.com', '', 'admin', '$2a$10$ucpJ6bOHzemxF4k0k9w9FuxDHSziKJcXPCl1MrLgUQmFWWeOsApvC', 1, 0),
(9, 'Adnan', 'Adnan', 'adnan@app.com', NULL, 'admin', '$2a$10$cSVALicJLGp7.rSbnUbioelK1BTbHJRZKuVaImaP5WrcdsN5XkpDu', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
