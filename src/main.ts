function calcularArea (comprimento: number, largura: number): number{
    return comprimento * largura;
}

function somar(...soma: number[]): void {
console.log(soma)
}


class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): string {
        return `Olá + ${this.nome}`;
    }
}