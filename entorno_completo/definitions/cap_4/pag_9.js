let def = {
    example_artifact_1: {

        variableX: '7',
        buttonsActive: false,
        characteristicsArtifact: {
            typeForm: 'artifactGrid',
            width: '250px',
            height: 'auto',
            arrow: {
                count: 1,
                direction: 'down'
            },
            typeDiv: [
                {
                    rounded: {
                        count: 2,
                        border: '1px solid black',
                        formClas: 'rounded',
                        inputEnable: true,
                        size: {
                            width: '150px',
                            height: '50px'
                        }
                    }
                },
                {
                    square: {
                        count: 1,
                        border: '1px solid black',
                        formClas: 'square',
                        inputEnable: true,
                        size: {
                            width: '100px',
                            height: '50px'
                        }
                    }
                }
            ]

        },
        defaultinput: {
            screen: { defaultText: [{ textValue: 'n', disabled: true }, { textValue: 'tan(n)', disabled: true }] },
            key: { defaultText: [{ textValue: 'tan()', disabled: true }] }
        },
        conditions: {
            screen: [[], [], []],
            //    key: []
        }
    },
}

let def2 =
{
    artifact_1: {
        quizType: "table",
        rendering: "example_rendering",
        // config: "procedural",
        // title: "Hola",
        keyBoardProfile: ["numeric", "functions"], quiz: {

            cells:
                [
                    [// row
                        {//cell
                            nodes: 
                                [
                                    {
                                        //tipo de pregunta
                                        type: "text",
                                        //label,Answer,Validation
                                        data: "Tecla",
                                        formato: {

                                        }
                                    }



                                ]
                        },

                        {
                            nodes:
                                [
                                    {
                                        //tipo de pregunta
                                        type: "mathfield",
                                        //label,Answer,Validation
                                        data: {
                                            label: "",
                                            condition: ["tanleft(placeholder{}right)","tanleft(right)"],
                                            questionType: "expression"
                                        }
                                    },

                                ]
                        },

                    ],

                    [// row
                        {//cell
                            nodes:
                                [
                                    {
                                        //tipo de pregunta
                                        type: "text",
                                        //label,Answer,Validation
                                        data: "Notacion funcional",
                                        formato: {

                                        }
                                    }



                                ]
                        },

                        {
                            nodes:
                                [
                                    {
                                        //tipo de pregunta
                                        type: "mathfield",
                                        //label,Answer,Validation
                                        data: {
                                            placeholder: `f\\left(x\\right)=\\placeholder[value]{}`,
                                            label: "Máximo absoluto",
                                            condition: {
                                                value: "tanleft(xright)",

                                            },
                                        }



                                    },



                                ]
                        },

                    ],



                    [// row
                        {//cell
                            nodes:
                                [
                                    {
                                        //tipo de pregunta
                                        type: "text",
                                        //label,Answer,Validation
                                        data: "Ecuacion en dos variables",
                                        formato: {

                                        }
                                    }



                                ]
                        },

                        {
                            nodes:
                                [
                                    {
                                        //tipo de pregunta
                                        type: "mathfield",
                                        //label,Answer,Validation
                                        data: {
                                            placeholder: `y=\\placeholder[value]{}`,
                                            label: "Máximo absoluto",
                                            condition: {
                                                value: "tanleft(xright)",

                                            },
                                        }



                                    },



                                ]
                        },

                    ],



                    [// row
                        {//cell
                            nodes:
                                [
                                    {
                                        //tipo de pregunta
                                        type: "text",
                                        //label,Answer,Validation
                                        data: "Pares ordenados",
                                        formato: {

                                        }
                                    }



                                ]
                        },

                        {
                            nodes:
                                [
                                    {
                                        //tipo de pregunta
                                        type: "mathfield",
                                        //label,Answer,Validation
                                        data: {
                                            placeholder: `\\left(x,\\placeholder[value]{}\\right)`,
                                            label: "Máximo absoluto",
                                            condition: {
                                                value: "tanleft(xright)",

                                            },
                                        }



                                    },




                                ]
                        },

                    ],

                ],

        }

    },
    artifact_3: {
        quizType: "standard",
        rendering: "rendering_1",
        //  config: "procedural",
        //  title: "Hola Mundo",
        keyBoardProfile: ["numeric", "functions"], quiz: {
            generalLayout: "",
            formsQuestions: [
                {
                    layout: "horizontal",
                    nodes:
                        [




                            {
                                //tipo de pregunta
                                type: "mathfield",
                                placeholder: `\\left(-\\infty,\\infty\\right)-\\left\\lbrace\\ldots\\placeholder[value1]{},\\placeholder[value2]{}\\ldots\\right\\rbrace`,

                                //label,Answer,Validation
                                data: {
                                    label: "Dominio",
                                    condition: {
value1:["frac{-pi}{2}","-frac{pi}{2}"],
value2:"frac{pi}{2}"
                                    },
                                }



                            },
                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: "Rango",
                                    condition: [ "left(-infty,inftyright)"],
                                    questionType: "expression"
                                }



                            },





                        ]
                },


                {
                    layout: "horizontal",
                    nodes:
                        [


                            /* {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: "Cortes con el eje x",
                                    condition: "left(-pi,0right),left(0,0right),left(pi,0right)",
                                    questionType: "expression"
                                }



                            },
 */
                            {
                                //tipo de pregunta
                                type: "mathfield",
                                placeholder: `\\ldots\\left(\\placeholder[value1]{},\\placeholder[value2]{}\\right)\\cup\\left(\\placeholder[value3]{},\\placeholder[value4]{}\\right)\\cup\\left(\\placeholder[value5]{},\\placeholder[value6]{}\\right)\\ldots`,

                                data: {
                                    label: "Cortes con el eje x",
                                    condition:{
value1:"-pi",
value2:"0",
value3:"0",
value4:"0",
value5:"pi",
value6:"0"

                                    } ,

                                    questionType: "expression"
                                }



                            },
                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: "Cortes con el eje y",
                                    condition: "left(0,0right)",
                                    questionType: "expression"
                                }

                            },



                        ]
                },






            ],

        }



    },

    artifact_4: {
        quizType: "standard",
        rendering: "rendering_2",
        // config: "procedural",
        //  title: "Hola Mundo",
        keyBoardProfile: ["numeric", "functions"], quiz: {
            generalLayout: "",
            formsQuestions: [
                {
                    layout: "horizontal",
                    nodes:
                        [




                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: "Máximo absoluto",
                                    condition: "nexists",
                                    questionType: "expression"
                                }



                            },
                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: "Alcanzado en",
                                    condition: "nexists",
                                    questionType: "expression"
                                }



                            },





                        ]
                },


                {
                    layout: "horizontal",
                    nodes:
                        [


                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: "Mínimo absoluto",
                                    condition: "nexists",
                                    questionType: "expression"
                                }



                            },
                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: "Alcanzado en",
                                    condition: "nexists",
                                    questionType: "expression"
                                }



                            },



                        ]
                },

            ],

        }



    },
    artifact_5: {
        quizType: "standard",
        rendering: "rendering_3",
        keyBoardProfile: ["numeric", "functions"],
        quiz: {
          generalLayout: "",
          formsQuestions: [
            {
              layout: "horizontal",
              nodes:
                [
                  {
                    //tipo de pregunta
                    type: "mathfield",
                    //label,Answer,Validation
                    data: {
                      label: "Puntos máximos No absolutos:",
                      condition: ['nexists'],
    
                      questionType: "expression"
                    }
                  },
                ]
            },
            {
              layout: "horizontal",
              nodes:
                [
                  {
                    //tipo de pregunta
                    type: "mathfield",
                    //label,Answer,Validation
                    data: {
                      label: "Puntos mínimos No absolutos:",
                      condition: ["nexists"],
                      questionType: "expression"
                    }
                  },
                ]
            },
    
          ],
        }
      },

    artifact_6: {
        quizType: "standard",
        rendering: "rendering_4",

        keyBoardProfile: ["numeric", "functions"], quiz: {
            generalLayout: "",
            formsQuestions: [
                {
                    layout: "horizontal",
                    nodes:
                        [
                            {
                                type: "mathfield",
                                placeholder: `\\left(-\\infty,\\infty\\right)-\\left\\lbrace\\ldots\\placeholder[value1]{},\\placeholder[value2]{}\\ldots\\right\\rbrace`,

                                data: {
                                    label: "Zonas de crecimiento",
                                    condition: {
value1:["frac{-pi}{2}","-frac{pi}{2}"],
value2:"frac{pi}{2}"
                                    },
                                }



                            },

                    
                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: "Zonas de decrecimiento",
                                    condition: "nexists",
                                    questionType: "expression"
                                }



                            },





                        ]
                },


                {
                    layout: "horizontal",
                    nodes:
                        [


                            {
                                //tipo de pregunta
                                type: "mathfield",
                                placeholder: `\\ldots\\left(\\placeholder[value1]{},\\placeholder[value2]{}\\right)\\cup\\left(\\placeholder[value3]{},\\placeholder[value4]{}\\right)\\ldots`,

                                //label,Answer,Validation
                                data: {
                                    label: "Partes positivas",
                                    condition: {
                                        value1:"-pi",
                                        value2:["frac{-pi}{2}","-frac{pi}{2}"],
                                        value3:"0",
                                        value4:"frac{pi}{2}",
                                    },
                                    questionType: "expression"
                                }



                            },
                            {
                                //tipo de pregunta
                                type: "mathfield",
                                placeholder: `\\ldots\\left(\\placeholder[value1]{},\\placeholder[value2]{}\\right)\\cup\\left(\\placeholder[value3]{},\\placeholder[value4]{}\\right)\\ldots`,

                                data: {
                                    label: "Partes negativas",
                                    condition:{
value1:["frac{-pi}{2}", "-frac{pi}{2}"],
value2:"0",
value3:"frac{pi}{2}",
value4:"pi"
                                    } ,

                                    questionType: "expression"
                                }



                            },



                        ]
                },





            ],

        }



    }
}
let defBoards = {
    board_1: {

        inputs:[
            {x:-1.8,y:-0.8,value:'\\frac{-\\pi}{2}', style:{fontSize:16, mathClass: "colorInputAlphabet"},valid:false },

            {x:1.8,y:-0.8,value:'\\frac{\\pi}{2}', style:{fontSize:16, mathClass: "colorInputAlphabet"},valid:false }
        ]
            ,
        curves: [
            {
              dash: 2,
              points: [[1.57, 10], [1.57,-10]],
              strokeWidth:3,
                
              strokeColor:'#076382',
            }, 
        
            {
                dash: 2,
                points: [[-1.57, 10], [-1.57,-10]],
                strokeWidth:3,
                
                strokeColor:'#076382',
              }, 
        ],

        style: {
            axis: [false, true, true],
            valueAxis: {
                yd: [[0, 0],
                [0, 1],],
                yp: [-3, -2, -1, 1, 2, 3],
                yv: ['-3', '-2', '-1', '1', '2', '3'],
                xd: [[0, 0],
                [1, 0],],
            },
            grid: true,
            boundingbox: [-4, 8, 4, -8],

        },

    },
}

