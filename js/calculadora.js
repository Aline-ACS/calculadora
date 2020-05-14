class Calculadora {
    constructor() {
        this.numero1 = document.getElementById('txtNumero1');
        this.numero2 = document.getElementById('txtNumero2');
        this.resultado = document.getElementById('resultado');

        this.btnSoma = document.getElementById('btnSoma');
        this.btnSubtracao = document.getElementById('btnSubtracao');
        this.btnMultiplicacao = document.getElementById('btnMultiplicacao');
        this.btnDivisao = document.getElementById('btnDivisao');

        this.fazerCalculo();
    }

    fazerCalculo() {
        this.btnSoma.onclick = event => this.somar();
        this.btnSubtracao.onclick = event => this.subtrair();
        this.btnMultiplicacao.onclick = event => this.multiplicar();
        this.btnDivisao.onclick = event => this.dividir();
    }

    somar() {

       const soma = parseFloat(this.numero1.value) + parseFloat(this.numero2.value);

       this.resultado.innerHTML += `
       <label> O resultado é ${soma} </label><br><br>`
    }


    subtrair() {

        const subtracao = parseFloat(this.numero1.value) - parseFloat(this.numero2.value);

        this.resultado.innerHTML += `
        <label> O resultado é ${subtracao} </label><br><br>`
    }

    multiplicar() {

        const multiplicacao = parseFloat(this.numero1.value) * parseFloat(this.numero2.value);

        this.resultado.innerHTML += `
        <label> O resultado é ${multiplicacao} </label><br><br>`
    }

    dividir() {

        const divisao = parseFloat(this.numero1.value) / parseFloat(this.numero2.value);

        this.resultado.innerHTML += `
        <label> O resultado é ${divisao} </label><br><br>`
    }
}


new Calculadora();