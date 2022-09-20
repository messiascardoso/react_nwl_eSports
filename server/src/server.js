import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Messias' },
        { id: 2, name: 'Rosangela' },
        { id: 3, name: 'Ellen' },
    ]);
});
app.listen(3333, () => {
    console.log('Servidor rodando');
});
