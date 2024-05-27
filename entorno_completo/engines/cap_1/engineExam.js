function seleccionarTresAleatorios(min, max) {
    // Crear un array con los números consecutivos
    const numeros = [];
    for (let i = min; i <= max; i++) {
        numeros.push(i);
    }

    // Seleccionar 3 números aleatorios distintos
    const seleccionados = [];
    while (seleccionados.length < 3) {
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

function localStorageSeleccionados(Pregunta,min,max){
    let seleccionados = [];
    //if(Pregunta === "P2"){
        
        if (localStorage.getItem('SeleccionadosP2')===null){
            seleccionados = seleccionarTresAleatorios(min, max);
            localStorage.setItem('SeleccionadosP2',seleccionados);
            //console.log(1,seleccionados); // Ejemplo: [17, 8, 23]
        }
        else{
            seleccionados = localStorage.getItem('SeleccionadosP2');
            seleccionados = seleccionados.split(',').map(Number);
            //console.log(2,seleccionados); // Ejemplo: [17, 8, 23]
        }
    //}
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
        span1.textContent = 'P'+i.toString();
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