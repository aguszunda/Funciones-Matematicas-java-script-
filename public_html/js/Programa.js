
function sumar()
{
    var a = parseInt(prompt("Ingrese su Primer valor: ", 0));
    var b= parseInt(prompt("Ingrese su Segundo valor: ", 0));
    var c = a + b;
    imprimir(c);
}
function restar()
{
    var a = parseInt(prompt("Ingrese su Primer valor: ", 0));
    var b= parseInt(prompt("Ingrese su Segundo valor: ", 0));
    var c = a - b;
    imprimir(c);
}
function multiplicar()
{
    var a = parseInt(prompt("Ingrese su Primer valor: ", 0));
    var b= parseInt(prompt("Ingrese su Segundo valor: ", 0));
    var c = a * b;
    imprimir(c);
}
function dividir()
{
    var a = parseInt(prompt("Ingrese su Primer valor: ", 0));
    var b= parseInt(prompt("Ingrese su Segundo valor: ", 0));
    var c = a / b;
    imprimir(c);
}
function imprimir(valor)
{
    var resultado=document.getElementById("resultado");
    resultado.innerHTML= valor;
}
function limpiar()
{
    document.getElementById("resultado").innerHTML="";
}