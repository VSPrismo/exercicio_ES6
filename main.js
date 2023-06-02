// Classe construtora
function Aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
  
  // Array de alunos
  const alunosNotas = [
    new Aluno("João", 7),
    new Aluno("Maria", 5),
    new Aluno("Pedro", 3),
    new Aluno("Ana", 6),
    new Aluno("Lucas", 9),
    new Aluno("Carla", 4),
    new Aluno("Gustavo", 2),
    new Aluno("Laura", 6),
    new Aluno("Fernando", 5),
    new Aluno("Mariana", 2),
    new Aluno("Rodrigo", 6),
    new Aluno("Juliana", 8),
    new Aluno("Rafaela", 7),
  ];
  
  // Função para filtrar os alunos aprovados
  function filtrarAlunos(alunosNotas) {
    return alunosNotas.filter(aluno => aluno.nota >= 6);
  }
  
  // Chamando a função e exibindo o array de alunos aprovados
  const alunosAprovados = filtrarAlunos(alunosNotas);
  console.log(alunosAprovados);
  
