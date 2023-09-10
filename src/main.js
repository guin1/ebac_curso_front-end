

let alunos = [
  {name: 'Guilherme', Nota: 9},
  {name: 'Paulo', Nota: 6},
  {name: 'Nicolly', Nota: 7},
  {name: 'Noa', Nota: 4},
  {name: 'Gustavo', Nota: 2},
  {name: 'Maia', Nota: 10},
  {name: 'Eloa', Nota: 1},
  {name: 'Giovanny', Nota: 6}
];

let alunosAcimaDeSeis = [];

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].Nota >= 6) {
    alunosAcimaDeSeis.push(alunos[i]);
  }
}
console.log(alunosAcimaDeSeis);