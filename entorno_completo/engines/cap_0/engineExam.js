// Clave en Local Storage
const LOCAL_STORAGE_KEY = 'resultadoExamen';
const LOCAL_COLORS_KEY = 'colorsExamen';
const LOCAL_DATOS_KEY = 'Datos';

// Almacenar el objeto en localStorage
let Datos = inicializarExamen(LOCAL_DATOS_KEY);

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

function getPosition(examen) {
    const modelKey = examen.replace('Modelo ', 'eval_');
    console.log(modelKey);
    const model = exams[modelKey];

    if (model) {
        return [model[0], model[1]];
    } else {
        alert('Modelo no encontrado');
        return [null, null]; // O cualquier valor por defecto que necesites
    }
}

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
    let position = []; //= Datos.SeleccionadosP1;
    let position2 = []; //= Datos.SeleccionadosP2;
    [position, position2] = getPosition(Datos.codExam);
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



// Función para cargar los resultados desde Local Storage
function cargarResultados(key) {
    let resultadosGuardados = localStorage.getItem(key);
    
    if (resultadosGuardados) {
        return resultadosGuardados = JSON.parse(resultadosGuardados);
    }
    
    return null; // Si no hay datos guardados
}

// Función para cargar o inicializar el objeto de resultados
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
        if (Datos) {
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
                'codExam': 'Modelo 5',
                'curso':'Fragata',
                'chapter':'Capítulo 0',
                'category':'Educación Superior',
                'liceo':'Unidad Educacional de Fragata',
                'universidad':'Universidad de Carabobo',
                'fechaHoraInicio': '01/01/2022 00:00:00', //'`${fechaInicio} ${horaInicio}`, // Combina fecha y hora de inicio
                'fechaHoraCierre':'01/01/2025 00:00:00', //'`${fechaCierre} ${horaCierre}`, // Combina fecha y hora de cierre
                'result': null,        
                'userStartTime':null,
                'userEndTime':null
            }
            localStorage.setItem(key, JSON.stringify(Datos));
            return Datos; // Devolver el nuevo objeto inicializado
        }
    }
}

