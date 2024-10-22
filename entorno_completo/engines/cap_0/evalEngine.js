

//validar los campos

//___________Primera Funcion a utilizar por web y Movil______________//
function userDatevalidation(userObject){
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
            document.getElementById('buttonRule').addEventListener('click', ()=>
                generateEvaluationArtifacts(userObject)
            )

            
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

    let [position, position2] = localStoragePreguntasExamen();
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
function getPosition(configData) {
    const modelKey = configData.Datos.codExam.replace('Modelo ', 'eval_');
    console.log(modelKey);
    const model = configData.exams[modelKey];

    if (model) {
        return [model[0], model[1]];
    } else {
        alert('Modelo no encontrado');
        return [null, null]; // O cualquier valor por defecto que necesites
    }
}
function localStoragePreguntasExamen(){
    let position = []; //= Datos.SeleccionadosP1;
    let position2 = []; //= Datos.SeleccionadosP2;
    [position, position2] = getPosition(configData);
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