const def3 =
{

    artifact_2: {
        buttonsActive: {
            curve: true
        },
        conditions: {
            alphabetDiagram: {

                mathEcuation: "tan(x)", //Curva a crear utiliza las expresiones de mathjs
                expression: '\\tan\\left(\\right)',
                xCoords: [
                    [
                    { xCoord: -3.14, axisText: "-\\pi"  },
                //     { xCoord: -1.78,// axisText: "-\\frac{\\pi}{2}-\\frac{\\pi}{16}"
                // },
                    // { xCoord: -1.57, axisText: "\\frac{-\\pi}{2}" },
                    // { xCoord: -1.37, axisText: "-\\frac{\\pi}{2}+\\frac{\\pi}{16}"}

                    ],
                    [
                        { xCoord: -0.392, axisText: "-\\frac{\\pi}{8}" },
                        // { xCoord: 0.392, axisText: "\\frac{\\pi}{8}" },
                        { xCoord: 0.785, axisText: "\\frac{\\pi}{4}" },
                        // { xCoord: 1.570, axisText: "\\frac{\\pi}{2}" },

                    ],
                    [
                        { xCoord: 1.767, //axisText: "\\frac{\\pi}{2}+\\frac{\\pi}{16}" 
                    },
                        { xCoord: 3.141, axisText: "\\pi" },

                    ],

                ],

            }
        }
    },


}

const quizGen = new QuizGenerator(def2)
quizGen.generateObject()


generateArtifact(def)

new GenerateArtifactsEngineAlphabet(def3, defBoards)