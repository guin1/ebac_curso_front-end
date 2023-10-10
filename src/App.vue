<template>
  <div class="container bg-success text-white bg-opacity-85 ">
    <header class="p-5 mb-4 mt-4 rounded-3">
      <h1>Calculadora de aritmética</h1>
    </header>
    <form >
      <div class="row">
        <div class="col">
          <input v-model="num1" type="number" placeholder="Insira um número" required class="form-control">
        </div>
        <div class="col">
          <input v-model="num2" type="number" placeholder="Insira um número" required class="form-control">
        </div>
        <div class="col-md-4">
          <select class="form-control" v-model="operacao">
            <option value="">Selecionar Opção:</option>
            <option value="soma">Soma</option>
            <option value="subtracao">Subtração</option>
            <option value="divisao">Divisão</option>
            <option value="multiplicacao">Multiplicação</option>
          </select>
          <p class="mt-4"> {{ resultado }}</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      operacao: "",
    };
  },
  computed: {
    resultado() {
      const num1 = parseFloat(this.num1);
      const num2 = parseFloat(this.num2);

    
      switch (this.operacao) {
           case "soma":
               return num1 + num2;
            case "subtracao":
          return num1 - num2;
        case "divisao":
          if (num2 !== 0) {
            return num1 / num2;
          } else {
            return "Erro: Divisão por zero";
          }
        case "multiplicacao":
          return num1 * num2;
        default:
          return "Resultado :";
      }
    },
  },
};
</script>

<style scoped>
</style>  
