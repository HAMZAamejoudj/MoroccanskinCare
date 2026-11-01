<?php
// send-quote.php - cPanel Email Handler for Wholesale Inquiries
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

// Read raw JSON body
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    // Fallback to $_POST if sent as form-data
    $data = $_POST;
}

$recipient = "contact@moroccanskincare.com";

// Extract and sanitize fields
$name = isset($data["name"]) ? strip_tags(trim($data["name"])) : "";
$email = isset($data["email"]) ? filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL) : "";
$phone = isset($data["phone"]) ? strip_tags(trim($data["phone"])) : "Not provided";
$country = isset($data["country"]) ? strip_tags(trim($data["country"])) : "Not specified";
$product = isset($data["product"]) ? strip_tags(trim($data["product"])) : "General Wholesale Inquiry";
$format = isset($data["format"]) ? strip_tags(trim($data["format"])) : "Standard";
$quantity = isset($data["quantity"]) ? strip_tags(trim($data["quantity"])) : "Not specified";
$notes = isset($data["notes"]) ? strip_tags(trim($data["notes"])) : "No extra notes";
$formType = isset($data["formType"]) ? strip_tags(trim($data["formType"])) : "Quote Request";

// Validate mandatory fields
if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Name and valid Email are required."]);
    exit;
}

// Subject
$subject = "[MSC {$formType}] {$product} - {$name}";

// Email Body HTML
$messageHtml = "
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fa; color: #222; margin: 0; padding: 20px; }
  .card { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
  .header { background: #1B4D3E; color: #ffffff; padding: 24px; text-align: center; }
  .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
  .content { padding: 24px; }
  .table { width: 100%; border-collapse: collapse; margin-top: 15px; }
  .table td { padding: 10px 12px; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
  .table td.label { font-weight: bold; width: 35%; color: #555; background-color: #fafafa; }
  .notes { margin-top: 20px; padding: 15px; background: #fdf8f4; border-left: 4px solid #C5A059; border-radius: 4px; font-size: 14px; }
  .footer { padding: 16px; text-align: center; font-size: 12px; color: #888; background: #f9f9f9; }
</style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h1>Nouvelle Demande / New Wholesale Inquiry</h1>
    </div>
    <div class='content'>
      <table class='table'>
        <tr><td class='label'>Produit / Product</td><td><strong>" . htmlspecialchars($product) . "</strong></td></tr>
        <tr><td class='label'>Nom / Name</td><td>" . htmlspecialchars($name) . "</td></tr>
        <tr><td class='label'>Email</td><td><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></td></tr>
        <tr><td class='label'>Tél / WhatsApp</td><td>" . htmlspecialchars($phone) . "</td></tr>
        <tr><td class='label'>Pays / Destination</td><td>" . htmlspecialchars($country) . "</td></tr>
        <tr><td class='label'>Format / Packaging</td><td>" . htmlspecialchars($format) . "</td></tr>
        <tr><td class='label'>Quantité / Quantity</td><td>" . htmlspecialchars($quantity) . "</td></tr>
      </table>
      <div class='notes'>
        <strong>Message / Notes:</strong><br>
        " . nl2br(htmlspecialchars($notes)) . "
      </div>
    </div>
    <div class='footer'>
      Ce message a été envoyé depuis le formulaire du site moroccanskincare.com
    </div>
  </div>
</body>
</html>
";

// Headers
$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/html; charset=UTF-8";
$headers[] = "From: Moroccan Skin Care <no-reply@moroccanskincare.com>";
$headers[] = "Reply-To: " . htmlspecialchars($name) . " <" . $email . ">";
$headers[] = "X-Mailer: PHP/" . phpversion();

// Send email
$sent = @mail($recipient, $subject, $messageHtml, implode("\r\n", $headers));

if ($sent) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Inquiry received successfully."]);
} else {
    // If mail function failed on server, return partial status
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Server mail delivery failed."]);
}

