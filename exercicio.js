const alunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Pedro", nota: 7.5 },
    { nome: "Ana", nota: 6.0 },
    { nome: "Carlos", nota: 7.5 },
];

const notasUnicas = {};
const alunosSemDuplicatas = alunos.filter((aluno) => {
    if (!notasUnicas[aluno.nota]) {
        notasUnicas[aluno.nota] = true;
        return true;
    }
    return false;
});

console.log(alunosSemDuplicatas);
