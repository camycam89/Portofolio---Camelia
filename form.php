<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
    } elseif (empty($message)) {
        echo "Message cannot be empty.";
    } else {
        // Data is valid; you can proceed with sending the email or saving it to a database.
        // For example, you can use the PHP mail function to send an email:
        $to = "cameliabaronescu@gmail.com";
        $subject = "Contact Form Submission";
        $headers = "From: $email";
        mail($to, $subject, $message, $headers);
    // send a response.
    echo "Thank you, $name! Your message has been received.";
} else {
    header("Location: index.html");
}
?>
