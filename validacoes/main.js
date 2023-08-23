// alert("Seja bem-vindo, lembre-se apenas o campo-B é válido")

const form = document.getElementById ('form-campos');

form.addEventListener("submit", function (e) {


  let numA =  (document.getElementById("campoa"));
  let numB =  (document.getElementById("campob"));


e.preventDefault();
	  numA.value = "";
	  numB.value = "";
	});


  botao.addEventListener("click", function (e) {
	  if (numB.value > numA.value) {
	     alert("Campo válido");
	  } else {
	     alert("Campo inválido");
	  }
	});

	function resultado (){
		for (let numB => numA ){
			
		}
	}
