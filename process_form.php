<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "smoothrelocationnl@gmail.com"; 
    $headers = "From: $email\r\nReply-To: $email\r\n";

    mail($to, $subject, $message, $headers);

    echo "Thank you for your message! We will get back to you soon.";
} else {
    echo "Invalid request";
}
?>
