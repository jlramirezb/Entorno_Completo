//validar los campos

//___________Primera Funcion a utilizar por web y Movil______________//
function userDatevalidation(userObject){
    const requiredProperties = ['idUser','idExam','firstName','secondName','surname','secondSurname','gender','email','userStartTime','userEndTime','result','fechaHoraInicio','fechaHoraCierre','chapter'];
    const allExist = requiredProperties.filter(prop => !(prop in Datos));

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
            generateEvaluationArtifacts(userObject)
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

}
//Gernerar los artefactos
function generateEvaluationArtifacts(userObject){

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