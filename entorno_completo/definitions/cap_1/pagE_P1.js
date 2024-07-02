'use strict';

var def = 
{
  artfefact_1: 
  {
    datadefault: [
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
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
                //Primeras caracteristicas, Examen 1
                {
                  type: 0,
                  text: ['Dominio',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Rango', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
              [
              {
                //Validacion primeras caracteristicas
                type: 2,
                answers_values:["","(-3,∞)","R-{0,4}","(-∞,0)∪(0,4)∪(4,∞)","(-∞,∞)"],
                conditions: {
                  valueInputs:["(-∞,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-∞,4)","(-∞,∞)","(-∞,1.8)∪(3,∞)","R-{0,1.8,3}"],
                conditions: {
                  valueInputs: ['(-∞,∞)']
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [0,1,3]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              }],

              //Segundas caracteristicas, Examen 1
              [

                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],

              //Validacion segundas caracteristicas, Examen 1
              [
              {
                type: 2,       
                answers_values:["","(-∞,0)∪(1,3)∪[4,∞)","(-∞,0]∪[1,3]∪[4,∞)","(-3,0)∪(1,3)∪[4,∞)","(-3,0]∪[1,3]∪[4,∞)"],
                conditions: {
                  valueInputs: ["(-∞,0)∪(1,3)∪[4,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(0,1]∪[3,4)","[0,1]∪[3,4]","(0,1)∪(3,4)","[0,1)∪(3,4]"],
                conditions: {
                  valueInputs: ["(0,1)∪(3,4)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(0,2]∪(4,5)","[0,2]∪[4,5]","(0,2]∪[4,5]","(0,2)∪(4,5)"],
                conditions: {
                  valueInputs: ["(0,2)∪(4,5)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-3,0]∪(2,4)∪[5,∞)","(-∞,0]∪(2,4)∪[5,∞)","(-∞,0)∪(2,4)∪(5,∞)","(-3,0)∪(2,4)∪(5,∞)"],
                conditions: {
                  valueInputs: ["(-∞,0)∪(2,4)∪(5,∞)"]
                }
              }],
            ]
          }
        }
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
              [{
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
              }],
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
              [{
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
                }
              }]

            ]
          }
        }
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
                //Primeras caracteristicas, Examen 2
                {
                  type: 0,
                  text: ['Dominio',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Rango', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
              [
              {
                //Validacion primeras caracteristicas, Examen 2
                type: 2,
                answers_values:["","(-∞,-1)∪(0,3.5)∪(3.5,∞)","(-∞,∞)","(-∞,-1]∪(0,∞)","(-∞,-1)∪(0,∞)"],
                conditions: {
                  valueInputs:["(-∞,-1]∪(0,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-∞,-0.5)∪(0,∞)","(-∞,0)∪(1,∞)","(-∞,-0.5)∪(0,3]","(-∞,-0.5)∪(1,∞)"],
                conditions: {
                  valueInputs: ['(-∞,-0.5)∪(0,∞)']
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
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }],

              //Segundas caracteristicas, Examen 2
              [

                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],

              //Validacion segundas caracteristicas, Examen 2
              [
              {
                type: 2,       
                answers_values:["","(-∞,-1)∪(3.5,∞)","","","(-∞,-1]∪[3.5,∞)"],
                conditions: {
                  valueInputs: ["(-∞,-1]∪[3.5,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(0,3.5]","(0,3.5)","(-1,3.5]","[-1,3.5)"],
                conditions: {
                  valueInputs: ["(0,3.5)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-∞,-2)∪(0,∞)","(-∞,-2]∪(0,∞)","(-∞,-2)∪(0,3.5)∪(3.5,∞)","(0,3.5)∪(3.5,∞)"],
                conditions: {
                  valueInputs: ["(-∞,-2)∪(0,3.5)∪(3.5,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","[-2,-1]","(-2,-1)","(-2,-1]","[-2,-1)"],
                conditions: {
                  valueInputs: ["(-2,-1)"]
                }
              }],
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
                //Terceras caracteristicas, Examen 2
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


              //Validacion terceras caracteristicas, Examen 2
              [{
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
                  valueInputs: [3]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-2]
                }
              }],
              [
                //Cuartas caracteristicas, Examen 2
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

              //Validacion cuartas caracteristicas Examen 2
              [{
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
                  valueInputs: [1,1.5]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-1,3.5]
                }
              }]

            ]
          }
        }
      },

      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo5',
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
                //Primeras caracteristicas, Examen 3
                {
                  type: 0,
                  text: ['Dominio',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Rango', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
              [
              {
                //Validacion primeras caracteristicas Examen 3
                type: 2,
                answers_values:["","R-{3}","R-{-2,3}","(-∞,-2)∪(-2,2)∪(3,∞)","(-∞,2)∪(3,∞)"],
                conditions: {
                  valueInputs:["(-∞,2)∪(3,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-∞,1.3)∪(1.3,2.3)","(-∞,-3)∪(-3,2.3)","(-∞,-3)∪(-3,1.3)∪(1.3,2.3)","(-∞,2.3)"],
                conditions: {
                  valueInputs: ['(-∞,2.3)']
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [0,3.8]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              }],

              //Segundas caracteristicas, Examen 3
              [

                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],

              //Validacion segundas caracteristicas, Examen 3
              [
              {
                type: 2,       
                answers_values:["","(-2,0)∪(3.8,∞)","[-2,0)∪(3.8,∞)","(-2,0)∪[3.8,∞)","[-2,0)∪[3.8,∞)"],
                conditions: {
                  valueInputs: ["[-2,0)∪(3.8,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-∞,-2)∪(0,2)∪(3,3.8)","(-∞,-2)∪(0,2)∪(3,∞)","(-∞,-2)∪[0,2)∪(3,3.8]","(-∞,-2)∪[0,2)∪(3,∞)"],
                conditions: {
                  valueInputs: ["(-∞,-2)∪(0,2)∪(3,3.8)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-∞,-2.5]∪(3,∞)","(-∞,-2.5)∪(3,∞)","(-∞,-2.5)∪(2,∞)","(-∞,-2.5]∪(2,∞)"],
                conditions: {
                  valueInputs: ["(-∞,-2.5)∪(3,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-2.5,-2)∪(-2,2)","(-2.5,-2)∪(-2,3)","(-2.5,3)","(-2.5,2)"],
                conditions: {
                  valueInputs: ["(-2.5,-2)∪(-2,2)"]
                }
              }],
            ]
          }
        }
      },

      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo6',
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
                //Terceras caracteristicas, Examen 3
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


              //Validacion terceras caracteristicas, Examen 3
              [{
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [2.3]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-2]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-2.5]
                }
              }],
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
              [{
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
              }]

            ]
          }
        }
      },
      
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo7',
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
                //Primeras caracteristicas, Examen 4
                {
                  type: 0,
                  text: ['Dominio',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Rango', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
              [
              {
                //Validacion primeras caracteristicas Examen 4
                type: 2,
                answers_values:["","(-∞,-2)∪(-2,1)∪(2,∞)","(-∞,-2)∪(-2,1)∪[2,∞)","(-∞,1)∪[2,∞)","(-∞,2)∪(2,∞)"],
                conditions: {
                  valueInputs:["(-∞,1)∪[2,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-3.3,∞)","(-∞,∞)","(-∞,-3)∪(-2,∞)","(-3.3,-3)∪(-2,∞)"],
                conditions: {
                  valueInputs: ['(-3.3,∞)']
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [0,2.5,3.5]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              }],

              //Segundas caracteristicas, Examen 4
              [

                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],

              //Validacion segundas caracteristicas, Examen 4
              [
              {
                type: 2,       
                answers_values:["","(0,2)∪(2.5,3.5)","(0,1)∪(2.5,3.5)","[0,1)∪[2.5,3.5]","[0,2)∪[2.5,3.5]"],
                conditions: {
                  valueInputs: ["(0,1)∪(2.5,3.5)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-2,0)∪(2,2.5)∪(3.5,∞)","[-2,0]∪[2,2.5]∪[3.5,∞)","(-∞,0]∪[2,2.5]∪[3.5,∞)","(-∞,0)∪(2,2.5)∪(3.5,∞)"],
                conditions: {
                  valueInputs: ["(-∞,0)∪(2,2.5)∪(3.5,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-2,1)∪(2,3)∪(4.7,∞)","(-∞,-2)∪(-2,1)∪(2,3)","(-∞,1)∪(2,3)∪(4.7,∞)","(-2,1)∪(2,3)"],
                conditions: {
                  valueInputs: ["(-2,1)∪(2,3)∪(4.7,∞)"]
                }
              }, 
              {
                type: 2,
                answers_values:["","(-∞,-2)∪[3,4.7]","(-∞,-2)∪(3,4.7)","[3,4.7]","(3,4.7)"],
                conditions: {
                  valueInputs: ["(3,4.7)"]
                }
              }],
            ]
          }
        }
      },

      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo8',
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
                //Terceras caracteristicas, Examen 4
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


              //Validacion terceras caracteristicas, Examen 4
              [{
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
                type: 2,
                answers_values:["","-3","-3,1","1","∄"],
                conditions: {
                  valueInputs: ["-3,1"]
                }
              },
              {
                type: 2,
                answers_values:["","∄","(-∞,-2),3","(-∞,-2)","3"],
                conditions: {
                  valueInputs: ["(-∞,-2),3"]
                }
              }],
              [
                //Cuartas caracteristicas, Examen 4
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

              //Validacion cuartas caracteristicas Examen 4
              [{
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-3.3]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [4.7]
                }
              }, 
              {
                type: 2,
                answers_values:["","-3.3,-2,-1","-2,-1","-3.3,-3,-2,-1","-3,-2,-1"],
                conditions: {
                  valueInputs: ["-3,-2,-1"]
                }
              }, 
              {
                type: 2,
                answers_values:["","","","(-∞,-2),2,-2",""],
                conditions: {
                  valueInputs: ["(-∞,-2),2,-2"]
                }
              }]

            ]
          }
        }
      },
    ]
  }
};

var defBoards = {
  
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
    [[[2,-2],[3,1],[4,-2],[4.8,-3.3],[5.1,-2.9]]]],
  },
};

defBoardDefault();
generator(def);