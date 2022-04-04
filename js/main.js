function fcirculo(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("circulo");
selector.className
}

function frombo(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("rombo");
    selector.className
}

function ftriangulo(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("triangulo");
    selector.className
}

function frectangulohorizontal(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("rectangulohorizontal");
    selector.className
}

function frectangulovertical(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("rectangulovertical");
    selector.className
}


function fimagen(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("imagen");
    selector.className
}

function arriba(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("subir");
    selector.className
}


function diagonal(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("diagonal");
    selector.className
}

function operaciones(){
    var a = Number(document.getElementById("valor1").value);
    var b = Number(document.getElementById("valor2").value);

    var operacion = document.getElementById("operaciones").value;

    switch (operacion) {
        case "+":
            resultado = a + b ;
            document.getElementById("respuesta").value = resultado;
            break;
        case "-":
            resultado = a - b ;
            document.getElementById("respuesta").value = resultado;
            break;
            case "*":
                resultado = a * b ;
                document.getElementById("respuesta").value = resultado;
                break;
            case "/":
                resultado = a / b ;
                document.getElementById("respuesta").value = resultado;
                break;
    }
}
function chatActive(){
    var selector = document.getElementById("chat")
    selector.classList.toggle("active");
    var selector2=document.getElementById("bntChat")
    selector2.classList.toggle("active");




}

