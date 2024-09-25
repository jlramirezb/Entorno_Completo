const LOCAL_STORAGE_KEY = 'resultadoExamen';
const LOCAL_COLORS_KEY = 'colorsExamen';
const notamaxima = 32;



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

function PintaBordes (borderColor){
    let cards = document.querySelectorAll('.card');    
    let question = document.querySelectorAll('.question-container');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.borderColor = borderColor[i];
    }
    for (let i = 0; i < question.length; i++) {
        question[i].style.borderColor = borderColor[i+4];
    }
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
    card = document.querySelectorAll('.card');
    question = document.querySelectorAll('.question-container');
    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener('click', function() {
            switch (this) {                
                case check[0]:
                    card[0].style.borderColor = 'yellow';
                    colorBorders[0] = 'yellow';
                    evaluacion['Artefacto 1'].intentos++ ;
                    def1.artefact_1.datadefault[0].contents[artifact[0]].dataInteraction.intentos++;
                    //console.log('Pulsado Artefacto 1');
                    setTimeout(function(){
                        for (let j = 0; j < def1.artefact_1.datadefault[0].contents[artifact[0]].allinputs.length; j++) {
                            if (def1.artefact_1.datadefault[0].contents[artifact[0]].allinputs[j][0].classList.contains('pass')) {
                                //console.log(j,1);
                                evaluacion['Artefacto 1'].datos[j].prop2 = 1;                        
                            }
                            else{
                                //console.log(j,0);
                                evaluacion['Artefacto 1'].datos[j].prop2 = 0;
                            }
                        }
                        guardarResultados(evaluacion);
                        localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(colorBorders));
                    }, 10);
                    break;
                case check[1]:
                    card[1].style.borderColor = 'yellow';
                    colorBorders[1] = 'yellow';
                    evaluacion['Artefacto 2'].intentos++ ;
                    def1.artefact_1.datadefault[1].contents[artifact[1]].dataInteraction.intentos++;
                    //console.log('Pulsado Artefacto 2')
                    setTimeout(function(){
                        for (let j = 0; j < def1.artefact_1.datadefault[1].contents[artifact[1]].allinputs.length; j++) {
                            if (def1.artefact_1.datadefault[1].contents[artifact[1]].allinputs[j][0].classList.contains('pass')) {
                                //console.log(j,1);  
                                evaluacion['Artefacto 2'].datos[j].prop2 = 0.5;
                            }
                            else{
                                //console.log(j,0);
                                evaluacion['Artefacto 2'].datos[j].prop2 = 0;
                            }
                        }
                        guardarResultados(evaluacion); 
                        localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(colorBorders));
                    }, 10);
                    break;
                case check[2]:
                    card[2].style.borderColor = 'yellow';
                    colorBorders[2] = 'yellow';
                    evaluacion['Artefacto 3'].intentos++ ;
                    def1.artefact_1.datadefault[2].contents[artifact[2]].dataInteraction.intentos++;
                    //console.log('Pulsado Artefacto 3')
                    setTimeout(function(){
                        for (let j = 0; j < def1.artefact_1.datadefault[2].contents[artifact[2]].allinputs.length; j++) {
                            if (def1.artefact_1.datadefault[2].contents[artifact[2]].allinputs[j][0].classList.contains('pass')) {
                                //console.log(j,1);
                                evaluacion['Artefacto 3'].datos[j].prop2 = 1;
                            }
                            else{
                                //console.log(j,0);
                                evaluacion['Artefacto 3'].datos[j].prop2 = 0;
                            }
                        }
                        guardarResultados(evaluacion);
                        localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(colorBorders));
                    }, 10);
                    break;
                case check[3]:
                    card[3].style.borderColor = 'yellow';
                    colorBorders[3] = 'yellow';
                    evaluacion['Artefacto 4'].intentos++ ;
                    def1.artefact_1.datadefault[3].contents[artifact[3]].dataInteraction.intentos++;
                    //console.log('Pulsado Artefacto 4')
                    setTimeout(function(){
                        for (let j = 0; j < def1.artefact_1.datadefault[3].contents[artifact[3]].allinputs.length; j++) {
                            if (def1.artefact_1.datadefault[3].contents[artifact[3]].allinputs[j][0].classList.contains('pass')) {
                                //console.log(j,1);
                                evaluacion['Artefacto 4'].datos[j].prop2 = 1;    
                            }
                            else{
                                //console.log(j,0);
                                evaluacion['Artefacto 4'].datos[j].prop2 = 0;
                            }
                        }
                        guardarResultados(evaluacion);
                        localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(colorBorders));
                    }, 10);
                    break;
                case check[4]:
                    question[0].style.borderColor = 'yellow';
                    colorBorders[4] = 'yellow';
                    evaluacion['Artefacto 5'].intentos++ ;
                    def[artefacts[0]].dataInteraction.intentos++;
                    //console.log('Pulsado Artefacto 5')
                    setTimeout(function(){
                        let kk = 0;             
                        for (var prop in objs) {
                            evaluacion['Artefacto 5'].datos[kk].prop1 = prop;
                            if(objs[prop] === true){                                
                                evaluacion['Artefacto 5'].datos[kk].prop2 = 1;                                
                            }
                            else{
                                evaluacion['Artefacto 5'].datos[kk].prop2 = 0;
                            }
                            kk++;
                        }
                        guardarResultados(evaluacion)
                        localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(colorBorders));
                    })
                    break;
                case check[5]:
                    question[1].style.borderColor = 'yellow';
                    colorBorders[5] = 'yellow';
                    evaluacion['Artefacto 6'].intentos++ ;
                    def[artefacts[1]].dataInteraction.intentos++;
                    //console.log('Pulsado Artefacto 6')
                    setTimeout(function(){
                        let kk = 0;             
                        for (var prop in objs) {
                            //console.log(prop)
                            evaluacion['Artefacto 6'].datos[kk].prop1 = prop;
                            if(objs[prop] === true){                                
                                evaluacion['Artefacto 6'].datos[kk].prop2 = 1;                                
                            }
                            else{
                                evaluacion['Artefacto 6'].datos[kk].prop2 = 0;
                            }
                            kk++;
                        }
                        guardarResultados(evaluacion)
                        localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(colorBorders));
                    })
                    break;
                case check[6]:
                    question[2].style.borderColor = 'yellow';
                    colorBorders[6] = 'yellow';
                    evaluacion['Artefacto 7'].intentos++ ;
                    def[artefacts[2]].dataInteraction.intentos++;
                    //console.log('Pulsado Artefacto 7')
                    setTimeout(function(){
                        let kk = 0;             
                        for (var prop in objs) {
                            evaluacion['Artefacto 7'].datos[kk].prop1 = prop;
                            if(objs[prop] === true){                                
                                evaluacion['Artefacto 7'].datos[kk].prop2 = 1;                                
                            }
                            else{
                                evaluacion['Artefacto 7'].datos[kk].prop2 = 0;
                            }
                            kk++;
                        }
                        guardarResultados(evaluacion)
                        localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(colorBorders));
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
                'Artefacto 1': { datos: Array.from({ length: 8 }, () => ({ prop1: null, prop2: null })), intentos: 0, tiempo: 0 },
                'Artefacto 2': { datos: Array.from({ length: 8 }, () => ({ prop1: null, prop2: null })), intentos: 0, tiempo: 0 },
                'Artefacto 3': { datos: Array.from({ length: 6 }, () => ({ prop1: null, prop2: null })), intentos: 0, tiempo: 0 },
                'Artefacto 4': { datos: Array.from({ length: 5 }, () => ({ prop1: null, prop2: null })), intentos: 0, tiempo: 0 },
                'Artefacto 5': { datos: Array.from({ length: 3 }, () => ({ prop1: null, prop2: null })), intentos: 0, tiempo: 0 },
                'Artefacto 6': { datos: Array.from({ length: 3 }, () => ({ prop1: null, prop2: null })), intentos: 0, tiempo: 0 },
                'Artefacto 7': { datos: Array.from({ length: 3 }, () => ({ prop1: null, prop2: null })), intentos: 0, tiempo: 0 }
            };
            resultadosGuardados["Artefacto 1"].datos[0].prop1 = 'Dominio';
            resultadosGuardados["Artefacto 1"].datos[0].prop2 = '0';
            resultadosGuardados["Artefacto 1"].datos[1].prop1 = 'Rango';            
            resultadosGuardados["Artefacto 1"].datos[1].prop2 = '0';
            resultadosGuardados["Artefacto 1"].datos[2].prop1 = 'Corte. X';
            resultadosGuardados["Artefacto 1"].datos[2].prop2 = '0';
            resultadosGuardados["Artefacto 1"].datos[3].prop1 = 'Corte. Y';
            resultadosGuardados["Artefacto 1"].datos[3].prop2 = '0';
            resultadosGuardados["Artefacto 1"].datos[4].prop1 = 'Parte +';
            resultadosGuardados["Artefacto 1"].datos[4].prop2 = '0';
            resultadosGuardados["Artefacto 1"].datos[5].prop1 = 'Parte -';
            resultadosGuardados["Artefacto 1"].datos[5].prop2 = '0';
            resultadosGuardados["Artefacto 1"].datos[6].prop1 = 'Parte Crec.';
            resultadosGuardados["Artefacto 1"].datos[6].prop2 = '0';
            resultadosGuardados["Artefacto 1"].datos[7].prop1 = 'Parte Dec.';
            resultadosGuardados["Artefacto 1"].datos[7].prop2 = '0';
            resultadosGuardados["Artefacto 2"].datos[0].prop1 = 'Max. Abs.';
            resultadosGuardados["Artefacto 2"].datos[0].prop2 = '0';
            resultadosGuardados["Artefacto 2"].datos[1].prop1 = 'Alcanzados';
            resultadosGuardados["Artefacto 2"].datos[1].prop2 = '0';
            resultadosGuardados["Artefacto 2"].datos[2].prop1 = 'Max. No Abs.';
            resultadosGuardados["Artefacto 2"].datos[2].prop2 = '0';
            resultadosGuardados["Artefacto 2"].datos[3].prop1 = 'Alcanzados';
            resultadosGuardados["Artefacto 2"].datos[3].prop2 = '0';
            resultadosGuardados["Artefacto 2"].datos[4].prop1 = 'Min. Abs.';
            resultadosGuardados["Artefacto 2"].datos[4].prop2 = '0';
            resultadosGuardados["Artefacto 2"].datos[5].prop1 = 'Alcanzados';
            resultadosGuardados["Artefacto 2"].datos[5].prop2 = '0';
            resultadosGuardados["Artefacto 2"].datos[6].prop1 = 'Min. No Abs.';
            resultadosGuardados["Artefacto 2"].datos[6].prop2 = '0';
            resultadosGuardados["Artefacto 2"].datos[7].prop1 = 'Alcanzados';
            resultadosGuardados["Artefacto 2"].datos[7].prop2 = '0';
            resultadosGuardados["Artefacto 3"].datos[0].prop1 = 'Cot. Sup. 1';
            resultadosGuardados["Artefacto 3"].datos[0].prop2 = '0';
            resultadosGuardados["Artefacto 3"].datos[1].prop1 = 'Cot. Sup. 2';
            resultadosGuardados["Artefacto 3"].datos[1].prop2 = '0';
            resultadosGuardados["Artefacto 3"].datos[2].prop1 = 'Cot. Sup. 3';
            resultadosGuardados["Artefacto 3"].datos[2].prop2 = '0';
            resultadosGuardados["Artefacto 3"].datos[3].prop1 = 'Cot. Inf. 1';
            resultadosGuardados["Artefacto 3"].datos[3].prop2 = '0';
            resultadosGuardados["Artefacto 3"].datos[4].prop1 = 'Cot. Inf. 2';
            resultadosGuardados["Artefacto 3"].datos[4].prop2 = '0';
            resultadosGuardados["Artefacto 3"].datos[5].prop1 = 'Cot. Inf. 3';
            resultadosGuardados["Artefacto 3"].datos[5].prop2 = '0';
            resultadosGuardados["Artefacto 4"].datos[0].prop1 = 'Item 1';
            resultadosGuardados["Artefacto 4"].datos[0].prop2 = '0';
            resultadosGuardados["Artefacto 4"].datos[1].prop1 = 'Item 2';
            resultadosGuardados["Artefacto 4"].datos[1].prop2 = '0';
            resultadosGuardados["Artefacto 4"].datos[2].prop1 = 'Item 3';
            resultadosGuardados["Artefacto 4"].datos[2].prop2 = '0';
            resultadosGuardados["Artefacto 4"].datos[3].prop1 = 'Item 4';
            resultadosGuardados["Artefacto 4"].datos[3].prop2 = '0';
            resultadosGuardados["Artefacto 4"].datos[4].prop1 = 'Item 5';
            resultadosGuardados["Artefacto 4"].datos[4].prop2 = '0';
            resultadosGuardados["Artefacto 5"].datos[0].prop1 = null;
            resultadosGuardados["Artefacto 5"].datos[0].prop2 = 0;
            resultadosGuardados["Artefacto 5"].datos[1].prop1 = null;
            resultadosGuardados["Artefacto 5"].datos[1].prop2 = 0;
            resultadosGuardados["Artefacto 5"].datos[2].prop1 = null;
            resultadosGuardados["Artefacto 5"].datos[2].prop2 = 0;
            resultadosGuardados["Artefacto 6"].datos[0].prop1 = null;
            resultadosGuardados["Artefacto 6"].datos[0].prop2 = 0;
            resultadosGuardados["Artefacto 6"].datos[1].prop1 = null;
            resultadosGuardados["Artefacto 6"].datos[1].prop2 = 0;
            resultadosGuardados["Artefacto 6"].datos[2].prop1 = null;
            resultadosGuardados["Artefacto 6"].datos[2].prop2 = 0;
            resultadosGuardados["Artefacto 7"].datos[0].prop1 = null;
            resultadosGuardados["Artefacto 7"].datos[0].prop2 = 0;
            resultadosGuardados["Artefacto 7"].datos[1].prop1 = null;
            resultadosGuardados["Artefacto 7"].datos[1].prop2 = 0;
            resultadosGuardados["Artefacto 7"].datos[2].prop1 = null;
            resultadosGuardados["Artefacto 7"].datos[2].prop2 = 0;
                        
            const resultadosGuardadosString = JSON.stringify(resultadosGuardados);            
            localStorage.setItem(key, resultadosGuardadosString);            
            return resultadosGuardados; // Devolver el nuevo objeto inicializado
        }
    }
    else if(key===LOCAL_COLORS_KEY)
    {
        colorsBorders = cargarResultados(key);
        if (colorsBorders) {
            const card = document.querySelectorAll('.card');
            for (let i = 0; i < card.length; i++) {
                card[i].style.borderColor = colorsBorders[i];
            }
            const question = document.querySelectorAll('.question-container');
            for (let i = 0; i < question.length; i++) {
                question[i].style.borderColor = colorsBorders[i+4];
            }
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
        card = document.querySelectorAll('.card');
        question = document.querySelectorAll('.question-container');
        reset[i].addEventListener('click', function() {
            switch (this) {                
                case reset[0]:
                    card[0].style.borderColor = '#217e9d';
                    colorBorders[0] = '#217e9d';
                    for (let j = 0; j < evaluacion['Artefacto 1'].length; j++) {
                        evaluacion['Artefacto 1'][j].prop2 = 0;
                    }                    
                    break;
                case reset[1]:
                    card[1].style.borderColor = '#217e9d';
                    colorBorders[1] = '#217e9d';
                    for (let j = 0; j < evaluacion['Artefacto 2'].length; j++) {
                        evaluacion['Artefacto 2'][j].prop2 = 0;
                    }
                    break;
                case reset[2]:
                    card[2].style.borderColor = '#217e9d';
                    colorBorders[2] = '#217e9d';
                    for (let j = 0; j < evaluacion['Artefacto 3'].length; j++) {
                        evaluacion['Artefacto 3'][j].prop2 = 0;
                    }
                    break;
                case reset[3]:
                    card[3].style.borderColor = '#217e9d';
                    colorBorders[3] = '#217e9d';
                    for (let j = 0; j < evaluacion['Artefacto 4'].length; j++) {
                        evaluacion['Artefacto 4'][j].prop2 = 0;
                    }
                    break;
                case reset[4]:
                    question[0].style.borderColor = '#217e9d';
                    colorBorders[4] = '#217e9d';
                    for (let j = 0; j < evaluacion['Artefacto 5'].length; j++) {
                        evaluacion['Artefacto 5'][j].prop2 = 0;
                    }
                    break;
                case reset[5]:
                    question[1].style.borderColor = '#217e9d';
                    colorBorders[5] = '#217e9d';
                    for (let j = 0; j < evaluacion['Artefacto 6'].length; j++) {
                        evaluacion['Artefacto 6'][j].prop2 = 0;
                    }
                    break;
                case reset[6]:
                    question[2].style.borderColor = '#217e9d';
                    colorBorders[6] = '#217e9d';
                    for (let j = 0; j < evaluacion['Artefacto 7'].length; j++) {
                        evaluacion['Artefacto 7'][j].prop2 = 0;
                    }
                    break;
                default:
                    break;
            }
            setTimeout(() => {
                guardarResultados(evaluacion);
                localStorage.setItem(LOCAL_COLORS_KEY,JSON.stringify(colorBorders));
            }, 0);
        });
    }
}

