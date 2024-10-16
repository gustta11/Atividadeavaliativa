const { getAlunoById, connection} = require("./db.js");

describe('Testes para getAlunoById', () => {
    beforeAll(async () => {
        
    });

    afterAll(async()=>{
        await connection.end()
    })

    test('1- Vai garantir que o campo do nome não seja null ou undefined', async () => {
        const aluno = await getAlunoById(1);
        expect(aluno.nome_aluno).not.toBeNull();
        expect(aluno.nome_aluno).not.toBeUndefined();
    })

    test('2- Vai garantir que o campo da matricula não seja null ou undefined', async () => {
        const aluno = await getAlunoById(1);
        expect(aluno.mat_aluno).not.toBeNull();
        expect(aluno.mat_aluno).not.toBeUndefined();
    })

    test('3 - A matrícula deve ter exatamente 8 dígitos', async () => {
        const aluno = await getAlunoById(1);
        expect(aluno.mat_aluno).toMatch(/^\d{8}$/); 
    });

    test('4- Vai garantir que o email está em um formato válido', async () => {
        const aluno = await getAlunoById(1);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        expect(aluno.email_aluno).toMatch(emailRegex);
    });

    
    test('8 - teste de performance para buscar agendamentos por nome', async () => {
        const { performance } = require('perf_hooks');
        const start = performance.now();

        const alunos = await getAlunoById('Ana Silva');

        const end = performance.now();
        const duration = end - start;

        console.log(`Tempo de execução para buscar agendamentos por nome: ${duration.toFixed(2)} ms`);

        expect(alunos).toHaveLength(1);
        expect(alunos[0]).toHaveProperty('nome_aluno', 'JOSE DE ALENCAR');
    });


   
})