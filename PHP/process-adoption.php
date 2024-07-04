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

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $address = $conn->real_escape_string($_POST['address']);
    $pet_ids = $conn->real_escape_string($_POST['pet_ids']);  

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO adopters (adopter_name, address) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $address);

    if ($stmt->execute()) {
        // Redirect to the HTML file located in the parent directory's HTML folder
        header("Location: http://localhost/HTML/index.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>
