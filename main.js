// nome como arrays 
const form = document.getElementById('form-contato');
const nome = []; 

let contatos = '';

 form.addEventListener ('submit', function(e) {
  e.preventDefault();

  adicionaAgenda();
  atualizarFormulario();

});

  function adicionaAgenda() {
  const inputAdicionarContato = document.getElementById('contato');
  const inputNumeroAdicionado = document.getElementById('telefone');

  if (nome.includes(inputAdicionarContato.value)){
    alert(`O contato: ${inputAdicionarContato.value} já foi adicionado`);
  }else {
    nome.push(inputAdicionarContato.value);
    
  let contato = `<tr>`;
  contato += `<td>${inputAdicionarContato.value}</td>`;
  contato += `<td>${inputNumeroAdicionado.value}</td>`;
  contato += `<td>${inputNumeroAdicionado.value >= 10 ? 'Salvo' : 'Não salvo'}</td>`;
  contato += `</tr>`;
 
 contatos += contato;
}
 inputAdicionarContato.value = '';
 inputNumeroAdicionado.value = '';

 
 }

 function atualizarFormulario() {

 const corpoFormulario = document.querySelector('tbody');
 corpoFormulario.innerHTML = contatos;
}