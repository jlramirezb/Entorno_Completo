//cordenadas por cada plano
const c = {

  1: { x: 0.5, y: 2.5 },
  2: { x: -2, y: -1 },
  3: { x: 1.2, y: 2.2 },

  4: { x: 2.2, y: 0.8 },
  5: { x: 2.2, y: 1.2 },
  6: { x: 2.2, y: 1.2 },

};

let defBoards = {
  board_0: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3.5, 3.5, 3.5, -3.5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_1: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1.5, 5, 5, -1.5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_2: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-2, 5, 5, -2],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  //nuevos
  board_3: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-2, 5, 5, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [0, 1, false, '1'],
      [1, 0, false, '1']
    ]
  },
  board_4: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 3, 3, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [0, 1, false, '1'],
      [1, 0, false, '1']
    ]
  },
  board_5: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 2, 5, -2],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [0, 1, false, '1'],
      [1, 0, false, '1']
    ]
  },
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
let rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10,
        classGlobal: 'defCartesian',
        contents: [
          {
            dataSet: {
              artifact: 'artifact_1',
            }
          }, {
            dataSet: {
              artifact: 'artifact_2',
            }
          }, {
            dataSet: {
              artifact: 'artifact_3',
            },
          }, {
            dataSet: {
              artifact: 'artifact_4',
            }
          }, {
            dataSet: {
              artifact: 'artifact_5',
            }
          }, {
            dataSet: {
              artifact: 'artifact_6',
            },
          },
        ],
      },
    ]
  },
  artifact_1: {
    textBottom: '(x, -y), (-x, y), (-x, -y), (y, x)',
    defaultInputs: [
      {//1
        position: [c[1].x, c[1].y],
        value: '(x,y)',// si uqeiro agregar un valor
        // interactive: true
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [//(x, -y), (-x, y), (-x, -y), (y, x)

        { p: [c[1].x, -c[1].y], text: 'x,-y' },
        { p: [-c[1].x, c[1].y], text: '-x,y' },
        { p: [-c[1].x, -c[1].y], text: '-x,-y' },
        { p: [c[1].y, c[1].x], text: 'y,x' }

      ],
    },
  },
  artifact_2: {
    // textTop: "Este es el de arriba",
    textBottom: '(b,0), (b, b), (a, a), (-a, -b), (a, -a), (-b, -b)',

    defaultInputs: [
      {//1
        position: [0, c[2].y],
        value: '(0,b)',// si uqeiro agregar un valor
        // interactive: true
      },
      {//1
        position: [c[2].x, 0],
        value: '(a,0)',// si uqeiro agregar un valor
        // interactive: true
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [//(b,0), (b, b), (a, a), (-a, -b), (a, -a), (-b, -b)
        { p: [c[2].y, 0], text: 'b,0' },
        { p: [c[2].y, c[2].y], text: 'b,b' },
        { p: [c[2].x, c[2].x], text: 'a,a' },
        { p: [-c[2].x, -c[2].y], text: '-a,-b' },
        { p: [c[2].x, -c[2].x], text: 'a,-a' },
        { p: [-c[2].y, -c[2].y], text: '-b,-b' }
      ],
    },
  },
  artifact_3: {
    // textTop: "Este es el de arriba",
    defBoard: 'board_1',
    textBottom: '(x-2, y), (x+2, y), (x, y-2),(x, y + 2), (x - 2, y - 2), (x + 2, y + 2)',
    defaultInputs: [
      {//1
        position: [c[3].x, c[3].y],
        value: '(x,y)',// si uqeiro agregar un valor
        // interactive: true
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [//(x-2,y),(x+2,y),(x,y-2),(x,y+2),(x-2,y-2),(x+2,y+2)
        { p: [c[3].x - 2, c[3].y], text: 'x-2,y' },
        { p: [c[3].x + 2, c[3].y], text: 'x+2,y' },
        { p: [c[3].x, c[3].y - 2], text: 'x,y-2' },

        { p: [c[3].x, c[3].y + 2], text: 'x,y+2' },
        { p: [c[3].x - 2, c[3].y - 2], text: 'x-2,y-2' },
        { p: [c[3].x + 2, c[3].y + 2], text: 'x+2,y+2' }
      ],
    },
  },
  //nuevos integrar con los primeros 3
  artifact_4: {
    defBoard: 'board_5',
    textBottom: '(2x, y), (x, 2y), (x/2, y), (x, y/2), (2x, -y), (x/2, -y/2)',

    defaultInputs: [
      {//11
        position: [c[4].x, c[4].y],
        value: '(x,y)',
      }
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [

        { p: [2 * c[4].x, c[4].y], text: '2x,y' },
        { p: [c[4].x, 2 * c[4].y], text: 'x, 2y' },
        { p: [c[4].x / 2, c[4].y], text: 'x/2, y' },
        { p: [c[4].x, c[4].y / 2], text: 'x, y/2' },
        { p: [2 * c[4].x, -c[4].y], text: '2x, -y' },
        { p: [c[4].x / 2, -c[4].y / 2], text: 'x/2, -y/2' }

      ],
    },
  },
  artifact_5: {
    defBoard: 'board_4',
    textBottom: '(y,0), (0, x), (x, 0), (0, y),(x, x), (y, y)',

    defaultInputs: [
      {//11
        position: [c[5].x, c[5].y],
        value: '(x,y)',
      }
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [

        { p: [c[5].y, 0], text: 'y,0' },
        { p: [0, c[5].x], text: '0, x' },
        { p: [c[5].x, 0], text: 'x, 0' },
        { p: [0, c[5].y], text: '0, y' },
        { p: [c[5].x, c[5].x], text: 'x, x' },
        { p: [c[5].y, c[5].y], text: 'y, y' }

      ],
    },

  },
  artifact_6: {
    defBoard: 'board_3',
    textBottom: '(x, x+2), (x + y, y), (x, -y), (x+2, 2y), (2x, -y)',


    defaultInputs: [
      {
        position: [c[6].x, c[6].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [

        { p: [c[6].x, c[6].x + 2], text: 'x,x+2' },
        { p: [c[6].x + c[6].y, c[6].y], text: 'x+y,y' },
        { p: [c[6].x, -c[6].y], text: 'x,-y' },
        { p: [c[6].x + 2, c[6].y * 2], text: 'x+2,2y' },
        { p: [c[6].x * 2, -c[6].y * 1], text: '2x,-y' },

      ],
    },
  },
};
console.log([c[4].x, c[4].y / 2]);

let artefact = [];
let position = localStorageSeleccionados("P2", 0, 5, 4);
console.log(position);

/*function filtrarDefBoards(defBoards, indices) {
  const nuevoDefBoards = {};
  for (const indice of indices) {
    const nombreBoard = `board_${indice}`;
    if (defBoards.hasOwnProperty(nombreBoard)) {
      nuevoDefBoards[nombreBoard] = defBoards[nombreBoard];
    }
  }
  return nuevoDefBoards;
}
//console.log(defBoards);
const nuevoDefBoards = filtrarDefBoards(defBoards, position);
//console.log(nuevoDefBoards);
defBoards = nuevoDefBoards;*/

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

let nuevoRdef = filtrarContents(rDef, position);

//console.log(nuevoRdef.artifactHtml.datadefault[0].contents); 
// Output: [ { dataSet: { artifact: 'artifact_2' } }, { dataSet: { artifact: 'artifact_4' } } ]


nuevoRdef = filtrarRdef(nuevoRdef, position);

rDef = nuevoRdef;

console.log(rDef); // Output: { artifactHtml: "...", artifact_1: "...", artifact_3: "..." }

//console.log(rDef); 
//console.log(nuevoRdef); 
// Salida: 
// {
//   artifactHTML: ["HTML existente"],
//   artifact_2: "valor2",
//   artifact_4: "valor4",
//   artifact_1: "valor1",
//   artifact_3: "valor3"
// }

window.addEventListener('load', function() {  
  const intentos1_LS = localStorage.getItem('P2_Intentos1');
  const intentos2_LS = localStorage.getItem('P2_Intentos2');
  const intentos3_LS = localStorage.getItem('P2_Intentos3');
  const intentos4_LS = localStorage.getItem('P2_Intentos4');
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
  if (intentos4_LS)
      intentos4 = intentos4_LS
  else
      intentos4 = 0;
});

//[def,artefact] = PintaSeleccionP1(position, def, 'P2)*/
generator(rDef);
mainCartesian(defBoards, rDef);

let validar = document.querySelectorAll('.check');
let intentos1, intentos2, intentos3, intentos4;
for (let i = 0; i < validar.length; i++) {
    // Add a click event listener to each element
    validar[i].addEventListener('click', function() {
        // Print a different message depending on the element
        switch (this) {
            case validar[0]:
                intentos1++;                
                localStorage.setItem('P2_Intentos1',intentos1);                
                break;
            case validar[1]:
                intentos2++;                
                localStorage.setItem('P2_Intentos2',intentos2);
                break;        
            case validar[2]:
                intentos3++;                
                localStorage.setItem('P2_Intentos3',intentos3);
                break;        
            case validar[3]:
                intentos4++;                
                localStorage.setItem('P2_Intentos4',intentos4);
                break;        
        }
    });
}

// Selecciona todos los elementos div con la clase 'boardfault'
const divs = document.querySelectorAll('.borderDefault');

// Itera sobre cada div y agrega el texto "Pregunta" después de cada uno
i = 4;
divs.forEach(div => {
  const spanPregunta = document.createElement('span');
  const spanPuntaje = document.createElement('span');
  spanPregunta.textContent =  "P"+i.toString(); 
  let puntaje = (i===4 || i===6) ? '3 pts' : '4 pts';
  spanPuntaje.textContent = puntaje;
  spanPuntaje.classList.add("oval-container");
  spanPregunta.classList.add('question-text');
  div.insertBefore(spanPregunta, div.firstChild);
  div.appendChild(spanPuntaje);
  i++;
});

// Selecciona todos los elementos div con la clase 'boardfault'

let containerAll = document.querySelectorAll(".content_1");
let btnBack = document.createElement("button");
btnBack.textContent = "Regresar";
containerAll[1].appendChild(btnBack);

btnBack.addEventListener('click',()=>{
  window.location.href = "Pag_Ex.html";
})



