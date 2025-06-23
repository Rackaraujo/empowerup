<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once("../db.php");

try {
    $stmt = $pdo->query("SELECT nome, num_posts, crescimento_percentual FROM trending_topics ORDER BY num_posts DESC");
    $topicos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($topicos);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro ao buscar tópicos em alta: " . $e->getMessage()]);
}
