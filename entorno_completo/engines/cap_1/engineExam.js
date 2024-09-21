const LOCAL_STORAGE_KEY = 'resultadoExamen';

function seleccionarAleatorios(min, max,totalale) {
    // Crear un array con los números consecutivos
    const numeros = [];
    for (let i = min; i <= max; i++) {
        numeros.push(i);
    }
    console.log(numeros);

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

function localStorageSeleccionados(Pregunta,min,max,totalale){
    let seleccionados = [];
    if(Pregunta === "P2"){        
        if (localStorage.getItem('SeleccionadosP2')===null){
            seleccionados = seleccionarAleatorios(min, max, totalale);
            localStorage.setItem('SeleccionadosP2',seleccionados);
            //console.log(1,seleccionados); // Ejemplo: [17, 8, 23]
        }
        else{
            seleccionados = localStorage.getItem('SeleccionadosP2');
            seleccionados = seleccionados.split(',').map(Number);
            //console.log(2,seleccionados); // Ejemplo: [17, 8, 23]
        }
    }else if(Pregunta === "P1"){
        if (localStorage.getItem('SeleccionadosP1')===null){
            seleccionados = seleccionarAleatorios(min, max, totalale);
            localStorage.setItem('SeleccionadosP1',seleccionados);
            //console.log(1,seleccionados); // Ejemplo: [17, 8, 23]
        }
        else{
            seleccionados = localStorage.getItem('SeleccionadosP1');
            seleccionados = seleccionados.split(',').map(Number);
            //console.log(2,seleccionados); // Ejemplo: [17, 8, 23]
        }
    }    
    return seleccionados;
}

function PintaSeleccionP2(seleccionados){
    let i=1;

    let divfather = document.getElementById("container").firstChild.nextSibling;
    console.log(seleccionados);
    seleccionados.forEach(element => {
        let divbefore1 = document.createElement("div");
        divbefore1.className = 'question-container';
        let divbefore2 = document.createElement("div");
        divbefore2.className = 'containerInfo';
        let span1 = document.createElement("span");
        span1.className = 'question-header2';
        span1.textContent = 'Artef. '+(i+4).toString();
        i++;
        let div = document.createElement("div");
        div.className = 'defBoard';
        let att = 'artifact_'+element.toString();
        //console.log(att)
        div.setAttribute('data-artifact',att);
        /*let divbottom = document.createElement("div");
        divbottom.className = 'oval-container';*/
        let span2 = document.createElement("span");
        span2.className = 'oval-container2';
        span2.textContent = '3 pts';
        divbefore2.appendChild(span1);
        divbefore2.appendChild(span2);
        divbefore1.appendChild(divbefore2);
        divbefore1.appendChild(div);
        divfather.appendChild(divbefore1);
        
        //divbefore1.appendChild(divbottom);
    
        //console.log(divfather);
    });

    /*let btnBack = document.createElement("button");
    btnBack.textContent = "Regresar";
    divfather.parentNode.appendChild(btnBack);

    btnBack.addEventListener('click',()=>{
        window.location.href = "Pag_Ex.html";
    })*/
}

function PintaSeleccionP1(position, def, defBoard, Pregunta){
    const newPropertyName = `board_${position}`;
    //console.log(newPropertyName);
    const desiredBoard = {};

    //console.log(defBoards);
    desiredBoard[newPropertyName]=defBoards[newPropertyName];
    defBoards = desiredBoard;
    //console.log(defBoards);
    
    let artefact = [];
    let kk = 4*(position-1)
    artefact[0] = 'artifact_'+ (kk+1);
    artefact[1] = 'artifact_'+ (kk+2);
    artefact[2] = 'artifact_'+ (kk+3);
    artefact[3] = 'artifact_'+ (kk+4);
    //console.log(position)
    //console.log(artefact)
    //console.log(def)

    def.artefact_1.datadefault = def.artefact_1.datadefault.slice((position-1)*4,(position-1)*4+4);
    
    let div = document.querySelectorAll('#artifact_1');
    div.id = artefact[0];
    div = document.querySelectorAll('#artifact_2');
    div.id = artefact[1];
    div = document.querySelectorAll('#artifact_3');
    div.id = artefact[2];
    div = document.querySelectorAll('#artifact_4');
    div.id = artefact[3];
    
    let div2 = document.querySelectorAll('[data-board="board_1"]');
    div2[0].setAttribute('data-board', `board_${position}`);
    div2[1].setAttribute('data-board', `board_${position}`);    
    div2[2].setAttribute('data-board', `board_${position}`);    
    div2[3].setAttribute('data-board', `board_${position}`);    

    /*if(Pregunta==='P1_1'){
        div = document.querySelector('.containerNormal');
        let btnBack = document.createElement("button");
        btnBack.textContent = "Regresar";
        div.appendChild(btnBack);

        btnBack.addEventListener('click',()=>{
            window.location.href = "Pag_Ex.html";
        })
    }else if(Pregunta==='P1'){
        btnBack = document.querySelector('.boton-izquierda');
        btnForw = document.querySelector('.boton-derecha');
        btnBack.addEventListener('click',()=>{
            window.location.href = "Pag_Ex.html";
        })
        btnForw.addEventListener('click',()=>{
            window.location.href = "pagEx_P1_1.html";
        })

    }*/    
    return ([def, defBoard]);
}

function sendData(data) {
    console.log('>>', data)
}

function Evaluacion(check){
    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener('click', function() {
            switch (this) {                
                case check[0]:
                    def1.artefact_1.datadefault[0].contents.artifact_1.dataInteraction.intentos++;
                    console.log('Pulsado Artefacto 1');
                    setTimeout(function(){
                        for (let j = 0; j < def1.artefact_1.datadefault[0].contents.artifact_1.allinputs.length; j++) {
                            if (def1.artefact_1.datadefault[0].contents.artifact_1.allinputs[j][0].classList.contains('pass')) {
                                console.log(j,1);
                                evaluacion['Artefacto 1'][j].prop2 = 1;                        
                            }
                            else{
                                console.log(j,0);
                                evaluacion['Artefacto 1'][j].prop2 = 0;
                            }
                        }
                        guardarResultados(evaluacion);
                    }, 10);
                    break;
                case check[1]:
                    def1.artefact_1.datadefault[1].contents.artifact_2.dataInteraction.intentos++;
                    console.log('Pulsado Artefacto 2')
                    setTimeout(function(){
                        for (let j = 0; j < def1.artefact_1.datadefault[1].contents.artifact_2.allinputs.length; j++) {
                            if (def1.artefact_1.datadefault[1].contents.artifact_2.allinputs[j][0].classList.contains('pass')) {
                                console.log(j,1);  
                                evaluacion['Artefacto 2'][j].prop2 = 0.5;
                            }
                            else{
                                console.log(j,0);
                                evaluacion['Artefacto 2'][j].prop2 = 0;
                            }
                        }
                        guardarResultados(evaluacion); 
                    }, 10);
                    break;
                case check[2]:
                    def1.artefact_1.datadefault[2].contents.artifact_3.dataInteraction.intentos++;
                    console.log('Pulsado Artefacto 3')
                    setTimeout(function(){
                        for (let j = 0; j < def1.artefact_1.datadefault[2].contents.artifact_3.allinputs.length; j++) {
                            if (def1.artefact_1.datadefault[2].contents.artifact_3.allinputs[j][0].classList.contains('pass')) {
                                console.log(j,1);
                                evaluacion['Artefacto 3'][j].prop2 = 1;
                            }
                            else{
                                console.log(j,0);
                                evaluacion['Artefacto 3'][j].prop2 = 0;
                            }
                        }
                        guardarResultados(evaluacion);
                    }, 10);
                    break;
                case check[3]:
                    def1.artefact_1.datadefault[3].contents.artifact_4.dataInteraction.intentos++;
                    console.log('Pulsado Artefacto 4')
                    setTimeout(function(){
                        for (let j = 0; j < def1.artefact_1.datadefault[3].contents.artifact_4.allinputs.length; j++) {
                            if (def1.artefact_1.datadefault[3].contents.artifact_4.allinputs[j][0].classList.contains('pass')) {
                                console.log(j,1);
                                evaluacion['Artefacto 4'][j].prop2 = 1;    
                            }
                            else{
                                console.log(j,0);
                                evaluacion['Artefacto 4'][j].prop2 = 0;
                            }
                        }
                        guardarResultados(evaluacion);
                    }, 10);
                    break;
                case check[4]:
                    def[artefacts[0]].dataInteraction.intentos++;
                    console.log('Pulsado Artefacto 5')
                    setTimeout(function(){
                        let kk = 0;             
                        for (var prop in objs) {
                            evaluacion['Artefacto 5'][kk].prop1 = prop;
                            if(objs[prop] === true){                                
                                evaluacion['Artefacto 5'][kk].prop2 = 1;                                
                            }
                            else{
                                evaluacion['Artefacto 5'][kk].prop2 = 0;
                            }
                            kk++;
                        }
                        guardarResultados(evaluacion)
                    })
                    break;
                case check[5]:
                    def[artefacts[1]].dataInteraction.intentos++;
                    console.log('Pulsado Artefacto 6')
                    setTimeout(function(){
                        let kk = 0;             
                        for (var prop in objs) {
                            console.log(prop)
                            evaluacion['Artefacto 6'][kk].prop1 = prop;
                            if(objs[prop] === true){                                
                                evaluacion['Artefacto 6'][kk].prop2 = 1;                                
                            }
                            else{
                                evaluacion['Artefacto 6'][kk].prop2 = 0;
                            }
                            kk++;
                        }
                        guardarResultados(evaluacion)
                    })
                    break;
                case check[6]:
                    def[artefacts[2]].dataInteraction.intentos++;
                    console.log('Pulsado Artefacto 7')
                    setTimeout(function(){
                        let kk = 0;             
                        for (var prop in objs) {
                            evaluacion['Artefacto 7'][kk].prop1 = prop;
                            if(objs[prop] === true){                                
                                evaluacion['Artefacto 7'][kk].prop2 = 1;                                
                            }
                            else{
                                evaluacion['Artefacto 7'][kk].prop2 = 0;
                            }
                            kk++;
                        }
                        guardarResultados(evaluacion)
                    })
                    break;
            }
        });
    }   
}

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


