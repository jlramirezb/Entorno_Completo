let def = {  //
  artifact_DefaultText: {
    datadefault: [

      [2, 'PUNTOS de CORTE con los EJES'],
      [1, `Los puntos "gruesos" que aparecen sobre la curva y los ejes de la figura reciben el nombre de puntos
        de corte de la curva con los ejes.`],
      [4, 'board_1'],
      [1, 'Complete en base a las curvas que aparecen sobre los inputs'],
    ]
  },

  artifact_Example: {
    datadefault: [
      [8, 1, 1, ['board_4',], [['EJEMPLO 1']]],

      [5, 2, 0,
        ['Puntos de corte con el eje x ', 'Puntos de corte con el eje y'],


      ],
    ],

    conditions: [
      ['(-1,0);(1,0)'], ['(0,-1)'],
    ],
    defValueInput: ['(-1,0);(1,0)', '(0,-1)'],
    buttonsActive: true,
    newContent: true
  },
  artifact_1: {
    datadefault: [
      [8, 1, 4, ['board_5',], [['EJEMPLO 2']]],
      [5, 2, 0,
        ['Puntos de corte con el eje x ', 'Puntos de corte con el eje y '],


      ],
    ],
    conditions: [
      ['(2,0)'], ['(0,1)'],
    ],
    newContent: true,
    modeMath: true

  },
  artifact_2: {
    datadefault: [
      [8, 1, 4, ['board_6',], [['EJEMPLO 3']]],
      [5, 2, 0,
        ['Puntos de corte con el eje x ', 'Puntos de corte con el eje y '],


      ],
    ],
    conditions: [
      ['∅'], ['∅'],
    ],
    newContent: true,
    modeMath: true

  },
  artifact_3: {
    datadefault: [
      [8, 1, 4, ['board_7',], [['EJEMPLO 4']]],
      [5, 2, 0,
        ['Puntos de corte con el eje x ', 'Puntos de corte con el eje y'],


      ],
    ],
    conditions: [
      ['(1,0)'], ['∅'],
    ],
    newContent: true,
    modeMath: true

  },
  artifact_4: {
    datadefault: [
      [8, 1, 4, ['board_8',], [['EJEMPLO 5']]],
      [5, 2, 0,
        ['Puntos de corte con el eje x ', 'Puntos de corte con el eje y'],


      ],
    ],
    conditions: [
      ['(-3,0);(0,0);(3,0)'], ['(0,0)'],
    ],
    newContent: true,
    modeMath: true

  },
  artifact_5: {
    datadefault: [
      [8, 1, 4, ['board_9',], [['EJEMPLO 6']]],
      [5, 2, 0,
        ['Puntos de corte con el eje x ', 'Puntos de corte con el eje y'],


      ],
    ],
    conditions: [
      ['(-1,0);(-1.7,0);(1.1,0);(2.5,0)',
        '(-1,0);(-1.8,0);(1.0,0);(2.4,0)',
        '(-1,0);(-1.8,0);(1,0);(2.4,0)',
        '(-1.8,0);(-1,0);(1.2,0);(2.5,0)',

        '(-1,0);(-1.6,0);(1.1,0);(2.5,0)',
        '(-1,0);(-1.6,0);(1.2,0);(2.5,0)',
        '(-1,0);(-1.6,0);(1.3,0);(2.5,0)',

        '(-1,0);(-1.6,0);(1.1,0);(2.6,0)',
        '(-1,0);(-1.6,0);(1.2,0);(2.6,0)',
        '(-1,0);(-1.6,0);(1.3,0);(2.6,0)',

        '(-1,0);(-1.6,0);(1.1,0);(2.4,0)',
        '(-1,0);(-1.6,0);(1.2,0);(2.4,0)',
        '(-1,0);(-1.6,0);(1.3,0);(2.4,0)',


        '(-1,0);(-1.7,0);(1.1,0);(2.5,0)',
        '(-1,0);(-1.7,0);(1.2,0);(2.5,0)',
        '(-1,0);(-1.7,0);(1.3,0);(2.5,0)',

        '(-1,0);(-1.7,0);(1.1,0);(2.6,0)',
        '(-1,0);(-1.7,0);(1.2,0);(2.6,0)',
        '(-1,0);(-1.7,0);(1.3,0);(2.6,0)',

        '(-1,0);(-1.7,0);(1.1,0);(2.4,0)',
        '(-1,0);(-1.7,0);(1.2,0);(2.4,0)',
        '(-1,0);(-1.7,0);(1.3,0);(2.4,0)',

        '(-1,0);(-1.8,0);(1.1,0);(2.5,0)',
        '(-1,0);(-1.8,0);(1.2,0);(2.5,0)',
        '(-1,0);(-1.8,0);(1.3,0);(2.5,0)',

        '(-1,0);(-1.8,0);(1.1,0);(2.6,0)',
        '(-1,0);(-1.8,0);(1.2,0);(2.6,0)',
        '(-1,0);(-1.8,0);(1.3,0);(2.6,0)',

        '(-1,0);(-1.8,0);(1.1,0);(2.4,0)',
        '(-1,0);(-1.8,0);(1.2,0);(2.4,0)',
        '(-1,0);(-1.8,0);(1.3,0);(2.4,0)'],
      ['(0,1)']
    ],
    newContent: true,
    modeMath: true

  },

  //     conditions: [
  //         //Ejej X         //Eje Y       
  //         [], [],
  //         ['(2,0)'], ['(0,1)'],listo
  //         ['∅'], ['∅'],listo
  //         ['(1,0)'], ['∅'],listo
  //         ['(-3,0);(0,0);(3,0)'], ['(0,0)'],listo
  //         ['(-1,0);(-1.7,0);(1.1,0);(2.5,0)',listo
  //             '(-1,0);(-1.8,0);(1.0,0);(2.4,0)',
  //             '(-1,0);(-1.8,0);(1,0);(2.4,0)',
  //             '(-1.8,0);(-1,0);(1.2,0);(2.5,0)',
  //             // 
  //             '(-1,0);(-1.6,0);(1.1,0);(2.5,0)',
  //             '(-1,0);(-1.6,0);(1.2,0);(2.5,0)',
  //             '(-1,0);(-1.6,0);(1.3,0);(2.5,0)',

  //             '(-1,0);(-1.6,0);(1.1,0);(2.6,0)',
  //             '(-1,0);(-1.6,0);(1.2,0);(2.6,0)',
  //             '(-1,0);(-1.6,0);(1.3,0);(2.6,0)',

  //             '(-1,0);(-1.6,0);(1.1,0);(2.4,0)',
  //             '(-1,0);(-1.6,0);(1.2,0);(2.4,0)',
  //             '(-1,0);(-1.6,0);(1.3,0);(2.4,0)',

  //             ///
  //             '(-1,0);(-1.7,0);(1.1,0);(2.5,0)',
  //             '(-1,0);(-1.7,0);(1.2,0);(2.5,0)',
  //             '(-1,0);(-1.7,0);(1.3,0);(2.5,0)',

  //             '(-1,0);(-1.7,0);(1.1,0);(2.6,0)',
  //             '(-1,0);(-1.7,0);(1.2,0);(2.6,0)',
  //             '(-1,0);(-1.7,0);(1.3,0);(2.6,0)',

  //             '(-1,0);(-1.7,0);(1.1,0);(2.4,0)',
  //             '(-1,0);(-1.7,0);(1.2,0);(2.4,0)',
  //             '(-1,0);(-1.7,0);(1.3,0);(2.4,0)',
  //             //
  //             '(-1,0);(-1.8,0);(1.1,0);(2.5,0)',
  //             '(-1,0);(-1.8,0);(1.2,0);(2.5,0)',
  //             '(-1,0);(-1.8,0);(1.3,0);(2.5,0)',

  //             '(-1,0);(-1.8,0);(1.1,0);(2.6,0)',
  //             '(-1,0);(-1.8,0);(1.2,0);(2.6,0)',
  //             '(-1,0);(-1.8,0);(1.3,0);(2.6,0)',

  //             '(-1,0);(-1.8,0);(1.1,0);(2.4,0)',
  //             '(-1,0);(-1.8,0);(1.2,0);(2.4,0)',
  //             '(-1,0);(-1.8,0);(1.3,0);(2.4,0)'],
  //         ['(0,1)']
  //     ],


};

