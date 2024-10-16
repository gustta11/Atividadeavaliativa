const express = require('express')
const app = express();
const {getAlunoById} = require('./db')


app.get('aluno/:id', async(req, res) =>{
    const {id} = req.params;
    try{
        const aluno = await getAlunoById(id);
        if(aluno){
            res.json(user)
        }else{
            res.status(404).json({message: 'Usuario não existe'});
        }
    } catch (error){
        res.status(500).json({message:'Erro de conexão com o BD'});
    }
})

module.exports = app;