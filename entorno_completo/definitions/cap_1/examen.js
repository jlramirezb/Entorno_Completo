"use strict";
var def = 
{
  artefact_1: 
  {
    datadefault: [
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: "QA",
        parent: "#ejemplo1",
        contents: {
          artifact_1: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                {
                  type: 0,
                  text: ["Dominio", null],
                  conditions: {
                    correctIndex: null
                  },
                },
                {
                  type: 0,
                  text: ["Rango", null],
                  conditions: {
                    correctIndex: null
                  },
                },
                {
                  type: 0,
                  text: ["Corte con eje X", null],
                  conditions: {
                    correctIndex: null
                  },
                },
                {
                  type: 0,
                  text: ["Corte con eje Y", null],
                  conditions: {
                    correctIndex: null
                  },
                },
              ],
              [
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(-3,∞)",
                    "R-{0,4}",
                    "(-∞,0)∪(0,4)∪(4,∞)",
                    "(-∞,∞)"
                  ],
                  conditions: {
                    valueInputs: ["(-∞,∞)"]
                  }
                },
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(-∞,4)",
                    "(-∞,∞)",
                    "(-∞,1.8)∪(3,∞)",
                    "R-{0,1.8,3}"
                  ],
                  conditions: {
                    valueInputs: ["(-∞,∞)"]
                  }
                },
                {
                  type: 3,
                  inputsDefault: [["", false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [0, 1, 3]
                  }
                },
                {
                  type: 3,
                  inputsDefault: [["", false]],
                  conditions: {
                    valueInputs: [0]
                  }
                }
              ],
              [
                {
                  type: 0,
                  text: ["Parte Positiva", null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ["Parte Negativa", null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ["Parte Creciente", null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ["Parte Decreciente", null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              [
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(-∞,0)∪(1,3)∪[4,∞)",
                    "(-∞,0]∪[1,3]∪[4,∞)",
                    "(-3,0)∪(1,3)∪[4,∞)",
                    "(-3,0]∪[1,3]∪[4,∞)"
                  ],
                  conditions: {
                    valueInputs: ["(-∞,0)∪(1,3)∪[4,∞)"]
                  }
                },
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(0,1]∪[3,4)",
                    "[0,1]∪[3,4]",
                    "(0,1)∪(3,4)",
                    "[0,1)∪(3,4]"
                  ],
                  conditions: {
                    valueInputs: ["(0,1)∪(3,4)"]
                  }
                },
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(0,2]∪(4,5)",
                    "[0,2]∪[4,5]",
                    "(0,2]∪[4,5]",
                    "(0,2)∪(4,5)"
                  ],
                  conditions: {
                    valueInputs: ["(0,2)∪(4,5)"]
                  }
                },
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(-3,0]∪(2,4)∪[5,∞)",
                    "(-∞,0]∪(2,4)∪[5,∞)",
                    "(-∞,0)∪(2,4)∪(5,∞)",
                    "(-3,0)∪(2,4)∪(5,∞)"
                  ],
                  conditions: {
                    valueInputs: ["(-∞,0)∪(2,4)∪(5,∞)"]
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_2: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Terceras caracteristicas, Examen 1
                {
                  type: 0,
                  text: ['Max.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Max. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion terceras caracteristicas, Examen 1
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [1.8,4]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [2,5]
                  }
                }
              ],
              [
                //Cuartas caracteristicas, Examen 1
                {
                  type: 0,
                  text: ['Min.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Min. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion cuartas caracteristicas
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [0,3]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [0,4]
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo3',
        contents: {
          artifact_3: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [              
                {
                  type: 0,
                  text: ['Intervalo',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞,-1)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,4)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              [
                {
                  //Validacion primeras caracteristicas
                  type: 0,
                  text: ['Cota Sup.', null],
                  conditions: {
                    correctIndex: null
                  }
                }, 
                {
                  type: 3,
                  inputsDefault:[["4",false]],
                  conditions: {
                    valueInputs: ['\\geq4','4'],
                    evaluateCote:{
                      top: 4
                    }
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault:[["1.8",false]],
                  conditions: {
                    valueInputs: ['\\geq1.8','1,8'],
                    evaluateCote:{
                      top: 1.8
                    }
                  }
                },
              ],
              [
                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-2,0)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['R', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              [
                {
                  type: 0,
                    text: ['Cota Inf.', null],
                    conditions: {
                      correctIndex: null
                    }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
                {
                  type: 3,
                  inputsDefault:[["0",false]],
                  conditions: {
                    valueInputs: ['\\leq0','0'],
                    evaluateCote:{
                      bottom: 0
                    }
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
              ],
            ]
          }
        }
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo4',
        contents: {
          artifact_4: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [                
                {
                  type: 0,
                  text: ['f(-1)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(0.5)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(4)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈-1', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈1.8', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],              
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [0.2]
                  }
                },
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-1.8]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [3]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [0.7,3.3]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [2,-2.2]
                  }
                }
              ],
            ]
          }
        }
      },
    ],
  },
}


