//comentario
let def = {
  //Inicio Artefactos Annelys: 1 --  9
  artifact_1: {
    representation: '1<x<2 ⠀ y ⠀ x>3',
    preDefPoint: [[56, 0, 0, 't']],
    conditions: {
      valInterval: ['(1,2)∩(3,∞)', '∅'],
    }
  },
  artifact_2: {
    representation: '1<x<2 ⠀ o ⠀ x>3',
    conditions: {
      valInterval: ['(1,2)∪(3,∞)'],
      board: [{
        pares: [['1', '2'], ['3', '+∞']],
        points: [['1', true], ['2', true], ['3', true]],
      }],
    }
  },
  artifact_3: {
    representation: 'x<3 ⠀ o ⠀ x>3',
    conditions: {
      valInterval: ['(−∞,3)∪(3,∞)', '(−∞,∞)−[3,3]', '(−∞,∞)−{3}'],
      points: ['3, true'],
      board: [{
        pares: [['-∞', '3'], ['3', '+∞']],
        points: [['3', true]],
      },
      {
        pares: [['-∞', '+∞']],
        points: [['3', true]],
      }],
    }
  },
  artifact_4: {
    representation: 'x≠3',
    conditions: {
      valInterval: ['(−∞,3)∪(3,∞)', '(−∞,∞)−[3,3]', '(−∞,∞)−{3}'],
      board: [{
        pares: [['-∞', '3'], ['3', '+∞']],
        points: [['3', true]],
      },
      {
        pares: [['-∞', '+∞']],
        points: [['3', true]],
      }]
    }
  },
  artifact_5: {
    representation: 'x≠1 y x≠2 y x≠3',
    conditions: {
      valInterval: ['(−∞,∞)−{1,2,3}','(−∞,1)∪(1,2)∪(2,3)∪(3,∞)','(−∞,∞)−[1,1]∪[2,2]∪[3,3]'],

      board: [{
        pares: [['-∞', '1'], ['1', '2'], ['2', '3'], ['3', '+∞']],
        points: [['1', true], ['2', true], ['3', true]],
      },
      {
        pares: [['-∞', '+∞']],
        points: [['1', true], ['2', true], ['3', true]],
      }]
    }
  },
  artifact_6: {
    representation: 'x≠1 ⠀ o ⠀ x≠2',
    //preDefPoint: [[56, 0, 0, 't']],
    conditions: {
      valInterval: ['(−∞,∞)', 'r','r−{1}∪r−{2}','(−∞,∞)-{1}∪(−∞,∞)−{2}','(-∞,∞)−[1,1]∪(−∞,∞)−[2,2]','r−[1,1]∪r−[2,2]'],
        
      board: [

        {
          pares: [['-∞', '+∞']],
        }]
        
    }
  },
  artifact_7: {
    representation: 'x≤3 ⠀ y ⠀ x≥3',
    conditions: {
      valInterval: ['(−∞,3]∩[3,∞)', '[3,3]'],
      board: [{
        pares: [['−∞', '3'], ['3', '+∞']],
        points: [['3', false]],
      },
      {

        points: [['3', false]],
      }]
    }
  },
  artifact_8: {
    representation: 'R−\\{1,2\\}',
    conditions: {
      valInterval: ['r−{1,2}','(−∞,∞)−{1,2}','(−∞,1)∪(1,2)∪(2,∞)','(−∞,∞)−[1,1]∪[2,2]'],
      board: [{
        pares: [['-∞', '1'], ['1', '2'], ['2', '+∞']],
        points: [['1', true], ['2', true]],
      },
      {
        pares: [['-∞', '+∞']],
        points: [['1', true], ['2', true]],
      }]
    }
  },
  artifact_9: {
    representation: 'R−\\{−1,2\\}',
    conditions: {
      valInterval: ['(−∞,∞)−{−1,2}','(−∞,−1)∪(−1,2)∪(2,∞)','(−∞,∞)−[−1,−1]∪[2,2]'],
      board: [{
        pares: [['-∞', '−1'], ['−1', '2'], ['2', '+∞']],
        points: [['−1', true], ['2', true]],
      },
      {
        pares: [['-∞', '+∞']],
        points: [['−1', true], ['2', true]],
      }]
    }
  },
  artifact_10: {
    representation: 'R−(−1,1)',
    conditions: {
      valInterval: ['(−∞,∞)−(−1,1)', '(−∞,−1]∪[1,∞)','r−(−1,1)'],

      board: [{
        pares: [['-∞', '−1'], ['1', '+∞']],
        points: [['−1', false], ['1', false]],
      },
      {
        pares: [['−∞', '+∞'], ['−1', '1']],
        points: [['−1', true], ['1', true]],
      }]
    }
  },
  artifact_11: {
    conditions: {
      valInterval: ['(x0,x1]'],
      valRepre: ['x0<x≤x1', 'x1≥x>x0'],
    },
    preDefPar: [[[2, 0, 0, 'x0'], [4, 0, 1, 'x1']]],
    preDefPoint: [[2, 0, 0, 'x0'], [4, 0, 1, 'x1']]
  },
  artifact_12: {
    conditions: {
      valInterval: ['[r,s)∪[t,t]','[r,s)∪{t}'], //≥
      valRepre: ['r≤x<sox=t', 's>x≥rox=t','r≤x<sot≤x≤t','s>x≥rot≥x≥t'],
    },
    preDefPar: [[[2, 0, 1, 'r'], [4, 0, 0, 's']]],
    preDefPoint: [[5, 0, 0, 't']]
  },
  //Fin Artefactos Annelys
  //Inicio Artefactos Luis: 10 -- 18

  //Fin Artefactos Luis
  //Inicio Artefactos Manuel: 19 -- 24

  //Fin Artefactos Manuel  
}
let artefact = [];
let position = localStorageSeleccionados("P1", 1, 8, 3);
[def,artefact] = PintaSeleccionP1(position, def, 'P1')