function valida(validar,resultadoExamen,def,artefact,borderColor,propiedadesRdef) {    

    const handleValidation = (index, mathfieldDiv1, mathfieldDiv2, mathfieldDiv3, resultadoExamen,artefact,def, idx) => 
    {
        const mm1 = mathfieldDiv1[index].querySelectorAll('math-field');
        const mm3 = mathfieldDiv3[index].querySelectorAll('math-field');
        //console.log(mm1, mm3);
        const newDiv = document.querySelectorAll('#newDiv');
        newDiv[idx].style.borderColor = 'yellow';
        borderColor[idx] = 'yellow';
        console.log(borderColor);
        localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(borderColor));

        /*console.log(def[artefact[0]].timeInteraction);
        console.log(def[artefact[1]].timeInteraction);
        console.log(def[artefact[2]].timeInteraction);*/
        console.log(resultadoExamen);
        resultadoExamen[idx].tiempo = def[artefact[idx]].timeInteraction
        resultadoExamen[idx].intentos += 1;
        //console.log(resultadoExamen[idx].tiempo)

        // Validating Notacion Intervalo
        if (mm1[0]._internals.willValidate) 
        {   
            setTimeout(() => 
            {
                clases = Array.from(mm1[0].classList);    
                //console.log(clases);          
                if(clases.includes('failed'))
                {
                    console.log('Intervalo ',idx+1,' fallo');
                    resultadoExamen[idx].items[0] = 0;
                    mm1[0].classList.remove('failed');
                }
                else if(clases.includes('pass'))
                {
                    console.log('Intervalo ',idx+1,' paso');
                    resultadoExamen[idx].items[0] = 1;                    
                    mm1[0].classList.remove('pass');
                }
                else
                {
                    console.log('Intervalo ',idx+1,' no respondio');
                    resultadoExamen[idx].items[0] = 0;                     
                }
                guardarResultados(resultadoExamen);                    
            }, 0);
        }
        else
        {
            console.log('Intervalo ',idx+1,' deshabilitado');
        }

        // Validating Recta Real
        setTimeout(() => {
            clases = Array.from(mathfieldDiv2[index].classList);     
            //console.log(clases);       
            if(clases.includes('pass'))
            {
                console.log('Recta Real ',idx+1,' paso');
                resultadoExamen[idx].items[1] = 1;
                mathfieldDiv2[index].classList.remove('pass');                
            }
            else if(clases.includes('failed'))
            {
                console.log('Recta Real ',idx+1,' fallo');
                resultadoExamen[idx].items[1] = 0;
                mathfieldDiv2[index].classList.remove('failed');                
            }
            else
            {
                console.log('Recta Real ',idx+1,' no respondio');
                resultadoExamen[idx].items[1] = 0;
            }
            guardarResultados(resultadoExamen);               
        }, 0);

        // Validating Notacion Algebraica
        if (mm3[0]._internals.willValidate) {
            // Validation logic            
            setTimeout(() => {
                clases = Array.from(mm3[0].classList);
                //console.log(clases);
                if(clases.includes('failed'))
                {
                    console.log('Algebraico ',idx+1,' fallo');
                    resultadoExamen[idx].items[0] = 0;                
                    mm3[0].classList.remove('failed');
                }
                else if(clases.includes('pass'))
                {
                    console.log('Algebraico ',idx+1,' paso');
                    resultadoExamen[idx].items[0] = 1;                    
                    mm3[0].classList.remove('pass');
                }
                else{
                    console.log('Algebraico ',idx+1,' no respondio');
                    resultadoExamen[idx].items[0] = 0;                    
                }
                guardarResultados(resultadoExamen);
            }, 0);
        }
        else
        {
            console.log('Algebraico ',idx+1,' deshabilitado');
        }         
    };

    const handleColorInputs = (startIndex, endIndex, propiedadesRdef, resultadoExamen,idx) => {
        const colorInputs = document.querySelectorAll('math-field.colorInput');
        const Previousmathfield = document.querySelectorAll('.BoardEngInt math-field.colorInput').length; 

        borderDefault = document.querySelectorAll('.borderDefault');
        borderDefault[idx].style.borderColor = 'yellow';
        borderColor[idx] = 'yellow';
        console.log(borderColor);
        localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(borderColor));        

        resultadoExamen[idx].tiempo+=rDef[propiedadesRdef].timeInteraction;
        resultadoExamen[idx].intentos += 1;

        console.log(idx ,'===', resultadoExamen[idx].tiempo);        
        
        indx = 0;
        let kk = startIndex + Previousmathfield;
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
                    handleValidation(1, document.querySelectorAll('.divEngInt1'), document.querySelectorAll('.BoardEngInt'), document.querySelectorAll('.divEngInt2'), resultadoExamen, artefact,def,0);                    
                    break;
                case validar[1]:
                    handleValidation(2, document.querySelectorAll('.divEngInt1'), document.querySelectorAll('.BoardEngInt'), document.querySelectorAll('.divEngInt2'), resultadoExamen,artefact,def,1);                    
                    break;
                case validar[2]:
                    handleValidation(3, document.querySelectorAll('.divEngInt1'), document.querySelectorAll('.BoardEngInt'), document.querySelectorAll('.divEngInt2'), resultadoExamen,artefact,def,2);                    
                    break;
                case validar[3]:
                    handleColorInputs(1, rDef[propiedadesRdef[0]].points.length, propiedadesRdef[0], resultadoExamen,3);                    
                    break;
                case validar[4]:
                    handleColorInputs(rDef[propiedadesRdef[0]].points.length + 3, rDef[propiedadesRdef[1]].points.length, propiedadesRdef[1], resultadoExamen,4);
                    break;
                case validar[5]:
                    handleColorInputs(rDef[propiedadesRdef[0]].points.length + rDef[propiedadesRdef[1]].points.length + 4, rDef[propiedadesRdef[2]].points.length, propiedadesRdef[2], resultadoExamen,5);
                    break;
                case validar[6]:
                    handleColorInputs(rDef[propiedadesRdef[0]].points.length + rDef[propiedadesRdef[1]].points.length + rDef[propiedadesRdef[2]].points.length + 5, rDef[propiedadesRdef[3]].points.length, propiedadesRdef[3], resultadoExamen,6);
                    break;
            }
        });
    }    
    return resultadoExamen;
}

