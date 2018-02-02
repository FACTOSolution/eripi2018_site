<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = strip_tags(trim($_POST["nome"]));
	$name = str_replace(array("\r","\n"),array(" "," "),$name);
	$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
	$message = trim($_POST["mensagem"]);
	$subject = $_POST["assunto"];

	if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
		http_response_code(400);
		echo "Formulário incompleto.";
		exit;
	}

	$recipient = "kassio_venicios@hotmail.com";

	$email_content = $message;
	$email_headers = "From: $name <$email>\r\n";
	$email_headers .= "Reply-To: $name <$email>\r\n";
	$email_headers .= "Return-Path: $name <$email>\r\n";
	$email_headers .= "Content-Type: text/html; charset=UTF-8\r\n";
	$email_headers .= "X-Mailer: PHP". phpversion();

	if (mail($recipient, $subject, $email_content, $email_headers)) {
		http_response_code(200);
		echo "Mensagem foi enviada.";
	} else {
		http_response_code(500);
		echo "Erro ao enviar mensagem, tente novamente.";
	}

} else {
	http_response_code(403);
	echo "Método Http inválido.";
}

?>
