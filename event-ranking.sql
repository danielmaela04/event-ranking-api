-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Out-2022 às 20:16
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `event-ranking`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `event_data`
--

CREATE TABLE `event_data` (
  `id` int(255) NOT NULL,
  `event_name` varchar(50) NOT NULL,
  `event_about` varchar(255) NOT NULL,
  `event_date` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `event_data`
--

INSERT INTO `event_data` (`id`, `event_name`, `event_about`, `event_date`) VALUES
(1, 'Educa Moçambique', 'Feira e conferencia internacional de educação', '12 de julho de 2022'),
(2, 'Fikane', 'Feira e conferencia internacional de Turismo', '13 de outumbro de 2022');

-- --------------------------------------------------------

--
-- Estrutura da tabela `event_ranking`
--

CREATE TABLE `event_ranking` (
  `id` int(255) NOT NULL,
  `uid` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `opinion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `event_ranking`
--

INSERT INTO `event_ranking` (`id`, `uid`, `name`, `opinion`) VALUES
(1, 'd132375e-7e53-418e-a22d-33905c0d7e9c', 'Daniel', 'Muito Bom'),
(2, '0fa31874-8508-439b-ac7e-61d9bb9c7b19', 'Daniel', 'exemplo');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `event_data`
--
ALTER TABLE `event_data`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `event_ranking`
--
ALTER TABLE `event_ranking`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `event_data`
--
ALTER TABLE `event_data`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `event_ranking`
--
ALTER TABLE `event_ranking`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
