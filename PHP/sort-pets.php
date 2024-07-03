<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Petify";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sort_by = $_GET['sort_by'];
$sql = "SELECT * FROM pet ORDER BY $sort_by";
$result = $conn->query($sql);

echo "<h2>Sorted Results:</h2>";
while ($row = $result->fetch_assoc()) {
    echo "<p>" . $row['pet_name'] . "</p>";
}

$conn->close();
?>
