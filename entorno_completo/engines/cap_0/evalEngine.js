

//validar los campos

//___________Primera Funcion a utilizar por web y Movil______________//

const LOCAL_STORAGE_KEY = 'resultadoExamen';
const LOCAL_COLORS_KEY = 'colorsExamen';
const LOCAL_DATOS_KEY = 'ConfigData';
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

let ConfigData = inicializarExamen(LOCAL_DATOS_KEY);
let evaluacion = inicializarExamen(LOCAL_STORAGE_KEY);
let colorBorders = inicializarExamen(LOCAL_COLORS_KEY);

function inicializarExamen(key) {
    let resultadosGuardados, colorsBorders, Datos;
    if (key===LOCAL_STORAGE_KEY) {
        resultadosGuardados = cargarResultados(key);
        if (resultadosGuardados) {
            return resultadosGuardados; // Usar los datos cargados para continuar
        } 
        else {
            console.log("No se encontraron puntuaciones previas. Iniciando nuevo examen.");      
            // Inicializar un nuevo objeto de resultados con puntuaciones en 0 para las preguntas
            resultadosGuardados = [];
            resultadosGuardados.push({id:'P1',items:[0,0],tiempo:0,intentos:0});
            resultadosGuardados.push({id:'P2',items:[0,0],tiempo:0,intentos:0});
            resultadosGuardados.push({id:'P3',items:[0,0],tiempo:0,intentos:0});
            resultadosGuardados.push({id:'P4',items:[0,0,0],tiempo:0,intentos:0});
            resultadosGuardados.push({id:'P5',items:[0,0,0,0],tiempo:0,intentos:0});
            resultadosGuardados.push({id:'P6',items:[0,0,0],tiempo:0,intentos:0});
            resultadosGuardados.push({id:'P7',items:[0,0,0,0],tiempo:0,intentos:0});
            resultadosGuardados.push({id:'NF',resultado:0});
            localStorage.setItem(key, JSON.stringify(resultadosGuardados));            
            return resultadosGuardados; // Devolver el nuevo objeto inicializado
        }
    }
    else if(key===LOCAL_COLORS_KEY)
    {
        colorsBorders = cargarResultados(key);
        if (colorsBorders) {
            return colorsBorders; // Usar los datos cargados para continuar      
        }   
        else {
            console.log("No se encontraron colores previos. Iniciando nuevo examen.");
            // Inicializar un nuevo objeto de resultados con puntuaciones en 0 para las preguntas  
            const colorsBorders = {};            
            for (let i = 0; i <= 6; i++) {
                    colorsBorders[i] = "#217E9D";
            }
            localStorage.setItem(key, JSON.stringify(colorsBorders));
            return colorsBorders;
        }        
    }
    else if(key===LOCAL_DATOS_KEY)
    {
        Datos = cargarResultados(key);
        console.log(Datos); 
        if (Datos) {
            //delete Datos;
            return Datos; // Usar los datos cargados para continuar
        }
        else {
            Datos = {
                'idUser':'66faf9aceda8f36d30f920e5',
                'idExam':'66e1f3c8ab116faa26c493ca',
                'firstName':'estudiante',
                'secondName':'estudiante',
                'surname':'estudiante',
                'secondSurname':'estudiante',
                'gender':'Masculino',
                'email':'app.6@gmail.com',	
                'codExam': 'Modelo 2',
                'curso':'Fragata',
                'chapter':'Capítulo 0',
                'category':'Educación Superior',
                'liceo':'Unidad Educacional de Fragata',
                'universidad':'Universidad de Carabobo',
                'startDate': '01/01/2022 00:00:00',
                'endDate':'01/01/2025 00:00:00',
                'result': null,        
                'userStartTime':null,
                'userEndTime':null
            }
            localStorage.setItem(key, JSON.stringify(Datos));
            return Datos; // Devolver el nuevo objeto inicializado
        }
    }
}

function cargarResultados(key) {
    let resultadosGuardados = localStorage.getItem(key);
    
    if (resultadosGuardados) {
        return resultadosGuardados = JSON.parse(resultadosGuardados);
    }
    
    return null; // Si no hay datos guardados
}

