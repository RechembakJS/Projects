<?php
$usuario = 'root';
$senha = 'root';
$database = 'product';
$host = 'localhost';

$mysqli = new mysqli($host, $usuario, $senha, $database);

if($mysqli->error){
  die("Falha de conexão: ".$mysqli->error);
}