function cleanArt(resets,resultadoExamen,borderColor){
    const newDiv = document.querySelectorAll('#newDiv');
    borderDefault = document.querySelectorAll('.borderDefault');
    for (let i = 0; i < resets.length; i++) {
        resets[i].addEventListener('click', function() {
            switch (this) {
                case resets[0]:
                    newDiv[i].style.borderColor = '#217E9D';
                    borderColor[i] = '#217E9D';
                    console.log(borderColor);
                    localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(borderColor));
                    resultadoExamen[i].items = [0,0];
                    break;
                case resets[1]:                    
                    newDiv[i].style.borderColor = '#217E9D';
                    borderColor[i] = '#217E9D';
                    console.log(borderColor);
                    localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(borderColor));
                    resultadoExamen[i].items = [0,0];
                    break;
                case resets[2]:
                    newDiv[i].style.borderColor = '#217E9D';
                    borderColor[i] = '#217E9D';
                    console.log(borderColor);
                    localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(borderColor));
                    resultadoExamen[i].items = [0,0];
                    break;
                case resets[3]:
                    borderDefault[i].style.borderColor = '#217E9D';
                    borderColor[i] = '#217E9D';
                    console.log(borderColor);
                    localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(borderColor));
                    resultadoExamen[i].items = [0,0,0];
                    break;
                case resets[4]:
                    borderDefault[i].style.borderColor = '#217E9D';
                    borderColor[i] = '#217E9D';
                    console.log(borderColor);
                    localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(borderColor));
                    resultadoExamen[i].items = [0,0,0,0];
                    break;
                case resets[5]:
                    borderDefault[i].style.borderColor = '#217E9D';
                    borderColor[i] = '#217E9D';
                    console.log(borderColor);
                    localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(borderColor));
                    resultadoExamen[i].items = [0,0,0];
                    break;
                case resets[6]:
                    borderDefault[i].style.borderColor = '#217E9D';
                    borderColor[i] = '#217E9D';
                    console.log(borderColor);
                    localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(borderColor));
                    resultadoExamen[i].items = [0,0,0,0];
                    break;
            }
            setTimeout(() => {
                guardarResultados(resultadoExamen);
            }, 0);
        });
    }    
    return resultadoExamen;
}

