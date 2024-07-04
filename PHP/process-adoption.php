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

    // Insert adopter information into adopters table
    $sql = "INSERT INTO adopters (adopter_name, address) VALUES ('$name', '$address')";

    if ($stmt->execute()) {
       
        header("Location: index.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }
}

// Close connection
$conn->close();
?>