function userDatevalidation(){
    let userObject = inicializarExamen(LOCAL_DATOS_KEY);
    const requiredProperties = ['idUser','idExam','firstName','secondName','surname','secondSurname','gender','email','userStartTime','userEndTime','result','startDate','endDate','chapter'];
    const allExist = requiredProperties.filter(prop => !(prop in userObject));

    if (allExist.length > 0) {
        console.log('Agregar Propiedades faltantes: ' + allExist.join(', '));
        return false;
    }

    if (userObject.result!==null) {
        const spanTime = document.getElementById('tiempo');
        document.getElementById('rules').style.display = 'none';
        document.getElementById('after').style.display = 'none';
        return true
    }
    
    let  {state, message} = validateDates(userObject.startDate,userObject.endDate)
        if(state) {
            setHeaderData(userObject)
            document.getElementById('rules').style.display = 'block';
            document.getElementById('buttonRule').addEventListener('click', ()=>{
                document.getElementById('rules').style.display = 'none';
                document.getElementById('paginaExamen').style.display = 'block';
                generateEvaluationArtifacts(userObject);
                let validar = document.querySelectorAll('.check');
                // Eliminar el primer elemento del NodeList 'validar'
                validar = Array.from(validar).slice(1);                
                evaluacion = valida(validar,evaluacion,def,artefactaux,colorBorders,propiedadesRdef);
            })            
        }

                // aqui puedes decidir no mostrar el examen 

        console.log(message)
        return false;
}


//validar Fechas
function validateDates(availabilityStartDate, availabilityEndDate, offset = -240) {
    const now = new Date();
    const nowUTC = now.getTime() - (offset * 60 * 1000); // Convertir a UTC

    const availabilityStartDateUTC = new Date(availabilityStartDate).getTime() - (offset * 60 * 1000);
    const availabilityEndDateUTC = new Date(availabilityEndDate).getTime() - (offset * 60 * 1000);

    if (nowUTC < availabilityStartDateUTC) {
        return {
            state: false,
            message: 'La fecha actual es anterior a la fecha de inicio.'
        };
    }

    if (nowUTC >= availabilityStartDateUTC && nowUTC <= availabilityEndDateUTC) {
        return {
            state: true,
            message: 'La fecha actual está dentro del rango permitido.'
        };
    }
    if (nowUTC > availabilityEndDateUTC) {
        return {
            state: false,
            message: 'La fecha actual está después de la fecha de cierre.'
        };
    }
    return {
        state: false,
        message: 'La fecha actual no está en un estado válido.'
    };
}

//Setear el header de los datos del usuario
function setHeaderData(userObject){
    // Pinta los datos en el DOM
    document.getElementById('institucion').innerHTML = userObject.liceo;
    document.getElementById('Categoria').innerHTML = userObject.category;
    document.getElementById('materia').innerHTML = userObject.curso;
    document.getElementById('seccion').innerHTML = userObject.liceo;
    document.getElementById('nombreEstudiante').innerHTML = userObject.firstName + ' ' + userObject.secondName;
    document.getElementById('correoEstudiante').innerHTML = userObject.email;
    document.getElementById('capExam').innerHTML = userObject.chapter;
    document.getElementById('codExam').innerHTML = userObject.codExam;
}
//Gernerar los artefactos

function PintaSeleccionP1(position, def, Pregunta){    
    let artefact = [];
    
    artefact[0] = 'artifact_'+position[0];
    artefact[1] = 'artifact_'+position[1];
    artefact[2] = 'artifact_'+position[2];
    
    const nuevoDef = filtrarObjeto(def, artefact);
    def = nuevoDef;

    return ([def,artefact]);
}
function generateEvaluationArtifacts(userObject){

    let [position, position2] = localStoragePreguntasExamen(userObject);
    console.log(position,position2);
    let artefact = [];
    [def, artefact] = PintaSeleccionP1(position, def, 'P1');

    def = renombrarArtefactos(def);
    let artefactaux = ['artifact_1', 'artifact_2', 'artifact_3'];

    position2 = ajustarPosition(position2);
    let nuevoRdef = procesarRdef(rDef, position2);
    rDef = nuevoRdef;

    // Iniciar el contenido principal al cargar la página
    window.onload = initMain();

    pintarArtefactos(artefactaux);
    agregarEncabezadosPregunta();

}

function agregarEncabezadosPregunta() {
    const divs = document.querySelectorAll('.borderDefault');

    for (let i = 3; i < divs.length; i++) {
        let divPregunta = document.createElement('div');
        divPregunta.style.display = 'flex';

        let spanPregunta = document.createElement('span');
        spanPregunta.style.float = 'left';
        spanPregunta.textContent = `Artef. ${i + 1}`;
        spanPregunta.classList.add('question-header');

        let spanPuntaje = document.createElement('span');
        spanPuntaje.style.float = 'right';
        spanPuntaje.textContent = (i === 4 || i === 6) ? '4 Pts' : '3 Pts';
        spanPuntaje.classList.add("oval-container");

        divPregunta.appendChild(spanPregunta);
        divPregunta.appendChild(spanPuntaje);
        divs[i].insertBefore(divPregunta, divs[i].firstChild);
    }
}

