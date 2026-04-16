<?php
// ================================================
// hash.php - Generate a bcrypt hashed password
// ================================================

// Step 1: Set the password you want to hash
// Replace "YourStrongPass123" with your desired password
//$password = "MyNewPass123";
$password = "MyNewPass123";

// Step 2: Generate the hashed password using bcrypt
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

// Step 3: Output the hashed password
// Copy this output to use in your MySQL INSERT statement
echo "Hashed password: " . $hashedPassword . "\n";

// ================================================
// Usage Instructions:
// 1. Save this file as hash.php in your project folder:
//    C:\xampp\htdocs\vayuhu_backend\hash.php
// 2. Open Command Prompt and run the script with XAMPP's PHP engine:
//    C:\xampp\php\php.exe C:\xampp\htdocs\vayuhuwebapp\vb\hash.php
//    C:\xampp\php\php.exe C:\xampp\htdocs\ecommerce\backend\hash.php

// 3. Copy the output and use it in your MySQL query:
//    INSERT INTO admins (name, email, password)
//    VALUES ('Admin Name', 'admin@example.com', '$2y$10$tD0kCnmjhxblortaS4mM.ubRyY.YBZa8j9SP30FxFVlD3hjxeFQ2C');
// ================================================
?>
