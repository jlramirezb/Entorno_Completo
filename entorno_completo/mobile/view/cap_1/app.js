let btnPreg1 = document.getElementById("btnPreg1");
let btnPreg2 = document.getElementById("btnPreg2");
let btnPreg3 = document.getElementById("btnPreg3");
let btnGuardar = document.getElementById("btnguardar");

let nombre = document.getElementById("nombre");
let cedula = document.getElementById("cedula");
let seccion = document.getElementById("seccion");

function ActivaBotones(){
    
    if (nombre.value!=="" && cedula.value!=="" && seccion.value!==""){
        //console.log("Enyr")
        btnGuardar.disabled = false;
    }
    else{
        btnGuardar.disabled = true;
    }
}

function ActivarPreguntas(){
    //Aqui se deberia verificar que la persona ingreso de manera correcta la información y en caso positivo activar las preguntas
    if(btnGuardar.disabled===false){
        btnPreg1.disabled = false;
        btnPreg2.disabled = false;
        btnPreg3.disabled = false;
    }
}

function abrirPagina(idBoton) {
    if(idBoton==="btnPreg1")
        window.location.href = "pordesarrollar.html";
    else if(idBoton==="btnPreg2")
        window.location.href = "pag_Ex_P2.html";
}

nombre.addEventListener('input',ActivaBotones);
cedula.addEventListener('input',ActivaBotones);
seccion.addEventListener('change',ActivaBotones);
btnGuardar.addEventListener("click",ActivarPreguntas);

btnPreg1.addEventListener("click", function(){
    abrirPagina(this.id);
});

btnPreg2.addEventListener("click", function(){
    abrirPagina(this.id);
});