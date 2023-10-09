-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-10-2023 a las 01:34:38
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `banda_medinaceli`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hasinstrument`
--

CREATE TABLE `hasinstrument` (
  `id` int(11) NOT NULL,
  `idInstrumet` int(11) NOT NULL,
  `idMusician` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hasinstrument`
--

INSERT INTO `hasinstrument` (`id`, `idInstrumet`, `idMusician`) VALUES
(1, 1, 2),
(2, 1, 5),
(3, 1, 4),
(4, 2, 6),
(5, 2, 3),
(6, 5, 7),
(7, 2, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historicalattendance`
--

CREATE TABLE `historicalattendance` (
  `id` int(11) NOT NULL,
  `idMusician` int(11) NOT NULL,
  `idRehearsal` int(11) NOT NULL,
  `assited` tinyint(1) NOT NULL,
  `views` text NOT NULL,
  `justified` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `historicalattendance`
--

INSERT INTO `historicalattendance` (`id`, `idMusician`, `idRehearsal`, `assited`, `views`, `justified`) VALUES
(1, 2, 1, 1, '', 0),
(2, 3, 1, 1, '', 0),
(3, 4, 1, 0, 'baja medica', 1),
(4, 7, 1, 1, '', 0),
(5, 5, 1, 1, '', 0),
(6, 6, 1, 1, '', 0),
(7, 8, 1, 0, 'No asitio porque se fue a los toros', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instrument`
--

CREATE TABLE `instrument` (
  `id` int(11) NOT NULL,
  `name` varchar(11) NOT NULL,
  `number` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `instrument`
--

INSERT INTO `instrument` (`id`, `name`, `number`) VALUES
(1, 'PROPIO', '0'),
(2, 'TIMBAL', '0'),
(5, 'TAMBOR', '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `musician`
--

CREATE TABLE `musician` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `musician`
--

INSERT INTO `musician` (`id`, `name`, `surName`, `lastName`) VALUES
(2, 'EDUARDO', 'BULEO', 'BLASCO'),
(3, 'TEROL', '', ''),
(4, 'JOSE', 'BULEO', 'BLASCO'),
(5, 'ALEX', '', ''),
(6, 'TONI', '', ''),
(7, 'SANTIAGO', 'ROMERO', 'BLASCO'),
(8, 'DANI', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rehearsal`
--

CREATE TABLE `rehearsal` (
  `id` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `start_time` varchar(255) NOT NULL,
  `end_time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rehearsal`
--

INSERT INTO `rehearsal` (`id`, `date`, `start_time`, `end_time`) VALUES
(1, '07/10/2023', '12:00', '13:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `hasinstrument`
--
ALTER TABLE `hasinstrument`
  ADD PRIMARY KEY (`id`,`idInstrumet`,`idMusician`),
  ADD KEY `idInstrumet` (`idInstrumet`),
  ADD KEY `idMusician` (`idMusician`);

--
-- Indices de la tabla `historicalattendance`
--
ALTER TABLE `historicalattendance`
  ADD PRIMARY KEY (`id`,`idMusician`,`idRehearsal`),
  ADD KEY `idMusician` (`idMusician`),
  ADD KEY `idRehearsal` (`idRehearsal`);

--
-- Indices de la tabla `instrument`
--
ALTER TABLE `instrument`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `musician`
--
ALTER TABLE `musician`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rehearsal`
--
ALTER TABLE `rehearsal`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `hasinstrument`
--
ALTER TABLE `hasinstrument`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `historicalattendance`
--
ALTER TABLE `historicalattendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `instrument`
--
ALTER TABLE `instrument`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `musician`
--
ALTER TABLE `musician`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `rehearsal`
--
ALTER TABLE `rehearsal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `hasinstrument`
--
ALTER TABLE `hasinstrument`
  ADD CONSTRAINT `hasinstrument_ibfk_1` FOREIGN KEY (`idInstrumet`) REFERENCES `instrument` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hasinstrument_ibfk_2` FOREIGN KEY (`idMusician`) REFERENCES `musician` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `historicalattendance`
--
ALTER TABLE `historicalattendance`
  ADD CONSTRAINT `historicalattendance_ibfk_1` FOREIGN KEY (`idMusician`) REFERENCES `musician` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historicalattendance_ibfk_2` FOREIGN KEY (`idRehearsal`) REFERENCES `rehearsal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
