function seleccionarAleatorios(min, max,totalale) {
    /*// Crear un array con los números consecutivos
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
    return seleccionados;*/
    if (totalale % 2 !== 0) {
        return "El valor de N debe ser par para tener igual cantidad de pares e impares.";
    }
    const resultado = [];
    const pares = [];
    const impares = [];

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
          pares.push(i);
        } else {
          impares.push(i);
        }
      }

    // Generar números pares e impares dentro del rango
    let quedanPares = totalale / 2;
    let quedanImpares = totalale / 2;
    while (resultado.length < totalale) {
      const elegirPar = Math.random() < quedanPares / (quedanPares + quedanImpares); 
      if (elegirPar && pares.length > 0) {
        const indicePar = Math.floor(Math.random() * pares.length);
        resultado.push(pares[indicePar]);
        pares.splice(indicePar, 1);
        quedanPares--;
      } else if (impares.length > 0) {
        const indiceImpar = Math.floor(Math.random() * impares.length);
        resultado.push(impares[indiceImpar]);
        impares.splice(indiceImpar, 1);
        quedanImpares--;
      }
    }

    // Seleccionar aleatoriamente N/2 pares y N/2 impares

    // Mezclar el arreglo para que los pares e impares no estén ordenados
    return resultado.sort();
}


function localStorageSeleccionados(Pregunta,min,max,totalale){
    let seleccionados = [];
    switch (Pregunta) {
        case 'P1':
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
            break;
        case 'P2':
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
            break;
    }        
    return seleccionados;
}

/*function PintaSeleccionP2(seleccionados){
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
}*/

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
    console.log(nuevoDef);
    //let defBoard = []
    def = nuevoDef;

    return ([def,artefact]);
}