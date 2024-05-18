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
            screen: { defaultText: [{ textValue: 'n', disabled: true }, { textValue: 'e⁽n⁾', disabled: true }] },
            key: { defaultText: [{ textValue: 'e⁽⁾', disabled: true }] }
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
                                            condition: ["exponentialE^{left(placeholder{}right)}","exponentialE^{left(right)}"],
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
                                            condition: {
                                                value:"exponentialE^{x}",

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
                                                value:"exponentialE^{x}",

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
                                                value:"exponentialE^{x}",


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
                    layout: "vertical",
                    nodes:
                        [


                           
                            {
                                //tipo de pregunta
                                type: "radio",
                                //label,Answer,Validation
                                data: {
                                    label: "¿Puedes marcar el punto de la vertical de 3 en el plano de la figura?",
                                    condition: 1,
                                    optionList:
                                        [

                                            "Sí",
                                            "No",

                                        ],
                                    questionType: "basic"

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
        //  config: "procedural",
        //  title: "Hola Mundo",
        keyBoardProfile: ["numeric", "functions"], quiz: {
            generalLayout: "",
            formsQuestions: [
     


                {
                    layout: "vertical",
                    nodes:
                        [


                           
                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: `<math display="block" class="tml-display" style="display:block math;">
                                    <mrow>
                                    
                                      <msup>
                                        <mi>e</mi>
                                        <mn>1</mn>
                                      </msup>
                                      <mo>=</mo>
                                      <mi>e</mi>
                                      <mo>=</mo>
                                    </mrow>
                                  </math>`,
                                    condition: "2.718282",
                                    questionType: "expression"
                                }



                            },

                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: `<math display="block" class="tml-display" style="display:block math;">
                                    <mrow>
                                      <msup>
                                        <mi>e</mi>
                                        <mn>2</mn>
                                      </msup>
                                      <mo>=</mo>
                                    </mrow>
                                  </math>`,
                                    condition: "7.389056",
                                    questionType: "expression"
                                }



                            },
                            {
                                type: "mathfield",
                                data: {
                                    label: `<math display="block" class="tml-display" style="display:block math;">
                                    <mrow>
                                      <msup>
                                        <mi>e</mi>
                                        <mo>−1</mo>
                                      </msup>
                                      <mn></mn>
                                      <mo>=</mo>
                                    </mrow>
                                  </math>`,
                                    condition: "0.367879",
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
        //  config: "procedural",
        //  title: "Hola Mundo",
        keyBoardProfile: ["numeric", "functions"], quiz: {
            generalLayout: "",
            formsQuestions: [
     


                {
                    layout: "vertical",
                    nodes:
                        [


                           
                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: `<math display="block" class="tml-display" style="display:block math;">
                                    <mrow>
                                      <msup>
                                        <mi>e</mi>
                                        <mo>−2</mo>
                                      </msup>
                                      <mn></mn>
                                      <mo>=</mo>
                                    </mrow>
                                  </math>`,
                                    condition: "0.135335",
                                    questionType: "expression"
                                }



                            },

                            {
                                //tipo de pregunta
                                type: "mathfield",
                                //label,Answer,Validation
                                data: {
                                    label: `<math display="block" class="tml-display" style="display:block math;">
                                    <mfrac>
                                    <mi>1</mi>
                                        <mrow>
                                        <mi>(</mi>
                                            <msup>
                                                <mi>e</mi>
                                                <mn>1</mn>
                                            </msup>
                                        <mi>)</mi>
                                        </mrow>
                                </mfrac>
                            </math>`,
                                    condition: "0.367879",
                                    questionType: "expression"
                                }



                            },
                            {
                                type: "mathfield",
                                data: {
                                    label: `<math display="block" class="tml-display" style="display:block math;">
                                        <mfrac>
                                        <mi>1</mi>
                                            <mrow>
                                            <mi>(</mi>
                                                <msup>
                                                    <mi>e</mi>
                                                    <mn>2</mn>
                                                </msup>
                                            <mi>)</mi>
                                            </mrow>
                                    </mfrac>
                                </math>`,
                                    condition: "0.135335",
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
        //  config: "procedural",
        //  title: "Hola Mundo",
        keyBoardProfile: ["numeric", "functions"], quiz: {
            generalLayout: "",
            formsQuestions: [
     


                {
                    layout: "vertical",
                    nodes:
                        [


                           
                            {
                                //tipo de pregunta
                                type: "radio",
                                //label,Answer,Validation
                                data: {
                                    label: `¿Es siempre cierto que  <math >
                                    <mrow>
                                      <msup>
                                        <mi>e</mi>
                                        <mrow>
                                          <mo lspace="0em" rspace="0em">−</mo>
                                          <mi>x</mi>
                                        </mrow>
                                      </msup>
                                      <mo>=</mo>
                                      <mfrac>
                                        <mn>1</mn>
                                        <msup>
                                          <mi>e</mi>
                                          <mi>x</mi>
                                        </msup>
                                      </mfrac>
                                    </mrow>
                                  </math> ?`,
                                    condition: 0,
                                    optionList:
                                        [

                                            "Sí",
                                            "No",

                                        ],
                                    questionType: "basic"

                                }



                            },



                        ]
                },






            ],

        }



    },


}


let defBoards = {
    board_1: {


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
            boundingbox: [-7, 5, 7, -5],

        },
        curves: [
            {
              dash: 2,
              points: [[3, 10], [3,-10]],
                strokeWidth:3,
                
              strokeColor:'#076382',
            }, 
        ],
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

                mathEcuation: "exp(x)", //Curva a crear utiliza las expresiones de mathjs
                expression: 'e^{\\left(x\\right)}',
                xCoords: [
                    [
                        -4,-3,-2,-1,1,2,3,4
                    ]

                ],

            }
        }
    },


}

const quizGen = new QuizGenerator(def2)
quizGen.generateObject()


generateArtifact(def)

new GenerateArtifactsEngineAlphabet(def3, defBoards)