// Importar la función cargarResultados desde el módulo correspondiente
//import { cargarResultados } from 'ruta/al/modulo/cargarResultados';

/*function cargarResultados(key) {
    let resultadosGuardados = localStorage.getItem(key);
    
    if (resultadosGuardados) {
        return resultadosGuardados = JSON.parse(resultadosGuardados);
    }
    
    return null; // Si no hay datos guardados
}*/

// Definir una función para mostrar los puntajes de la evaluación por artefactos
let currentIndex = 0;
let visibleArtefactos = 1;

function createArtefactoElement(artefacto, index) {
    const element = document.createElement('div');
    element.className = 'artefacto';

    let itemsHtml = artefacto.datos.map((item, idx) => `
        <tr>
            <td>${item.prop1}</td>
            <td>${item.prop2}</td>
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
            <strong>Total puntos: </strong>${artefacto.datos.reduce((a, b) => a + parseFloat(b.prop2), 0)}<br>
            <strong>Intentos: </strong>${artefacto.intentos}<br>
            <strong>Tiempo: </strong>${parseFloat(artefacto.tiempo).toFixed(2)} segundos.<br>
        </div>
    `;
    return element;
}

function updateSlider(resultadosGuardados) {
    //console.log(resultadosGuardados)
    const slider = document.getElementById('slider');
    slider.innerHTML = '';
    
    Object.keys(resultadosGuardados).forEach((key, index) => {
        slider.appendChild(createArtefactoElement(resultadosGuardados[key], index));
    });

    updateVisibleArtefactos(resultadosGuardados);
}

function updateVisibleArtefactos(resultadosGuardados) {
    const containerWidth = document.querySelector('.slider-wrapper').offsetWidth;
    //console.log(containerWidth)
    let artefactoWidth = 230; // Puedes ajustar el ancho de los artefactos
    if (window.innerWidth >= 1200) { // Para pantallas grandes
        artefactoWidth = 250; // Ajusta este valor según tus necesidades
    } else if (window.innerWidth >= 768) { // Para tablets
        artefactoWidth = 250; // Ajusta este valor según tus necesidades
    } else { // Para dispositivos móviles
        artefactoWidth = 230; // Ajusta este valor según tus necesidades
    }
    visibleArtefactos = Math.max(1, Math.floor(containerWidth / artefactoWidth));    
    
    document.getElementById('slider').style.transform = `translateX(-${currentIndex * artefactoWidth}px)`;

    // Actualizar estado de los botones
    document.getElementById('prevBtn').disabled = currentIndex === 0;    
    //console.log(check.length)    
    document.getElementById('nextBtn').disabled = currentIndex > check.length - visibleArtefactos-1;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateVisibleArtefactos(resultadosGuardados);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    resultadosGuardados = cargarResultados(LOCAL_STORAGE_KEY);
    if (currentIndex < Object.keys(evaluacion).length - visibleArtefactos+1) {
        currentIndex++;
        updateVisibleArtefactos(resultadosGuardados);
    }
});

