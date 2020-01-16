--
-- Database: `myuber_db`
--

CREATE DATABASE IF NOT EXISTS `myuber_db`;
USE `myuber_db`;


-- ENTITIES

--
-- Struttura della tabella `booking`
--

CREATE TABLE IF NOT EXISTS `booking` (
	`CarID` varchar(130) ,
	`DriverID` varchar(130) ,
	`EndPlaceLat` numeric ,
	`EndPlaceLng` numeric ,
	`EndTime` date ,
	`StartPlaceLat` numeric ,
	`StartPlaceLng` numeric ,
	`StartTime` date ,
	`Status` int  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `car`
--

CREATE TABLE IF NOT EXISTS `car` (
	`BrandID` varchar(130)  NOT NULL,
	`Capacity` int  NOT NULL,
	`ModelID` varchar(130)  NOT NULL,
	`Number` varchar(130)  NOT NULL,
	`Status` int  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `driver`
--

CREATE TABLE IF NOT EXISTS `driver` (
	`Name` varchar(130)  NOT NULL,
	`Status` int  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `track`
--

CREATE TABLE IF NOT EXISTS `track` (
	`BookID` varchar(130)  NOT NULL,
	`Status` int  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `myuber_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `myuber_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);