var defBoards = {
  //Inicio Boards de Annely 1 -- 4  
  //Examen 1.
  board_1: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      maxWidth: 350,
      //CurveType:1,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4.5, 6, -4]
    },
    points: [[0.5, -2, true, null, null, '#2196f3'], [0.42, -2.28, true, null, null, '#2196f3'], [0.37, -2.58, true, null, null, '#2196f3'], 
    [3.55, -2, true, null, null, '#2196f3'], [3.63, -2.28, true, null, null, '#2196f3'], [3.69, -2.58, true, null, null, '#2196f3'],
    [-2.58, 3, true, null, null, '#2196f3'], [-2.65, 3.3, true, null, null, '#2196f3'], [-2.7, 3.6, true, null, null, '#2196f3'],
    [5.7, 2.6, true, null, null, '#2196f3']],
    curves: [[[[ -2.51, 2.76 ],[ -1.99, 1.07 ],[ -1.34, 0.33 ],[ 0, 0 ]]],[[[ 0.5, -1.8 ],[ 2, 1.8 ],[ 3.5, -1.8 ]]],
    [[[ 4, 3.01 ],[ 4.81, 3.97 ],[ 5.08, 3.95 ],[ 5.29, 3.36 ],[ 5.54, 2.79 ]]]]
  },
  
  //Examen 2.
  board_2: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      CurveType:2,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 6, -4]
    },
    points: [[-3.6, 0.42, true, null, null, '#2196f3'], [-4, 0.25, true, null, null, '#2196f3'], [-4.4, 0.2, true, null, null, '#2196f3'], 
    [0.39, -2.58, true, null, null, '#2196f3'], [0.33, -2.9, true, null, null, '#2196f3'], [0.3, -3.2, true, null, null, '#2196f3'], 
    [5.25, 2.3, true, null, null, '#2196f3'], [ 3.5, -0.5,true,'',2,true ],[5.45, 2.6, true, null, null, '#2196f3'], [5.6, 2.9, true, null, null, '#2196f3']],
    curves: [[[[ -3.4, 0.53 ],[ -3, 1 ],[ -2, 3 ],[ -1.02, 1.01 ,true]]],
  [[[ 0.41, -2.34 ],[ 0.71, -1.24 ],[ 1.1, -0.78 ], [2.25, -0.57 ],[ 3.43, -0.5]]],
  [[[3.47,1.5,true],[4.35,1.6],[5.1,2.1]]]], 
    
  },
  
  //Examen 3.
  board_3: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 200,
      CurveType:2,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 6, -4],
    },
    points: [[ -2.02, -2.93,true,'',2,true ],[-3.3, -3.3, true, null, null, '#2196f3'], [-3.4, -3.6, true, null, null, '#2196f3'], [5.57, 1.3, true, null, null, '#2196f3'], 
    [1.76, -2.75, true, null, null, '#2196f3'], [1.80, -3.05, true, null, null, '#2196f3'], [1.83, -3.35, true, null, null, '#2196f3'], 
    [3.43, -2.95, true, null, null, '#2196f3'], [3.39, -3.23, true, null, null, '#2196f3'], [3.35, -3.51, true, null, null, '#2196f3']],
    curves: [[[[ -2, 2.3,true],[ -1.51, 0.8 ],[ -0.8, 0.1],[ 0, 0 ],[ 0.8, -0.1 ],[ 1.28, -0.8],[ 1.73, -2.53]]],
  [[[ 3.44, -2.74 ],[ 3.95, 0.67],[ 4.3, 1.2],[ 5.36, 1.31 ]]],
  [[[ -3.24, -3.12 ],[ -2.55, -1 ],[ -2.04, -2.85,]]]],
  },

  //Examen 4.
  board_4: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 200,
      CurveType:2,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 6, -4]
    },
    points: [[ -2,-3,true,'',2,true],[-4.25, -3, true, null, null, '#2196f3'], [-4.6, -3, true, null, null, '#2196f3'], 
    [0.65, 2.85, true, null, null, '#2196f3'], [0.7, 3.15, true, null, null, '#2196f3'], [0.73, 3.45, true, null, null, '#2196f3'], 
    [5.2, -2.7, true, null, null, '#2196f3'], [5.4, -2.5, true, null, null, '#2196f3'],[5.7, -2.41, true, null, null, '#2196f3']],
    curves: [[[[ -4, -3],[ -2.1,-3],]],
    [[[ -2, -1 ,true],[ -0.26, -0.3 ],[ 0.31, 1],[ 0.63, 2.6 ]]],
    [[[2,-2,true],[3,1],[4,-2],[4.8,-3.3],[5.1,-2.9]]]],
  },
  //Fin Boards Annely
  //Inicio Boards Luis 5 -- 6
  board_5: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      maxWidth: 300,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 5, -4]
    },

    curves: [
              [[[ -3.63, -2.8 ], [ -2.71, -2.48 ],[ -2, -2], [ -1.01, -0.97 ], [ -0.05, -1.95 ]]],
              [[[ 0, 0 ], [ 2.45, 2.45 ]]],
              [[[ 2.5, 3 ], [ 4, 3 ]]],
            ],

    points: [[0, 0, true], [0, -2, true, '', 2, true], [2.5, 2.5, true, '', 2, true], [2.5, 3, true], [4,3, true], 
            [4.4, 3, true], [-3.63, -2.8, true], [-4, -2.85, true], [-4.4, -2.87, true]]
          
    
  },

  board_6: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 5, -4]
    },

    

    curves: [
              [[[ -3.5, -3.7 ],[ -2, -3.5 ], [ -1.5, -3 ],[ -1, -1.55]]],
              [[[ 0.5, 1.5 ],[ 1.5, 2.2 ],[ 2, 3 ],[ 2.5, 2.2 ],[ 3.5, 1.4 ]]],
              [[[-1,-1],[0.45,0.45]]]
            ],
    points: [[0.5, 0.5, true, '', 2, true], [-1, -1.5, true, '', 2, true], [-1,-1, true], [0.5, 1.5, true], [3.5, 1.4, true],[3.9, 1.28, true], [4.3, 1.18, true], [4.7, 1.15, true]
            ,[-3.5, -3.7, true], [-3.9, -3.7, true], [-4.3, -3.7, true]]
  },
  //Fin Boards Luis
  //Inicio Boards Manuenl 7 -- 8
  board_7: {
  style: {
    axis: [false, true, true],
    grid: true,
    maxHeight: 250,
    valueAxis: {
      yd: [[0, 0], [0, 1]],
      xd: [[0, 0], [1, 0]]
    },
    boundingbox: [-5, 4, 7, -4]
  },

  curves: [
            [[[-2.96, 0.59],[-1.3, -0.93],[0.02, 0.03],[1.14, 0.98],[3.04, -0.66]]],
            [[[3.0,-2.0],[5,-3,true]]],
          ],
  points: [[3.04, -0.66, true, '', 2, true], [-2.96, 0.59, true], [-3.20, 0.90, true],[-3.45, 1.23, true], [3.0,-2.0, true], [5.30,-3.15,true], [5.60,-3.30,true],]
  },

  board_8: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      maxWidth: 300,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 6, -5]
    },

    curves: [
      [[[ -1.6, 1.2, true], [ 0.0, -1.0 ],[ 1.6, 1.2, true],]],
      [[[-3.60,-3.5, true],[-3.0,-1.5],[-2.35,-3.5, true]]],
      [[[3,-3,true],[4,-1.5],[5,-1.2, true]]]
    ],

    points: [[5.40,-1.2, true],[5.8,-1.2, true], [-3.63,-3.8, true], [-3.66,-4.1, true],[-2.31,-3.8, true], [-2.29,-4.1, true], [-1.66, 1.5, true], [-1.70, 1.8, true], [1.66, 1.5, true], [1.70, 1.8, true]]
  },
};