window.addEventListener('resize', () =>{ 
    currentIndex = 0; // Restablece el índice al primero
    resultadosGuardados = cargarResultados(LOCAL_STORAGE_KEY);
    updateVisibleArtefactos(resultadosGuardados)
});

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
        document.getElementById("paginaExamen").style.display = "none";
        document.getElementById("resultadoPagina").style.display = "block";
        resultadosGuardados = cargarResultados(LOCAL_STORAGE_KEY);
        updateSlider(resultadosGuardados);
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

function finalizarExamen(){
    document.querySelector('#confirmBtn').addEventListener('click', () => {
        let sumaTotal = 0;
        //let notamaxima = 0;

    // Iterar sobre cada artefacto
    for (let artefacto in evaluacion) {
        //console.log(artefacto);
        let datos = evaluacion[artefacto].datos;
        //console.log(datos);
        // Iterar sobre cada dato de cada artefacto
        for (let i = 0; i < datos.length; i++) {
            // Sumar el valor de prop2, asegurarse de convertirlo a número
            //console.log(parseFloat(datos[i].prop2));
            sumaTotal += parseFloat(datos[i].prop2);
            /*if (artefacto !== 'Artefacto 2') {
                notamaxima += 1;
            }
            else {
                notamaxima += 0.5;
            }*/
        }
    }
    /*console.log("La suma total de prop2 es:", sumaTotal);
    console.log("Nota maxima es:", notamaxima);*/
    /*const notaFinal = Object.values(evaluacion).reduce((acumulado, artefacto) => {
        return acumulado + artefacto[0].prop2;
    }, 0);
    
    console.log(notaFinal); // Output: 350*/
    notafinal.style.display = 'block';
    const spannota=document.getElementById("nota");
    spannota.textContent = (sumaTotal/notamaxima)*20.0;

        //Se obtiene el tiempo de finalizacion del examen (Guardar la hora de inicio de estudiante)
        //let examData = inicializarExamen('resultadoExamen');
        const spanTime = document.getElementById('tiempo');
        const startDate = new Date(localStorage.getItem('fechaInicioEst'));
        const endDate = new Date();
        let timeElapsed = (endDate.getTime()-startDate.getTime())/60000;
        timeElapsed = timeElapsed.toFixed(2);
        spanTime.textContent = timeElapsed + ' min';
        console.log(startDate);
        console.log(endDate);
        console.log(timeElapsed);
        //mostrarResultados(examData);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        localStorage.removeItem(LOCAL_COLORS_KEY);
        localStorage.removeItem('SeleccionadosP1');
        localStorage.removeItem('SeleccionadosP2');
        localStorage.removeItem('fechaInicioEst');    
    });    
}