function pintarArtefactos(artefactaux) {
    let containerAll = document.getElementById("container-all-artifact");

    artefactaux.forEach((element, index) => {
        let artifactDiv = document.getElementById(element);
        let newDiv = crearDivArtefacto(index + 1, artifactDiv);
        containerAll.appendChild(newDiv);
    });
}

function crearDivArtefacto(i, artifactDiv) {
    let newDiv = document.createElement("div");
    newDiv.id = "newDiv";

    let headersDiv = document.createElement("div");
    headersDiv.style.display = "flex";
    headersDiv.style.justifyContent = "space-between";

    let questionHeader = document.createElement("div");
    questionHeader.className = "question-header";
    questionHeader.textContent = `Artef. ${i}`;

    let scoreHeader = document.createElement("div");
    scoreHeader.className = "oval-container";
    scoreHeader.textContent = "2 Pts";

    headersDiv.appendChild(questionHeader);
    headersDiv.appendChild(scoreHeader);
    newDiv.appendChild(headersDiv);
    newDiv.appendChild(artifactDiv);

    return newDiv;
}

function initMain() {
    generation(def);
    generator(rDef);
    mainCartesian(defBoards, rDef);
    //evaluacion = inicializarExamen(LOCAL_STORAGE_KEY);
    //console.log(evaluacion);
    //colorBorders = inicializarExamen(LOCAL_COLORS_KEY);
    //console.log(colorBorders);
};

function renombrarArtefactos(def) {
    let keys = Object.keys(def).sort((a, b) => parseInt(a.split('_')[1]) - parseInt(b.split('_')[1]));
    let newObj = {};

    keys.forEach((key, index) => {
        newObj[`artifact_${index + 1}`] = def[key];
    });

    return newObj;
}

function ajustarPosition(position2) {
    return position2.map(x => x - 1);
}
function procesarRdef(rDef, position2) {
    let nuevoRdef = filtrarContents(rDef, position2);
    return filtrarRdef(nuevoRdef, position2);
}
function filtrarRdef(rdef, indices) {
    for(let i=0;i<indices.length;i++ )
    {
        indices[i]=indices[i]+1;
    }  
    
    const nuevoRdef = {};
    
    // Copiar la propiedad artifactHtml
    nuevoRdef.artifactHtml = rdef.artifactHtml;  
    // Iterar sobre las propiedades de rdef
    for (const propiedad in rdef) {
      // Verificar si la propiedad comienza con "artifact_"
        if (propiedad.startsWith("artifact_")) {
            // Extraer el índice de la propiedad
            const indice = parseInt(propiedad.split("_")[1]);
        
            // Si el índice no está en el arreglo de índices a eliminar, copiar la propiedad
            if (indices.includes(indice)) {
                nuevoRdef[propiedad] = rdef[propiedad];
            }
        }
    }
    return nuevoRdef;
}
function filtrarContents(rdef, indices) {
    // Verificar si las propiedades existen antes de acceder a ellas
    if (rdef.artifactHtml && rdef.artifactHtml.datadefault && rdef.artifactHtml.datadefault[0] && rdef.artifactHtml.datadefault[0].contents) {
        const nuevoContents = rdef.artifactHtml.datadefault[0].contents.filter((_, index) => indices.includes(index));
        rdef.artifactHtml.datadefault[0].contents = nuevoContents;
    }
    return rdef;
}
function getPosition(configData,exams) {
    const modelKey = configData.codExam.replace('Modelo ', 'eval_');
    console.log(modelKey);
    const model = exams[modelKey];

    if (model) {
        return [model[0], model[1]];
    } else {
        alert('Modelo no encontrado');
        return [null, null]; // O cualquier valor por defecto que necesites
    }
}
function localStoragePreguntasExamen(userObject){
    let position = []; //= Datos.SeleccionadosP1;
    let position2 = []; //= Datos.SeleccionadosP2;
    [position, position2] = getPosition(userObject,exams);
    return [position,position2];
}
function filtrarObjeto(objetoDef, arregloPropiedades) {
    const nuevoObjeto = {};

    for (const propiedad of arregloPropiedades) {
        console.log(propiedad);
        if (objetoDef.hasOwnProperty(propiedad)) {
            nuevoObjeto[propiedad] = objetoDef[propiedad];
        }
    }
    return nuevoObjeto;
}

//acciones
//finalizarExamen
function sendEvaluation(){


    //mantener esto en la funcion que ejecuta una funcion en android
    if (typeof Android !== 'undefined' && typeof Android.sendExam === 'function') { 
        Android.sendExam((JSON.stringify(data))) 
    }
}

//soltar el pdf de la evaluacion
function printEvaluation(){

}

//mostrarResultados
function showResults(){

}

function markBorders (){

}

//cualquier funcion adicional que complemente o haga un tarea especifica