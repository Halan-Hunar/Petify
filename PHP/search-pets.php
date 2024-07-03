<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Petify";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = $_GET['query'];
$sql = "SELECT * FROM pet WHERE pet_name LIKE ?";
$stmt = $conn->prepare($sql);
$search_term = "%" . $query . "%";
$stmt->bind_param("s", $search_term);
$stmt->execute();
$result = $stmt->get_result();

echo "<h2>Search Results:</h2>";
while ($row = $result->fetch_assoc()) {
    echo "<p>" . $row['pet_name'] . "</p>";
}

$stmt->close();
$conn->close();
?>
