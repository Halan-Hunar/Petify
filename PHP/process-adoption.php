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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $address = $_POST['address'];
    $pet_ids = explode(',', $_POST['pet_ids']);
    
    // Insert adopter details
    $stmt = $conn->prepare("INSERT INTO adopter (name, address) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $address);
    $stmt->execute();
    $adopter_id = $stmt->insert_id;
    $stmt->close();
    
    // Update pet details
    $stmt = $conn->prepare("UPDATE pet SET aid = ? WHERE pid = ?");
    foreach ($pet_ids as $pid) {
        $stmt->bind_param("ii", $adopter_id, $pid);
        $stmt->execute();
    }
    $stmt->close();
    
    // Redirect to index.html after successful submission
    header("Location: index.html");
    exit();
}

$conn->close();
?>
