const defBoards = {
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
      boundingbox: [-8, 4, 8, -4],

    },

  },
}

const defAlphabet =
{

  artifact_2: {
    buttonsActive: {
      curve: true
    },
    conditions: {
      alphabetDiagram: {

        mathEcuation: "1/x", //Curva a crear utiliza las expresiones de mathjs
        expression: '\\frac{1}{\\left(\\right)}',
        xCoords: [
          [
            -4, -1, -0.333, 0, 0.333, 1, 4

          ],

        ],

      }
    }
  },


}
const defQuiz = {
  artifact_1: {
    quizType: "table",
    rendering: "rendering_1",
    // config: "procedural",
    // title: "Hola",
    keyBoardProfile: ["numeric", "functions",],
    quiz: {

      cells:
        [
          [// row
            {//cell
              nodes:
                [
                  {
                    type: "text",
                    data: "Tecla",
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
                      condition: "frac{1}{left(right)}",
                      questionType: "basic"
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
                    data: "Notación funcional",
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
                        value: ['frac{1}{x}', 'frac{1}{left(xright)}']
                      },
                      questionType: "basic"
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
                    data: "Ecuación en dos variables",
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
                      condition: {
                        value: ['frac{1}{x}', 'frac{1}{left(xright)}'],
                        // value2:1,
                        // value3:1

                      },
                      //questionType: "basic"
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
                        value: ['frac{1}{x}', 'frac{1}{left(xright)}']
                      },
                      questionType: "basic"
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
    rendering: "rendering_2",
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
                  label: "Dominio:",
                  condition: ['left(-infty,0right)cupleft(0,inftyright)', 'left(-infty,0right)cupleft(0,+inftyright)',],

                  questionType: "expression"
                }
              },
              {
                //tipo de pregunta
                type: "mathfield",
                //label,Answer,Validation
                data: {
                  label: "Rango:",
                  condition: ['left(-infty,0right)cupleft(0,inftyright)', 'left(-infty,0right)cupleft(0,+inftyright)'],
                  questionType: 'expression'
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
                  label: "Cortes en el eje X:",
                  condition: ["nexists"],
                  questionType: "expression"
                }



              },
              {
                //tipo de pregunta
                type: "mathfield",
                //label,Answer,Validation
                data: {
                  label: "Cortes en el eje Y:",
                  condition: ["nexists"],
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
                  label: "Máximo absoluto:",
                  condition: ['nexists'],

                  questionType: "expression"
                }
              },
              {
                //tipo de pregunta
                type: "mathfield",
                //label,Answer,Validation
                data: {
                  label: "Alcanzado en:",
                  condition: ["nexists"],
                  questionType: 'expression'
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
                  label: "Mínimo absoluto:",
                  condition: ["nexists"],
                  questionType: "expression"
                }



              },
              {
                //tipo de pregunta
                type: "mathfield",
                //label,Answer,Validation
                data: {
                  label: "Alcanzado en:",
                  condition: ["nexists"],
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
    rendering: "rendering_4",
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
    rendering: "rendering_5",
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
                  label: "Zonas de crecimiento:",
                  condition: ['nexists'],

                  questionType: "expression"
                }
              },
              {
                //tipo de pregunta
                type: "mathfield",
                //label,Answer,Validation
                data: {
                  label: "Zonas de decrecimiento:",
                  condition: ['left(-infty,0right)cupleft(0,inftyright)', 'left(-infty,0right)cupleft(0,+inftyright)', 'left(-infty,0right);left(0,inftyright)', 'left(-infty,0right);left(0,+inftyright)'],
                  questionType: 'expression'
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
                  label: "Partes positivas:",
                  condition: ["left(0,inftyright)", "left(0,+inftyright)"],
                  questionType: "expression"
                }



              },
              {
                //tipo de pregunta
                type: "mathfield",
                //label,Answer,Validation
                data: {
                  label: "Partes negativas:",
                  condition: ["left(-infty,0right)"],
                  questionType: "expression"
                }



              },



            ]
        },

      ],
    }
  },
}
const def = {

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
      screen: { defaultText: [{ textValue: 'n', disabled: true }, { textValue: '\\frac{1}{n}', disabled: true }] },
      key: { defaultText: [{ textValue: '\\frac{1}{\\left(\\right)}' }], disabled: true }
    },
    conditions: {
      screen: [[], [], []],
      //    key: []
    }
  },
}

const quizGen = new QuizGenerator(defQuiz)
quizGen.generateObject()

new GenerateArtifactsEngineAlphabet(defAlphabet, defBoards)
generateArtifact(def)