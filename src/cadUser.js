import express from 'express';
import cors from 'cors';
import create from './controler.js';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/usuario', create);


app.listen(3000, () => {
    console.log('Servidor rodando com sucesso na porta 3000');
});

export default app;