//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

//id-input: mensaje
//id-button-encriptar: encriptar
//id-button-desencriptar: desencriptar

function encriptar(){

    var mensaje = document.getElementById("mensaje").value.toLowerCase()
//i es para mayusculas y minusculas
//g es para toda la oración
//m es para afectar multiples párrafos
    var SinEmensaje = mensaje.replace(/e/igm, "enter");
    var SinOmensaje = SinEmensaje.replace(/o/igm, "ober");
    var SinImensaje = SinOmensaje.replace(/i/igm, "imes");
    var SinAmensaje = SinImensaje.replace(/a/igm, "ai");
    var SinUmensaje = SinAmensaje.replace(/u/igm, "ufat");

    document.getElementById("señora").style.display = "none";
    document.getElementById("uwu").style.display = "none";
  
    document.getElementById("resultado").style.height = "400px";
    document.getElementById("resultado").style.display = "inherit";
    document.getElementById("resultado").innerHTML = SinUmensaje;

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){

    var mensaje = document.getElementById("mensaje").value.toLowerCase()

    mensaje = mensaje.replace(/enter/igm, "e");
    mensaje = mensaje.replace(/ober/igm, "o");
    mensaje = mensaje.replace(/imes/igm, "i");
    mensaje = mensaje.replace(/ai/igm, "a");
    mensaje = mensaje.replace(/ufat/igm, "u");

    document.getElementById("señora").style.display = "none";
    document.getElementById("uwu").style.display = "none";

    document.getElementById("resultado").style.height = "400px";
    document.getElementById("resultado").style.display = "inherit";
    document.getElementById("resultado").innerHTML = mensaje;

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


function copiar(){
    var contenido = document.querySelector("#resultado");
    contenido.select();
    contenido.setSelectionRange(0,999999);
    document.execCommand("copy")
    alert("Mensaje copiado con éxito")
}