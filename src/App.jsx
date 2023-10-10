import { useState } from "react";

import InputMask from "react-input-mask";
import "./main.css";

function App() {

  //  permite a criação de estado no componente através de função e faz
  //  o gerenciamento do estado local do componente retorna um array como resultado. 
   const [peso, setPeso] = useState("");
   const [altura, setAltura] = useState("");

   const [mensagem, setMensagem] = useState("");
   const [efeitos, setEfeitos] = useState("");
   const [imcMensagens, setImcmensagens] = useState("");

  function botaoImc (){

    //IMC = peso / (altura x altura).
    //O resultado de IMC é dado em kg/m2.


    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(altura === "" && peso === ""){
        alert(" Por Favor, preencha a altura corretamente !");
    }else if(!alt){
        alert("Por Favor, preencha o peso corretamente !");
        
   }else if(imc < 18.4){
    setMensagem(`	Magreza`);
    setEfeitos(`Riscos : Diabetes e hipertireoidismo.`);
    setImcmensagens(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if (imc >= 18.5 && imc < 24.9){
    setMensagem(`Normal`);
    setEfeitos(`Riscos: Hipertensão, diabetes, asma, apneia do sono, cancro( conjunto de mais de 100 doenças que têm em comum o crescimento desordenado de células.)`);
    setImcmensagens(`Seu IMC é: ${imc.toFixed(2)}`);
    
   }else if(imc >= 25 && imc < 29.9){
    setMensagem(`Sobrepeso`);
    setEfeitos(`Riscos: Pressão alta, diabetes, problemas nas articulações, dificuldades respiratórias, gota, pedras na vesícula e até algumas formas de câncer.`);
    setImcmensagens(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if(imc >= 30 && imc < 34.9){
    setMensagem(`Obesidade grau I`);
    setEfeitos(`Riscos: Pressão alta, diabetes, problemas nas articulações, dificuldades respiratórias, gota, pedras na vesícula e até algumas formas de câncer`);
    setImcmensagens(`Seu IMC é: ${imc.toFixed(2)}`);

   }else if(imc >= 35 && imc < 40){
    setMensagem(`Obesidade grau II`);
    setEfeitos(`Riscos: Hipertensão, artrose,  doenças vasculares,  má circulação sanguínea das pernas`);
    setImcmensagens(`Seu IMC é: ${imc.toFixed(2)}`);
   }else if(imc >= 40){
    setMensagem(`Obesidade grau III`);
    setEfeitos(`Riscos:  Hipertensão arterial, diabetes, colesterol elevado, sedentarismo e depressão`);
    setImcmensagens(`Seu IMC é: ${imc.toFixed(2)}`);
   }
     setPeso("");
     setAltura("");
  }


  return (
    
      <div className="container">
        <div className="input">
          <h1 className="titulo">Calcula IMC</h1>
           <p className="text">Dígite seu peso e altura , Logo em seguida vamos calcular seu IMC</p>

           <InputMask
           
          className="campo"
          mask="999" 
          type="text"
          placeholder="Peso Ex: 80 ou 100"
          value={peso}
          onChange={(evento) => setPeso(evento.target.value)}
        />
            <InputMask
          className="campo"
          mask="***" 
          type="text"
          placeholder="Altura Ex: 1.70"
          value={altura}
          onChange={(evento) => setAltura(evento.target.value)}
        />
          <button className="button" onClick={botaoImc}>
            Calcular
            </button>

          <p className="mensagens">
              {mensagem} <br />
              {efeitos}  <br />
              {imcMensagens}
          </p>

        </div>

      </div>
  )

  
}

export default App


