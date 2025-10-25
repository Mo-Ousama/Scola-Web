<?php
require '../db.php';
header("Content-Type: application/json");

$data = json_decode(file_get_contents('php://input'), true);

// نبحث بالإيميل + الـ role
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? AND role = ?");
$stmt->execute([$data['email'], $data['role']]);
$user = $stmt->fetch();

if ($user && password_verify($data['password'], $user['password'])) {
    // نرجع البيانات (من غير الباسورد)
    unset($user['password']);
    echo json_encode(['success' => true, 'user' => $user]);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
}
?>