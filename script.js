// Simulação do envio de e-mail (pode ser implementado com um backend real)
function sendConfirmationEmail(email) {
    // Aqui, você poderia usar um serviço de envio de e-mails para enviar um link de confirmação
    console.log(`Enviando e-mail de confirmação para: ${email}`);
}

// Alterar o evento de submissão do formulário para enviar o e-mail
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    if (validateEmail(email)) {
        if (hasVoted(email, selectedProjectId)) {
            alert("Você já votou nesse projeto.");
        } else {
            sendConfirmationEmail(email);  // Enviar e-mail de confirmação
            alert("Um e-mail de confirmação foi enviado. Por favor, confirme para registrar seu voto.");
            // Aqui, você não registra o voto até que o usuário confirme através do e-mail
        }
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
});