function cargarResultados(key) {
    let resultadosGuardados = localStorage.getItem(key);    
    if (resultadosGuardados) {
        return resultadosGuardados = JSON.parse(resultadosGuardados);
    }    
    return null; // Si no hay datos guardados
}


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
            resultadosGuardados = {
                'Artefacto 1': Array.from({ length: 8 }, () => ({ prop1: null, prop2: null })),
                'Artefacto 2': Array.from({ length: 8 }, () => ({ prop1: null, prop2: null })),
                'Artefacto 3': Array.from({ length: 6 }, () => ({ prop1: null, prop2: null })),
                'Artefacto 4': Array.from({ length: 5 }, () => ({ prop1: null, prop2: null })),
                'Artefacto 5': Array.from({ length: 3 }, () => ({ prop1: null, prop2: null })),
                'Artefacto 6': Array.from({ length: 3 }, () => ({ prop1: null, prop2: null })),
                'Artefacto 7': Array.from({ length: 3 }, () => ({ prop1: null, prop2: null }))
            };;
            resultadosGuardados["Artefacto 1"][0].prop1 = 'Dom';
            resultadosGuardados["Artefacto 1"][0].prop2 = '0';
            resultadosGuardados["Artefacto 1"][1].prop1 = 'Rango';
            resultadosGuardados["Artefacto 1"][1].prop2 = '0';
            resultadosGuardados["Artefacto 1"][2].prop1 = 'C. X';
            resultadosGuardados["Artefacto 1"][2].prop2 = '0';
            resultadosGuardados["Artefacto 1"][3].prop1 = 'C. Y';
            resultadosGuardados["Artefacto 1"][3].prop2 = '0';
            resultadosGuardados["Artefacto 1"][4].prop1 = 'P. +';
            resultadosGuardados["Artefacto 1"][4].prop2 = '0';
            resultadosGuardados["Artefacto 1"][5].prop1 = 'P. -';
            resultadosGuardados["Artefacto 1"][5].prop2 = '0';
            resultadosGuardados["Artefacto 1"][6].prop1 = 'P. C.';
            resultadosGuardados["Artefacto 1"][6].prop2 = '0';
            resultadosGuardados["Artefacto 1"][7].prop1 = 'P. D.';
            resultadosGuardados["Artefacto 1"][7].prop2 = '0';
            resultadosGuardados["Artefacto 2"][0].prop1 = 'Max. Abs.';
            resultadosGuardados["Artefacto 2"][0].prop2 = '0';
            resultadosGuardados["Artefacto 2"][1].prop1 = 'Alcanzados';
            resultadosGuardados["Artefacto 2"][1].prop2 = '0';
            resultadosGuardados["Artefacto 2"][2].prop1 = 'Max. No Abs.';
            resultadosGuardados["Artefacto 2"][2].prop2 = '0';
            resultadosGuardados["Artefacto 2"][3].prop1 = 'Alcanzados';
            resultadosGuardados["Artefacto 2"][3].prop2 = '0';
            resultadosGuardados["Artefacto 2"][4].prop1 = 'Min. Abs.';
            resultadosGuardados["Artefacto 2"][4].prop2 = '0';
            resultadosGuardados["Artefacto 2"][5].prop1 = 'Alcanzados';
            resultadosGuardados["Artefacto 2"][5].prop2 = '0';
            resultadosGuardados["Artefacto 2"][6].prop1 = 'Min. No Abs.';
            resultadosGuardados["Artefacto 2"][6].prop2 = '0';
            resultadosGuardados["Artefacto 2"][7].prop1 = 'Alcanzados';
            resultadosGuardados["Artefacto 2"][7].prop2 = '0';
            resultadosGuardados["Artefacto 3"][0].prop1 = 'Cot. Sup. 1';
            resultadosGuardados["Artefacto 3"][0].prop2 = '0';
            resultadosGuardados["Artefacto 3"][1].prop1 = 'Cot. Sup. 2';
            resultadosGuardados["Artefacto 3"][1].prop2 = '0';
            resultadosGuardados["Artefacto 3"][2].prop1 = 'Cot. Sup. 3';
            resultadosGuardados["Artefacto 3"][2].prop2 = '0';
            resultadosGuardados["Artefacto 3"][3].prop1 = 'Cot. Inf. 1';
            resultadosGuardados["Artefacto 3"][3].prop2 = '0';
            resultadosGuardados["Artefacto 3"][4].prop1 = 'Cot. Inf. 2';
            resultadosGuardados["Artefacto 3"][4].prop2 = '0';
            resultadosGuardados["Artefacto 3"][5].prop1 = 'Cot. Inf. 3';
            resultadosGuardados["Artefacto 3"][5].prop2 = '0';
            resultadosGuardados["Artefacto 4"][0].prop1 = 'Item 1';
            resultadosGuardados["Artefacto 4"][0].prop2 = '0';
            resultadosGuardados["Artefacto 4"][1].prop1 = 'Item 2';
            resultadosGuardados["Artefacto 4"][1].prop2 = '0';
            resultadosGuardados["Artefacto 4"][2].prop1 = 'Item 3';
            resultadosGuardados["Artefacto 4"][2].prop2 = '0';
            resultadosGuardados["Artefacto 4"][3].prop1 = 'Item 4';
            resultadosGuardados["Artefacto 4"][3].prop2 = '0';
            resultadosGuardados["Artefacto 4"][4].prop1 = 'Item 5';
            resultadosGuardados["Artefacto 4"][4].prop2 = '0';
            resultadosGuardados["Artefacto 5"][0].prop1 = null;
            resultadosGuardados["Artefacto 5"][0].prop2 = 0;
            resultadosGuardados["Artefacto 5"][1].prop1 = null;
            resultadosGuardados["Artefacto 5"][1].prop2 = 0;
            resultadosGuardados["Artefacto 5"][2].prop1 = null;
            resultadosGuardados["Artefacto 5"][2].prop2 = 0;
            resultadosGuardados["Artefacto 6"][0].prop1 = null;
            resultadosGuardados["Artefacto 6"][0].prop2 = 0;
            resultadosGuardados["Artefacto 6"][1].prop1 = null;
            resultadosGuardados["Artefacto 6"][1].prop2 = 0;
            resultadosGuardados["Artefacto 6"][2].prop1 = null;
            resultadosGuardados["Artefacto 6"][2].prop2 = 0;
            resultadosGuardados["Artefacto 7"][0].prop1 = null;
            resultadosGuardados["Artefacto 7"][0].prop2 = 0;
            resultadosGuardados["Artefacto 7"][1].prop1 = null;
            resultadosGuardados["Artefacto 7"][1].prop2 = 0;
            resultadosGuardados["Artefacto 7"][2].prop1 = null;
            resultadosGuardados["Artefacto 7"][2].prop2 = 0;            
            
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

