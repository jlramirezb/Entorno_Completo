//comentario
let def = {
  //Inicio Artefactos Annelys: 1 --  9
  artifact_1: {
    interval: '[−2,1]',
    conditions: {
      valRepre: ['−2≤x≤1', '1≥x≥−2'],
      board: [
        {
          pares: [['−2', '1']],
          points: [['−2', false], ['1', false]],
        },
      ],
    },
  },
  artifact_2: {
    interval: '(−∞,3]',
    conditions: {
      valRepre: ['−∞<x≤3', '3≥x>−∞', 'x≤3', '3≥x'],
      board: [
        {
          pares: [['-∞', '3']],
          points: [['3', false]],
        },
      ],
    },
  },
  artifact_3: {
    representation: 'x≥−2',
    conditions: {
      valInterval: ['[−2,∞)'],
      board: [
        {
          pares: [['−2', '+∞']],
          points: [['−2', false]],
        },
      ],
    },
  },
  artifact_4: {
    interval: '(−1,1]',
    conditions: {
      valRepre: ['−1<x≤1', '1≥x>−1'],
      board: [
        {
          pares: [['−1', '1']],
          points: [['−1', true], ['1', false]],
        },
      ],
    },
  },
  artifact_5: {
    interval: '(3,∞)',
    conditions: {
      valRepre: ['3<x<∞', '∞>x>3','x>3','3<x'],
      board: [
        {
          pares: [['3', '+∞']],
          points: [['3', true]],
        },
      ],
    },
  },
  artifact_6: {
    representation: 'x≤3',
    conditions: {
      valInterval: ['(−∞,3]'],
      board: [
        {
          pares: [['-∞', '3']],
          points: [['3', false]],
        },
      ],
    },
  },
  artifact_7: {
    interval: '[3,5)',
    conditions: {
      valRepre: ['3≤x<5', '5>x≥3'],
      board: [
        {
          pares: [['3', '5']],
          points: [['3', false], ['5', true]],
        },
      ],
    },
  },
  artifact_8: {
    interval: '(−∞,−1)',
    conditions: {
      valRepre: ['−∞<x<−1', '−1>x>−∞', 'x<−1', '−1>x'],
      board: [
        {
          pares: [['-∞', '−1']],
          points: [['−1', true]],
        },
      ],
    },
  },
  artifact_9: {
    representation: 'x≥4',
    conditions: {
      valInterval: ['[4,∞)'],
      board: [
        {
          pares: [['4', '+∞']],
          points: [['4', false]],
        },
      ],
    },
  },  
  //Fin Artefactos Annelys
  //Inicio Artefactos Luis: 10 -- 18
  artifact_10: {
    interval: '(−3,−1]',
    conditions: {
      valRepre: ['−3<x≤−1', '−1≥x>−3'],
      board: [
        {
          pares: [['−3', '−1']],
          points: [['−3', true], ['−1', false]],
        },
      ],
    },
  },
  artifact_11: {
    interval: '[5,∞)',
    conditions: {
      valRepre: ['∞>x≥5', '5≤x<∞', '5≤x', 'x≥5'],
      board: [
        {
          pares: [['5','+∞']],
          points: [['5', false]],
        },
      ],
    },
  },
  artifact_12: {
    representation: 'x≤−1',
    conditions: {
      valInterval: ['(−∞,−1]'],
      board: [
        {
          pares: [['-∞', '−1']],
          points: [['−1', false]],
        },
      ],
    },
  },
  artifact_13: {
    interval: '[1,3)',
    conditions: {
      valRepre: ['1≤x<3', '3>x≥1'],
      board: [
        {
          pares: [['1', '3']],
          points: [['1', false], ['3', true]],
        },
      ],
    },
  },
  artifact_14: {
    interval: '(−∞,4]',
    conditions: {
      valRepre: ['4≥x>−∞', '−∞<x≤4', 'x≤4', '4≥x'],
      board: [
        {
          pares: [['-∞','4']],
          points: [['4', false]],
        },
      ],
    },
  },
  artifact_15: {
    representation: 'x≥3',
    conditions: {
      valInterval: ['[3,∞)'],
      board: [
        {
          pares: [['3', '+∞']],
          points: [['3', false]],
        },
      ],
    },
  },
  artifact_16: {
    interval: '(2,6)',
    conditions: {
      valRepre: ['2<x<6', '6>x>2'],
      board: [
        {
          pares: [['2', '6']],
          points: [
            ['2', true],
            ['6', true],
          ],
        },
      ],
    },
  },
  artifact_17: {
    interval: '(−3,∞)',
    conditions: {
      valRepre: ['−3<x<∞', '∞>x>−3', '−3≤x', 'x≥−3'],
      board: [
        {
          pares: [['−3', '+∞']],
          points: [
            ['−3', true]
          ]
        },
      ],
    },
  },
  artifact_18: {
    representation: 'x≤4',
    conditions: {
      valInterval: ['(−∞,4]'],
      board: [
        {
          pares: [['-∞', '4']],
          points: [['4', false]],
        },
      ],
    },
  },
  //Fin Artefactos Luis
  //Inicio Artefactos Manuel: 19 -- 24
  artifact_19: {
    interval: '[−1,2]',
    conditions: {
      valRepre: ['−1≤x≤2', '2≥x≥−1'],
      board: [
        {
          pares: [['−1', '2']],
          points: [['−1', false], ['2', false]],
        },
      ],
    },
  },
  artifact_20: {
    interval: '(−∞,−4]',
    conditions: {
      valRepre: ['−∞<x≤−4', '−4≥x>−∞', 'x≤−4', '−4≥x'],
      board: [
        {
          pares: [['-∞', '−4']],
          points: [['−4', false]],
        },
      ],
    },
  },
  artifact_21: {
    representation: 'x≥−6',
    conditions: {
      valInterval: ['[−6,∞)'],
      board: [
        {
          pares: [['−6', '+∞']],
          points: [['−6', false]],
        },
      ],
    },
  },
  artifact_22: {
    interval: '[−7,−5)',
    conditions: {
      valRepre: ['−7≤x<−5', '−5>x≥−7'],
      board: [
        {
          pares: [['−7', '−5']],
          points: [['−7', false], ['−5', true]],
        },
      ],
    },
  },
  artifact_23: {
    interval: '[−1,∞)',
    conditions: {
      valRepre: ['−1≤x<∞', '∞>x≥−1','x≥−1','−1≤x'],
      board: [
        {
          pares: [['−1', '+∞']],
          points: [['−1', false]],
        },
      ],
    },
  },
  artifact_24: {
    representation: 'x≤−2',
    conditions: {
      valInterval: ['(−∞,−2]'],
      board: [
        {
          pares: [['-∞', '−2']],
          points: [['−2', false]],
        },
      ],
    },
  },
  //Fin Artefactos Manuel  
}
let artefact = [];
let position = localStorageSeleccionados("P1", 1, 24, 3);
[def,artefact] = PintaSeleccionP1(position, def, 'P1');
//console.log('AQUIIIIIIIIII ',artefact);


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
});

let containerAll = document.getElementById("container-all-artifact");

window.addEventListener('load', function() {
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




