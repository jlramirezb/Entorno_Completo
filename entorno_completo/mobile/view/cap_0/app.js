//let btnPreg1 = document.getElementById("btnPreg1");
//let btnPreg2 = document.getElementById("btnPreg2");
//let btnPreg4 = document.getElementById("btnPreg4");
//let btnGuardar = document.getElementById("btnguardar");

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

//nombre.addEventListener('input',ActivaBotones);
//cedula.addEventListener('input',ActivaBotones);
//seccion.addEventListener('change',ActivaBotones);
//btnGuardar.addEventListener("click",ActivarPreguntas);

/*btnPreg1.addEventListener("click", function(){
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
    
    intentosTotales += Number(P1intentos1)+Number(P1intentos2)+Number(P1intentos3)+Number(P2intentos1)+Number(P2intentos2)+Number(P2intentos3)+Number(P2intentos4);  */  
    
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
    /**let request = indexedDB.open('miBaseDeDatos', 1);

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
});*/

function seleccionarAleatorios(Pregunta, min, max,totalale) {
    if(Pregunta==='P1'){
        console.log(min,max,totalale)
        let P1 = [1,2,3,4,5,6,7,8];
        let P2 = [9,10,11,12,13,14,15,16];
        let P3 = [17,18,19,20,21,22,23,24];

        const seleccionadosP1 = [];
        seleccionadosP1.push(P1[Math.floor(Math.random()*P1.length)]);
        seleccionadosP1.push(P2[Math.floor(Math.random()*P2.length)]);
        seleccionadosP1.push(P3[Math.floor(Math.random()*P3.length)]);
        console.log(seleccionadosP1);
        
        return seleccionadosP1;
    }
    else if (Pregunta==='P2'){
        console.log(min,max,totalale)
        let P4 = [1,2,3,4,5,6,7,8];
        let P5 = [9,10,11,12,13,14,15,16];
        let P6 = [17,18,19,20,21,22,23,24];
        let P7 = [25,26,27,28,29,30,31,32];
        const seleccionadosP2 = [];
        seleccionadosP2.push(P4[Math.floor(Math.random()*P4.length)]);
        seleccionadosP2.push(P5[Math.floor(Math.random()*P5.length)]);
        seleccionadosP2.push(P6[Math.floor(Math.random()*P6.length)]);
        seleccionadosP2.push(P7[Math.floor(Math.random()*P7.length)]);
        return seleccionadosP2;
    }
}


function localStorageSeleccionados(Pregunta,min,max,totalale){
    let seleccionados = [];
    switch (Pregunta) {
        case 'P1':
            if (localStorage.getItem('SeleccionadosP1')===null){
                seleccionados = seleccionarAleatorios('P1',min, max, totalale);
                localStorage.setItem('SeleccionadosP1',seleccionados);
                //console.log(1,seleccionados); // Ejemplo: [17, 8, 23]
            }
            else{
                seleccionados = localStorage.getItem('SeleccionadosP1');
                seleccionados = seleccionados.split(',').map(Number);
                //console.log(2,seleccionados); // Ejemplo: [17, 8, 23]
            }
            break;
        case 'P2':
            if (localStorage.getItem('SeleccionadosP2')===null){
                seleccionados = seleccionarAleatorios('P2', min, max, totalale);
                localStorage.setItem('SeleccionadosP2',seleccionados);
                //console.log(1,seleccionados); // Ejemplo: [17, 8, 23]
            }
            else{
                seleccionados = localStorage.getItem('SeleccionadosP2');
                seleccionados = seleccionados.split(',').map(Number);
                //console.log(2,seleccionados); // Ejemplo: [17, 8, 23]
            }
            break;
    }        
    return seleccionados;
}

