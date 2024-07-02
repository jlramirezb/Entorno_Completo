function seleccionarAleatorios(min, max,totalale) {
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
        divbefore2.className = 'question-box';
        let span1 = document.createElement("span");
        span1.className = 'question-text';
        span1.textContent = 'P'+(i+4).toString();
        i++;
        let div = document.createElement("div");
        div.className = 'defBoard';
        let att = 'artifact_'+element.toString();
        //console.log(att)
        div.setAttribute('data-artifact',att);
        let divbottom = document.createElement("div");
        divbottom.className = 'oval-container';
        let span2 = document.createElement("span");
        span2.className = 'oval-number';
        span2.textContent = '3pts';
        divbefore2.appendChild(span1);
        divbefore1.appendChild(divbefore2);
        divbefore1.appendChild(div);
        divfather.appendChild(divbefore1);
        divbottom.appendChild(span2);
        divbefore1.appendChild(divbottom);
    
        //console.log(divfather);
    });

    let btnBack = document.createElement("button");
    btnBack.textContent = "Regresar";
    divfather.parentNode.appendChild(btnBack);

    btnBack.addEventListener('click',()=>{
        window.location.href = "Pag_Ex.html";
    })
}

function PintaSeleccionP1(position, def, defBoard, Pregunta){
    const newPropertyName = `board_${position}`;
    const desiredBoard = {};
    
    desiredBoard[newPropertyName]=defBoards[newPropertyName];
    defBoards = desiredBoard;
    
    let artefact = [];
    artefact[0] = 'artifact_${position*2-1}';
    artefact[1] = 'artifact_${position*2}';
    def.artefact_1.datadefault = def.artefact_1.datadefault.slice((position-1)*2,(position-1)*2+2);
    
    let div = document.querySelectorAll('#artifact_1');
    div.id = artefact[0];
    div = document.querySelectorAll('#artifact_2');
    div.id = artefact[1];
    
    let div2 = document.querySelectorAll('[data-board="board_1"]');
    div2[0].setAttribute('data-board', `board_${position}`);
    div2[1].setAttribute('data-board', `board_${position}`);    

    if(Pregunta==='P1_1'){
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

    }
    
    return ([def, defBoard]);
}