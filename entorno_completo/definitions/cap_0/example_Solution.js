let def = {
    //Inicio Artefactos Annelys: 1 --  9
    artifact_1: {
        interval: '[−2,1]',
        representation: '−2≤x≤1',
        preDefPar: [
            [
                [2, 0, true, '-2'],
                [5, 0,true,'1'],
            ],
        ]
        /*conditions: {
            valRepre: ['−2≤x≤1', '1≥x≥−2'],
            board: [
                {
                    pares: [['−2', '1']],
                    points: [['−2', false], ['1', false]],
                },
            ],
        },*/
    },
    artifact_2: {
        interval: '(−∞,3]',
        representation: 'x≤3',
        preDefPar: [
            [
                [-10, 0, false, ''],//sale fuera del board
                [5, 0, true, '3'],
            ],
        ]
        /*conditions: {
            valRepre: ['−∞<x≤3', '3≥x>−∞', 'x≤3', '3≥x'],
            board: [
                {
                    pares: [['-1', '3']],
                    points: [['3', false]],
                },
            ],
        },*/
    },
    artifact_3: {
        representation: 'x≥−2',
        interval: '[−2,∞)',
        preDefPar: [
            [
                [3, 0, true, '-2'],
                [10, 0, false, ''],//sale fuera del board
            ],
        ]
        /*conditions: {
            valInterval: ['[−2,∞)'],
            board: [
                {
                    pares: [['−2', '+∞']],
                    points: [['−2', false]],
                },
            ],
        },*/
    },
    artifact_4: {
        interval: '(−1,1]',
        representation: '−1<x≤1',
        preDefPar: [
            [
                [2, 0, false, '-1'],
                [5, 0,true,'1'],
            ],
        ]
        /*conditions: {
            valRepre: ['−1<x≤1', '1≥x>−1'],
            board: [
                {
                    pares: [['−1', '1']],
                    points: [['−1', true], ['1', false]],
                },
            ],
        },*/
    },
    artifact_5: {
        interval: '(3,∞)',
        representation: 'x>3',
        preDefPar: [
            [
                [4, 0, false, '3'],
                [10, 0, false, ''],//sale fuera del board
            ],
        ]
        /*conditions: {
            valRepre: ['3<x<∞', '∞>x>3','x>3','3<x'],
            board: [
                {
                    pares: [['3', '+∞']],
                    points: [['3', true]],
                },
            ],
        },*/
    },
    artifact_6: {
        representation: 'x≤3',
        interval: '(−∞,3]',
        preDefPar: [
            [
                [-10, 0, false, ''],//sale fuera del board
                [4, 0, true, '3'],
            ],
        ]
        /*conditions: {
            valInterval: ['(−∞,3]'],
            board: [
                {
                    pares: [['-∞', '3']],
                    points: [['3', false]],
                },
            ],
        },*/
    },
    artifact_7: {
        interval: '[3,5)',
        representation: '3≤x<5',
        preDefPar: [
            [
                [2,0,true,'3'],
                [5,0,false,'5'],
            ],
        ]
        /*conditions: {
            valRepre: ['3≤x<5', '5>x≥3'],
            board: [
                {
                    pares: [['3', '5']],
                    points: [['3', false], ['5', true]],
                },
            ],
        },*/
    },
    artifact_8: {
        interval: '(−∞,−1)',
        representation: 'x<−1',
        preDefPar: [
            [
                [-2, 0, false, ''],//sale fuera del board
                [3, 0, false, '−1'],
            ],
        ]
        /*conditions: {
            valRepre: ['−∞<x<−1', '−1>x>−∞', 'x<−1', '−1>x'],
            board: [
                {
                    pares: [['-∞', '−1']],
                    points: [['−1', true]],
                },
            ],
        },*/
    },
    artifact_9: {
        representation: 'x≥4',
        interval: '[4,∞)',
        preDefPar: [
            [
                [4, 0, true, '4'],
                [10, 0, false, ''],//sale fuera del board
            ],
        ]
        /*conditions: {
            valInterval: ['[4,∞)'],
            board: [
                {
                    pares: [['4', '+∞']],
                    points: [['4', false]],
                },
            ],
        },*/
    },  
    //Fin Artefactos Annelys
    //Inicio Artefactos Luis: 10 -- 18
    artifact_10: {
        interval: '(−3,−1]',
        representation: '−3<x≤−1',
        preDefPar: [
            [
                [2,0,false,'−3'],
                [5,0,true,'−1'],
            ],
        ]
        /*conditions: {
            valRepre: ['−3<x≤−1', '−1≥x>−3'],
            board: [
                {
                    pares: [['−3', '−1']],
                    points: [['−3', true], ['−1', false]],
                },
            ],
        },*/
    },
    artifact_11: {
        interval: '[5,∞)',
        representation: 'x≥5',
        preDefPar: [
            [
                [4, 0, true, '5'],
                [10, 0, false, ''],//sale fuera del board
            ],
        ]
        /*conditions: {
            valRepre: ['∞>x≥5', '5≤x<∞', '5≤x', 'x≥5'],
            board: [
                {
                    pares: [['5','+∞']],
                    points: [['5', false]],
                },
            ],
        },*/
    },
    artifact_12: {
        representation: 'x≤−1',
        interval: '(-∞,−1]',
        preDefPar: [
            [
                [-2, 0, false, ''],
                [3, 0, true, '-1'],//sale fuera del board
            ],
        ]
        /*conditions: {
            valInterval: ['(−∞,−1]'],
            board: [
                {
                    pares: [['-∞', '−1']],
                    points: [['−1', false]],
                },
            ],
        },*/
    },
    artifact_13: {
        interval: '[1,3)',
        representation: '1≤x<3',
        preDefPar: [
            [
                [2,0,true,'1'],
                [5,0,false,'3'],
            ],
        ]
        /*conditions: {
            valRepre: ['1≤x<3', '3>x≥1'],
            board: [
                {
                    pares: [['1', '3']],
                    points: [['1', false], ['3', true]],
                },
            ],
        },*/
    },
    artifact_14: {
        interval: '(−∞,4]',
        representation: 'x≤4',
        preDefPar: [
            [
                [-2,0,false,''],//Sale fuero del board
                [4,0,true,'4'],
            ],
        ]
        /*conditions: {
            valRepre: ['4≥x>−∞', '−∞<x≤4', 'x≤4', '4≥x'],
            board: [
                {
                    pares: [['-∞','4']],
                    points: [['4', false]],
                },
            ],
        },*/
    },
    artifact_15: {
        interval: '[3,∞)',
        representation: 'x≥3',
        preDefPar: [
            [
                [4, 0, true, '3'],
                [10, 0, false, ''],//sale fuera del board
            ],
        ]
          //preDefPoint: [[5, 0, 0, '']]
        /*conditions: {
            valInterval: ['[3,∞)'],
            board: [
                {
                    pares: [['3', '+∞']],
                    points: [['3', false]],
                },
            ],
        },*/
    },
    artifact_16: {
        interval: '(2,6)',
        representation: '2<x<6',
        preDefPar: [
            [
                [2,0,false,'2'],
                [5,0,false,'6'],
            ],
        ]
        /*conditions: {
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
        },*/
    },
    artifact_17: {
        interval: '(−3,∞)',
        representation: 'x>−3',
        preDefPar: [
            [
                [3, 0, false, '-3'],
                [10, 0, false, ''],//sale fuera del board
            ],
        ]
        /*conditions: {
            valRepre: ['−3<x<∞', '∞>x>−3', '−3<x', 'x>−3'],
            board: [
                {
                    pares: [['−3', '+∞']],
                    points: [['−3', true]]
                },
            ],
        },*/
    },
    artifact_18: {
        representation: 'x≤4',
        interval: '(−∞,4]',
        preDefPar: [
            [
                [-2,0,false,''],//Sale fuero del board
                [4,0,true,'4'],
            ],
        ]
        /*conditions: {
            valInterval: ['(−∞,4]'],
            board: [
                {
                    pares: [['-∞', '4']],
                    points: [['4', false]],
                },
            ],
        },*/
    },
    //Fin Artefactos Luis
    //Inicio Artefactos Manuel: 19 -- 24
    artifact_19: {
        interval: '[−1,2]',
        representation: '−1≤x≤2',
        preDefPar: [
            [
                [2,0,true,'−1'],
                [5,0,true,'2'],
            ],
        ]
        /*conditions: {
            valRepre: ['−1≤x≤2', '2≥x≥−1'],
            board: [
                {
                    pares: [['−1', '2']],
                    points: [['−1', false], ['2', false]],
                },
            ],
        },*/
    },
    artifact_20: {
        interval: '(−∞,−4]',
        representation: 'x≤−4',
        preDefPar: [
            [
                [-2,0,false,''],//Sale fuero del board
                [3,0,true,'−4'],
            ],
        ]
        /*conditions: {
            valRepre: ['−∞<x≤−4', '−4≥x>−∞', 'x≤−4', '−4≥x'],
            board: [
                {
                    pares: [['-∞', '−4']],
                    points: [['−4', false]],
                },
            ],
        },*/
    },
    artifact_21: {
        representation: 'x≥−6',
        interval: '[−6,∞)',
        preDefPar: [
            [
                [3, 0, true, '−6'],
                [10, 0, false, ''],//sale fuera del board
            ],
        ]
        /*conditions: {
            valInterval: ['[−6,∞)'],
            board: [
                {
                    pares: [['−6', '+∞']],
                    points: [['−6', false]],
                },
            ],
        },*/
    },
    artifact_22: {
        interval: '[−7,−5)',
        representation: '−7≤x<−5',
        preDefPar: [
            [
                [2,0,true,'−7'],
                [5,0,false,'−5'],
            ],
        ]
        /*conditions: {
            valRepre: ['−7≤x<−5', '−5>x≥−7'],
            board: [
                {
                    pares: [['−7', '−5']],
                    points: [['−7', false], ['−5', true]],
                },
            ],
        },*/
    },
    artifact_23: {
        interval: '[−1,∞)',
        representation: 'x≥−1',
        preDefPar: [
            [
                [3, 0, true, '−1'],
                [10, 0, false, ''],//sale fuera del board
            ],
        ]
        /*conditions: {
            valRepre: ['−1≤x<∞', '∞>x≥−1','x≥−1','−1≤x'],
            board: [
                {
                    pares: [['−1', '+∞']],
                    points: [['−1', false]],
                },
            ],
        },*/
    },
    artifact_24: {
        representation: 'x≤−2',
        interval: '(−∞,−2]',
        preDefPar: [
            [
                [-2,0,false,''],//Sale fuero del board
                [3,0,true,'−2'],
            ],
        ]
        /*conditions: {
            valInterval: ['(−∞,−2]'],
            board: [
                {
                    pares: [['-∞', '−2']],
                    points: [['−2', false]],
                },
            ],
        },*/
    },
    //Fin Artefactos Manuel  
}

