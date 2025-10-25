<?php
require '../db.php';
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

// GET → كل اليوزرز أو حسب النوع
if ($method === 'GET') {
    $role = $_GET['role'] ?? '';
    $sql = $role ? "SELECT * FROM users WHERE role = ?" : "SELECT * FROM users";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($role ? [$role] : []);
    echo json_encode($stmt->fetchAll());
}

// POST → إضافة يوزر جديد
if ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)");
    $stmt->execute([$data['name'], $data['email'], password_hash($data['password'], PASSWORD_DEFAULT), $data['role']]);
    echo json_encode(['success' => true]);
}

// PUT → تعديل
if ($method === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("UPDATE users SET name=?, email=?, role=? WHERE id=?");
    $stmt->execute([$data['name'], $data['email'], $data['role'], $data['id']]);
    echo json_encode(['success' => true]);
}

// DELETE → مسح
if ($method === 'DELETE') {
    $id = intval($_GET['id'] ?? 0);
    $pdo->prepare("DELETE FROM users WHERE id=?")->execute([$id]);
    echo json_encode(['success' => true]);
}
?>