function seleccionarAleatorios(Pregunta, min, max,totalale) {
    if(Pregunta==='P1'){
        console.log(min,max,totalale)
        // Crear un array con los números consecutivos    
        const numeros = [];
        for (let i = min; i <= max; i++) {
            numeros.push(i);
        }
        // Seleccionar 3 números aleatorios distintos
        const seleccionados = [];
        while (seleccionados.length < totalale) {
            const indiceAleatorio = Math.floor(Math.random() * numeros.length);
            const numeroAleatorio = numeros[indiceAleatorio];
            // Verificar si el número ya está seleccionado
            if (!seleccionados.includes(numeroAleatorio)) {
                seleccionados.push(numeroAleatorio);
                numeros.splice(indiceAleatorio, 1); // Eliminar el número del array
            }
        }
        // Devolver los números seleccionados
        return seleccionados;
    }
    else if (Pregunta==='P2'){
        console.log(min,max,totalale)
        let P4 = [0,1,2,3,4,5,6,7];
        let P5 = [8,9,10,11,12,13,14,15];
        let P6 = [16,17,18,19,20,21,22,23];
        let P7 = [24,25,26,27,28,29,30,31];
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
            }
            else{
                seleccionados = localStorage.getItem('SeleccionadosP1');
                seleccionados = seleccionados.split(',').map(Number);
            }
            break;
        case 'P2':
            if (localStorage.getItem('SeleccionadosP2')===null){
                seleccionados = seleccionarAleatorios('P2', min, max, totalale);
                localStorage.setItem('SeleccionadosP2',seleccionados);
            }
            else{
                seleccionados = localStorage.getItem('SeleccionadosP2');
                seleccionados = seleccionados.split(',').map(Number);
            }
            break;
    }        
    return seleccionados;
}