//cordenadas por cada plano
const c = {
    //Puntos a utilizar de Annely: 1 -- 12
    1: { x: 1, y: 2.5 },
    2: { x: -1, y: -1.5 },  
    3: { x: 3, y: 3 },
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
let rDef={
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
    artifact_1: {
        defBoard: 'board_0',
        textBottom: '(x, -y),(-x, y),(y, x)',        
        defaultInputs: [
            {
                position: [c[1].x, c[1].y],
                value: '(x,y)',
            },
            {
                position: [c[1].x, -c[1].y],
                value: '(x,-y)',
            },
            {
                position: [-c[1].x, c[1].y],
                value: '(-x,y)',
            },
            {
                position: [c[1].y, c[1].x],
                value: '(y,x)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [c[1].x, -c[1].y], text: 'x,-y' },
                { p: [-c[1].x, c[1].y], text: '-x,y' },
                { p: [c[1].y, c[1].x], text: 'y,x' }
            ],
        },*/
    },
    artifact_2: {
        defBoard: 'board_4',
        textBottom: '(-x,-y),(x,-y),(y,x)',
        defaultInputs: [
            {
                position: [c[5].x, c[5].y],
                value: '(x,y)', 
            },
            {
                position: [-c[5].x, -c[5].y],
                value: '(-x,-y)',
            },
            {
                position: [c[5].x, -c[5].y],
                value: '(x,-y)',
            },
            {
                position: [c[5].y, c[5].x],
                value: '(y,x)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [-c[5].x, -c[5].y], text: '-x,-y' },
                { p: [c[5].x, -c[5].y], text: 'x,-y' },
                { p: [c[5].y, c[5].x], text: 'y,x' }
            ],
        },*/
    },
    artifact_3: {
        defBoard: 'board_8',
        textBottom: '(-x,y),(x,-y),(y,x)',
        defaultInputs: [
            {
                position: [c[9].x, c[9].y],
                value: '(x,y)', 
            },
            {
                position: [-c[9].x, -c[9].y],
                value: '(-x,y)',
            },
            {
                position: [c[9].x, -c[9].y],
                value: '(x,-y)',
            },
            {
                position: [c[9].y, c[9].x],
                value: '(y,x)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [-c[9].x, c[9].y], text: '-x,y' },
                { p: [c[9].x, -c[9].y], text: 'x,-y' },
                { p: [c[9].y, c[9].x], text: 'y,x' }
            ],
        },*/
    },
    artifact_4: {
        defBoard: 'board_12',
        textBottom: '(x, -y),(-x, y),(y, x)',    
        defaultInputs: [
            {
                position: [c[13].x, c[13].y],
                value: '(x,y)',
            },
            {
                position: [c[13].x, -c[13].y],
                value: '(x,-y)',
            },
            {
                position: [-c[13].x, c[13].y],
                value: '(-x,y)',
            },
            {
                position: [c[13].y, c[13].x],
                value: '(y,x)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [    
                { p: [c[13].x, -c[13].y], text: 'x,-y' },
                { p: [-c[13].x, c[13].y], text: '-x,y' },
                { p: [c[13].y, c[13].x], text: 'y,x' }    
            ],
        },*/
    },
    artifact_5: {
        defBoard: 'board_16',
        textBottom: '(-x, -y),(-x, y),(2y, x)',
        //cambie esta pregunta se superponian dos puntos
        defaultInputs: [
            {
                position: [c[17].x, c[17].y],
                value: '(x,y)',
            },
            {
                position: [-c[17].x, -c[17].y],
                value: '(-x,-y)',
            },
            {
                position: [-c[17].x, c[17].y],
                value: '(-x,y)',
            },
            {
                position: [2*c[17].y, c[17].x],
                value: '(2y,x)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [-c[17].x, -c[17].y], text: '-x,-y' },
                { p: [-c[17].x, c[17].y], text: '-x,y' },
                { p: [2*c[17].y, c[17].x], text: '2y,x' }
            ],
        },*/
    },
    artifact_6: {
        defBoard: 'board_20',
        textBottom: '(x, -y),(-x, y),(y, x)',    
        defaultInputs: [
            {
                position: [c[21].x, c[21].y],
                value: '(x,y)',
            },
            {
                position: [c[21].x, -c[21].y],
                value: '(x,-y)',
            },
            {
                position: [-c[21].x, c[21].y],
                value: '(-x,y)',
            },
            {
                position: [c[21].y, c[21].x],
                value: '(y,x)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [    
                { p: [c[21].x, -c[21].y], text: 'x,-y' },
                { p: [-c[21].x, c[21].y], text: '-x,y' },
                { p: [c[21].y, c[21].x], text: 'y,x' }    
            ],
        },*/
    },
    artifact_7: {
        // textTop: "Este es el de arriba",
        defBoard: 'board_24',
        textBottom: '(x, -y),(-x, y),(y, x)',
        defaultInputs: [
            {
                position: [c[25].x, c[25].y],
                value: '(x,y)',
            },
            {
                position: [c[25].x, -c[25].y],
                value: '(x,-y)',
            },
            {
                position: [-c[25].x, c[25].y],
                value: '(-x,y)',
            },
            {
                position: [c[25].y, c[25].x],
                value: '(y,x)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [//(2,1), (1,2), (0,0), (-1,0), (1,0)
                { p: [c[25].x, -c[25].y], text: 'x,-y' },
                { p: [-c[25].x, c[25].y], text: '-x,y' },
                { p: [c[25].y, c[25].x], text: 'y,x' }
            ],
        },*/
    },
    artifact_8: {
      // textTop: "Este es el de arriba",
        defBoard: 'board_28',
        textBottom: '(-x, y),(x, -y),(y, x)',  
        defaultInputs: [
            {
                position: [c[29].x, c[29].y],
                value: '(x,y)',
            },
            {
                position: [c[29].x, -c[29].y],
                value: '(x,-y)',
            },
            {
                position: [-c[29].x, c[29].y],
                value: '(-x,y)',
            },
            {
                position: [c[29].y, c[29].x],
                value: '(y,x)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [-c[29].x, c[29].y], text: '-x,y' },
                { p: [c[29].x, -c[29].y], text: 'x,-y' },
                { p: [c[29].y,c[29].x], text: 'y,x' }
            ],
        },*/  
    },
    //Fin tipo 1
    artifact_9: {
        defBoard: 'board_1',
        textBottom: '(b,0),(a, a),(-a, -b),(a, -a)',        
        defaultInputs: [
            {
                position: [0, c[2].y],
                value: '(0,b)',
            },
            {
                position: [c[2].x, 0],
                value: '(a,0)',
            },
            {
                position: [c[2].y, 0],
                value: '(b,0)',
            },
            {
                position: [-c[2].x, -c[2].y],
                value: '(-a,-b)',
            },
            {
                position: [c[2].x, -c[2].x],
                value: '(a,-a)',
            },
            {
                position: [c[2].x, c[2].x],
                value: '(a,a)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [c[2].y, 0], text: 'b,0' },
                { p: [c[2].x, c[2].x], text: 'a,a' },
                { p: [-c[2].x, -c[2].y], text: '-a,-b' },
                { p: [c[2].x, -c[2].x], text: 'a,-a' },
            ],
        },*/
    },
    artifact_10: {
        //La pregunta (a,-a) fue modificada por coincidencia con el punto (b,b) [Pregunta original (-a,-a)]
        defBoard: 'board_5',
        textBottom: '(b,0),(b, b),(-a, -b),(a, -a)',
        defaultInputs: [
            {
                position: [0, c[6].y],
                value: '(0,b)',
            },
            {
                position: [c[6].x, 0],
                value: '(a,0)',
            },
            {
                position: [c[6].y, 0],
                value: '(b,0)',
            },
            {
                position: [-c[6].x, -c[6].y],
                value: '(-a,-b)',
            },
            {
                position: [c[6].x, -c[6].x],
                value: '(a,-a)',
            },
            {
                position: [c[6].y, c[6].y],
                value: '(b,b)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [c[6].y, 0], text: 'b,0' },
                { p: [c[6].y, c[6].y], text: 'b,b' },
                { p: [-c[6].x, -c[6].y], text: '-a,-b' },
                { p: [c[6].x, -c[6].x], text: 'a,-a' },
            ],
        },*/
    },  
    artifact_11: {
        textBottom: '(-a,0),(a,b),(-a,b),(b,-b)',
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
            {
                position: [-c[10].x, 0],
                value: '(-a,0)',
            },
            {
                position: [c[10].x, c[10].y],
                value: '(a,b)',
            },
            {
                position: [-c[10].x, c[10].y],
                value: '(-a,b)',
            },
            {
                position: [c[10].y, -c[10].y],
                value: '(b,-b)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [-c[10].x, 0], text: '-a,0' },
                { p: [c[10].x, c[10].y], text: 'a,b' },
                { p: [-c[10].x, c[10].y], text: '-a,b' },
                { p: [c[10].y, -c[10].y], text: 'b,-b' },
            ],
        },*/
    },
    artifact_12: {
        defBoard: 'board_13',
        textBottom: '(-b,0),(-a, -b),(a, -a),(b, -a)',
        defaultInputs: [
            {
                position: [0, c[14].y],
                value: '(0,b)',
            },
            {
                position: [c[14].x, 0],
                value: '(a,0)',
            },
            {
                position: [-c[14].y, 0],
                value: '(-b,0)',
            },
            {
                position: [-c[14].x, -c[14].y],
                value: '(-a,-b)',
            },
            {
                position: [c[14].x, -c[14].x],
                value: '(a,-a)',
            },
            {
                position: [c[14].y, -c[14].x],
                value: '(b,-a)',
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
    artifact_13: {
        defBoard: 'board_17',
        textBottom: '(b,0),(a,a),(-a, -b),(-a, a)',
        defaultInputs: [
            {
                position: [0, c[18].y],
                value: '(0,b)',
            },
            {
                position: [c[18].x, 0],
                value: '(a,0)',
            },
            {
                position: [c[18].y, 0],
                value: '(b,0)',
            },
            {
                position: [-c[18].x, -c[18].y],
                value: '(-a,-b)',
            },
            {
                position: [-c[18].x, c[18].x],
                value: '(-a,a)',
            },
            {
                position: [c[18].x, c[18].x],
                value: '(a,a)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [    
                { p: [c[18].y, 0], text: 'b,0' },
                { p: [c[18].x, c[18].x], text: 'a,a' },
                { p: [-c[18].x, -c[18].y], text: '-a,-b' },
                { p: [-c[18].x, c[18].x], text: '-a,a' },    
            ],
        },*/
    },
    artifact_14: {
        defBoard: 'board_21',
        textBottom: '(0,a),(a,-a),(a, -b),(-a, b)',
        defaultInputs: [
            {
                position: [0, c[22].y],
                value: '(0,b)',
            },
            {
                position: [c[22].x, 0],
                value: '(a,0)',
            },
            {
                position: [0, c[22].x],
                value: '(0,a)',
            },
            {
                position: [c[22].x, -c[22].x],
                value: '(a,-a)',
            },
            {
                position: [c[22].x, -c[22].y],
                value: '(a,-b)',
            },
            {
                position: [-c[22].x, c[22].y],
                value: '(-a,b)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [    
                { p: [0, c[22].x], text: '0,a' },
                { p: [c[22].x, -c[22].x], text: 'a,-a' },
                { p: [c[22].x, -c[22].y], text: 'a,-b' },
                { p: [-c[22].x, c[22].y], text: '-a,b' },    
            ],
        },*/
    },
    artifact_15: {
        defBoard: 'board_25',
        textBottom: '(b,0),(a, a),(-a, -b),(b, -b)',
        defaultInputs: [
            {
                position: [0, c[26].y],
                value: '(0,b)',
            },
            {
                position: [c[26].x, 0],
                value: '(a,0)',
            },
            {
                position: [c[26].y, 0],
                value: '(b,0)',
            },
            {
                position: [c[26].x, c[26].x],
                value: '(a,a)',
            },
            {
                position: [-c[26].x, -c[26].y],
                value: '(-a,-b)',
            },
            {
                position: [c[26].y, -c[26].y],
                value: '(b,-b)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [c[26].y, 0], text: 'b,0'},
                { p: [c[26].x, c[26].x], text: 'a,a' },
                { p: [-c[26].x, -c[26].y], text: '-a,-b' },
                { p: [c[26].y, -c[26].y], text: 'b,-b' },
            ],
        },*/
    },
    artifact_16: {
        defBoard: 'board_29',
        textBottom: '(0,a),(b, b),(-a, -b),(a, -a)',
        defaultInputs: [
            {
                position: [0, c[30].y],
                value: '(0,b)',
            },
            {
                position: [c[30].x, 0],
                value: '(a,0)',
            },
            {
                position: [0,c[30].x],
                value: '(0,a)',
            },
            {
                position: [-c[30].x, -c[30].y],
                value: '(-a,-b)',
            },
            {
                position: [c[30].x, -c[30].x],
                value: '(a,-a)',
            },
            {
                position: [c[30].y, c[30].y],
                value: '(b,b)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [0, c[30].x], text: '0,a' },
                { p: [c[30].y, c[30].y], text: 'b,b' },
                { p: [-c[30].x, -c[30].y], text: '-a,-b' },
                { p: [c[30].x, -c[30].x], text: 'a,-a' },
            ],
        },*/
    },
    //Fin tipo 2
    artifact_17: {
        defBoard: 'board_2',
        textBottom: '(x-1,y),(x,y+2),(x,y-2)',
        defaultInputs: [
            {
                position: [c[3].x , c[3].y ],
                value: '(x,y)',
            },
            {
                position: [c[3].x-1, c[3].y],
                value: '(x-1,y)',
            },
            {
                position: [c[3].x, c[3].y+2],
                value: '(x,y+2)',
            },
            {
                position: [c[3].x, c[3].y-2 ],
                value: '(x,y-2)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [c[3].x * 2, c[3].y * 2], text: '(x-1,y)' },
                { p: [c[3].x * 3, c[3].y * 4], text: '(x,y+2)' },
                { p: [c[3].x * 3, 0], text: '(x,y-2)' }
            ],
        },*/        
    },
    artifact_18: {
        defBoard: 'board_6',
        textBottom: '(x-1.5,y),(x+1.5,y),(x,y-1)',
        defaultInputs: [
            {
                position: [c[7].x , c[7].y],
                value: '(x,y)',
            },
            {
                position: [c[7].x-1.5, c[7].y],
                value: '(x-1.5,y)',
            },
            {
                position: [c[7].x+1.5, c[7].y],
                value: '(x+1.5,y)',
            },
            {
                position: [c[7].x, c[7].y-1],
                value: '(x,y-1)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [c[7].x - 1.5, c[7].y ], text: '(x-1.5,y)' },
                { p: [c[7].x + 1.5, c[7].y ], text: '(x+1.5,y)' },
                { p: [c[7].x, c[7].y -1 ], text: '(x,y-1)' }
            ],
        },*/        
    },
    artifact_19: {
        defBoard: 'board_10',
        textBottom: '(x+2,y),(x,y+1),(x,y-1)',
        defaultInputs: [
            {
                position: [c[11].x , c[11].y],
                value: '(x,y)',
            },
            {
                position: [c[11].x+2, c[11].y],
                value: '(x+2,y)',
            },
            {
                position: [c[11].x, c[11].y+1],
                value: '(x,y+1)',
            },
            {
                position: [c[11].x, c[11].y-1 ],
                value: '(x,y-1)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [c[11].x + 2, c[11].y ], text: '(x+2,y)' },
                { p: [c[11].x, c[11].y + 1 ], text: '(x,y+1)' },
                { p: [c[11].x, c[11].y - 1 ], text: '(x,y-1)' }
            ],
        },*/        
    },
    artifact_20: {
        defBoard: 'board_14',
        textBottom: '(x-2.5, y),(x+2.5, y),(x, y-1)',
        defaultInputs: [
            {
                position: [c[15].x, c[15].y],
                value: '(x,y)',
            },
            {
                position: [c[15].x-2.5, c[15].y],
                value: '(x-2.5,y)',
            },
            {
                position: [c[15].x+2.5, c[15].y],
                value: '(x+2.5,y)',
            },
            {
                position: [c[15].x, c[15].y-1],
                value: '(x,y-1)',
            },
        ],    
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [c[15].x - 2.5, c[15].y], text: 'x-2.5,y' },
                { p: [c[15].x + 2.5, c[15].y], text: 'x+2.5,y' },
                { p: [c[15].x, c[15].y - 1], text: 'x,y-1' },
            ],
        },*/
    },
    artifact_21: {
        defBoard: 'board_18',
        textBottom: '(x-1, y),(x+1, y),(x, y-2)',    
        defaultInputs: [
            {
                position: [c[19].x, c[19].y],
                value: '(x,y)',
            },
            {
                position: [c[19].x-1, c[19].y],
                value: '(x-1,y)',
            },
            {
                position: [c[19].x+1, c[19].y],
                value: '(x+1,y)',
            },
            {
                position: [c[19].x, c[19].y-2],
                value: '(x,y-2)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [    
                { p: [c[19].x-1, c[19].y], text: 'x-1,y' },
                { p: [c[19].x+1, c[19].y], text: 'x+1,y' },
                { p: [c[19].x, c[19].y-2], text: 'x,y-2' }    
            ],
        },*/
    },
    artifact_22: {
        defBoard: 'board_22',
        textBottom: '(x-2, y),(x+2, y),(x, y-2.5)',    
        defaultInputs: [
            {
                position: [c[23].x, c[23].y],
                value: '(x,y)',
            },
            {
                position: [c[23].x-2, c[23].y],
                value: '(x-2,y)',
            },
            {
                position: [c[23].x+2, c[23].y],
                value: '(x+2,y)',
            },
            {
                position: [c[23].x, c[23].y-2.5],
                value: '(x,y-2.5)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [    
                { p: [c[23].x-2, c[23].y], text: 'x-2,y' },
                { p: [c[23].x+2, c[23].y], text: 'x+2,y' },
                { p: [c[23].x, c[23].y-2.5], text: 'x,y-2.5' }    
            ],
        },*/
    },
    artifact_23: {
        defBoard: 'board_26',
        textBottom: '(x-2, y),(x+2, y),(x, y-0.75)',
        defaultInputs: [
            {
                position: [c[27].x, c[27].y],
                value: '(x,y)',
            },
            {
                position: [c[27].x-2, c[27].y],
                value: '(x-2,y)',
            },
            {
                position: [c[27].x+2, c[27].y],
                value: '(x+2,y)',
            },
            {
                position: [c[27].x, c[27].y-0.75],
                value: '(x,y-0.75)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [c[27].x - 2, c[27].y], text: 'x-2,y' },
                { p: [c[27].x + 2, c[27].y], text: 'x+2,y' },
                { p: [c[27].x, c[27].y - 0.75], text: 'x,y-0.75' },
            ],
        },*/
    },
    artifact_24: {
        defBoard: 'board_30',
        textBottom: '(x-2, y),(x, y+1),(x, y-1)',
        defaultInputs: [
            {
                position: [c[31].x, c[31].y],
                value: '(x,y)',
            },
            {
                position: [c[31].x-2, c[31].y],
                value: '(x-2,y)',
            },
            {
                position: [c[31].x, c[31].y+1],
                value: '(x,y+1)',
            },
            {
                position: [c[31].x, c[31].y-1],
                value: '(x,y-1)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [c[31].x - 2, c[31].y], text: 'x-2,y' },
                { p: [c[31].x, c[31].y+1], text: 'x,y+1' },
                { p: [c[31].x, c[31].y - 1], text: 'x,y-1' },
            ],
        },*/
    },
    //Fin tipo 3
    artifact_25: {
        defBoard: 'board_3',
        textBottom: '(-2x,y),(x,2y),(2x,-y),(x/2,y/2)',
        defaultInputs: [
            {
                position: [c[4].x , c[4].y],
                value: '(x,y)',
            },
            {
                position: [c[4].x * -2, c[4].y],
                value: '(-2x,y)',
            },
            {
                position: [c[4].x, c[4].y * 2],
                value: '(x,2y)',
            },
            {
                position: [c[4].x * 2, c[4].y * -1],
                value: '(2x,-y)',
            },
            {
                position: [c[4].x / 2.0, c[4].y /2.0],
                value: '(x/2,y/2)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [c[4].x * -2, c[4].y ], text: '(-2x,y)' },
                { p: [c[4].x, c[4].y * 2], text: '(x,2y)' },
                { p: [c[4].x * 2, c[4].y * -1], text: '(2x,-y)' },
                { p: [c[4].x / 2, c[4].y /2], text: '(x/2,y/2)' }
            ],
        },*/        
    }, 
    artifact_26: {
        defBoard: 'board_7',
        textBottom: '(x,3y),(x,-3y),(-2x,y),(x/2,y/2)',
        defaultInputs: [
            {
                position: [c[8].x , c[8].y],
                value: '(x,y)',
            },
            {
                position: [c[8].x, c[8].y * 3],
                value: '(x,3y)',
            },
            {
                position: [c[8].x, c[8].y * -3],
                value: '(x,-3y)',
            },
            {
                position: [c[8].x * -2, c[8].y],
                value: '(-2x,y)',
            },
            {
                position: [c[8].x / 2.0, c[8].y /2.0],
                value: '(x/2,y/2)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [c[8].x, c[8].y * 3], text: '(x,3y)' },
                { p: [c[8].x, c[8].y * -3], text: '(x,-3y)' },
                { p: [c[8].x * -2, c[8].y], text: '(-2x,y)' },
                { p: [c[8].x / 2, c[8].y /2], text: '(x/2,y/2)' }
            ],
        },*/        
    },
    artifact_27: {
        defBoard: 'board_11',
        textBottom: '(-x,y),(x,2y),(x,-2y),(x/2,y/2)',
        defaultInputs: [
            {
                position: [c[12].x , c[12].y],
                value: '(x,y)',
            },
            {
                position: [c[12].x * -1, c[12].y],
                value: '(-x,y)',
            },
            {
                position: [c[12].x, c[12].y * 2],
                value: '(x,2y)',
            },
            {
                position: [c[12].x, c[12].y * -2],
                value: '(x,-2y)',
            },
            {
                position: [c[12].x / 2.0, c[12].y /2.0],
                value: '(x/2,y/2)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [c[12].x * -1, c[12].y ], text: '(-x,y)' },
                { p: [c[12].x, c[12].y * 2], text: '(x,2y)' },
                { p: [c[12].x, c[12].y * -2], text: '(x,-2y)' },
                { p: [c[12].x / 2, c[12].y /2], text: '(x/2,y/2)' }
            ],
        },*/        
    }, 
    artifact_28: {
        defBoard: 'board_15',
        textBottom: '(2x, -y),(-x, y),(-2x, y),(x/2, y/2)',
        defaultInputs: [
            {
                position: [c[16].x, c[16].y],
                value: '(x,y)',
            },
            {
                position: [c[16].x * 2, c[16].y * -1],
                value: '(2x,-y)',
            },
            {
                position: [c[16].x * -1, c[16].y],
                value: '(-x, y)',
            },
            {
                position: [c[16].x * -2, c[16].y],
                value: '(-2x, y)',
            },
            {
                position: [c[16].x / 2.0, c[16].y / 2.0],
                value: '(x/2, y/2)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [2 * c[16].x, -c[16].y], text: '2x,-y' },
                { p: [-c[16].x, c[16].y], text: '-x, y' },
                { p: [-2 * c[16].x, c[16].y], text: '-2x, y' },
                { p: [c[16].x / 2, c[16].y / 2], text: 'x/2, y/2' },
            ],
        },*/
    },
    artifact_29: {
        defBoard: 'board_19',
        textBottom: '(-2x, y),(x, -2y),(-x, -y),(x/2, y/2)',    
        defaultInputs: [
            {
                position: [c[20].x, c[20].y],
                value: '(x,y)',
            },
            {
                position: [c[20].x * -2, c[20].y],
                value: '(-2x, y)',
            },
            {
                position: [c[20].x * -1, c[20].y * -1],
                value: '(-x, -y)',
            },
            {
                position: [c[20].x, c[20].y * -2],
                value: '(x, -2y)',
            },
            {
                position: [c[20].x / 2.0, c[20].y / 2.0],
                value: '(x/2, y/2)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [-2 * c[20].x, c[20].y], text: '-2x, y' },
                { p: [c[20].x, -2 * c[20].y], text: 'x, -2y' },
                { p: [- c[20].x, - c[20].y], text: '-x, -y' },
                { p: [c[20].x / 2, c[20].y / 2], text: 'x/2, y/2' },
            ],
        },*/
    },
    artifact_30: {
        defBoard: 'board_23',
        textBottom: '(3x, y),(x, 2y),(-3x, -y),(x/2, y/2)',
        defaultInputs: [
            {
                position: [c[24].x, c[24].y],
                value: '(x,y)',
            },
            {
                position: [c[24].x * 3, c[24].y],
                value: '(3x, y)',
            },
            {
                position: [c[24].x, c[24].y * 2],
                value: '(x, 2y)',
            },
            {
                position: [c[24].x * -3, c[24].y * -1],
                value: '(-3x, -y)',
            },
            {
                position: [c[24].x / 2.0, c[24].y / 2.0],
                value: '(x/2, y/2)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [3*c[24].x, c[24].y], text: '3x,y' },
                { p: [c[24].x, 2*c[24].y], text: 'x,2y' },
                { p: [-3*c[24].x, -c[24].y], text: '-3x,-y' },
                { p: [c[24].x/2, c[24].y/2], text: 'x/2,y/2' }
            ],
        },*/
    },
    artifact_31: {
        defBoard: 'board_27',
        textBottom: '(-x, -y),(x, 2y),(2x, y),(x/2, y/2)',
        defaultInputs: [
            {
                position: [c[28].x, c[28].y],
                value: '(x,y)',
            },
            {
                position: [c[28].x * -1, c[28].y * -1],
                value: '(-x, -y)',
            },
            {
                position: [c[28].x, c[28].y * 2],
                value: '(x, 2y)',
            },
            {
                position: [c[28].x * 2, c[28].y],
                value: '(2x, y)',
            },
            {
                position: [c[28].x / 2.0, c[28].y / 2.0],
                value: '(x/2, y/2)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [-c[28].x, -c[28].y], text: '-x,-y' },
                { p: [c[28].x, 2*c[28].y], text: 'x,2y' },
                { p: [2 * c[28].x, c[28].y], text: '2x,y' },
                { p: [c[28].x/2, c[28].y/2], text: 'x/2,y/2' },
            ],
        },*/
    },
    artifact_32: {
        defBoard: 'board_31',
        textBottom: '(-2x, -y),(x, 3y),(2x, y),(x/2, y/2)',
        defaultInputs: [
            {
                position: [c[32].x, c[32].y],
                value: '(x,y)',
            },
            {
                position: [c[32].x * -2, c[32].y * -1],
                value: '(-2x, -y)',
            },
            {
                position: [c[32].x, c[32].y * 3],
                value: '(x, 3y)',
            },
            {
                position: [c[32].x * 2, c[32].y],
                value: '(2x, y)',
            },
            {
                position: [c[32].x / 2.0, c[32].y / 2.0],
                value: '(x/2, y/2)',
            },
        ],
        /*conditions: {
            texterror: {
                time: 4,
            },
            points: [
                { p: [-2*c[32].x, -c[32].y], text: '-2x,-y' },
                { p: [c[32].x, 3*c[32].y], text: 'x,3y' },
                { p: [2 * c[32].x, c[32].y], text: '2x,y' },
                { p: [c[32].x/2, c[32].y/2], text: 'x/2,y/2' },
            ],
        },*/
    }
    //Fin tipo 4
}

