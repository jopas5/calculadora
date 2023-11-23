//Variables del display y los valores a calcular
let display = document.getElementById('display');
let valor = '';

// Esta función agrega el valor al final de la entrada actual y actualiza el campo de texto.
function AñadirAlDisplay(value) {
  valor += value;
  display.value = valor;
}

// Esta función borra la entrada actual y actualiza el campo de texto.
function LimpiarDisplay() {
  valor = '';
  display.value = '';
}

// Esta función evalúa la expresión en la entrada actual y muestra el resultado en el campo de texto.
// Captura y maneja errores si ocurren durante la evaluación.
function calcular() {
  try {
    valor = eval(valor); //eval toma las expresiones como argumentos y las ejecuta como codigo. 
    display.value = valor; //Muestra el resultado en el display
  } catch (error) {
    display.value = 'ERROR'; 
  }
}
