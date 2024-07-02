<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $contact = [
        'email' => $email,
        'message' => $message,
        'date' => date("Y-m-d H:i:s")
    ];

    $contacts = [];
    if (file_exists('contacts.json')) {
        $contacts = json_decode(file_get_contents('contacts.json'), true);
    }

    $contacts[] = $contact;

    file_put_contents('contacts.json', json_encode($contacts, JSON_PRETTY_PRINT));

    header("Location: index.html?success=1");
    exit();
}
?>