// Clave en Local Storage
//const LOCAL_STORAGE_KEY = 'resultadoExamen';
//const LOCAL_COLORS_KEY = 'colorsExamen';

let artefact = [];
//let position = localStorageSeleccionados("P1", 1, 24, 3);
[position, position2] = localStoragePreguntasExamen();
console.log(position);
console.log(position2);
[def,artefact] = PintaSeleccionP1(position, def, 'P1');

// Obtener las claves, ordenarlas y luego renombrarlas
let keys = Object.keys(def).sort((a, b) => {
    return parseInt(a.split('_')[1]) - parseInt(b.split('_')[1]);
});

let newObj = {};
keys.forEach((key, index) => {
    let newKey = `artifact_${index + 1}`;
    newObj[newKey] = def[key];
});
def= newObj;

//console.log(defaux);
let artefactaux=['artifact_1','artifact_2','artifact_3'];


//let position2 = localStorageSeleccionados("P2", 0, 31, 4);
let nuevoRdef = filtrarContents(rDef, position2);
nuevoRdef = filtrarRdef(nuevoRdef, position2);
rDef = nuevoRdef;

// Obtener las claves, ordenarlas y luego renombrarlas
/*keys = Object.keys(rDef).sort((a, b) => {
    return parseInt(a.split('_')[1]) - parseInt(b.split('_')[1]);
});

newObj = {};
keys.forEach((key, index) => {
    console.log(key,index);
    let newKey;
    if(index===0)
    {
        newKey = `artifactHtml`;
    }
    else{
        newKey = `artifact_${index}`;
    }
    newObj[newKey] = rDef[key];
});
rDef= newObj;*/