// Función asíncrona para guardar los resultados en Local Storage
async function guardarResultados(resultados) {
    await new Promise((resolve, reject) => {
        try {
            let Datos = JSON.parse(localStorage.getItem('Datos'));
            Datos.result = resultados;
            localStorage.setItem('Datos', JSON.stringify(Datos));
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

// Función que calcula el resultado total y muestra los resultados
function mostrarResultados(data) {
    const paginaExamen = document.getElementById('paginaExamen');
    const resultadoPagina = document.getElementById('resultadoPagina');
    const notafinal = document.getElementById('notafinal');

    const cantidadItems = data.reduce((count, current) => {
        if (current.items && Array.isArray(current.items)) {
            return count + current.items.length;
        }
        return count;
    }, 0);
    console.log('Items:', cantidadItems);
    const sumaItems = data.reduce((sum, current) => {
        if (current.items && Array.isArray(current.items)) {
            return sum + current.items.reduce((sum2, current2) => sum2 + current2, 0);
        }
        return sum;
    }, 0);
    
    paginaExamen.style.display = 'none';       // Oculta la página original
    resultadoPagina.style.display = 'block';   // Muestra la página de resultados
    notafinal.style.display = 'block';
    const spannota=document.getElementById("nota");
    spannota.textContent = (sumaItems/cantidadItems)*20.0;
    
    let currentIndex = 0;
        let visibleArtefactos = 1;

        function createArtefactoElement(artefacto, index) {
            const element = document.createElement('div');
            element.className = 'artefacto';
            
            if (artefacto.id === "NF") {
                element.innerHTML = `
                    <h2>Artefacto ${index + 1}</h2>
                    <div class="info">Resultado: ${artefacto.resultado}</div>
                `;
            } else {
                let itemsHtml = artefacto.items.map((item, idx) => `
                    <tr>
                        <td>${idx + 1}</td>
                        <td>${item}</td>
                    </tr>
                `).join('');

                element.innerHTML = `
                    <h2>Artefacto ${index + 1}</h2>
                    <table>
                        <tr>
                            <th>Items</th>
                            <th>Puntos</th>
                        </tr>
                        ${itemsHtml}
                    </table>
                    <div class="info">
                        <strong>Total puntos: </strong>${artefacto.items.reduce((a, b) => a + b, 0)}<br>
                        <strong>Intentos: </strong>${artefacto.intentos}<br>
                        <strong>Tiempo/Seg: </strong>${artefacto.tiempo}
                    </div>
                `;
            }
            return element;
        }

        function updateSlider() {
            const slider = document.getElementById('slider');
            slider.innerHTML = '';
            for (let i = 0; i < data.length-1; i++) {
                slider.appendChild(createArtefactoElement(data[i], i));
            }
            updateVisibleArtefactos();
        }

        function updateVisibleArtefactos() {
            const containerWidth = document.querySelector('.slider-container').offsetWidth;            
            let artefactoWidth = 250; // 250px width + 20px margin
            //artefactoWidth = window.innerWidth < 768 ? 250 : 250; //si se ve desde un telefono ancho de 150px, de lo contrario 250px
            visibleArtefactos = Math.max(1, Math.floor(containerWidth / artefactoWidth));
            document.getElementById('slider').style.transform = `translateX(-${currentIndex * artefactoWidth}px)`;
            
            // Actualizar estado de los botones
            document.getElementById('prevBtn').disabled = currentIndex === 0;
            document.getElementById('nextBtn').disabled = currentIndex >= data.length - visibleArtefactos;
        }

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateVisibleArtefactos();
            }
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (currentIndex < data.length - visibleArtefactos) {
                currentIndex++;
                updateVisibleArtefactos();
            }
        });

        window.addEventListener('resize', updateVisibleArtefactos);

        // Inicializar el slider
        updateSlider();
}




function PintaBordes (borderColor){
    let newDiv = document.querySelectorAll('#newDiv');
    borderDefault = document.querySelectorAll('.borderDefault');
    for (let i = 0; i < newDiv.length; i++) {
        newDiv[i].style.borderColor = borderColor[i];
    }
    for (let i = 3; i < borderDefault.length; i++) {
        borderDefault[i].style.borderColor = borderColor[i];
    }
}

function finalizarExamen(){
    let examData = [];
    document.querySelector('#confirmBtn').addEventListener('click', () => {
        let Datos = JSON.parse(localStorage.getItem('Datos'));
        //Se obtiene el tiempo de finalizacion del examen (Guardar la hora de inicio de estudiante)
        let examData = Datos.result; // Se obtiene el examen de la variable inicializarExamen(LOCAL_STORAGE_KEY);
        const spanTime = document.getElementById('tiempo');
        const startDate = new Date(localStorage.getItem('fechaInicioEst'));
        Datos.userStartTime = startDate;
        const endDate = new Date();
        Datos.userEndTime = endDate;
        localStorage.setItem('Datos', JSON.stringify(Datos));
        let timeElapsed = (endDate.getTime()-startDate.getTime())/60000;
        timeElapsed = timeElapsed.toFixed(2);
        spanTime.textContent = timeElapsed + ' min';
        console.log(startDate);
        console.log(endDate);
        console.log(timeElapsed);
        let result = GetResults(Datos, examData);
        console.log(result);
        if(result.results === null){
            alert('No ha respondido ninguna pregunta');
        }
        else
        {
            mostrarResultados(examData); 
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            localStorage.removeItem(LOCAL_COLORS_KEY);
            localStorage.removeItem('SeleccionadosP1');
            localStorage.removeItem('SeleccionadosP2');
            localStorage.removeItem('fechaInicioEst'); 
        }
    });    
}

function imprimirExamen(tipo){
    if(tipo=='Est'){
        document.getElementById('myModal').style.display = 'none';    
    }
    document.getElementById("pdf").addEventListener("click", function() {
        // Función para renderizar LaTeX a SVG
        function latexToSVG(latex) {
            try {
                const svg = MathJax.tex2svg(latex, {display: false});
                return svg.outerHTML;
            } catch (error) {
                console.error('Error al renderizar LaTeX:', error);
                return '';
            }
        }

        // Función para procesar los elementos math-field
        function processMathFields(section, classes, isQuestion2 = false) {
            const fields = section.querySelectorAll(classes.map(c => `math-field.${c}`).join(', '));
            let inpEngInt1Count = 0;
            let inpEngInt2Count = 0;

            fields.forEach((field) => {
                if (!field.parentNode) {
                    console.warn('Elemento math-field sin padre encontrado, saltando...');
                    return;
                }

                let mathContent = field.getValue();
                let svgContent = '';

                if (field.classList.contains('colorInput') || (isQuestion2 && field.classList.contains('textBottom'))) {
                    svgContent = latexToSVG(mathContent);
                } else {
                    // Para otros elementos, mantener el contenido original
                    if (field.shadowRoot && field.shadowRoot.querySelector('.ML__mathlive')) {
                        svgContent = field.shadowRoot.querySelector('.ML__mathlive').innerHTML;
                    } else {
                        svgContent = mathContent;
                    }
                }

                const mathDiv = document.createElement('div');
                mathDiv.className = field.className;
                mathDiv.style.cssText = field.style.cssText;
                mathDiv.innerHTML = svgContent;

                mathDiv.style.display = 'inline-block';
                mathDiv.style.width = field.offsetWidth + 'px';
                mathDiv.style.height = field.offsetHeight + 'px';

                // Centrar el contenido del mathDiv
                mathDiv.style.display = 'flex';
                mathDiv.style.justifyContent = 'center';
                mathDiv.style.alignItems = 'center';

                // Manejar elementos colorInput e inputColor
                if (field.classList.contains('colorInput') || field.classList.contains('inputColor')) {
                    const backgroundColor = window.getComputedStyle(field).backgroundColor;
                    mathDiv.style.backgroundColor = backgroundColor;
                    mathDiv.style.visibility = 'visible';
                    mathDiv.style.opacity = '1';
                    
                    // Asegurarse de que el contenido sea visible
                    if (backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'transparent') {
                        mathDiv.style.color = 'black'; // o 'white' dependiendo del color de fondo
                    }
                    
                    // Si el contenido está vacío, mostrar un espacio para que el color de fondo sea visible
                    if (!mathDiv.textContent.trim()) {
                        mathDiv.innerHTML = '&nbsp;';
                    }
                }

                // Forzar la visibilidad para los tres primeros inpEngInt1
                if (field.classList.contains('inpEngInt1') && inpEngInt1Count < 3) {
                    mathDiv.style.visibility = 'visible';
                    mathDiv.style.opacity = '1';
                    inpEngInt1Count++;
                }

                // Forzar la visibilidad para los dos primeros inpEngInt2
                if (field.classList.contains('inpEngInt2') && inpEngInt2Count < 2) {
                    mathDiv.style.visibility = 'visible';
                    mathDiv.style.opacity = '1';
                    inpEngInt2Count++;
                }

                field.parentNode.replaceChild(mathDiv, field);
            });
        }

        // Obtener section1, pregunta1 y pregunta2
        const section1 = document.getElementById('section1');
        const pregunta1 = document.getElementById('pregunta1');
        const pregunta2 = document.getElementById('pregunta2');

        // Crear un contenedor para todas las secciones
        const container = document.createElement('div');

        // Agregar section1 sin procesar
        if (section1) {
            container.appendChild(section1.cloneNode(true));
        } else {
            console.error('No se encontró el elemento section1');
        }

        // Procesar y agregar pregunta1
        if (pregunta1) {
            processMathFields(pregunta1, ['inpEngInt1', 'inpEngInt2', 'textBottom', 'inputColor', 'colorInput']);
            container.appendChild(pregunta1.cloneNode(true));
        } else {
            console.error('No se encontró el elemento pregunta1');
        }

        // Agregar un salto de página antes de pregunta2
        const pageBreak = document.createElement('div');
        pageBreak.style.pageBreakAfter = 'always';
        container.appendChild(pageBreak);

        // Procesar y agregar pregunta2
        if (pregunta2) {
            processMathFields(pregunta2, ['colorInput', 'textBottom'], true);
            container.appendChild(pregunta2.cloneNode(true));
        } else {
            console.error('No se encontró el elemento pregunta2');
        }

        // Obtener el ancho de pregunta1
        const pregunta1Width = pregunta1 ? pregunta1.offsetWidth : 0;

        // Convertir el ancho de píxeles a puntos (1 punto = 1/72 pulgada)
        const widthInPoints = pregunta1Width * (72 / 96); // Asumiendo 96 DPI

        // Configuraciones para generar el PDF
        var opt = {
            margin: 10,
            filename: 'examen.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 1, // Reducir la escala para evitar que los elementos sean demasiado grandes
                useCORS: true,
                letterRendering: true
            },
            jsPDF: { 
                unit: 'pt', 

                format: [widthInPoints + 20, 2000], // Ancho de pregunta1 + 20 puntos de margen, altura fija de 11 pulgadas (792 puntos)
                orientation: 'portrait' 
            }
        };

        // Generar el PDF
        html2pdf().from(container).set(opt).save(); 
        if(tipo=='Est'){
            document.getElementById('confirmBtn').click();
        }       
    });    
}

