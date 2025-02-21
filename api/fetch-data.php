<?php
session_start();

// Security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Content-Type: application/json; charset=utf-8');

// CORS headers with strict origin checking
$allowedOrigins = [
    'http://localhost:3000',
    'https://benhensor.co.uk',
    'https://www.benhensor.co.uk'
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400'); // 24 hours cache for preflight
}

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Rate limiting (optional but recommended)
if (!isset($_SESSION['last_request_time'])) {
    $_SESSION['last_request_time'] = time();
} else {
    $timeSinceLastRequest = time() - $_SESSION['last_request_time'];
    if ($timeSinceLastRequest < 1) { // Adjust this value based on your needs
        http_response_code(429);
        echo json_encode(['error' => 'Too many requests']);
        exit();
    }
    $_SESSION['last_request_time'] = time();
}

// Secure file inclusion
$data = '/home/benhenso/private/portfolio_data.php';

try {
    if (!file_exists($data)) {
        throw new Exception('Data file not found');
    }
    
    include $data;
    
    if (!isset($portfolioData)) {
        throw new Exception('Invalid data structure');
    }
    
    // Sanitize output
    $sanitizedData = json_encode($portfolioData, JSON_THROW_ON_ERROR);
    if ($sanitizedData === false) {
        throw new Exception('JSON encoding failed');
    }
    
    echo $sanitizedData;
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error']);
    // Log the actual error securely (don't expose to client)
    error_log('Portfolio API Error: ' . $e->getMessage());
}