let evaluacion = [];
let colorBorders = {};

//Funcion que inicializa los elementos del DOM con el template y el Fragmento
function initMain() {
    generation(def);
    generator(rDef);
    mainCartesian(defBoards, rDef);
    evaluacion = inicializarExamen(LOCAL_STORAGE_KEY);
    console.log(evaluacion);
    colorBorders = inicializarExamen(LOCAL_COLORS_KEY);
    console.log(colorBorders);
};

function ocultaButtons()
{
    let check = document.querySelectorAll('.check');
    let reset = document.querySelectorAll('.reset');
    let pointClose = document.querySelectorAll('.pointClose');
    let back = document.querySelectorAll('.back');

    for (let i = 0; i < check.length; i++) {
        check[i].style.display = 'none';
        reset[i].style.display = 'none';
        pointClose[i].style.display = 'none';
        back[i].style.display = 'none';
    }
}



//Funcion para iniciarlo cuando se cargue la pagina
window.onload = initMain();
let i = 0;
artefactaux.forEach((element) => {
    i++;
    let div = document.getElementById(artefactaux[0]);

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

document.addEventListener('DOMContentLoaded', function() {
    //const paginaExamen = document.getElementById('paginaExamen');
    //const notaprevia = document.getElementById('previous');
    //const notaafter = document.getElementById('after');
    // Recupera los datos almacenados en localStorage
    const Datos = JSON.parse(localStorage.getItem('Datos'));
    console.log(Datos);

    // Pinta los datos en el DOM
    document.getElementById('institucion').innerHTML = Datos.Instituto;
    document.getElementById('materia').innerHTML = Datos.Materia;
    document.getElementById('seccion').innerHTML = Datos.Seccion;
    /*document.getElementById('nombreEstudiante').innerHTML = Datos.Estudiante.Nombre;
    document.getElementById('cedulaEstudiante').innerHTML = Datos.Estudiante.Cedula;*/
    document.getElementById('capitulo').innerHTML = Datos.Capitulo;
    document.getElementById('codExam').innerHTML = Datos.CodExam;

    // Verifica y compara fechas
    //let fechaHoraInicio = Datos.fechaHoraInicio;
    //let fechaHoraCierre = Datos.fechaHoraCierre;

    /*if (fechaHoraInicio && fechaHoraCierre) {
        const fechaHoraInicioDate = new Date(fechaHoraInicio);
        const fechaHoraCierreDate = new Date(fechaHoraCierre);
        const currentDate = new Date();
        
        if (fechaHoraInicioDate > currentDate) {
            console.log("La evaluación aún no ha comenzado.");
            paginaExamen.style.display = 'none';
            notaprevia.style.display = 'block';
        } else if ((fechaHoraInicioDate <= currentDate) && (currentDate <= fechaHoraCierreDate)) {
            console.log("La evaluación ya ha comenzado o debería haber comenzado.");
            fechaInicioEst = localStorage.getItem('fechaInicioEst');
            PintaBordes(colorBorders);
            if(fechaInicioEst === null)
            {
                fechaInicioEst = currentDate;
                localStorage.setItem('fechaInicioEst',fechaInicioEst);
                
            }
            
            paginaExamen.style.display = 'block';
        } else {
            console.log("La evaluación ya ha finalizado o debería haber finalizado.");
            paginaExamen.style.display = 'none';
            notaafter.style.display = 'block';
        }
    } else {
        console.log("No hay una fecha de inicio almacenada.");
    }*/
});

// Selecciona todos los elementos div con la clase 'boardfault'
const divs = document.querySelectorAll('.borderDefault');

// Itera sobre cada div y agrega el texto "Pregunta" después de cada uno
i = 0;
//Itera a partir del cuarto div 
for (let i = 0; i < divs.length; i++) {
    //Itera a partir del cuarto div con la clase 'boardfault' para agregar el texto "Pregunta"  
    const divPregunta = document.createElement('div');
    divPregunta.style.display = 'flex';
    //divPregunta.style.alignItems = 'center';
    const spanPregunta = document.createElement('span');
    spanPregunta.style.float = 'left';
    const spanPuntaje = document.createElement('span');
    spanPuntaje.style.float = 'right';
    spanPregunta.textContent =  "P"+(i+4).toString(); 
    let puntaje = (i===1 || i===3) ? '4 pts' : '3 pts'; 
    spanPuntaje.textContent = puntaje;
    //spanPuntaje.style.marginLeft = '10px';
    //spanPuntaje.style.marginRight = '10px';
    spanPregunta.classList.add('question-header2');
    spanPuntaje.classList.add("oval-container");  
    divPregunta.appendChild(spanPregunta);
    divPregunta.appendChild(spanPuntaje);
    divs[i].insertBefore(divPregunta, divs[i].firstChild); 
};

//crear un arreglo que contenga las propiedades del objeto rDef a partir de la segunda
let propiedadesRdef = Object.keys(rDef).slice(1);

//let evaluacion;
//let validar = document.querySelectorAll('.check');
//evaluacion = valida(validar,evaluacion,def,artefactaux,colorBorders);

//let resets = document.querySelectorAll('.reset');
//evaluacion = cleanArt(resets,evaluacion,colorBorders);

// Ejecutar la función y actualizar el resultado
//calcularResultadoTotal(evaluacion);

// Mostrar el arreglo actualizado
//console.log(evaluacion);


ocultaButtons();



document.getElementById('pdf').addEventListener('click', function () {
    // Selecciona el elemento que deseas convertir a PDF
    const elementoParaConvertir = document.body;  // Aquí puedes especificar un contenedor en particular

    // Configuración del PDF
    const opciones = {
        margin: 0,
        filename: 'mi-pagina.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, logging: true, dpi: 192, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    };

    // Generar el PDF
    html2pdf().from(elementoParaConvertir).set(opciones).save();
});
