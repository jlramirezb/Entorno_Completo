// Clave en Local Storage
const LOCAL_STORAGE_KEY = 'resultadoExamen';
const LOCAL_COLORS_KEY = 'colorsExamen';

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
    let resultadosGuardados, colorsBorders;
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
}

function valida(validar,resultadoExamen,def,artefact,borderColor) {    

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
        //Se obtiene el tiempo de finalizacion del examen (Guardar la hora de inicio de estudiante)
        let examData = inicializarExamen('resultadoExamen');
        const spanTime = document.getElementById('tiempo');
        const startDate = new Date(localStorage.getItem('fechaInicioEst'));
        const endDate = new Date();
        let timeElapsed = (endDate.getTime()-startDate.getTime())/60000;
        timeElapsed = timeElapsed.toFixed(2);
        spanTime.textContent = timeElapsed + ' min';
        console.log(startDate);
        console.log(endDate);
        console.log(timeElapsed);
        mostrarResultados(examData);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        localStorage.removeItem(LOCAL_COLORS_KEY);
        localStorage.removeItem('SeleccionadosP1');
        localStorage.removeItem('SeleccionadosP2');
        localStorage.removeItem('fechaInicioEst');    
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

