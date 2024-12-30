let containerCalculadora = document.querySelector('.containerCalculadora');
let resultado = document.querySelector('#resultado');
let valorAnterior = ''; // Ultimo valor a ser digitado
let valorAtual = ''; // Valor atual pos selecionar o operador
let operador = ''; // Guarda o operador selecionado

// Funções para os números (botões 0-9)
function btn7() {
    resultado.innerHTML += '7';
}

function btn8() {
    resultado.innerHTML += '8';
}

function btn9() {
    resultado.innerHTML += '9';
}

function btn4() {
    resultado.innerHTML += '4';
}

function btn5() {
    resultado.innerHTML += '5';
}

function btn6() {
    resultado.innerHTML += '6';
}

function btn1() {
    resultado.innerHTML += '1';
}

function btn2() {
    resultado.innerHTML += '2';
}

function btn3() {
    resultado.innerHTML += '3';
}

function btn0() {
    resultado.innerHTML += '0';
}

function btnPonto() {
    if(!resultado.innerHTML.includes('.')){
        resultado.innerHTML += '.';
    }else{
        alert('Só pode inserir um ponto depois do número!')
    }
}

// Operadores
function btnAdicao(){
    valorAnterior = resultado.innerHTML // Salva o número atual
    operador = '+' // Define o operador
    resultado.innerHTML = '' // Limpa o visor
}

function btnSubtracao(){
    valorAnterior = resultado.innerHTML
    operador = '-'
    resultado.innerHTML = ''
}

function btnMultiplicar(){
    valorAnterior = resultado.innerHTML
    operador = '*'
    resultado.innerHTML = ''
} 

function btnDividir(){
    valorAnterior = resultado.innerHTML
    operador = '/'
    resultado.innerHTML = ''
}

// Exibir o resultado
function btnResultado(){
    valorAtual = resultado.innerHTML

    let valorAtualConvertido = parseFloat(valorAtual)
    let valorAnteriorConvertido = parseFloat(valorAnterior)
    let resultadoFinal = ''

    if(operador == '+'){
        resultadoFinal = valorAnteriorConvertido + valorAtualConvertido
        resultado.innerHTML = resultadoFinal
    }else if(operador == '-'){
        resultadoFinal = valorAnteriorConvertido - valorAtualConvertido
        resultado.innerHTML = resultadoFinal 
    }else if(operador == '*'){
        resultadoFinal = valorAnteriorConvertido * valorAtualConvertido
        resultado.innerHTML = resultadoFinal 
    }else{
        resultadoFinal = valorAnteriorConvertido / valorAtualConvertido
        resultado.innerHTML = resultadoFinal 
    }
}

function btnLimpar() {
    // Reseta os valores
    resultado.innerHTML = '';
    valorAnterior = '';
    valorAtual = '';
    operador = '';

    // Exibe uma mensagem informativa
    alert('Os valores foram resetados. Insira uma nova operação!');
}