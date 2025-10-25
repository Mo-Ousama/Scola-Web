<?php
require '../db.php';
header("Content-Type: application/json");

$students = $pdo->query("SELECT COUNT(*) FROM users WHERE role='student'")->fetchColumn();
$teachers = $pdo->query("SELECT COUNT(*) FROM users WHERE role='teacher'")->fetchColumn();
$courses  = $pdo->query("SELECT COUNT(*) FROM courses")->fetchColumn();
$revenue  = $pdo->query("SELECT SUM(price) FROM courses")->fetchColumn();
$expenses = $pdo->query("SELECT SUM(amount) FROM expenses WHERE month >= DATE_FORMAT(CURDATE(), '%Y-%m-01')")->fetchColumn();

echo json_encode([
    'students' => $students,
    'teachers' => $teachers,
    'courses'  => $courses,
    'revenue'  => $revenue,
    'expenses' => $expenses
]);
?>