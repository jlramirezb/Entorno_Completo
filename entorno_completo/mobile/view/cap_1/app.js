
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
        btnGuardar.disabled = true;
    }
} 

let db = null;

function guardaData(){
    let nombre = document.getElementById("nombre");
    let cedula = document.getElementById("cedula");
    let seccion = document.getElementById("seccion");

    let usuario = {
        nombre: nombre.value,
        cedula: cedula.value,
        seccion: seccion.value
    };
    
    // Abrir una conexión a la base de datos
    let request = indexedDB.open('miBaseDeDatos', 1);
    //console.log(request);
    request.onerror = function (event) {
        alert("Database error: " + event.target.error.name);
    };             

    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        const objectStore = db.createObjectStore("usuarios", { keyPath: "cedula" }); // Replace "id" with your desired key path
    };
        
    request.onsuccess = function(event) {
        db = event.target.result;
        console.log('Database created', db);     
    
        let transaction = db.transaction(['usuarios'], 'readwrite');
        console.log(transaction);
        let objectStore = transaction.objectStore('usuarios');

        let requestGuardar = objectStore.add(usuario);

        requestGuardar.onsuccess = function(event) {
            console.log('Datos guardados en IndexedDB');
        };

        requestGuardar.onerror = function(event) {
            console.error('Error guardando datos:', event.target.errorCode);
        };
    }

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
        window.location.href = "pag_Ex_P1.html";
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
    localStorage.removeItem("SeleccionadosP1");
    localStorage.removeItem("SeleccionadosP2");
    localStorage.removeItem('mathValuesA');
    localStorage.removeItem('mathValuesB');
    localStorage.removeItem('mathValues2A');
    localStorage.removeItem('mathValues2B');
    localStorage.removeItem('selectedValues');
    localStorage.removeItem('P1_Intentos1');
    localStorage.removeItem('P1_Intentos2');
    localStorage.removeItem('P2_Intentos1');
    localStorage.removeItem('P2_Intentos2');
    localStorage.removeItem('P3_Intentos1');
    localStorage.removeItem('P3_Intentos2');
    localStorage.removeItem('P3_Intentos3');
    

    /*let request = indexedDB.open('miBaseDeDatos', 1);

    request.onsuccess = (event) => {
        let db = event.target.result;

        // 2. Obtener el almacén de objetos
        let transaction = db.transaction('usuarios', 'readonly');
        console.log(transaction);
        let objectStore = transaction.objectStore('usuarios');

        const cursor = objectStore.openCursor();

        cursor.onerror = function(event) {
            console.error("Error retrieving data:", event.target.error);
        };

        cursor.onsuccess = function(event) {
            const cursorResult = event.target.result;
            if (cursorResult) {
                console.log("Data:", cursorResult.value); // This will log each object in the object store
                cursorResult.continue(); // Move to the next object
            } else {
                console.log("No more data in the object store.");
            }
        };
    };*/
});
