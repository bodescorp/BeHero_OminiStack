const express = require('express');

const app = express();

app.get('/',(request, response) => {
    return response.json ({
        evento: 'Semana OminiStack',
        Aluno: 'Glaymar',
        Mensagem: 'Hello World'
    });
});

app.listen(3333);

