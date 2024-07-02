<?php
$servername = "localhost";
$username = "root"; // replace with your MySQL username
$password = ""; // replace with your MySQL password

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database if it doesn't exist
$sql = "CREATE DATABASE IF NOT EXISTS Petify";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully<br>";
} else {
    die("Error creating database: " . $conn->error);
}

// Select the database
$conn->select_db("Petify");

// SQL to create table
$sql = "CREATE TABLE IF NOT EXISTS pet_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    age VARCHAR(50),
    breed VARCHAR(100),
    location VARCHAR(100)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table pet_items created successfully<br>";
} else {
    die("Error creating table: " . $conn->error);
}

// Sample data insertion
$sql = "INSERT INTO pet_items (name, image, age, breed, location) VALUES
('Pet 1', '/images/dog-1.jpg', '2 years', 'Labrador', 'New York'),
('Pet 2', '/images/dog-2.jpg', '3 years', 'Beagle', 'Los Angeles'),
('Pet 3', '/images/cat-2.jpg', '1 year', 'Megatron', 'Said Sadiq')";

if ($conn->query($sql) === TRUE) {
    echo "Sample data inserted successfully";
} else {
    echo "Error inserting data: " . $conn->error;
}

$conn->close();
?>
