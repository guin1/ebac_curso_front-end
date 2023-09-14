"use strict";
function calcularArea(comprimento, largura) {
    return comprimento * largura;
}
function somar(...soma) {
    console.log(soma);
}
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `Olá + ${this.nome}`;
    }
}
