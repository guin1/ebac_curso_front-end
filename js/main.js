// $(document).ready(function(){
// $('#nome').mask('ssss')
//   });
$('#nome').mask('Guilherme barbosa de lima')
$('#telefone').mask('(00) 00000-0000')
$('#cpf').mask('000.000.000-00')
$('#cep').mask('00000-000')
$('#endereco').mask('Rua dos jatobas')


$('form').validate ({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true, 
            email: true
        },
        telefone: {
            required: true
        },
        insiraOCpf: {
            required: true
        },
        insiraOCep :{
            required: true,
        },
        endereco :{
            required: true,
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome.',
        email: 'Por favor, insira o seu email.',
        telefone: 'Por favor, insira o seu telefone.',
        insiraOCpf: 'Por favor, insira o seu insira o Cpf.',
        insiraOCep: 'Por favor, insira o seu insira o seu cep.',
        endereco: 'Por favor, insira o seu endereço.',
     },
     submitHandler: function(form) {
        console.log(form)
     },
     invalidHandler: function(evento, validador) {
        let preencherCampo = validador.numberOfInvalids();
        if (preencherCampo) {
            alert(`Existem ${preencherCampo} campos incompleto`)
        }
    }
})















































    // $('form').validate ({
    //     rules: {
    //         nome: {
    //             required: true
    //         },
    //         email: {
    //             required: true, 
    //             email: true
    //         },
    //         telefone: {
    //             required: true
    //         },
    //         insiraOCpf: {
    //             required: true
    //         },
    //         insiraOCep :{
    //             required: true,
    //         }
    //     },
    //      messages: {
    //         nome: 'Por favor, insira o seu nome.'
    //      },
    //      submitHandler: function(form) {
    //         console.log(form)
    //      },
    //      invalidHandler: function(evento, validador) {
    //         let camposIncorretos = validador.numberOfInvalids();
    //         if (camposIncorretos) {
    //             alert(`Existem ${camposIncorretos} campos incorretos`)
    //         }
    //      }
    // })