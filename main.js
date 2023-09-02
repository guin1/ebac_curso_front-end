// criar uma clase de abstrçao, duas class que seja herdeira da AuthenticatorAssertionResponse,
// criar tres instantia

function Carro (modelo) {
  this.modelo = modelo;
  this.dizCambio = function() {
    console.log(this.modelo + " Automatic");
  }
  this.dizIpva = function() {
    console.log(this.ipva + " valor do ipva");
  }
}

function Descricao (modelo, ano, valor) {
    this.ano = ano;
    this.valor = valor;

    
    this.dizAno = function() {
        console.log(this.ano)
    }    
    Carro.call(this, modelo);
}

function Document (quilometragem, cor , ipva)  {
    this.quilometragem = quilometragem;
    this.cor = cor;
    this.ipva = ipva;

    this.dizAno = function() {
        console.log(this.ano)
    }    
    Carro.call(this, ipva);
 }



const carro1 = new Descricao ("Golf", "Ano 2019", 35000);
const valorIpva = new Document ("2400", "vermelho", "2000");

valorIpva.dizIpva();
carro1.dizCambio();
 carro1.dizAno();

