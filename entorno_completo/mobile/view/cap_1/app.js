let btnPreg1 = document.getElementById("btnPreg1");
let btnPreg2 = document.getElementById("btnPreg2");
let btnPreg3 = document.getElementById("btnPreg3");
let btnGuardar = document.getElementById("btnguardar");



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
    guardaData();
    if(btnGuardar.disabled===false){
        btnPreg1.disabled = false;
        btnPreg2.disabled = false;
        btnPreg3.disabled = false;
    }
} 

function guardaData(){
    let nombre = document.getElementById("nombre");
    let cedula = document.getElementById("cedula");
    let seccion = document.getElementById("seccion");

    localStorage.setItem("Personal", JSON.stringify({
        nombre: nombre.value,
        cedula: cedula.value,
        seccion: seccion.value
    }));
    nombre.disabled = true;
    cedula.disabled = true;
    seccion.disabled = true;
}

function cargaData(){    
    let nombre = document.getElementById("nombre");
    let cedula = document.getElementById("cedula");
    let seccion = document.getElementById("seccion");
    const dtosPersonals = JSON.parse(localStorage.getItem("Personal"));
    if(dtosPersonals){
        nombre.value = dtosPersonals.nombre;
        cedula.value = dtosPersonals.cedula;
        seccion.value = dtosPersonals.seccion;
        btnPreg1.disabled = false;
        btnPreg2.disabled = false;
        btnPreg3.disabled = false;
        nombre.disabled = true;
        cedula.disabled = true;
        seccion.disabled = true;
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

window.onload = cargaData;

btnPreg3.addEventListener("click", e=>{
    let nombre = document.getElementById("nombre");
    let cedula = document.getElementById("cedula");
    let seccion = document.getElementById("seccion");
    nombre.value = "";
    cedula.value = "";
    seccion.value = "";
    btnGuardar.disabled = true;
    nombre.disabled = false;
    cedula.disabled = false;
    seccion.disabled = false;
    localStorage.removeItem("Personal");
    btnPreg1.disabled = true;
    btnPreg2.disabled = true;
    btnPreg3.disabled = true;
});
