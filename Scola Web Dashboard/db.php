<?php
$host = 'localhost';
$db   = 'scola_db';
$user = 'scola_user';
$pass = 'scola_pass';
$charset = 'utf8mb4';

// نضيف طباعة الخطأ كامل
$dsn = "mysql:host=$host;dbname=$db;charset=$charset;unix_socket=/var/run/mysqld/mysqld.sock";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
try {
     $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
     http_response_code(500);
     die("DB Error: " . $e->getMessage() . " | DSN: $dsn");
}
?>