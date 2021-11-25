let number1 =0;
let number2 =0;
let operacion = undefined;
let opeActual="";
let opeAnterior="";

const number = document.getElementsByName("data-number");
const opera = document.getElementsByName("data-opera");
const igual = document.getElementsByName("data-igual")[0];
const borrar = document.getElementsByName("data-delete")[0];
var result = document.querySelector(".number");

number.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
    })
});

opera.forEach(function(boton){
    boton.addEventListener("click", function(){
        seleccionarOperacion(boton.innerText);
    })
});

igual.addEventListener("click", (e)=>{
    calcular();
    actualizarDisplay();
})

borrar.addEventListener("click", (e)=>{
    borrarDisplay();
    actualizarDisplay();
})

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}
function actualizarDisplay() {
    result.value = opeActual;
}

function borrarDisplay(){
    opeActual ="";
    opeAnterior ="";
    operacion = undefined; 
}

function seleccionarOperacion(op) {
    if (opeActual === "")return;
    if (opeAnterior !== "") {
        calcular();
    }
    operacion = op.toString(),
    opeAnterior = opeActual;
    opeActual = "";
}

function calcular() {
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior)|| isNaN(actual))return;
    switch (operacion) {
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            break;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
}