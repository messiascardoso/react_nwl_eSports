import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
    console.log('Acessou Ads')
    return response.json([
        {id: 1 , name: 'Name 1'},
        {id: 2 , name: 'Name 2'},
        {id: 3 , name: 'Name 3'},
        {id: 4 , name: 'Name 4'},
    ])
});

app.listen(3333, ()=> {
    console.log('Servidor rodando')
});