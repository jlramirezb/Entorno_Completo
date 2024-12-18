let def = {
    //Inicio Artefactos Annelys: 1 --  9
    artifact_1: {
        typeArtifact:'Evaluation',
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
        typeArtifact:'Evaluation',
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
    artifact_3: {
        typeArtifact:'Evaluation',
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
    artifact_4: {
        typeArtifact:'Evaluation',
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
    artifact_5: {
        typeArtifact:'Evaluation',
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
    artifact_6: {
        typeArtifact:'Evaluation',
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
    artifact_7: {
        typeArtifact:'Evaluation',
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
    artifact_8: {
        typeArtifact:'Evaluation',
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
    //Fin tipo 1
    artifact_9: {
        typeArtifact:'Evaluation',
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
    artifact_10: {
        typeArtifact:'Evaluation',
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
    artifact_11: {
        typeArtifact:'Evaluation',
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
    artifact_12: {
        typeArtifact:'Evaluation',
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
    artifact_13: {
        typeArtifact:'Evaluation',
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
    artifact_14: {
        typeArtifact:'Evaluation',
        interval: '(−3,∞)',
        conditions: {
            valRepre: ['−3<x<∞', '∞>x>−3', '−3<x', 'x>−3'],
            board: [
                {
                    pares: [['−3', '+∞']],
                    points: [['−3', true]]
                },
            ],
        },
    },
    artifact_15: {
        typeArtifact:'Evaluation',
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
    artifact_16: {
        typeArtifact:'Evaluation',
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
    //Fin tipo 2
    artifact_17: {
        typeArtifact:'Evaluation',        
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
    artifact_18: {
        typeArtifact:'Evaluation',
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
    artifact_19: {
        typeArtifact:'Evaluation',
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
    artifact_20: {
        typeArtifact:'Evaluation',
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
    artifact_21: {
        typeArtifact:'Evaluation',
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
    artifact_22: {
        typeArtifact:'Evaluation',
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
    artifact_23: {
        typeArtifact:'Evaluation',
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
    artifact_24: {
        typeArtifact:'Evaluation',
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
    //Fin tipo 3
}

//cordenadas por cada plano
const c = {
    //Puntos a utilizar de Annely: 1 -- 12
    1: { x: 1, y: 2.5 },
    2: { x: -1, y: -1.5 },  
    3: { x: 3, y: 2 },
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
            boundingbox: [-6, 3, 6, -3],
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
            boundingbox: [-8, 4, 8, -4],
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
            boundingbox: [-4, 6.5, 6.5, -4],
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
            boundingbox: [-8, 7, 8, -3],
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
        typeArtifact:'Evaluation',
        defBoard: 'board_0',
        textBottom: '(x, -y),(-x, y),(y, x)',        
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
        typeArtifact:'Evaluation',
        defBoard: 'board_4',
        textBottom: '(-x,-y),(x,-y),(y,x)',
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
    artifact_3: {
        typeArtifact:'Evaluation',
        defBoard: 'board_8',
        textBottom: '(-x,y),(x,-y),(y,x)',
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
    artifact_4: {
        typeArtifact:'Evaluation',
        defBoard: 'board_12',
        textBottom: '(x, -y),(-x, y),(y, x)',    
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
    artifact_5: {
        typeArtifact:'Evaluation',
        defBoard: 'board_16',
        textBottom: '(-x, -y),(-x, y),(2y, x)',
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
    artifact_6: {
        typeArtifact:'Evaluation',
        defBoard: 'board_20',
        textBottom: '(x, -y),(-x, y),(y, x)',    
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
    artifact_7: {
        typeArtifact:'Evaluation',
        // textTop: "Este es el de arriba",
        defBoard: 'board_24',
        textBottom: '(x, -y),(-x, y),(y, x)',
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
    artifact_8: {
        typeArtifact:'Evaluation',
      // textTop: "Este es el de arriba",
        defBoard: 'board_28',
        textBottom: '(-x, y),(x, -y),(y, x)',  
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
    //Fin tipo 1
    artifact_9: {
        typeArtifact:'Evaluation',
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
    artifact_10: {
        typeArtifact:'Evaluation',
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
    artifact_11: {
        typeArtifact:'Evaluation',
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
    artifact_12: {
        typeArtifact:'Evaluation',
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
        typeArtifact:'Evaluation',
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
    artifact_14: {
        typeArtifact:'Evaluation',
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
    artifact_15: {
        typeArtifact:'Evaluation',
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
    artifact_16: {
        typeArtifact:'Evaluation',
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
    //Fin tipo 2
    artifact_17: {
        typeArtifact:'Evaluation',
        defBoard: 'board_2',
        textBottom: '(x-1,y),(x,y+2),(x,y-2)',
        conditions: {
            texterror: {
                time: 6,
            },
            points: [
                { p: [c[3].x-1 , c[3].y], text: '(x-1,y)' },
                { p: [c[3].x , c[3].y+2], text: '(x,y+2)' },
                { p: [c[3].x , c[3].y-2], text: '(x,y-2)' }
            ],
        },
        defaultInputs: [
            {
                position: [c[3].x, c[3].y],
                value: '(x,y)',
            }
        ],
    },
    artifact_18: {
        typeArtifact:'Evaluation',
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
    artifact_19: {
        typeArtifact:'Evaluation',
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
    artifact_20: {
        typeArtifact:'Evaluation',
        defBoard: 'board_14',
        textBottom: '(x-2.5, y),(x+2.5, y),(x, y-1)',
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
    artifact_21: {
        typeArtifact:'Evaluation',
        defBoard: 'board_18',
        textBottom: '(x-1, y),(x+1, y),(x, y-2)',    
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
    artifact_22: {
        typeArtifact:'Evaluation',
        defBoard: 'board_22',
        textBottom: '(x-2, y),(x+2, y),(x, y-2.5)',    
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
    artifact_23: {
        typeArtifact:'Evaluation',
        defBoard: 'board_26',
        textBottom: '(x-2, y),(x+2, y),(x, y-0.75)',
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
    artifact_24: {
        typeArtifact:'Evaluation',
        defBoard: 'board_30',
        textBottom: '(x-2, y),(x, y+1),(x, y-1)',
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
    //Fin tipo 3
    artifact_25: {
        typeArtifact:'Evaluation',
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
    artifact_26: {
        typeArtifact:'Evaluation',
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
    artifact_27: {
        typeArtifact:'Evaluation',
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
    artifact_28: {
        typeArtifact:'Evaluation',
        defBoard: 'board_15',
        textBottom: '(2x, -y),(-x, y),(-2x, y),(x/2, y/2)',
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
    artifact_29: {
        typeArtifact:'Evaluation',
        defBoard: 'board_19',
        textBottom: '(-2x, y),(x, -2y),(-x, -y),(x/2, y/2)',    
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
    artifact_30: {
        typeArtifact:'Evaluation',
        defBoard: 'board_23',
        textBottom: '(3x, y),(x, 2y),(-3x, -y),(x/2, y/2)',
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
    artifact_31: {
        typeArtifact:'Evaluation',
        defBoard: 'board_27',
        textBottom: '(-x, -y),(x, 2y),(2x, y),(x/2, y/2)',
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
    artifact_32: {
        typeArtifact:'Evaluation',
        defBoard: 'board_31',
        textBottom: '(-2x, -y),(x, 3y),(2x, y),(x/2, y/2)',
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
    }
    //Fin tipo 4
}

/*let configData = {
    exams : {
        eval_1:[[1,9,17],[1,9,17,25]],
        eval_2:[[2,10,18],[2,10,18,26]],
        eval_3:[[3,11,19],[3,11,19,27]],
        eval_4:[[4,12,20],[4,12,20,28]],
        eval_5:[[5,13,21],[5,13,21,29]],
        eval_6:[[6,14,22],[6,14,22,30]],
        eval_7:[[7,15,23],[7,15,23,31]],
        eval_8:[[8,16,24],[8,16,24,32]],
        eval_9:[[5,9,21],[7,12,20,31]],
        eval_10:[[2,12,21],[6,13,24,27]],
        eval_11:[[5,16,19],[5,14,20,32]],
        eval_12:[[8,9,24],[6,13,17,29]],
        eval_13:[[1,12,24],[7,12,22,25]],
        eval_14:[[7,14,19],[4,10,24,30]],
        eval_15:[[4,16,18],[8,10,21,28]],
        eval_16:[[2,9,20],[5,11,23,32]],
        eval_17:[[4,15,24],[8,16,22,28]],
        eval_18:[[6,14,17],[5,12,19,29]],
        eval_19:[[7,11,20],[7,13,18,26]],
        eval_20:[[6,16,19],[1,10,18,29]]
    },
    Datos : {
        'idUser':'66faf9aceda8f36d30f920e5',
        'idExam':'66e1f3c8ab116faa26c493ca',
        'firstName':'estudiante',
        'secondName':'estudiante',
        'surname':'estudiante',
        'secondSurname':'estudiante',
        'gender':'Masculino',
        'email':'app.6@gmail.com',	
        'codExam': 'Modelo 2',
        'curso':'Fragata',
        'chapter':'Capítulo 0',
        'category':'Educación Superior',
        'liceo':'Unidad Educacional de Fragata',
        'universidad':'Universidad de Carabobo',
        'startDate': '01/01/2022 00:00:00', 
        'endDate':'01/01/2025 00:00:00',
        'result': null,        
        'userStartTime':null,
        'userEndTime':null
    }
}*/

userDatevalidation()

//ejecutaAccion();