// Objeto para almacenar los tiempos de cada tarjeta


function mideTimeCards() {
    const cardTimes = {};

    function startTimer(cardId) {
        if (!cardTimes[cardId]) {
            cardTimes[cardId] = {
                startTime: Date.now(),
                totalTime: 0,
                isActive: true,
                hasFocus: false
            };
        } else if (!cardTimes[cardId].isActive) {
            cardTimes[cardId].startTime = Date.now();
            cardTimes[cardId].isActive = true;
        }
    }

    function stopTimer(cardId) {
        const cardTime = cardTimes[cardId];
        if (cardTime && cardTime.isActive) {
            const elapsedTime = Date.now() - cardTime.startTime;
            const indice = parseInt(cardId.replace(/\D+/g, ''));
            evaluacion[`Artefacto ${indice + 1}`].tiempo += elapsedTime / 1000;
            guardarResultados(evaluacion);
            cardTime.totalTime += elapsedTime;
            cardTime.isActive = false;
            //console.log(`Tiempo total sobre la tarjeta ${cardId}: ${cardTime.totalTime / 1000} segundos`);
        }
    }

    function handleCardEvents(card, cardId) {
        card.addEventListener('mouseenter', () => {
            startTimer(cardId);
        });

        card.addEventListener('focusin', () => {
            cardTimes[cardId].hasFocus = true;
            startTimer(cardId);
        });

        card.addEventListener('mouseleave', () => {
            if (!cardTimes[cardId].hasFocus) {
                stopTimer(cardId);
            }
        });

        card.addEventListener('focusout', (event) => {
            if (!card.contains(event.relatedTarget)) {
                cardTimes[cardId].hasFocus = false;
                if (!card.matches(':hover')) {
                    stopTimer(cardId);
                }
            }
        });
    }

    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        const cardId = `card-${index}`;
        handleCardEvents(card, cardId);
    });

    // Detener todos los temporizadores cuando el ratón sale del documento
    document.addEventListener('mouseleave', () => {
        Object.keys(cardTimes).forEach(cardId => {
            if (!cardTimes[cardId].hasFocus) {
                stopTimer(cardId);
            }
        });
    });
}
function mideTimeQuestions()
{
    let questionContainers = document.querySelectorAll('.question-container');

    questionContainers.forEach((container, index) => {
        // Inicializa el tiempo acumulado para cada container        
        container.totalTime = 0;
        container.addEventListener('mouseenter', () => {
            container.startTime = Date.now();
        });

        container.addEventListener('mouseleave', () => {
            if (container.startTime) {
                let elapsedTime = Date.now() - container.startTime;
                evaluacion['Artefacto '+(index+5)].tiempo += elapsedTime/1000;
                guardarResultados(evaluacion);
                container.totalTime += elapsedTime;
                //console.log(`Tiempo acumulado en este contenedor: ${container.totalTime} ms`);
                container.startTime = null;
            }
        });
    });
}