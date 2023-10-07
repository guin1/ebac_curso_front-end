import "./main.css"

function App() {
  
// function calcularIMC () {
//   ou peso dividido pela a altura vezes a altura ( peso ÷ (altura x altura)).
 
//     const alt = altura / 100;
//     const imc = peso / (alt * alt);

// }

  return (
    
      <div className="container">
        <div className="input">
          <h1 className="titulo">Calcula IMC</h1>
           <p className="text">Dígite seu peso e altura , Logo em seguida vamos calcular seu IMC</p>

            <input className="campo" type="number"placeholder="Peso Ex:70"  />
            
            <input className="campo" type="text" placeholder="Altura Ex: 170" />

          <button className="button">Calcular</button>

          <p className="text--mensagens">

          </p>

        </div>

      </div>
  )
}

export default App