function localStoragePreguntasExamen(){
    Datos = JSON.parse(localStorage.getItem('Datos'));
    let position = Datos.SeleccionadosP1;
    let position2 = Datos.SeleccionadosP2;
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

function PintaSeleccionP1(position, def, Pregunta){    
    let artefact = [];
    
    artefact[0] = 'artifact_'+position[0];
    artefact[1] = 'artifact_'+position[1];
    artefact[2] = 'artifact_'+position[2];
    
    const nuevoDef = filtrarObjeto(def, artefact);
    def = nuevoDef;

    return ([def,artefact]);
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

// Clave en Local Storage
const LOCAL_STORAGE_KEY = 'resultadoExamen';

// Función para cargar los resultados desde Local Storage
function cargarResultados() {
    const resultadosGuardados = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (resultadosGuardados) {
        return JSON.parse(resultadosGuardados);
    }
    return null; // Si no hay datos guardados
}

// Función para cargar o inicializar el objeto de resultados
function inicializarExamen() {
    const resultadosGuardados = cargarResultados();
    
    if (resultadosGuardados) {
        console.log("Puntuaciones cargadas:", resultadosGuardados);
        return resultadosGuardados; // Usar los datos cargados para continuar
    } 
    else {
        console.log("No se encontraron puntuaciones previas. Iniciando nuevo examen.");      
        // Inicializar un nuevo objeto de resultados con puntuaciones en 0 para las preguntas
        const nuevoResultado = [];
        nuevoResultado.push({id:'P1',items:[0,0],tiempo:0});
        nuevoResultado.push({id:'P2',items:[0,0],tiempo:0});
        nuevoResultado.push({id:'P3',items:[0,0],tiempo:0});
        nuevoResultado.push({id:'P4',items:[0,0,0],tiempo:0});
        nuevoResultado.push({id:'P5',items:[0,0,0,0],tiempo:0});
        nuevoResultado.push({id:'P6',items:[0,0,0],tiempo:0});
        nuevoResultado.push({id:'P7',items:[0,0,0,0],tiempo:0});
        nuevoResultado.push({id:'NF',resultado:0});
        return nuevoResultado; // Devolver el nuevo objeto inicializado
    }
}

const resultadoExamen = inicializarExamen();

function valida(validar) {
    /*let intentos1 = 0, intentos2 = 0, intentos3 = 0;
    let intentos12 = 0, intentos22 = 0, intentos32 = 0, intentos42 = 0;*/

    const handleValidation = (index, mathfieldDiv1, mathfieldDiv2, mathfieldDiv3, resultadoExamen,artefact, idx) => 
    {
        const mm1 = mathfieldDiv1[index].querySelectorAll('math-field');
        const mm3 = mathfieldDiv3[index].querySelectorAll('math-field');

        /*console.log(def[artefact[0]].timeInteraction);
        console.log(def[artefact[1]].timeInteraction);
        console.log(def[artefact[2]].timeInteraction);*/
        resultadoExamen[idx].tiempo = def[artefact[idx]].timeInteraction
        console.log(resultadoExamen[idx].tiempo)

        // Validating Notacion Intervalo
        if (mm1[0]._internals.willValidate) 
        {            
            console.log('1 habilitado');
            setTimeout(() => 
            {
                clases = Array.from(mm1[0].classList);              
                if(clases.includes('failed'))
                {
                    console.log('Intervalo 1 fallo');
                    resultadoExamen[idx].items[0] = 0;
                    mm1[0].classList.remove('failed');
                }
                else if(clases.includes('pass'))
                {
                    console.log('Intervalo 1 paso');
                    resultadoExamen[idx].items[0] = 1;                    
                    mm1[0].classList.remove('pass');
                }
                else
                {
                    console.log('Intervalo 1 no respondio');
                    resultadoExamen[idx].items[0] = 0;                     
                }
                guardarResultados(resultadoExamen);                    
            }, 0);
        }
        else
        {
            console.log('Intervalo 1 deshabilitado');
        }

        // Validating Recta Real
        setTimeout(() => {
            clases = Array.from(mathfieldDiv2[index].classList);            
            if(clases.includes('pass'))
            {
                console.log('Recta Real 1 paso');
                resultadoExamen[idx].items[1] = 1;
                mathfieldDiv2[index].classList.remove('pass');                
            }
            else if(clases.includes('failed'))
            {
                console.log('Recta Real 1 fallo');
                resultadoExamen[idx].items[1] = 0;
                mathfieldDiv2[index].classList.remove('failed');                
            }
            else
            {
                console.log('Recta Real 1 no respondio');
                resultadoExamen[idx].items[1] = 0;
            }
            guardarResultados(resultadoExamen);               
        }, 0);

        // Validating Notacion Algebraica
        if (mm3[0]._internals.willValidate) {
            // Validation logic
            console.log('2 habilitado');
            setTimeout(() => {
                clases = Array.from(mm3[0].classList);
                //console.log(clases);
                if(clases.includes('failed'))
                {
                    console.log('Algebraico 2 fallo');
                    resultadoExamen[idx].items[0] = 0;                
                    mm3[0].classList.remove('failed');
                }
                else if(clases.includes('pass'))
                {
                    console.log('Algebraico 2 paso');
                    resultadoExamen[idx].items[0] = 1;                    
                    mm3[0].classList.remove('pass');
                }
                else{
                    console.log('Algebraico 2 no respondio');
                    resultadoExamen[idx].items[0] = 0;                    
                }
                guardarResultados(resultadoExamen);
            }, 0);
        }
        else
        {
            console.log('Algebraico 2 deshabilitado');
        }         
    };

    const handleColorInputs = (startIndex, endIndex, propiedadesRdef, resultadoExamen,idx) => {
        const colorInputs = document.querySelectorAll('math-field.colorInput');
        const Previousmathfield = document.querySelectorAll('.BoardEngInt math-field.colorInput').length; //previousMathfield        

        resultadoExamen[idx].tiempo+=rDef[propiedadesRdef].timeInteraction;

        console.log(idx ,'===', resultadoExamen[idx].tiempo);
        
        
        indx = 0;
        let kk = startIndex+Previousmathfield;
        let aux = Array(rDef[propiedadesRdef].textBottom)[0];
        aux = aux.split('),(');
        aux = aux.map((elem, index) => {
            if (index === 0) {
                return elem + ")";
            } else if (index === aux.length - 1) {
                return "(" + elem;
            } else {
                return "(" + elem + ")";
            }
        });
        let numpunts = aux.length;
        setTimeout(() => {        
            if(endIndex > numpunts)
            {
                console.log('Hay mas respuestas que puntos');
                endIndex = numpunts;
                console.log('Puntos:', endIndex);
            }
            for(i=0;i<endIndex;i++){              
                const classList = colorInputs[i+kk].classList;            
                if(classList.contains('passInLibrary'))
                {
                    console.log('Punto '+ (i+1) +' acertado');
                    resultadoExamen[idx].items[indx] = 1;
                    indx++;                
                }
                else if(classList.contains('failedInLibrary'))
                {
                    console.log('Punto '+ (i+1) +' fallado');
                    resultadoExamen[idx].items[indx] = 0;
                    indx++;                
                }            
            }
            guardarResultados(resultadoExamen);
        }, 10);
    };

    for (let i = 0; i < validar.length; i++) {
        validar[i].addEventListener('click', function() {
            switch (this) {
                case validar[0]:
                    handleValidation(1, document.querySelectorAll('.divEngInt1'), document.querySelectorAll('.BoardEngInt'), document.querySelectorAll('.divEngInt2'), resultadoExamen, artefact,0);                    
                    break;
                case validar[1]:
                    handleValidation(2, document.querySelectorAll('.divEngInt1'), document.querySelectorAll('.BoardEngInt'), document.querySelectorAll('.divEngInt2'), resultadoExamen,artefact,1);                    
                    break;
                case validar[2]:
                    handleValidation(3, document.querySelectorAll('.divEngInt1'), document.querySelectorAll('.BoardEngInt'), document.querySelectorAll('.divEngInt2'), resultadoExamen,artefact,2);                    
                    break;
                case validar[3]:
                    handleColorInputs(1, rDef[propiedadesRdef[0]].points.length, propiedadesRdef[0], resultadoExamen,3);                    
                    //intentos12++;
                    //localStorage.setItem('P2_Intentos12', intentos12);
                    break;
                case validar[4]:
                    handleColorInputs(rDef[propiedadesRdef[0]].points.length + 3, rDef[propiedadesRdef[1]].points.length, propiedadesRdef[1], resultadoExamen,4);                    
                    //intentos22++;
                    //localStorage.setItem('P2_Intentos22', intentos22);
                    break;
                case validar[5]:
                    handleColorInputs(rDef[propiedadesRdef[0]].points.length + rDef[propiedadesRdef[1]].points.length + 4, rDef[propiedadesRdef[2]].points.length, propiedadesRdef[2], resultadoExamen,5);                    
                    //intentos32++;
                    //localStorage.setItem('P2_Intentos32', intentos32);
                    break;
                case validar[6]:
                    handleColorInputs(rDef[propiedadesRdef[0]].points.length + rDef[propiedadesRdef[1]].points.length + rDef[propiedadesRdef[2]].points.length + 5, rDef[propiedadesRdef[3]].points.length, propiedadesRdef[3], resultadoExamen,6);                    
                    //intentos42++;
                    //localStorage.setItem('P2_Intentos42', intentos42);
                    break;
            }
        });
    }    
    return resultadoExamen;
}

console.log('Puntuaciones:', resultadoExamen);

// Función asíncrona para guardar los resultados en Local Storage
async function guardarResultados(resultados) {
    await new Promise((resolve, reject) => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resultados));
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function calcularResultadoTotal(data) {
    let total = 0;
    // Iterar sobre el arreglo de objetos
    data.forEach(obj => {
        if (obj.items && Array.isArray(obj.items)) {
            // Sumar los valores de items
            const sumaItems = obj.items.reduce((sum, current) => sum + current, 0);
            total += sumaItems;
        }
    });
    // Encontrar el objeto con id 'NF' y actualizar su resultado
    const nfObject = data.find(obj => obj.id === 'NF');
    if (nfObject) {
        nfObject.resultado = total;
    }
    return data; // Devolver el arreglo actualizado (opcional)
}

let examData = resultadoExamen;
// Función que calcula el resultado total y muestra los resultados
function mostrarResultados() {
    const paginaExamen = document.getElementById('paginaExamen');
    const resultadoPagina = document.getElementById('resultadoPagina');
    const resultadoTabla = document.getElementById('resultadoTabla');
    const headerRow = document.getElementById('headerRow');
    const resultadoBody = document.getElementById('resultadoBody');
    const resultadoTotalSpan = document.getElementById('resultadoTotal');
    
    let total = 0;
    let maxItems = 0;

    // Determinar el máximo número de ítems en las preguntas para definir el header
    examData.forEach(pregunta => {
        if (pregunta.items && Array.isArray(pregunta.items)) {
            maxItems = Math.max(maxItems, pregunta.items.length);
        }
    });

    // Generar las cabeceras de los items
    for (let i = 1; i <= maxItems; i++) {
        const th = document.createElement('th');
        th.textContent = `Item ${i}`;
        headerRow.appendChild(th);
    }
    
    // Añadir una columna para el resultado total por fila
    const thTotal = document.createElement('th');
    thTotal.textContent = 'Total';
    headerRow.appendChild(thTotal);

    //Agrega una columna para el tiempo por fila
    const thTiempo = document.createElement('th');
    thTiempo.textContent = 'Tiempo (seg)';
    headerRow.appendChild(thTiempo);

    // Generar las filas de resultados
    examData.forEach(pregunta => {
        if (pregunta.items && Array.isArray(pregunta.items)) {
            const fila = document.createElement('tr');
            const celdaPregunta = document.createElement('td');
            celdaPregunta.textContent = pregunta.id;
            fila.appendChild(celdaPregunta);

            let totalFila = 0;

            // Añadir cada item a la fila
            pregunta.items.forEach(itemScore => {
                const celdaItem = document.createElement('td');
                celdaItem.textContent = itemScore;
                fila.appendChild(celdaItem);
                totalFila += itemScore;
                total += itemScore;
            });

            // Rellenar celdas vacías si faltan items para completar la fila
            for (let i = pregunta.items.length; i < maxItems; i++) {
                const celdaVacia = document.createElement('td');
                celdaVacia.textContent = '-';
                fila.appendChild(celdaVacia);
            }

            // Añadir celda con el total de la fila
            const celdaTotal = document.createElement('td');
            celdaTotal.textContent = totalFila;
            fila.appendChild(celdaTotal);

            //Agrega celda para el tiempo de la fila
            const celdaTiempo = document.createElement('td');
            celdaTiempo.textContent = pregunta.tiempo;
            fila.appendChild(celdaTiempo);

            resultadoBody.appendChild(fila);
        }
    });

    // Guardar el resultado total en el objeto 'NF'
    const nfObject = examData.find(obj => obj.id === 'NF');
    if (nfObject) {
        nfObject.resultado = total;
    }

    // Mostrar el resultado total
    resultadoTotalSpan.textContent = total;

    // Ocultar la página original y mostrar la página de resultados
    paginaExamen.style.display = 'none';       // Oculta la página original
    resultadoPagina.style.display = 'block';   // Muestra la página de resultados
}
// Evento de click para el botón 'Finalizar'
document.querySelector('.finalizar').addEventListener('click', () => {
    //Se obtiene el tiempo de finalizacion del examen (Guardar la hora de inicio de estudiante)
    const spanTime = document.getElementById('totalTime');
    const startDate = new Date(localStorage.getItem('fechaInicioEst'));
    const endDate = new Date();
    let timeElapsed = (endDate.getTime()-startDate.getTime())/60000;
    timeElapsed = timeElapsed.toFixed(2);
    spanTime.textContent = timeElapsed + ' min';
    console.log(startDate);
    console.log(endDate);
    console.log(timeElapsed);
    mostrarResultados();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.removeItem('SeleccionadosP1');
    localStorage.removeItem('SeleccionadosP2');
    localStorage.removeItem('fechaInicioEst');
});