let defBoards = {
  board_1: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 225,
    },
    curves: [
      [[[-3, -0.5], [-2, 0, true,], [0, 1.5, true], [2, 0, true], [2.5, -0.5], [3, 0, true], [3.5, 0.5]]]
    ],
  },
  board_2: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      grid: false,
      boundingbox: [-2, 4, 2, -2],
      maxWidth: 310,
      maxHeight: 220,
    },
    curves: [
      [[[-1.1, -1.2], [-0.8, 0], [0, 1.5], [1, 1.7]]]
    ],
  },
  board_3: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      grid: false,
      boundingbox: [-4, 4, 2, -2],
      maxWidth: 310,
      maxHeight: 225,
    },
    curves: [
      [[[-3.5, -1], [-3, 0], [-2.5, 0.6], [-2.1, 0.8], [-1.2, 0.9]]],
      [[[-0.7, 0.9], [0, 1.1], [0.6, 1.6], [1, 2.6]]]
    ],
  },
  board_4: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -2],
    },

    points: [
      [-2.2, 2.2, true, null, null, '#2196f3'], [-2.4, 2.4, true, null, null, '#2196f3'], [-2.6, 2.6, true, null, null, '#2196f3'],
      [2.2, 2.2, true, null, null, '#2196f3'], [2.4, 2.4, true, null, null, '#2196f3'], [2.6, 2.6, true, null, null, '#2196f3']
    ],
    curves: [
      [[[-2, 2], [-1, 0], [0, -1], [1, 0], [2, 2]]],
    ],
  },
  board_5: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -2],
    },
    points: [[-2.7, 2.3, true, null, null, '#2196f3'], [-3.05, 2.5, true, null, null, '#2196f3'], [-3.4, 2.7, true, null, null, '#2196f3']],
    lines: [
      [[[3, -0.5], [-2.5, 2.2]]]
    ],

  },
  board_6: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 250,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -4],
    },
    points: [
      [-2.3, -0.45, true, null, null, '#2196f3'], [-2.65, -0.38, true, null, null, '#2196f3'], [-3.1, -0.3, true, null, null, '#2196f3'],
      [-0.25, -2.7, true, null, null, '#2196f3'], [-0.2, -3.1, true, null, null, '#2196f3'],

      [3.3, 0.4, true, null, null, '#2196f3'], [3.6, 0.3, true, null, null, '#2196f3'],
      [0.25, 3.4, true, null, null, '#2196f3'], [0.2, 3.7, true, null, null, '#2196f3'],
    ],

    curves: [
      [[[-2.1, -0.5], [-1, -1], [-0.5, -1.8], [-0.3, -2.5]]],
      [[[0.3, 3.2], [0.7, 2], [2, 0.7], [1.2, 1.2], [3.1, 0.4]]]
    ],
  },
  board_7: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 250,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -4],
    },
    points: [
      [0.19, -3.2, true, null, null, '#2196f3'], [0.15, -3.5, true, null, null, '#2196f3'],
      [3.2, 1.4, true, null, null, '#2196f3'], [3.4, 1.6, true, null, null, '#2196f3'], [3.6, 1.8, true, null, null, '#2196f3']
    ],
    curves: [
      [[[0.2, -3], [0.5, -1], [1, 0], [2, 0.5], [3, 1.2]]]
    ],
  },
  board_8: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 200,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 2, 4, -2],
    },
    curves: [
      [[[-3, 0], [-1.5, 1], [0, 0], [1.5, -1], [3, 0]]]
    ],
  },
  board_9: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 200,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 2, 4, -2],
    },
    points: [
      [3, 1.5, true, '', true]
    ],
    lines: [
      [[[3, 1.5, true, '', 2, true], [2, -1.5]]],
      [[[0.5, 1.5], [2, -1.5]]],
      [[[0.5, 1.5], [-1.5, -0.5]]],
      [[[-1.5, -0.5], [-2, 1.5]]],
      [[[-2, 1.5], [-2.5, 1]]]
    ],
  },

};

generator();
defBoardDefault();



