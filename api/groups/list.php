<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once("../db.php");

try {
    $stmt = $pdo->query("SELECT id, nome, membros, descricao, categoria, imagem_url, ativo, ultima_atividade 
                         FROM groups 
                         ORDER BY ultima_atividade DESC");
    $grupos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($grupos);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro ao buscar grupos: " . $e->getMessage()]);
}
