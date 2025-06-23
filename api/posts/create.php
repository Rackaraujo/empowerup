<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once("../db.php");

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["autor_id"]) || !isset($data["conteudo"])) {
    http_response_code(400);
    echo json_encode(["erro" => "Dados incompletos."]);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO posts (autor_id, conteudo, imagem_url, categoria) VALUES (?, ?, ?, ?)");
    $stmt->execute([
        $data["autor_id"],
        $data["conteudo"],
        $data["imagem_url"] ?? null,
        $data["categoria"] ?? "Geral"
    ]);
    echo json_encode(["sucesso" => true, "id" => $pdo->lastInsertId()]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro ao criar post: " . $e->getMessage()]);
}
