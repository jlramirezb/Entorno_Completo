//cordenadas por cada plano
const c = {
  //Puntos a utilizar de Annely: 1 -- 12
  1: { x: 1, y: 2.5 },
  2: { x: -1, y: -1.5 },  
  3: { x: 1, y: 1 },
  4: { x: 2.2, y: 0.8 },  
  5: { x: 2, y: 1 },  
  6: { x: 1.5, y: -1.5 },  
  7: { x: 1.2, y: 1.8 },
  8: { x: 2.8, y: 1.2 },
  9: { x: 0.5, y: -1 }, 
  10: { x: -2, y: 1.4 },
  11: { x: 2.5, y: 2 },
  12: { x: 0.5, y: 1.8 },
  //Fin Puntos de Annely
  //Puntos a utilizar de Luis: 13 -- 24
  13: { x: -2, y: 1.5 },
  14: { x: -1, y: -2 },
  15: { x: 2, y: 2 },
  16: { x: 3, y: 2 },
  17: { x: 0.5, y: 0.5 },
  18: { x: 3, y: -1 },
  19: { x: 2.8, y: 2.8 },
  20: { x: 2.5, y: 2.5 },
  21: { x: 0.5, y: -0.5 },
  22: { x: -2, y: -1 },
  23: { x: 3, y: 2 },
  24: { x: 1, y: 2 },
  //Fin Puntos de Luis
  //Puntos a utilizar de Manuel: 25 -- 32
  25: { x: -1, y: -2 },
  26: { x: -3, y: 2 },
  27: { x: 1.6, y: 2 },
  28: { x: 2.6, y: 2.8 },
  29: { x: -0.5, y: 0.5 },
  30: { x: -3, y: -2 },
  31: { x: 0.6, y: 2.2 },
  32: { x: 3, y: 2 }
  //Fin Puntos de Manuel
};

