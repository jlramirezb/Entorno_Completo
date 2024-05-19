let btnPreg1 = document.getElementById("btnPreg1");
let btnPreg2 = document.getElementById("btnPreg2");
let btnPreg3 = document.getElementById("btnPreg3");
let btnGuardar = document.getElementById("btnguardar");

let nombre = document.getElementById("nombre");
let cedula = document.getElementById("cedula");
let seccion = document.getElementById("seccion");

function ActivaBotones(){
    
    //console.log(btnGuardar)

    if (nombre.value!=="" && cedula.value!=="" && seccion.value!==""){
        //console.log("Enyr")
        btnGuardar.disabled = false;
    }
    else{
        btnGuardar.disabled = true;
    }
}

nombre.addEventListener('input',ActivaBotones);
cedula.addEventListener('input',ActivaBotones);
seccion.addEventListener('change',ActivaBotones);

 //