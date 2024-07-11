let btnPreg1 = document.getElementById("btnPreg1");
let btnPreg2 = document.getElementById("btnPreg2");
let btnPreg4 = document.getElementById("btnPreg4");
let btnGuardar = document.getElementById("btnguardar");

function ActivaBotones(){    
    if (nombre.value!=="" && cedula.value!=="" && seccion.value!==""){
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
        btnPreg4.disabled = false;
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
        let db = event.target.result;
        // Verificar si el usuario ya existe
        let transaction = db.transaction(['usuarios'], 'readonly');
        let objectStore = transaction.objectStore('usuarios');
        console.log(Number(usuario.cedula));
        let getRequest = objectStore.get(usuario.cedula);
        getRequest.onsuccess = function(event) {
            if (event.target.result) {                
                alert('El usuario con cédula ' + cedula + ' ya existe.22');
                btnPreg1.disabled = true;
                btnPreg2.disabled = true;
                btnPreg4.disabled = true;
                btnGuardar.disabled = true;
                nombre.disabled = false;
                cedula.disabled = false;
                seccion.disabled = false;
                nombre.value = "";
                cedula.value = "";
                seccion.value = "";
            } else {
                // El usuario no existe, proceder a guardarlo
                let transactionGuardar = db.transaction(['usuarios'], 'readwrite');
                let objectStoreGuardar = transactionGuardar.objectStore('usuarios');
                let fecha = new Date();
                usuario.Year_start = fecha.getFullYear();
                usuario.Month_start = fecha.getMonth() + 1; // Months are zero-based
                usuario.Day_start = fecha.getDate();
                usuario.Hora_start = fecha.getHours()
                usuario.Minutes_start = fecha.getMinutes();
                usuario.Seconds_start = fecha.getSeconds();

            // Actualizar el registro en la base de datos
            //let updateRequest = objectStore.put(usuario);
                let requestGuardar = objectStoreGuardar.add(usuario);
                requestGuardar.onsuccess = function(event) {
                    alert('Usuario guardado exitosamente.');
                    // Limpiar el formulario u otras acciones después de guardar
                };
                requestGuardar.onerror = function(event) {
                    alert('Error al guardar usuario: ' + event.target.error);
                };
            }
        };
        getRequest.onerror = function(event) {
            alert('Error al verificar usuario: ' + event.target.error);
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
        btnPreg4.disabled = false;
        btnGuardar.disabled = true;
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

btnPreg4.addEventListener("click", e=>{
    let nombre = document.getElementById("nombre");
    let cedula = document.getElementById("cedula");
    let seccion = document.getElementById("seccion");
    let cedulaDB = cedula.value;
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
    //btnPreg3.disabled = true;
    btnPreg4.disabled = true;
    localStorage.removeItem("SeleccionadosP1");
    localStorage.removeItem("SeleccionadosP2");

    let intentosTotales = 0;
    let P1intentos1 = localStorage.getItem("P1_Intentos1") || 0;
    localStorage.removeItem("P1_Intentos1");
    let P1intentos2 = localStorage.getItem("P1_Intentos2") || 0;
    localStorage.removeItem("P1_Intentos2");
    let P1intentos3 = localStorage.getItem("P1_Intentos3") || 0;
    localStorage.removeItem("P1_Intentos3");
    let P2intentos1 = localStorage.getItem("P2_Intentos1") || 0;
    localStorage.removeItem("P2_Intentos1");
    let P2intentos2 = localStorage.getItem("P2_Intentos2") || 0;
    localStorage.removeItem("P2_Intentos2");
    let P2intentos3 = localStorage.getItem("P2_Intentos3") || 0;
    localStorage.removeItem("P2_Intentos3");
    let P2intentos4 = localStorage.getItem("P2_Intentos4") || 0;
    localStorage.removeItem("P2_Intentos4");

    localStorage.removeItem("P1_Intentos1");
    localStorage.removeItem("P1_Intentos2");
    localStorage.removeItem("P1_Intentos3");
    localStorage.removeItem("P2_Intentos1");
    localStorage.removeItem("P2_Intentos2");
    localStorage.removeItem("P2_Intentos3");
    localStorage.removeItem("P2_Intentos4");    
    
    intentosTotales += Number(P1intentos1)+Number(P1intentos2)+Number(P1intentos3)+Number(P2intentos1)+Number(P2intentos2)+Number(P2intentos3)+Number(P2intentos4);    
    
    /*localStorage.removeItem('mathValuesA');
    localStorage.removeItem('mathValuesB');
    localStorage.removeItem('mathValues2A');
    localStorage.removeItem('mathValues2B');
    localStorage.removeItem('selectedValues');*/

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
    let request = indexedDB.open('miBaseDeDatos', 1);

    request.onerror = (event) => {
        console.error('Error abriendo la base de datos:', event.target.error);
    };

    request.onsuccess = (event) => {
        let db = event.target.result;
        //console.log(db);
        // ... continuar con el siguiente paso
        let transaction = db.transaction(['usuarios'], 'readwrite');
        let objectStore = transaction.objectStore('usuarios');

        // Obtener el registro del usuario (asumiendo que tienes la cédula del usuario)        
        let cedulaUsuario = cedulaDB;// ... obtener la cédula del usuario        
        let getRequest = objectStore.get(cedulaUsuario);
        //console.log(getRequest);

        getRequest.onsuccess = (event) => {
            let usuario = event.target.result;

            // Agregar los nuevos campos al objeto usuario
            usuario.P1intentos1 = Number(P1intentos1);
            usuario.P1intentos2 = Number(P1intentos2);
            usuario.P1intentos3 = Number(P1intentos3);
            usuario.P2intentos1 = Number(P2intentos1);
            usuario.P2intentos2 = Number(P2intentos2);
            usuario.P2intentos3 = Number(P2intentos3);
            usuario.P2intentos4 = Number(P2intentos4);
            usuario.totalIntentos = intentosTotales;

            let fecha = new Date();
            usuario.Year_end = fecha.getFullYear();
            usuario.Month_end = fecha.getMonth() + 1; // Months are zero-based
            usuario.Day_end = fecha.getDate();
            usuario.Hora_end = fecha.getHours()
            usuario.Minutes_end = fecha.getMinutes();
            usuario.Seconds_end = fecha.getSeconds();

            // Actualizar el registro en la base de datos
            let updateRequest = objectStore.put(usuario);

            updateRequest.onsuccess = (event) => {
                console.log('Registro actualizado exitosamente.');
            };

            updateRequest.onerror = (event) => {
                console.error('Error actualizando el registro:', event.target.error);
            };
        };

        getRequest.onerror = (event) => {
            console.error('Error obteniendo el registro:', event.target.error);
        }; 
    };

    request.onerror = (event) => {
        console.error('Error abriendo la base de datos:', event.target.error);
    }    
});