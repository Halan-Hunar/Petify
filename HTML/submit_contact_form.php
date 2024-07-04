<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Petify";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$email = $_POST['email'];
$message = $_POST['message'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO feedback (email, message) VALUES (?, ?)");
$stmt->bind_param("ss", $email, $message);


if ($stmt->execute()) {
    
    header("Location: index.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
