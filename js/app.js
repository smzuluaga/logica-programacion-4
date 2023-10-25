/* 
Crear un programa en Javascript que realice lo siguiente:
    * Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
    * Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
    * Debe imprimir ambos resultados por consola o por el DOM.
    * Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
*/  


// isNaN(dataFromValue) ? alert("El dato ingresado no corresponde a un valor válido. \n DEBE INGRESAR UN VALOR NUMÉRICO") : convertirTemperatura(inputCelcius);



// MANIPULACION DEL DOM 

// SECCION TEMPERATURAS
function convertirTemperatura() {
    
    let inputFrom = document.getElementById("inputFrom");
    let dataFrom = document.getElementById("dataFrom");
    let showTemperatura1 = document.getElementById("showTemperatura1");
    let showTemperatura2 = document.getElementById("showTemperatura2");

    let inputFromValue = inputFrom.value;
    let dataFromValue = parseFloat(dataFrom.value);

    if (!Number(dataFromValue)){
        alert ("El dato que ingreso no es un número. \nIngrese un valor válido")
        document.getElementById("dataFrom").value = "";
        document.getElementById("showTemperatura1").innerHTML = "";
        document.getElementById("showTemperatura2").innerHTML = "";

        return 
    }

    switch(inputFromValue){
        case "C":
            convertirCelcius(dataFromValue);
        break;
        case "F":
            convertirFahreinheit(dataFromValue);
        break;
        case "K":
            convertirKelvin(dataFromValue);
        break;
        default:
            alert("Opcion Seleccionada No Valida.")
    }


    function convertirCelcius(tempCelcius) {
        
        let tempFahrenheit = (tempCelcius * 9/5)+32;
        let tempKelvin =  tempCelcius + 273.15;

  
        showTemperatura1.innerHTML= `${tempCelcius}° C = ${tempFahrenheit.toFixed(2)} ° F`;
        showTemperatura2.innerHTML= `${tempCelcius}° C = ${tempKelvin.toFixed(2)} ° K`;

    };
    
    function convertirFahreinheit(tempFahrenheit) {
        
        let tempCelcius = (tempFahrenheit-32)*(5/9);
        let tempKelvin =  (tempFahrenheit-32)*(5/9)+273.15;
        
        // alert(tempFahrenheit)
        // alert(tempKelvin)
        // alert(tempCelcius)
        showTemperatura1.innerHTML= `${tempFahrenheit}° F = ${tempCelcius.toFixed(2)} ° C`;
        showTemperatura2.innerHTML= `${tempFahrenheit}° F = ${tempKelvin.toFixed(2)} ° K`;

        
    };

    function convertirKelvin(tempKelvin) {
        
        let tempFahrenheit = (tempKelvin-273.15)*(9/5)+32;
        let tempCelcius =  tempKelvin-273.15;   
        
        showTemperatura1.innerHTML= `${tempKelvin}° K = ${tempFahrenheit.toFixed(2)} ° F`;
        showTemperatura2.innerHTML= `${tempKelvin}° K = ${tempCelcius.toFixed(2)} ° C`;
    };
}

function limpiarTemperatura () {
    let inputFrom = document.getElementById("inputFrom");
    let dataFrom = document.getElementById("dataFrom");
    let showTemperatura1 = document.getElementById("showTemperatura1");
    let showTemperatura2 = document.getElementById("showTemperatura2");

    inputFrom.value = "";
    dataFrom.value = "";
    showTemperatura1.innerHTML = "";
    showTemperatura2.innerHTML = "";
}
    

// SECCION FACTORIAL

let backbutton = document.getElementById("back-button");


function calcularFactorial() {
    let dataFrom = document.getElementById("dataFrom");
    let showFactorial = document.getElementById("showFactorial");

    let dataFromValue = parseFloat(dataFrom.value);

    if (!Number(dataFromValue)){
        showFactorial.innerHTML= "El dato que ingreso no es un número. \nIngrese un valor válido";
        document.getElementById("dataFrom").value = "";
        document.getElementById("showTemperatura1").innerHTML = "";
        document.getElementById("showTemperatura2").innerHTML = "";

        return 
    }

    if (dataFromValue % 1 !== 0){
        showFactorial.innerHTML= "El número que ingresó no es entero. Ingrese un número entero para continuar";
        return;
    }
    
    let factorial = 1;
    
    for (let i = dataFromValue; i > 0; i--){
        factorial *= i;
    }
    
    showFactorial.innerHTML = `La factorial de ${dataFromValue} es ${factorial}`;
}

function limpiar () {
    dataFrom.value="";
    showFactorial.innerHTML="";
}




// SECCION FIBONACCI
const input = document.getElementById("dataFromFiconacci");
const output = document.getElementById("showFibonacci");

function mostrarFibonacci() {

    if (input.value === "") {output.innerHTML= "Ingrese un valor"; return}
    let times = input.value;
    let fibo = [0,1];

    for (let i = 0; i < times-2 ; i++) {
        fibo.push(fibo[i]+fibo[i+1])
    }

    output.innerHTML= fibo;
}

function limpiarFibonacci () {
    input.value="";
    output.innerHTML="";
}