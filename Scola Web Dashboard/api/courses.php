<?php
require '../db.php';
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

// GET → كل الكورسات
if ($method === 'GET') {
    $stmt = $pdo->query("SELECT * FROM courses ORDER BY id DESC");
    echo json_encode($stmt->fetchAll());
}

// POST → إضافة كورس جديد
if ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO courses (title, slug, description, level, price, image)
                           VALUES (?,?,?,?,?,?)");
    $stmt->execute([
        $data['title'],
        $data['slug'],
        $data['description'],
        $data['level'],
        $data['price'],
        $data['image']
    ]);
    echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);
}

// PUT → تعديل
if ($method === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("UPDATE courses
                           SET title=?, slug=?, description=?, level=?, price=?, image=?
                           WHERE id=?");
    $stmt->execute([
        $data['title'],
        $data['slug'],
        $data['description'],
        $data['level'],
        $data['price'],
        $data['image'],
        $data['id']
    ]);
    echo json_encode(['success' => true]);
}

// DELETE → مسح
if ($method === 'DELETE') {
    $id = intval($_GET['id'] ?? 0);
    $pdo->prepare("DELETE FROM courses WHERE id=?")->execute([$id]);
    echo json_encode(['success' => true]);
}
?>