function mostrarModal(){
    // Obtener elementos
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    // Cuando el usuario haga clic en el botón "Enviar Evaluación", abrir el modal
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Cuando el usuario haga clic en "Sí", se puede manejar la lógica para enviar la evaluación
    confirmBtn.onclick = function() {    
        modal.style.display = "none";
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Cuando el usuario haga clic en "No", cerrar el modal
    cancelBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario haga clic fuera del modal, cerrarlo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function VerificaDatos(Datos){ 
    //console.log(Datos);
    let longDatos = Object.keys(Datos).length;
    let result;
    console.log(longDatos);

    const propiedadesRequeridas = ['idUser','idExam','firstName','secondName','surname','secondSurname','gender','email','userStartTime','userEndTime','result','fechaHoraInicio','fechaHoraCierre','chapter'];

    const todasExisten = propiedadesRequeridas.filter(prop => !(prop in Datos));

    if (todasExisten.length > 0) {
        console.log('No todas las propiedades requeridas existen: ' + todasExisten.join(', '));
        return false;
    }

    if (Datos.result!==null) {
        // Pinta los datos en el 
        const spanTime = document.getElementById('tiempo');
        let endDate = new Date(Datos.userEndTime);
        let startDate = new Date(Datos.userStartTime);
        let timeElapsed = (endDate.getTime()-startDate.getTime())/60000;
        timeElapsed = timeElapsed.toFixed(2);
        spanTime.textContent = timeElapsed + ' min';
        llenacamposverificados(Datos);
        document.getElementById('rules').style.display = 'none';
        document.getElementById('after').style.display = 'none';
        document.getElementById('resultadoPagina').style.display = 'block';
        result = true;
        return result;
    }

    PintaArtefactosExamen(Datos);

    result = true;
    
    return result;
}

/*function PintaArtefactosExamen(Datos){

    
    console.log('Todas las propiedades requeridas existen');
    document.addEventListener('DOMContentLoaded', function() {
        const paginaExamen = document.getElementById('paginaExamen');
        const notaprevia = document.getElementById('previous');
        const notaafter = document.getElementById('after');
        // Recupera los datos almacenados en localStorage


        // Pinta los datos en el DOM
        llenacamposverificados(Datos);
        
        // Verifica y compara fechas
        let fechaHoraInicio = Datos.fechaHoraInicio;
        let fechaHoraCierre = Datos.fechaHoraCierre;

        if (fechaHoraInicio && fechaHoraCierre) {
            const fechaHoraInicioDate = new Date(fechaHoraInicio);
            const fechaHoraCierreDate = new Date(fechaHoraCierre);
            const currentDate = new Date();
            
            if (fechaHoraInicioDate > currentDate) {
                console.log("La evaluación aún no ha comenzado.");
                paginaExamen.style.display = 'none';
                notaprevia.style.display = 'block';
            } else if ((fechaHoraInicioDate <= currentDate) && (currentDate <= fechaHoraCierreDate)) {
                console.log("La evaluación ya ha comenzado o debería haber comenzado.");
                let rules=document.getElementById('rules');
                rules.style.display='block';
                let rulesBtn = document.getElementById('buttonRule');
                rulesBtn.addEventListener('click',()=>{
                    rules.style.display = 'none',
                    fechaInicioEst = localStorage.getItem('fechaInicioEst');
                    PintaBordes(colorBorders);
                    if(fechaInicioEst === null)
                    {
                        fechaInicioEst = currentDate;
                        localStorage.setItem('fechaInicioEst',fechaInicioEst);
                        
                    }
                    paginaExamen.style.display = 'block';
                })
                
                
            } else {
                console.log("La evaluación ya ha finalizado o debería haber finalizado.");
                paginaExamen.style.display = 'none';
                notaafter.style.display = 'block';
            }
        } else {
            console.log("No hay una fecha de inicio almacenada.");
        }
    });

    let artefact = [];
    [position, position2] = localStoragePreguntasExamen();
    [def,artefact] = PintaSeleccionP1(position, def, 'P1');

    // Obtener las claves, ordenarlas +y luego renombrarlas
    let keys = Object.keys(def).sort((a, b) => {
        return parseInt(a.split('_')[1]) - parseInt(b.split('_')[1]);
    });

    let newObj = {};
    keys.forEach((key, index) => {
        let newKey = `artifact_${index + 1}`;
        newObj[newKey] = def[key];
    });
    def= newObj;

    //console.log(defaux);
    let artefactaux=['artifact_1','artifact_2','artifact_3'];


    //let position2 = localStorageSeleccionados("P2", 0, 31, 4);
    position2 = position2.map(x => x - 1);
    let nuevoRdef = filtrarContents(rDef, position2);
    nuevoRdef = filtrarRdef(nuevoRdef, position2);
    rDef = nuevoRdef;

    let evaluacion = [];
    let colorBorders = {};

    //Funcion para iniciarlo cuando se cargue la pagina
    window.onload = initMain();
    let i = 0;
    artefactaux.forEach((element) => {
        i++;
        let div = document.getElementById(artefactaux[0]);

        // Obtenemos el div con id "artifact_1"
        let artifactDiv = document.getElementById(element);

        // Creamos un nuevo div contenedor
        let newDiv = document.createElement("div");
        newDiv.id = "newDiv"; // Asignamos el ID

        // Creamos un div para los encabezados
        let headersDiv = document.createElement("div");
        headersDiv.style.display = "flex"; // Usamos flexbox para alinear los elementos horizontalmente
        headersDiv.style.justifyContent = "space-between"; // Alineamos elementos a los extremos

        // Creamos el encabezado "Pregunta"
        let questionHeader = document.createElement("div");
        questionHeader.className = "question-header"; // Asignamos la clase
        questionHeader.textContent = "Artef. " + i.toString();
        headersDiv.appendChild(questionHeader);

        let scoreHeader = document.createElement("div");
        scoreHeader.className = "oval-container"; // Asignamos la clase

        scoreHeader.textContent = "2 Pts";
        headersDiv.appendChild(scoreHeader);

        // Agregamos el div de encabezados al nuevo contenedor
        newDiv.appendChild(headersDiv);

        // Agregamos el div original al nuevo contenedor
        newDiv.appendChild(artifactDiv);

        // Obtenemos el div con id "container-all"
        let containerAll = document.getElementById("container-all-artifact");
        containerAll.appendChild(newDiv);
    });

    // Selecciona todos los elementos div con la clase 'boardfault'
    const divs = document.querySelectorAll('.borderDefault');

    // Itera sobre cada div y agrega el texto "Pregunta" después de cada uno
    i = 4;
    //Itera a partir del cuarto div 
    for (let i = 3; i < divs.length; i++) {
        //Itera a partir del cuarto div con la clase 'boardfault' para agregar el texto "Pregunta"  
        const divPregunta = document.createElement('div');
        divPregunta.style.display = 'flex';
        //divPregunta.style.alignItems = 'center';
        const spanPregunta = document.createElement('span');
        spanPregunta.style.float = 'left';
        const spanPuntaje = document.createElement('span');
        spanPuntaje.style.float = 'right';
        spanPregunta.textContent =  "Artef. "+(i+1).toString(); 
        let puntaje = (i===4 || i===6) ? '4 Pts' : '3 Pts'; 
        spanPuntaje.textContent = puntaje;    
        spanPregunta.classList.add('question-header');
        spanPuntaje.classList.add("oval-container");  
        divPregunta.appendChild(spanPregunta);
        divPregunta.appendChild(spanPuntaje);
        divs[i].insertBefore(divPregunta, divs[i].firstChild); 
    };
}*/

function PintaArtefactosExamen(Datos) {
    console.log('Todas las propiedades requeridas existen');
    
    document.addEventListener('DOMContentLoaded', () => {
        setupPaginaExamen(Datos);
    });

    let [position, position2] = localStoragePreguntasExamen();
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

function setupPaginaExamen(Datos) {
    const paginaExamen = document.getElementById('paginaExamen');
    const notaprevia = document.getElementById('previous');
    const notaafter = document.getElementById('after');
    
    llenacamposverificados(Datos);
    verificarFechas(Datos, paginaExamen, notaprevia, notaafter);
}

function verificarFechas(Datos, paginaExamen, notaprevia, notaafter) {
    let fechaHoraInicio = Datos.fechaHoraInicio;
    let fechaHoraCierre = Datos.fechaHoraCierre;
    const currentDate = new Date();

    if (fechaHoraInicio && fechaHoraCierre) {
        const fechaHoraInicioDate = new Date(fechaHoraInicio);
        const fechaHoraCierreDate = new Date(fechaHoraCierre);

        if (fechaHoraInicioDate > currentDate) {
            ocultarExamenAntesDeInicio(paginaExamen, notaprevia);
        } else if (fechaHoraInicioDate <= currentDate && currentDate <= fechaHoraCierreDate) {
            mostrarReglasExamen(paginaExamen);
        } else {
            ocultarExamenDespuesDeCierre(paginaExamen, notaafter);
        }
    } else {
        console.log("No hay una fecha de inicio almacenada.");
    }
}

function ocultarExamenAntesDeInicio(paginaExamen, notaprevia) {
    console.log("La evaluación aún no ha comenzado.");
    paginaExamen.style.display = 'none';
    notaprevia.style.display = 'block';
}

function ocultarExamenDespuesDeCierre(paginaExamen, notaafter) {
    console.log("La evaluación ya ha finalizado.");
    paginaExamen.style.display = 'none';
    notaafter.style.display = 'block';
}

function mostrarReglasExamen(paginaExamen) {
    console.log("La evaluación ya ha comenzado.");
    let rules = document.getElementById('rules');
    let rulesBtn = document.getElementById('buttonRule');
    
    rules.style.display = 'block';
    rulesBtn.addEventListener('click', () => {
        rules.style.display = 'none';
        let fechaInicioEst = localStorage.getItem('fechaInicioEst');
        if (!fechaInicioEst) {
            fechaInicioEst = new Date();
            localStorage.setItem('fechaInicioEst', fechaInicioEst);
        }
        PintaBordes(colorBorders);
        paginaExamen.style.display = 'block';
    });
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


function llenacamposverificados(datosVerificados){ 
     // Pinta los datos en el DOM
    document.getElementById('institucion').innerHTML = datosVerificados.liceo;
    document.getElementById('Categoria').innerHTML = datosVerificados.category;
    document.getElementById('materia').innerHTML = datosVerificados.curso;
    document.getElementById('seccion').innerHTML = datosVerificados.liceo;
    document.getElementById('nombreEstudiante').innerHTML = datosVerificados.firstName + ' ' + Datos.secondName;
    document.getElementById('correoEstudiante').innerHTML = datosVerificados.email;
    document.getElementById('capExam').innerHTML = datosVerificados.chapter;
    document.getElementById('codExam').innerHTML = datosVerificados.CodExam;
}

/*function DataInteraction(def){
    console.log('Datos recibidos de la interaccion');
    let results = cleanData(def, 'artifact_1');
    console.log(results);
}*/

function GetResults(Datos, Evaluacion){
    let result = {
        idUser:Datos.idUser,
        idExam:Datos.idExam,
        firstName:Datos.firstName,
        secondName:Datos.secondName,
        surname:Datos.surname,
        secondSurname:Datos.secondSurname,
        gender:Datos.gender,
        email:Datos.email,	
        userStartTime: Datos.userStartTime,
        userEndTime: Datos.userEndTime,        
        chapter:Datos.chapter,
        CodExam:Datos.CodExam,
        results: Evaluacion
    };
    return result;
}
//Funcion que inicializa los elementos del DOM con el template y el Fragmento
function initMain() {
    generation(def);
    generator(rDef);
    mainCartesian(defBoards, rDef);
    evaluacion = inicializarExamen(LOCAL_STORAGE_KEY);
    console.log(evaluacion);
    colorBorders = inicializarExamen(LOCAL_COLORS_KEY);
    console.log(colorBorders);
};
