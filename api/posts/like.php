<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once("../db.php");

$data = json_decode(file_get_contents("php://input"), true);
$post_id = $data["post_id"] ?? null;
$user_id = $data["user_id"] ?? null;

if (!$post_id || !$user_id) {
    http_response_code(400);
    echo json_encode(["erro" => "Faltando dados"]);
    exit;
}

try {
   
    $check = $pdo->prepare("SELECT * FROM likes WHERE post_id = ? AND user_id = ?");
    $check->execute([$post_id, $user_id]);

    if ($check->rowCount() > 0) {
        $pdo->prepare("DELETE FROM likes WHERE post_id = ? AND user_id = ?")->execute([$post_id, $user_id]);
        $pdo->prepare("UPDATE posts SET likes = likes - 1 WHERE id = ?")->execute([$post_id]);
        echo json_encode(["liked" => false]);
    } else {
        $pdo->prepare("INSERT INTO likes (post_id, user_id) VALUES (?, ?)")->execute([$post_id, $user_id]);
        $pdo->prepare("UPDATE posts SET likes = likes + 1 WHERE id = ?")->execute([$post_id]);
        echo json_encode(["liked" => true]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["erro" => $e->getMessage()]);
}
