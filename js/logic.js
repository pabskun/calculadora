'use strict';

let input_numero1 = document.querySelector('#txt-numero1');
let input_numero2 = document.querySelector('#txt-numero2');
let lista_operaciones = document.querySelector('#slt-operaciones');
let btn_calcular = document.querySelector('#btn-calcular');
let output_resultado = document.querySelector('#txt-resultado');

let calcular_resultado = () => {
    let numero1 = Number(input_numero1.value);
    let numero2 = Number(input_numero2.value);
    let operacion = lista_operaciones.value;
    let resultado = 0;

    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        default:
            resultado = 0;
            break;
    }
    output_resultado.value = `El resultado de la operación es ${resultado}`;


};





btn_calcular.addEventListener('click', calcular_resultado);