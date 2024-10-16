const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'escola_bd'
})

async function getAlunoById(id){
    const [rows] = await connection.query('SELECT * FROM alunos  WHERE idalunos = ?', [id]);
    return rows[0];
}

module.exports  = {getAlunoById, connection};