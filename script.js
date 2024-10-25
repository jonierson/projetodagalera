let usersVoted = []; // Array para armazenar os e-mails que já votaram

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const email = profile.getEmail();

    // Exibir a seção de votação
    document.getElementById('content').style.display = 'block';
    document.getElementById('email').value = email; // Preencher o campo de e-mail com o e-mail do usuário
}

function onFailure(error) {
    console.log(error);
}

function renderButton() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 300,
        'height': 40,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSignIn,
        'onfailure': onFailure
    });
}

// Lógica de votação
document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const selectedVote = document.getElementById('vote').value;
    const alertBox = document.getElementById('alert');

    if (usersVoted.includes(email)) {
        alertBox.textContent = 'Você já votou uma vez com este e-mail!';
        alertBox.style.display = 'block';
    } else {
        usersVoted.push(email); // Adiciona o e-mail à lista de votos
        alertBox.textContent = 'Obrigado por votar! Sua escolha: ' + selectedVote;
        alertBox.style.color = 'green';
        alertBox.style.display = 'block';

        // Aqui você pode adicionar lógica para enviar o voto ao servidor
    }
});

function start() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com'
        }).then(renderButton);
    });
}

<script async defer onload="start()"></script>
