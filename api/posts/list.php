<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once("../db.php");

try {
    $stmt = $pdo->query("
        SELECT p.id, u.nome AS autor, u.username, u.avatar_url, p.conteudo, p.imagem_url, 
               p.categoria, p.tempo_postagem, p.likes, p.comentarios, p.compartilhamentos
        FROM posts p
        JOIN users u ON p.autor_id = u.id
        ORDER BY p.tempo_postagem DESC
    ");
    
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($posts as &$post) {
        $post_id = $post["id"];
        $tagStmt = $pdo->prepare("
            SELECT t.nome 
            FROM tags t 
            JOIN post_tags pt ON t.id = pt.tag_id 
            WHERE pt.post_id = ?
        ");
        $tagStmt->execute([$post_id]);
        $tags = $tagStmt->fetchAll(PDO::FETCH_COLUMN);

        $post["tags"] = $tags;
    }

    echo json_encode($posts);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["erro" => "Erro ao buscar posts: " . $e->getMessage()]);
}
?>
