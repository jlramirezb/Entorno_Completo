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