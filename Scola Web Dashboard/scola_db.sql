USE scola_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin','teacher','student') DEFAULT 'student',
    avatar VARCHAR(255) DEFAULT 'default.png',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) UNIQUE,
    description TEXT,
    level ENUM('Beginner','Intermediate','Advanced','Expert'),
    price DECIMAL(10,2),
    image VARCHAR(255),
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password, role) VALUES
('Super Admin', 'admin@scola.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'),
('John Doe', 'john@scola.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student'),
('Sarah Chen', 'sarah@scola.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'teacher');

INSERT INTO courses (title, slug, description, level, price, image, is_active) VALUES
('Python Programming', 'python-programming', 'Master Python fundamentals through fun projects and interactive exercises.', 'Beginner', 29.00, 'resources/course-python.jpg', 1),
('Web Development', 'web-development', 'Build amazing websites with HTML, CSS, and JavaScript from scratch.', 'Intermediate', 39.00, 'resources/course-web.jpg', 1),
('Game Development', 'game-development', 'Create your own games using Unity and advanced programming concepts.', 'Advanced', 49.00, 'resources/course-game.jpg', 1),
('AI & Machine Learning', 'ai-machine-learning', 'Explore the future of technology with artificial intelligence and ML.', 'Expert', 59.00, 'resources/course-ai.jpg', 1);