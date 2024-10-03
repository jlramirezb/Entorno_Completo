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


function seleccionarAleatorios(Pregunta, min, max,totalale) {
    if(Pregunta==='P1'){
        //console.log(min,max,totalale)
        let P1 = [1,2,3,4,5,6,7,8];
        let P2 = [9,10,11,12,13,14,15,16];
        let P3 = [17,18,19,20,21,22,23,24];

        const seleccionadosP1 = [];
        seleccionadosP1.push(P1[Math.floor(Math.random()*P1.length)]);
        seleccionadosP1.push(P2[Math.floor(Math.random()*P2.length)]);
        seleccionadosP1.push(P3[Math.floor(Math.random()*P3.length)]);
        //console.log(seleccionadosP1);
        
        return seleccionadosP1;
    }
    else if (Pregunta==='P2'){
        //console.log(min,max,totalale)
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

const exams ={
    eval_1:[[1,9,17],[1,9,17,25]],
    eval_2:[[2,10,18],[2,10,18,26]],
    eval_3:[[3,11,19],[3,11,19,27]],
    eval_4:[[4,12,20],[4,12,20,28]],
    eval_5:[[5,13,21],[5,13,21,29]],
    eval_6:[[6,14,22],[6,14,22,30]],
    eval_7:[[7,15,23],[7,15,23,31]],
    eval_8:[[8,16,24],[8,16,24,32]],
    eval_9:[[5,9,21],[7,12,20,31]],
    eval_10:[[2,12,21],[6,13,24,27]],
    eval_11:[[5,16,19],[5,14,20,32]],
    eval_12:[[8,9,24],[6,13,17,29]],
    eval_13:[[1,12,24],[7,12,22,25]],
    eval_14:[[7,14,19],[4,10,24,30]],
    eval_15:[[4,16,18],[8,10,21,28]],
    eval_16:[[2,9,20],[5,11,23,32]],
    eval_17:[[4,15,24],[8,16,22,28]],
    eval_18:[[6,14,17],[5,12,19,29]],
    eval_19:[[7,11,20],[7,13,18,26]],
    eval_20:[[6,16,19],[1,10,18,29]]
}


/*function localStorageSeleccionados(Pregunta,min,max,totalale){
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
}*/

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
    const examen = document.getElementById('Tipo-Examen').value;
    
    let position = [];// = localStorageSeleccionados("P1", 1, 24, 3);
    let position2 = []; //localStorageSeleccionados("P2", 0, 31, 4);  
    console.log(examen);
    switch (examen) {
        case 'Modelo 1':
            position = exams.eval_1[0];
            position2 = exams.eval_1[1];
            break;
        case 'Modelo 2':
            position = exams.eval_2[0];
            position2 = exams.eval_2[1];
            break;
        case 'Modelo 3':
            position = exams.eval_3[0];
            position2 = exams.eval_3[1];
            break;
        case 'Modelo 4':
            position = exams.eval_4[0];
            position2 = exams.eval_4[1];
            break;
        case 'Modelo 5':
            position = exams.eval_5[0];
            position2 = exams.eval_5[1];
            break;
        case 'Modelo 6':
            position = exams.eval_6[0];
            position2 = exams.eval_6[1];
            break;
        case 'Modelo 7':
            position = exams.eval_7[0];
            position2 = exams.eval_7[1];
            break;
        case 'Modelo 8':
            position = exams.eval_8[0];
            position2 = exams.eval_8[1];
            break;
        case 'Modelo 9':
            position = exams.eval_9[0];
            position2 = exams.eval_9[1];
            break;
        case 'Modelo 10':
            position = exams.eval_10[0];
            position2 = exams.eval_10[1];
            break;
        case 'Modelo 11':
            position = exams.eval_11[0];
            position2 = exams.eval_11[1];
            break;
        case 'Modelo 12':
            position = exams.eval_12[0];
            position2 = exams.eval_12[1];
            break;
        case 'Modelo 13':
            position = exams.eval_13[0];
            position2 = exams.eval_13[1];
            break;
        case 'Modelo 14':
            position = exams.eval_14[0];
            position2 = exams.eval_14[1];
            break;
        case 'Modelo 15':
            position = exams.eval_15[0];
            position2 = exams.eval_15[1];
            break;
        case 'Modelo 16':
            position = exams.eval_16[0];
            position2 = exams.eval_16[1];
            break;
        case 'Modelo 17':
            position = exams.eval_17[0];
            position2 = exams.eval_17[1];
            break;
        case 'Modelo 18':
            position = exams.eval_18[0];
            position2 = exams.eval_18[1];
            break;
        case 'Modelo 19':
            position = exams.eval_19[0];
            position2 = exams.eval_19[1];
            break;
        case 'Modelo 20':
            position = exams.eval_20[0];
            position2 = exams.eval_20[1];
            break;
        default:
            alert('Modelo no encontrado');
            break;
    }   
    
    console.log(position);
      
    console.log(position2);

    let combinedArray = position.concat(position2);
    // Map each element to a string with leading zero if necessary and then join them into a single string
    let resultString = combinedArray.map(num => num < 10 ? '0' + num : num.toString()).join('');
    console.log(resultString); // Output: "01210900121523"

    const Datos = {
        /*Instituto: "Universidad de Carabobo",
        Categoria: "Educación Superior",
        Curso: "Fragata",
        Seccion: "02",
        Estudiante: {
            Nombre: "Estudiante U",
            Correo: "estudiante@gmail.com"
        },
        Capitulo: "0",
        fechaHoraInicio: `${fechaInicio} ${horaInicio}`, // Combina fecha y hora de inicio
        fechaHoraCierre: `${fechaCierre} ${horaCierre}`, // Combina fecha y hora de cierre
        
        CodExam : resultString*/
        'idUser':'66faf9aceda8f36d30f920e5',
        'idExam':'66e1f3c8ab116faa26c493ca',
        'firstName':'estudiante',
        'secondName':'estudiante',
        'surname':'estudiante',
        'secondSurname':'estudiante',
        'gender':'Masculino',
        'email':'app.6@gmail.com',	
        'codExam': resultString,
        'curso':'Fragata',
        'category':'Educación Superior',
        'liceo':'Unidad Educacional de Fragata',
        'universidad':'Universidad de Carabobo',
        'fechaHoraInicio':`${fechaInicio} ${horaInicio}`, // Combina fecha y hora de inicio
        'fechaHoraCierre':`${fechaCierre} ${horaCierre}`, // Combina fecha y hora de cierre
        'result': null,
        'SeleccionadosP1': position,
        'SeleccionadosP2': position2,
        'userStartTime':null,
        'userEndTime':null
    }

    // Almacenar el objeto en localStorage
    localStorage.setItem('Datos', JSON.stringify(Datos));    
})