//controler

import create from './modelUser.js';

export async function create(req, res) {
    const { nome, email } = req.body

    create(nome, email, (result) => {
        res.status(201).json({ mensagem: 'User criado', usuario: result })
    })
}

export default re