defBoardDefault();
generator(def);

document.addEventListener("DOMContentLoaded", function () {
    const paginaExamen = document.getElementById("paginaExamen");
    const notaprevia = document.getElementById("previous");
    const notaafter = document.getElementById("after");
    // Recupera los datos almacenados en localStorage
    const Datos = JSON.parse(localStorage.getItem("Datos"));
    console.log(Datos);

    // Pinta los datos en el DOM
    document.getElementById("institucion").innerHTML = Datos.Instituto;
    document.getElementById("Categoria").innerHTML = Datos.Categoria;
    document.getElementById("materia").innerHTML = Datos.Curso;
    document.getElementById("seccion").innerHTML = Datos.Seccion;
    document.getElementById("nombreEstudiante").innerHTML =
        Datos.Estudiante.Nombre;
    document.getElementById("correoEstudiante").innerHTML =
        Datos.Estudiante.Correo;
    document.getElementById("capExam").innerHTML = Datos.Capitulo;
    document.getElementById("codExam").innerHTML = Datos.CodExam;

    // Verifica y compara fechas
    let fechaHoraInicio = Datos.fechaHoraInicio;
    let fechaHoraCierre = Datos.fechaHoraCierre;

    if (fechaHoraInicio && fechaHoraCierre) {
      const fechaHoraInicioDate = new Date(fechaHoraInicio);
      const fechaHoraCierreDate = new Date(fechaHoraCierre);
      const currentDate = new Date();

      if (fechaHoraInicioDate > currentDate) {
        console.log("La evaluación aún no ha comenzado.");
        paginaExamen.style.display = "none";
        notaprevia.style.display = "block";
      } else if (
        fechaHoraInicioDate <= currentDate &&
        currentDate <= fechaHoraCierreDate
      ) {
        console.log("La evaluación ya ha comenzado o debería haber comenzado.");
        let rules = document.getElementById("rules");
        rules.style.display = "block";
        let rulesBtn = document.getElementById("buttonRule");
        rulesBtn.addEventListener("click", () => {
          (rules.style.display = "none"),
            (fechaInicioEst = localStorage.getItem("fechaInicioEst"));
          PintaBordes(colorBorders);
          if (fechaInicioEst === null) {
            fechaInicioEst = currentDate;
            localStorage.setItem("fechaInicioEst", fechaInicioEst);
          }

          paginaExamen.style.display = "block";
        });
      } else {
        console.log(
          "La evaluación ya ha finalizado o debería haber finalizado."
        );
        paginaExamen.style.display = "none";
        notaafter.style.display = "block";
      }
    } else {
      console.log("No hay una fecha de inicio almacenada.");
    }
});
