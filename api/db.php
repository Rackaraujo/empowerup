<?php
$host = "localhost";
$db = "empowerup";
$user = "root";
$pass = "";     

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro na conexão com o banco: " . $e->getMessage()]);
    exit;
}
?>