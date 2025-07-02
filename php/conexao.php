<?php
$host = "localhost";
$db   = "arquivos_professora";
$user = "seu_usuario_mysql";   // ALTERE para seu usuário do MySQL
$pass = "sua_senha_mysql";     // ALTERE para sua senha do MySQL

try {
  $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die("Erro na conexão: " . $e->getMessage());
}
?>
