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
    quizType: "standard",
    rendering: "rendering_5",
    //  config: "procedural",
  //  title: "Hola Mundo",
  keyBoardProfile: ["numeric","functions"],        quiz: {
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
                                label: "Dominio",
                                condition: ["left(-infty,inftyright)"],
                                questionType: "expression"
                            }



                        },
                        {
                            //tipo de pregunta
                            type: "mathfield",
                            //label,Answer,Validation
                            data: {
                                label: "Rango",
                                condition: "left(0,inftyright)",
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
                                label: "Cortes con el eje x",
                                condition: "nexists",
                                questionType: "expression"
                            }



                        },
                        {
                            //tipo de pregunta
                            type: "mathfield",
                            //label,Answer,Validation
                            data: {
                                label: "Cortes con el eje y",
                                condition: "left(0,1right)",
                                questionType: "expression"
                            }

                        },



                    ]
            },


       

            

        ],

    }



},

artifact_2: {
quizType: "standard",
rendering: "rendering_6",
// config: "procedural",
//  title: "Hola Mundo",
keyBoardProfile: ["numeric","functions"],  quiz: {
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

artifact_3: {
quizType: "standard",
rendering: "rendering_7",

keyBoardProfile: ["numeric","functions"],  quiz: {
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
                            label: "Zonas de crecimiento",
                            condition: ["left(-infty,inftyright)"],
                            questionType: "expression"
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
                        //label,Answer,Validation
                        data: {
                            label: "Partes positivas",
                            condition:  ["left(-infty,inftyright)"],
                            questionType: "expression"
                        }



                    },
                    {
                        //tipo de pregunta
                        type: "mathfield",
                        //label,Answer,Validation
                        data: {
                            label: "Partes negativas",
                            condition: "nexists",
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
        boundingbox: [-8, 4, 8, -1],
  
      },

      expressionCurve: "exp(x)"
  
    },
  }
  
const def3 =
{

    artifact_example_2: {
        parentContainer: '.example_2',
        typeLayout: '',
        classes: '',
        typeLayout: '',
        style: 'max-width: 600px;',
        addHtml: '',
        containers: [
          {
            id: 'board1',
            boardName: 'board_1',
            boardObject: defBoards.board_1,
            attributes: [['board', 'board_0'], []],
            classes: '',
            style: 'width:100%;height:300px; border-radius:10px;border:2px solid #217e9d ; ',
            typeElement: '',
          },
    
        ]
      },


}

const quizGen = new QuizGenerator(def2)
quizGen.generateObject()


// generateArtifact(def)

createLayouts(def3)
