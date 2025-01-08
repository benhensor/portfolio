<?php

session_start();
$file = '/home/benhenso/private/BenHensorCV2024.pdf';

if (file_exists($file)) {
  header('Content-Type: application/pdf');
  header('Content-Disposition: attachment; filename=BenHensorCV2024.pdf');
  header('Content-Length: ' . filesize($file));
  header('Pragma: public');
  readfile($file);
  exit;
} else {
  die('File not found');
}