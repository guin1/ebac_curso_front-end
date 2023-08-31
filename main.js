// $('#btn-buscar-cep').click(function() {
//     const cep = $('#cep').val();
//     const endpoint = `https://viacep.com.br/ws/${cep}/json`;
//     const botao = $(this);
//     $(botao).find('i').addClass('d-none');
//     $(botao).find('span').removeClass('d-none');
//     fetch(endpoint)
//     .then(function(resposta){
//         return resposta.json();
//     })
//     .then(function(json) {
//         const logradouro = json.logradouro;
//     const bairro = json.bairro;
//     const cidade = json.localidade;
//     const estado = json.uf;
//     const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
//     $('#endereco').val(endereco);
// })
// .catch(function(erro){
//     alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
// })
// .finally(function(){
//     setTimeout(function() {
//         $(botao).find('i').removeClass('d-none');
//         $(botao).find('span').addClass('d-none');
//     }, 1000);
// })
// })
// $('#formulario-pedido').submit(function(evento) {
// evento.preventDefault();

// if ($('#nome').val().length == 0) {
// throw new Error('Digite o nome');
// }
// })

$(document).ready(function() {

$('#link').click(function(){
    const name = $('#name').val();
    const endpoint = `https://github.com/guin1/ws/${link}/json`;
    const botao = $(this);
    // const username = $('#username').val();
    // const avatar = $('#avatar').val();
    // const repos = $('#repos').val();
    // const followers = $('#followers').val();
    // const following = $('#following').val();
    // const link = $('#link').val();

    fetch('endpoint')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json) {
   const name = json.name;
    const username = json.username;
    const avatar = json.avatar;
    const repos = json.repos;
    const followers = json.followers;
    const following = json.following;
    const link = `${name}, ${username} - ${avatar} - ${repos} - ${followers} - ${following}`;
    $('#profile-link').val(profile-link);
})
.catch(function(erro){
    alert("Ocorreu um erro ao buscar o Github, tente novamente mais tarde.")
})
.finally(function(){
    setTimeout(function() {
        $(botao).find('i').removeClass('d-none');
        $(botao).find('span').addClass('d-none');
    }, 1000);
})
})
$('#formulario-pedido').submit(function(evento) {
evento.preventDefault();

if ($('#nome').val().length == 0) {
throw new Error('Digite o nome');
}
})
})