//let programar = document.querySelector('.submit-btn');
document.getElementById('evaluacionForm').addEventListener('submit', function(event) {
//programar.addEventListener("click", e =>{
    event.preventDefault();
    // Capturar los valores del formulario
    const titulo = document.getElementById('titulo').value;
    const capitulo = document.getElementById('capitulo').value;
    const fechaInicio = document.getElementById('fecha-inicio').value;
    const horaInicio = document.getElementById('hora-inicio').value;
    const fechaCierre = document.getElementById('fecha-cierre').value;
    const horaCierre = document.getElementById('hora-cierre').value;
    const nota = document.getElementById('nota').value;

    let position = localStorageSeleccionados("P1", 1, 24, 3);
    console.log(position);
    let position2 = localStorageSeleccionados("P2", 0, 31, 4);    
    console.log(position2);

    let combinedArray = position.concat(position2);
    // Map each element to a string with leading zero if necessary and then join them into a single string
    let resultString = combinedArray.map(num => num < 10 ? '0' + num : num.toString()).join('');
    console.log(resultString); // Output: "01210900121523"

    const Datos = {
        Instituto: "Nombre del Instituto",
        Materia: "Nombre de la Materia",
        Seccion: "Sección del Curso",
        Estudiante: {
            Nombre: "Nombre del Estudiante",
            Cedula: "Cedula del Estudiante"
        },
        Capitulo: "Capítulo que se está evaluando",
        fechaHoraInicio: `${fechaInicio} ${horaInicio}`, // Combina fecha y hora de inicio
        fechaHoraCierre: `${fechaCierre} ${horaCierre}`, // Combina fecha y hora de cierre
        SeleccionadosP1: position,
        SeleccionadosP2: position2,
        CodExam : resultString
    }

    // Almacenar el objeto en localStorage
    localStorage.setItem('Datos', JSON.stringify(Datos));    
})


function generarPrimeras20CombinacionesConUnElementoDeCadaArreglo(arreglos) {
    const resultados = [];

    function backtrack(combinacion, indiceArreglo) {
        if (indiceArreglo === arreglos.length) {
            resultados.push([...combinacion]);
            // Si ya tenemos 20 combinaciones, detenemos la búsqueda
            if (resultados.length === 20) {
                return;
            }
        }
        // Resto del código es igual al anterior
        // ...
        const arregloActual = arreglos[indiceArreglo];
        for (let i = 0; i < arregloActual.length; i++) {
            combinacion.push(arregloActual[i]);
            backtrack(combinacion, indiceArreglo + 1);
            combinacion.pop();
        }
    }
    backtrack([], 0);
    return resultados;
}

/*let P1 = [1,2,3,4,5,6,7,8];
let P2 = [9,10,11,12,13,14,15,16];
let P3 = [17,18,19,20,21,22,23,24];
let P4 = [1,2,3,4,5,6,7,8];
let P5 = [9,10,11,12,13,14,15,16];
let P6 = [17,18,19,20,21,22,23,24];
let P7 = [25,26,27,28,29,30,31,32];
let combinaciones = [];

// Bucle para generar combinaciones
for (let i1 = 0; i1 < P1.length; i1++) {
    for (let i2 = 0; i2 < P2.length; i2++) {
        for (let i3 = 0; i3 < P3.length; i3++) {
            for (let i4 = 0; i4 < P4.length; i4++) {
                for (let i5 = 0; i5 < P5.length; i5++) {
                    for (let i6 = 0; i6 < P6.length; i6++) {
                        for (let i7 = 0; i7 < P7.length; i7++) {
                            let combinacion = [
                                P1[i1], P2[i2], P3[i3], 
                                P4[i4], P5[i5], P6[i6], P7[i7]
                            ];
                            combinaciones.push(combinacion);
                            // Limita a 20 combinaciones
                            if (combinaciones.length === 20) {
                                break;
                            }
                        }
                        if (combinaciones.length === 20) break;
                    }
                    if (combinaciones.length === 20) break;
                }
                if (combinaciones.length === 20) break;
            }
            if (combinaciones.length === 20) break;
        }
        if (combinaciones.length === 20) break;
    }
}

// Imprimir las primeras 20 combinaciones
combinaciones.forEach((combinacion, index) => {
    console.log(`Combinación ${index + 1}: ${combinacion.join(', ')}`);
});*/