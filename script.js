// Instale as dependências com: npm install express body-parser cors

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Simulação de um banco de dados em memória (para uma aplicação real, use um banco de dados)
let votes = {};

// Endpoint para registrar o voto
app.post('/vote', (req, res) => {
    const { email, projectId } = req.body;
    const ip = req.ip;  // Captura o endereço IP do solicitante

    // Verifica se já existe um voto do mesmo IP para o mesmo projeto
    if (votes[ip] && votes[ip].includes(projectId)) {
        return res.status(403).json({ message: 'Você já votou nesse projeto usando esse IP.' });
    }

    // Registra o voto
    if (!votes[ip]) {
        votes[ip] = [];
    }
    votes[ip].push(projectId);

    res.status(200).json({ message: 'Voto registrado com sucesso!' });
});

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