let defBoards = {
  //Boards a definir por Annely: 0 -- 11
  board_0: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3.5, 3.5, 3.5, -3.5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_1: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },  
  board_2: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 5, 5, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },  
  board_3: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-5, 3, 5, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  board_4: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },  
  board_5: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },  
  board_6: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 5, 5, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  board_7: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-6, 5, 5, -5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },  
  board_8: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_9: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3.5, 3.5, 3.5, -3.5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_10: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 6, 6, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], 
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  board_11: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-2, 5, 5, -5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  //Fin Boards Annely
  //Boards a definir por Luis: 12 -- 23
  board_12: {
    style: {
      grid: false,
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
  board_13: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },    
  },
  board_14: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-2, 5, 6, -2],
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
  board_15: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-6.5, 4, 6.5, -4],
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
  board_16: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-2, 2, 2, -2],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_17: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_18: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 5, 6, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  board_19: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-6, 4, 4, -6],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  board_20: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_21: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_22: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-2, 5, 6, -2],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  board_23: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 5, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1'],
    ],
  },
  //Fin Boards Luis
  //Boards a definir por Manuel: 24 -- 31
  board_24: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },    
  },
  board_25: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },   
  board_26: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-2, 5, 6, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1']
    ],
  },
  board_27: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 6, 6, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1']
    ],
  },
  board_28: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_29: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
  board_30: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-2, 5, 5, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1']
    ],
  },
  board_31: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-7, 7, 7, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1']
    ],
  },
  //Fin Boards Manuel
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
          },
          {
            dataSet: {
              artifact: 'artifact_2',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_3',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_4',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_5',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_6',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_7',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_8',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_9',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_10',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_11',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_12',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_13',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_14',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_15',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_16',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_17',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_18',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_19',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_20',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_21',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_22',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_23',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_24',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_25',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_26',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_27',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_28',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_29',
            },
          },
          {
            dataSet: {
              artifact: 'artifact_30',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_31',
            }
          },
          {
            dataSet: {
              artifact: 'artifact_32',
            },
          },
        ],
      },
    ]
  },
  //Inicio de Artefactos Annely: 1 -- 12
  artifact_1: {
    textBottom: '(x, -y), (-x, y), (y, x)',
    defBoard: 'board_0',
    defaultInputs: [
      {
        position: [c[1].x, c[1].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[1].x, -c[1].y], text: 'x,-y' },
        { p: [-c[1].x, c[1].y], text: '-x,y' },
        { p: [c[1].y, c[1].x], text: 'y,x' }
      ],
    },
  },
  artifact_2: {
    textBottom: '(b,0), (a, a), (-a, -b), (a, -a)',
    defBoard: 'board_1',
    defaultInputs: [
      {
        position: [0, c[2].y],
        value: '(0,b)',
      },
      {
        position: [c[2].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[2].y, 0], text: 'b,0' },
        { p: [c[2].x, c[2].x], text: 'a,a' },
        { p: [-c[2].x, -c[2].y], text: '-a,-b' },
        { p: [c[2].x, -c[2].x], text: 'a,-a' },
      ],
    },
  },
  artifact_3: {
    defBoard: 'board_2',
    textBottom: '(x-1,y),(x,y+2),(x,y-2)',
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[3].x * 2, c[3].y * 2], text: '(x-1,y)' },
        { p: [c[3].x * 3, c[3].y * 4], text: '(x,y+2)' },
        { p: [c[3].x * 3, 0], text: '(x,y-2)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[3].x * 3, c[3].y * 2],
        value: '(x,y)',
      }
    ],
  },
  artifact_4: {
    defBoard: 'board_3',
    textBottom: '(-2x,y),(x,2y),(2x,-y),(x/2,y/2)',
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[4].x * -2, c[4].y ], text: '(-2x,y)' },
        { p: [c[4].x, c[4].y * 2], text: '(x,2y)' },
        { p: [c[4].x * 2, c[4].y * -1], text: '(2x,-y)' },
        { p: [c[4].x / 2, c[4].y /2], text: '(x/2,y/2)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[4].x , c[4].y],
        value: '(x,y)',
      }
    ],
  },  
  artifact_5: {
    defBoard: 'board_4',
    textBottom: '(-x,-y), (x,-y), (y,x)',
    defaultInputs: [
      {
        position: [c[5].x, c[5].y],
        value: '(x,y)', 
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [-c[5].x, -c[5].y], text: '-x,-y' },
        { p: [c[5].x, -c[5].y], text: 'x,-y' },
        { p: [c[5].y, c[5].x], text: 'y,x' }
      ],
    },
  },  
  artifact_6: {
    //La pregunta (a,-a) fue modificada por coincidencia con el punto (b,b) [Pregunta original (-a,-a)]
    defBoard: 'board_5',
    textBottom: '(b,0), (b, b), (-a, -b), (a, -a)',
    defaultInputs: [
      {
        position: [0, c[6].y],
        value: '(0,b)',
      },
      {
        position: [c[6].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [c[6].y, 0], text: 'b,0' },
        { p: [c[6].y, c[6].y], text: 'b,b' },
        { p: [-c[6].x, -c[6].y], text: '-a,-b' },
        { p: [c[6].x, -c[6].x], text: 'a,-a' },
      ],
    },
  },  
  artifact_7: {
    defBoard: 'board_6',
    textBottom: '(x-1.5,y),(x+1.5,y),(x,y-1)',
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [c[7].x - 1.5, c[7].y ], text: '(x-1.5,y)' },
        { p: [c[7].x + 1.5, c[7].y ], text: '(x+1.5,y)' },
        { p: [c[7].x, c[7].y -1 ], text: '(x,y-1)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[7].x , c[7].y],
        value: '(x,y)',
      }
    ],
  },
  artifact_8: {
    defBoard: 'board_7',
    textBottom: '(x,3y),(x,-3y),(-2x,y),(x/2,y/2)',
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[8].x, c[8].y * 3], text: '(x,3y)' },
        { p: [c[8].x, c[8].y * -3], text: '(x,-3y)' },
        { p: [c[8].x * -2, c[8].y], text: '(-2x,y)' },
        { p: [c[8].x / 2, c[8].y /2], text: '(x/2,y/2)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[8].x , c[8].y],
        value: '(x,y)',
      }
    ],
  },
  artifact_9: {
    defBoard: 'board_8',
    textBottom: '(-x,y), (x,-y), (y,x)',
    defaultInputs: [
      {
        position: [c[9].x, c[9].y],
        value: '(x,y)', 
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [-c[9].x, c[9].y], text: '-x,y' },
        { p: [c[9].x, -c[9].y], text: 'x,-y' },
        { p: [c[9].y, c[9].x], text: 'y,x' }
      ],
    },
  },
  artifact_10: {
    textBottom: '(-a,0), (a,b), (-a,b), (b,-b)',
    defBoard: 'board_9',
    defaultInputs: [
      {
        position: [0, c[10].y],
        value: '(0,b)',
      },
      {
        position: [c[10].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [-c[10].x, 0], text: '-a,0' },
        { p: [c[10].x, c[10].y], text: 'a,b' },
        { p: [-c[10].x, c[10].y], text: '-a,b' },
        { p: [c[10].y, -c[10].y], text: 'b,-b' },
      ],
    },
  },
  artifact_11: {
    defBoard: 'board_10',
    textBottom: '(x+2,y),(x,y+1),(x,y-1)',
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [c[11].x + 2, c[11].y ], text: '(x+2,y)' },
        { p: [c[11].x, c[11].y + 1 ], text: '(x,y+1)' },
        { p: [c[11].x, c[11].y - 1 ], text: '(x,y-1)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[11].x , c[11].y],
        value: '(x,y)',
      }
    ],
  },
  artifact_12: {
    defBoard: 'board_11',
    textBottom: '(-x,y),(x,2y),(x,-2y),(x/2,y/2)',
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[12].x * -1, c[12].y ], text: '(-x,y)' },
        { p: [c[12].x, c[12].y * 2], text: '(x,2y)' },
        { p: [c[12].x, c[12].y * -2], text: '(x,-2y)' },
        { p: [c[12].x / 2, c[12].y /2], text: '(x/2,y/2)' }
      ],
    },
    defaultInputs: [
      {
        position: [c[12].x , c[12].y],
        value: '(x,y)',
      }
    ],
  },  
  //Fin Artefactos Annely
  //Inicio de Artefactos Luis: 13 -- 24
  artifact_13: {
    defBoard: 'board_12',
    textBottom: '(x, -y), (-x, y), (y, x)',

    defaultInputs: [
      {
        position: [c[13].x, c[13].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [

        { p: [c[13].x, -c[13].y], text: 'x,-y' },
        { p: [-c[13].x, c[13].y], text: '-x,y' },
        { p: [c[13].y, c[13].x], text: 'y,x' }

      ],
    },
  },
  artifact_14: {
    defBoard: 'board_13',
    textBottom: '(-b,0), (-a, -b), (a, -a), (b, -a)',
    defaultInputs: [
      {
        position: [0, c[14].y],
        value: '(0,b)',
      },
      {
        position: [c[14].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [-c[14].y, 0], text: '-b,0' },
        { p: [-c[14].x, -c[14].y], text: '-a,-b' },
        { p: [c[14].x, -c[14].x], text: 'a,-a' },
        { p: [c[14].y, -c[14].x], text: 'b,-a' },
      ],
    },

  },
  artifact_15: {
    defBoard: 'board_14',
    textBottom: '(x-2.5, y), (x+2.5, y), (x, y-1)',
    defaultInputs: [
      {//1
        position: [c[15].x, c[15].y],
        value: '(x,y)',
      },

    ],

    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [c[15].x - 2.5, c[15].y], text: 'x-2.5,y' },
        { p: [c[15].x + 2.5, c[15].y], text: 'x+2.5,y' },
        { p: [c[15].x, c[15].y - 1], text: 'x,y-1' },
      ],
    },
  },
  artifact_16: {
    defBoard: 'board_15',
    textBottom: '(2x, -y), (-x, y), (-2x, y), (x/2, y/2)',
    defaultInputs: [
      {//11
        position: [c[16].x, c[16].y],
        value: '(x,y)',
      }
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [2 * c[16].x, -c[16].y], text: '2x,-y' },
        { p: [-c[16].x, c[16].y], text: '-x, y' },
        { p: [-2 * c[16].x, c[16].y], text: '-2x, y' },
        { p: [c[16].x / 2, c[16].y / 2], text: 'x/2, y/2' },
      ],
    },
  },
  artifact_17: {
    defBoard: 'board_16',
    textBottom: '(-x, -y), (-x, y), (2y, x)',
    //cambie esta pregunta se superponian dos puntos
    defaultInputs: [
      {
        position: [c[17].x, c[17].y],
        value: '(x,y)',
      }
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [-c[17].x, -c[17].y], text: '-x,-y' },
        { p: [-c[17].x, c[17].y], text: '-x,y' },
        { p: [2*c[17].y, c[17].x], text: '2y,x' }
      ],
    },
  },
  artifact_18: {
    defBoard: 'board_17',
    textBottom: '(b,0), (a,a), (-a, -b), (-a, a)',


    defaultInputs: [
      {
        position: [0, c[18].y],
        value: '(0,b)',
      },
      {
        position: [c[18].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [

        { p: [c[18].y, 0], text: 'b,0' },
        { p: [c[18].x, c[18].x], text: 'a,a' },
        { p: [-c[18].x, -c[18].y], text: '-a,-b' },
        { p: [-c[18].x, c[18].x], text: '-a,a' },

      ],
    },
  },
  artifact_19: {
    defBoard: 'board_18',
    textBottom: '(x-1, y), (x+1, y), (x, y-2)',

    defaultInputs: [
      {
        position: [c[19].x, c[19].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [

        { p: [c[19].x-1, c[19].y], text: 'x-1,y' },
        { p: [c[19].x+1, c[19].y], text: 'x+1,y' },
        { p: [c[19].x, c[19].y-2], text: 'x,y-2' }

      ],
    },
  },
  artifact_20: {
    defBoard: 'board_19',
    textBottom: '(-2x, y), (x, -2y), (-x, -y), (x/2, y/2)',

    defaultInputs: [
      {
        position: [c[20].x, c[20].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [-2 * c[20].x, c[20].y], text: '-2x, y' },
        { p: [c[20].x, -2 * c[20].y], text: 'x, -2y' },
        { p: [- c[20].x, - c[20].y], text: '-x, -y' },
        { p: [c[20].x / 2, c[20].y / 2], text: 'x/2, y/2' },
      ],
    },
  },
  artifact_21: {
    defBoard: 'board_20',
    textBottom: '(x, -y), (-x, y), (y, x)',

    defaultInputs: [
      {
        position: [c[21].x, c[21].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [

        { p: [c[21].x, -c[21].y], text: 'x,-y' },
        { p: [-c[21].x, c[21].y], text: '-x,y' },
        { p: [c[21].y, c[21].x], text: 'y,x' }

      ],
    },
  },
  artifact_22: {
    defBoard: 'board_21',
    textBottom: '(0,a), (a,-a), (a, -b), (-a, b)',


    defaultInputs: [
      {
        position: [0, c[22].y],
        value: '(0,b)',
      },
      {
        position: [c[22].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [

        { p: [0, c[22].x], text: '0,a' },
        { p: [c[22].x, -c[22].x], text: 'a,-a' },
        { p: [c[22].x, -c[22].y], text: 'a,-b' },
        { p: [-c[22].x, c[22].y], text: '-a,b' },

      ],
    },
  },
  artifact_23: {
    defBoard: 'board_22',
    textBottom: '(x-2, y), (x+2, y), (x, y-2.5)',

    defaultInputs: [
      {
        position: [c[23].x, c[23].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [

        { p: [c[23].x-2, c[23].y], text: 'x-2,y' },
        { p: [c[23].x+2, c[23].y], text: 'x+2,y' },
        { p: [c[23].x, c[23].y-2.5], text: 'x,y-2.5' }

      ],
    },
  },
  artifact_24: {
    defBoard: 'board_23',
    textBottom: '(3x, y), (x, 2y), (-3x, -y), (x/2, y/2)',
    defaultInputs: [
      {
        position: [c[24].x, c[24].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [3*c[24].x, c[24].y], text: '3x,y' },
        { p: [c[24].x, 2*c[24].y], text: 'x,2y' },
        { p: [-3*c[24].x, -c[24].y], text: '-3x,-y' },
        { p: [c[24].x/2, c[24].y/2], text: 'x/2,y/2' }
      ],
    },
  },
  //Fin Artefactos Luis
  //Inicio de Artefactos Manuel: 25 -- 32
  artifact_25: {
    // textTop: "Este es el de arriba",
    defBoard: 'board_24',
    textBottom: '(x, -y), (-x, y), (y, x)',
    defaultInputs: [
      {
        position: [c[25].x, c[25].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [//(2,1), (1,2), (0,0), (-1,0), (1,0)
        { p: [c[25].x, -c[25].y], text: 'x,-y' },
        { p: [-c[25].x, c[25].y], text: '-x,y' },
        { p: [c[25].y, c[25].x], text: 'y,x' }
      ],
    },
  },
  artifact_26: {
    defBoard: 'board_25',
    textBottom: '(b,0), (a, a), (-a, -b), (b, -b)',
    defaultInputs: [
      {
        position: [0, c[26].y],
        value: '(0,b)',
      },
      {
        position: [c[26].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [c[26].y, 0], text: 'b,0'},
        { p: [c[26].x, c[26].x], text: 'a,a' },
        { p: [-c[26].x, -c[26].y], text: '-a,-b' },
        { p: [c[26].y, -c[26].y], text: 'b,-b' },
      ],
    },
  },
  artifact_27: {
    defBoard: 'board_26',
    textBottom: '(x-2, y), (x+2, y), (x, y-0.75)',
    defaultInputs: [
      {//1
        position: [c[27].x, c[27].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [c[27].x - 2, c[27].y], text: 'x-2,y' },
        { p: [c[27].x + 2, c[27].y], text: 'x+2,y' },
        { p: [c[27].x, c[27].y - 0.75], text: 'x,y-0.75' },
      ],
    },
  },
  artifact_28: {
    defBoard: 'board_27',
    textBottom: '(-x, -y), (x, 2y), (2x, y), (x/2, y/2)',
    defaultInputs: [
      {//11
        position: [c[28].x, c[28].y],
        value: '(x,y)',
      }
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [-c[28].x, -c[28].y], text: '-x,-y' },
        { p: [c[28].x, 2*c[28].y], text: 'x,2y' },
        { p: [2 * c[28].x, c[28].y], text: '2x,y' },
        { p: [c[28].x/2, c[28].y/2], text: 'x/2,y/2' },
      ],
    },
  },
  artifact_29: {
    // textTop: "Este es el de arriba",
    defBoard: 'board_28',
    textBottom: '(-x, y), (x, -y), (y, x)',  
    defaultInputs: [
      {
        position: [c[29].x, c[29].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [-c[29].x, c[29].y], text: '-x,y' },
        { p: [c[29].x, -c[29].y], text: 'x,-y' },
        { p: [c[29].y,c[29].x], text: 'y,x' }
      ],
    },  
  },
  artifact_30: {
    defBoard: 'board_29',
    textBottom: '(0,a), (b, b), (-a, -b), (a, -a)',
    defaultInputs: [
      {
        position: [0, c[30].y],
        value: '(0,b)',
      },
      {
        position: [c[30].x, 0],
        value: '(a,0)',
      },
    ],
    conditions: {
      texterror: {
        time: 6,
      },
      points: [
        { p: [0, c[30].x], text: '0,a' },
        { p: [c[30].y, c[30].y], text: 'b,b' },
        { p: [-c[30].x, -c[30].y], text: '-a,-b' },
        { p: [c[30].x, -c[30].x], text: 'a,-a' },
      ],
    },
  },
  artifact_31: {
    defBoard: 'board_30',
    textBottom: '(x-2, y), (x, y+1), (x, y-1)',
    defaultInputs: [
      {//1
        position: [c[31].x, c[31].y],
        value: '(x,y)',
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [c[31].x - 2, c[31].y], text: 'x-2,y' },
        { p: [c[31].x, c[31].y+1], text: 'x,y+1' },
        { p: [c[31].x, c[31].y - 1], text: 'x,y-1' },
      ],
    },
  },
  artifact_32: {
    defBoard: 'board_31',
    textBottom: '(-2x, -y), (x, 3y), (2x, y), (x/2, y/2)',
    defaultInputs: [
      {//11
        position: [c[32].x, c[32].y],
        value: '(x,y)',
      }
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [-2*c[32].x, -c[32].y], text: '-2x,-y' },
        { p: [c[32].x, 3*c[32].y], text: 'x,3y' },
        { p: [2 * c[32].x, c[32].y], text: '2x,y' },
        { p: [c[32].x/2, c[32].y/2], text: 'x/2,y/2' },
      ],
    },
  },
  //Fin Artefactos Manuel
};

//let artefact = [];
let position2 = localStorageSeleccionados("P2", 0, 31, 4);
//console.log(position2);


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

let nuevoRdef = filtrarContents(rDef, position2);
nuevoRdef = filtrarRdef(nuevoRdef, position2);
rDef = nuevoRdef;

window.addEventListener('load', function() {  
  const intentos1_LS = localStorage.getItem('P2_Intentos1');
  const intentos2_LS = localStorage.getItem('P2_Intentos2');
  const intentos3_LS = localStorage.getItem('P2_Intentos3');
  const intentos4_LS = localStorage.getItem('P2_Intentos4');
  if (intentos1_LS)
      intentos12 = intentos1_LS
  else
      intentos12 = 0;
  if (intentos2_LS)
      intentos22 = intentos2_LS
  else
      intentos22 = 0;
  if (intentos3_LS)
      intentos32 = intentos3_LS
  else
      intentos32 = 0;
  if (intentos4_LS)
      intentos42 = intentos4_LS
  else
      intentos42 = 0;
});

//[def,artefact] = PintaSeleccionP1(position, def, 'P2)*/
generator(rDef);
mainCartesian(defBoards, rDef);

let validar2 = document.querySelectorAll('.check');
let intentos12, intentos22, intentos32, intentos42;
for (let i = 0; i < validar2.length; i++) {
    // Add a click event listener to each element
    validar2[i].addEventListener('click', function() {
        // Print a different message depending on the element
        switch (this) {
            case validar2[0]:
                intentos12++;                
                localStorage.setItem('P2_Intentos12',intentos12);                
                break;
            case validar2[1]:
                intentos22++;                
                localStorage.setItem('P2_Intentos22',intentos22);
                break;        
            case validar2[2]:
                intentos32++;                
                localStorage.setItem('P2_Intentos32',intentos32);
                break;        
            case validar2[3]:
                intentos42++;                
                localStorage.setItem('P2_Intentos42',intentos42);
                break;        
        }
    });
}

// Selecciona todos los elementos div con la clase 'boardfault'
const divs = document.querySelectorAll('.borderDefault');

// Itera sobre cada div y agrega el texto "Pregunta" después de cada uno
i = 4;
//Itera a partir del cuarto div 
for (let i = 3; i < divs.length; i++) {
  //Itera a partir del cuarto div con la clase 'boardfault' para agregar el texto "Pregunta"  
  const divPregunta = document.createElement('div');
  divPregunta.style.display = 'flex';
  //divPregunta.style.alignItems = 'center';
  const spanPregunta = document.createElement('span');
  spanPregunta.style.float = 'left';
  const spanPuntaje = document.createElement('span');
  spanPuntaje.style.float = 'right';
  spanPregunta.textContent =  "P"+(i+1).toString(); 
  let puntaje = (i===4 || i===6) ? '4 pts' : '3 pts'; 
  spanPuntaje.textContent = puntaje;
  //spanPuntaje.style.marginLeft = '10px';
  //spanPuntaje.style.marginRight = '10px';
  spanPregunta.classList.add('question-header2');
  spanPuntaje.classList.add("oval-container");  
  divPregunta.appendChild(spanPregunta);
  divPregunta.appendChild(spanPuntaje);
  divs[i].insertBefore(divPregunta, divs[i].firstChild); 

  /*const divPregunta = document.createElement('div');
  
  
   
  //const spanPuntaje = document.createElement('span');
  spanPuntaje.textContent = puntaje;  
  spanPregunta.classList.add('question-header');
  spanPuntaje.classList.add("oval-container");   
  divPregunta.appendChild(spanPregunta);
  divPregunta.appendChild(spanPuntaje);
  divs[i].appendChild(divPregunta);
  spanPuntaje.classList.add("oval-container");  
  divs[i].insertBefore(spanPregunta, divs[i].firstChild);
  divs[i].insertBefore(spanPuntaje, divs[i].firstChild);  
  //divs[i].appendChild(spanPuntaje);*/
};


