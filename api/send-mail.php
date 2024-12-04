<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// handle cors
header("Access-Control-Allow-Origin: https://benhensor.co.uk");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit(0);
}

// get POST data
$data = json_decode(file_get_contents('php://input'), true);

// validation
if (!isset($data['name']) || !isset($data['email']) || !isset($data['phone']) || !isset($data['message'])) {
  http_response_code(400);
  echo json_encode(['error' => 'Missing required fields']);
  exit();
}

// load config
$config = require 'config.php';

try {
  $mail = new PHPMailer(true);

  //Server settings
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = $config['email'];
  $mail->Password = $config['password'];
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

  // recipients
  $mail->setFrom($config['email'], 'Your Name');
  $mail->addAddress($config['email']);
  $mail->addReplyTo($data['email'], $data['name']);

  // content
  $mail->isHTML(true);
  $mail->Subject = 'Contact Form Submission';
  $mail->Body = "
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> " . htmlspecialchars($data['name']) . "</p>
    <p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>
    <p><strong>Phone:</strong> " . htmlspecialchars($data['phone']) . "</p>
    <p><strong>Message:</strong></p>
    <p>" . nl2br(htmlspecialchars($data['message'])) . "</p>
  ";

  $mail->send();
  echo json_encode([
    'success' => true,
    'message' => 'Message sent successfully!'
  ]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode([
    'success' => false,
    'message' => 'Server error: ' . $e->getMessage(),
  ]);
}
?>