import connection from './db.js';

function create(nome, email, callback) {
    const query = 'INSERT INTO usuario (nome, email) VALUES (?, ?)';
    connection.query(query, [nome, email], callback);
}

export default create