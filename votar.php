<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $projeto = $_POST['projeto'];

    $to = $email;
    $subject = "Confirmação de Voto - Votação de Projetos";
    $message = "Obrigado por votar! Você votou no " . $projeto . ".";
    $headers = "From: no-reply@seusite.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "E-mail de confirmação enviado com sucesso!";
    } else {
        echo "Falha ao enviar o e-mail de confirmação.";
    }
}
?>