//Funcion que inicializa los elementos del DOM con el template y el Fragmento
function initMain() {
  generation(def);
};



//Funcion para iniciarlo cuando se cargue la pagina
window.onload = initMain();
let i = 0;
artefact.forEach((element) => {
  i++;
  let div = document.getElementById(artefact[0]);

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
  questionHeader.textContent = "P" + i.toString();
  headersDiv.appendChild(questionHeader);

  let scoreHeader = document.createElement("div");
  scoreHeader.className = "score-header"; // Asignamos la clase

  scoreHeader.textContent = "2 Pts";
  headersDiv.appendChild(scoreHeader);

  // Agregamos el div de encabezados al nuevo contenedor
  newDiv.appendChild(headersDiv);

  // Agregamos el div original al nuevo contenedor
  newDiv.appendChild(artifactDiv);

  // Obtenemos el div con id "container-all"
  let containerAll = document.getElementById("container-all-artifact");
  containerAll.appendChild(newDiv);

  console.log(containerAll);
  // Reemplazamos el div original con el nuevo contenedor
  //containerAll.replaceChild(newDiv, artifactDiv);
});

let containerAll = document.getElementById("container-all-artifact");
let btnBack = document.createElement("button");
btnBack.textContent = "Regresar";
containerAll.appendChild(btnBack);

btnBack.addEventListener('click',()=>{
  window.location.href = "Pag_Ex.html";
})


//const btnBack = document.getElementById("miBoton");

function centrarBoton() {
  // Obtenemos el ancho y alto del botón
  const anchoBoton = btnBack.offsetWidth;
  //const altoBoton = btnBack.offsetHeight;

  // Obtenemos el ancho y alto de la ventana
  const anchoVentana = window.innerWidth;
  //const altoVentana = window.innerHeight;

  // Calculamos la posición para centrar el botón
  const posicionX = (anchoVentana - anchoBoton) / 2;
  //const posicionY = (altoVentana - altoBoton) / 2;

  // Aplicamos la posición y el ancho al botón
  btnBack.style.position = "absolute";
  btnBack.style.left = posicionX + "px";
  //btnBack.style.top = posicionY + "px";
  btnBack.style.width = "10%"; // Ajusta este valor según sea necesario
}

// Centramos el botón al cargar la página
window.addEventListener('load', centrarBoton);

// Volvemos a centrar el botón si la ventana cambia de tamaño
window.addEventListener('resize', centrarBoton);



window.addEventListener('load', function() {
  //const tbodyElement = document.querySelectorAll('tbody');
  //const selectElements = tbodyElement[0].querySelectorAll('select');
  //const selectedValues = JSON.parse(localStorage.getItem('selectedValues'));
  /*if (selectedValues) {
      for (let i = 0; i < selectElements.length; i++) {
          const selectedValue = selectedValues[i];
          const selectedOption = selectElements[i].querySelector(`option[value="${selectedValue}"]`);
          selectedOption.selected = true;
      }
  }*/
  /*const mathFieldElements = tbodyElement[0].querySelectorAll('math-field');
  const mathFieldElementsB = tbodyElement[1].querySelectorAll('math-field');
  const mathValues = JSON.parse(localStorage.getItem('mathValuesA'));
  const mathValuesB = JSON.parse(localStorage.getItem('mathValuesB'));
  if (mathValues) {
      for (let i = 0; i < mathFieldElements.length; i++) {
          mathFieldElements[i].value = mathValues[i];
      }
  }
  if (mathValues) {
      for (let i = 0; i < mathFieldElementsB.length; i++) {
          mathFieldElementsB[i].value = mathValuesB[i];
      }
  }*/
  const intentos1_LS = localStorage.getItem('P1_Intentos1');
  const intentos2_LS = localStorage.getItem('P1_Intentos2');
  const intentos3_LS = localStorage.getItem('P1_Intentos3');
  if (intentos1_LS)
      intentos1 = intentos1_LS
  else
      intentos1 = 0;
  if (intentos2_LS)
      intentos2 = intentos2_LS
  else
      intentos2 = 0;
  if (intentos3_LS)
      intentos3 = intentos3_LS
  else
      intentos3 = 0;
});

let validar = document.querySelectorAll('.check');
let intentos1, intentos2, intentos3;
for (let i = 0; i < validar.length; i++) {
    // Add a click event listener to each element
    validar[i].addEventListener('click', function() {
        // Print a different message depending on the element
        switch (this) {
            case validar[0]:
                intentos1++;                
                localStorage.setItem('P1_Intentos1',intentos1);
                break;
            case validar[1]:
                intentos2++;                
                localStorage.setItem('P1_Intentos2',intentos2);
                break;        
            case validar[2]:
                intentos3++;                
                localStorage.setItem('P1_Intentos3',intentos3);
                break;        
        }
    });
}