function cleanEval(reset)
{
    for (let i = 0; i < reset.length; i++) {
        reset[i].addEventListener('click', function() {
            switch (this) {                
                case reset[0]:
                    for (let j = 0; j < evaluacion['Artefacto 1'].length; j++) {
                        evaluacion['Artefacto 1'][j].prop2 = 0;
                    }                    
                    break;
                case reset[1]:
                    for (let j = 0; j < evaluacion['Artefacto 2'].length; j++) {
                        evaluacion['Artefacto 2'][j].prop2 = 0;
                    }
                    break;
                case reset[2]:
                    for (let j = 0; j < evaluacion['Artefacto 3'].length; j++) {
                        evaluacion['Artefacto 3'][j].prop2 = 0;
                    }
                    break;
                case reset[3]:
                    for (let j = 0; j < evaluacion['Artefacto 4'].length; j++) {
                        evaluacion['Artefacto 4'][j].prop2 = 0;
                    }
                    break;
                case reset[4]:
                    for (let j = 0; j < evaluacion['Artefacto 5'].length; j++) {
                        evaluacion['Artefacto 5'][j].prop2 = 0;
                    }
                    break;
                case reset[5]:
                    for (let j = 0; j < evaluacion['Artefacto 6'].length; j++) {
                        evaluacion['Artefacto 6'][j].prop2 = 0;
                    }
                    break;
                case reset[6]:
                    for (let j = 0; j < evaluacion['Artefacto 7'].length; j++) {
                        evaluacion['Artefacto 7'][j].prop2 = 0;
                    }
                    break;
                default:
                    break;
            }
            setTimeout(() => {
                guardarResultados(evaluacion);
            }, 0);
        });
    }
}