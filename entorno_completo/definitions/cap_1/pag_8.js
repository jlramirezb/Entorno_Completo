'use strict';

var def = 
{
  artefact_1: 
  {
    datadefault: 
    [
      //Primeras caracteristicas Board1
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: 
        {
          artifact_1: 
          {
            allinputs: [],
            header: [],
            dataInteraction: 
            {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: 
            [
              [//Primera fila
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
              //2da fila soluciones
              [
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['','[-3,3.5]','(-3,4)','(-3,3.5)','[-3,4)'],
                  conditions:{
                    valueInputs:['[-3,3.5]']
                  }
                },
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['','(-1,2)','[-0.5,1.5]','(0,2)','[-0.5,2)'],
                  conditions: {
                    valueInputs: ['[-0.5,1.5]']
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-2.5,2,3.25]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [1.5]
                  }
                }
              ],
              //3ra fila caracteristicas
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
              //4ta fila solucion
              [
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['', '(-2.5,2) U (3.25,3.5]','(-2.5,3.5)','(0,3.5]','∄'],
                  conditions: {
                    valueInputs: ['(0,1)']
                  }
                },
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['', '(-2.5,0)','[-3,-2.5) U (2,3.25)','∄'],
                  conditions: {
                    valueInputs: ['[-3,-2.5) U (2,3.25)']
                  }
                },
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['', '(-3,0)','(-3,0) U (2.5,3.5)','(0,4)','∄'],
                  conditions: {
                    valueInputs: ['(-3,0) U (2.5,3.5)']
                  }
                },
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['', '(-3,-1) U (0,3.5)','(0,2.5)','(-2.5,0) u (0.5,4)','∄'],
                  conditions: {
                    valueInputs: ['(0,2.5)']
                  }
                }
              ],
            ]
          }
        }
      },
      //Segundas caracterisdticas Board1
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: 
        {
          artifact_2: 
          {
            allinputs: [],
            header: [],
            dataInteraction: 
            {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells:
            [
              [
                {
                  type: 0,
                  text: ['Max.Abs', null],
                  conditions: 
                  {
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
              [
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [1.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [0]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [0.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],                  
                  conditions: {
                    valueInputs: [3.5]
                  }
                }
              ],             
              [
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
              [
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-0.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-3,2.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }
              ]
            ]
          }
        }
      },
      //Primeras caracteristicas Board2
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: 
        {
          artifact_3: 
          {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: 
            [
              [
                {
                  type: 0,
                  text: ['Dominio', null],
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
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['', '[-1.1,1]','[-1.5,1)','(-1.1,1)','(-1.5,1]'],
                  conditions: {
                    valueInputs: ['[-1.1,1]']
                  }
                },
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['', '[-1.1,2]','[-1.1,1.8]','[-1,2]','(-1,1.8)'],
                  conditions: {
                    valueInputs: ['[-1.1,1.8]']
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-0.8]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [1.5]
                  }
                }
              ],
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
              [
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['','(-1,0)','[-1.1,1]','(-0.8,1]','∄'],
                  conditions: {
                    valueInputs: ['(-0.8,1]']
                  }
                },
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['', '[-1.1,-0.8)','(-1.1,0)','(-1.1,-0.8]','∄'],
                  conditions: {
                    valueInputs: ['[-1.1,-0.8)']
                  }
                },
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['', '(0,1)','[-1.1,1]','(-1.1,1)','(0,1]','∄'],
                  conditions: {
                    valueInputs: ['(-1.1,1)']
                  }
                },
                {
                  type: 2,
                  // una pregunta. Varios inputs
                  answers_values: ['', '(-1.1,0)', '(-1.1,1)', '(0,1)','∄'],
                  conditions: {
                    valueInputs: ['∄']
                  }
                }
              ]
            ]
          }
        }
      },
      //Segundas caracteristicas Board2
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: 
        {
          artifact_4: 
          {
            allinputs: [],
            header: [],
            dataInteraction:
            {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells:
            [
              [
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
              [
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [1.8]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [1]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }
              ],
              [
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
              [
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-1.1]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-1.1]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }
              ],
            ]
          }
        }
      },
      //Primeras caracteristicas Board3
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_5:
          {
            allinputs: [],
            header: [],
            dataInteraction:
            {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells:
            [
              [
                {
                  type: 0,
                  text: ['Dominio', null],
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
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [1]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  //oneToManyInput: true,
                  conditions: {
                    valueInputs: [-1.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [0]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [3]
                  }
                }
              ],
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
              [
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-1]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [1.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [0]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-3]
                  }
                }
              ],
            ]
          }
        }
      },
      //Segundas  caracteristicas Board3
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: 
        {
          artifact_6: 
          {
            allinputs: [],
            header: [],
            dataInteraction:
            {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells:
            [
              [
                {
                  type: 0,
                  text: ['Ejemplos', null],
                  conditions: {
                    correctIndex: null
                  }
                },
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
              [
                {
                  type: 0,
                  text: ['6', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [1.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-2, 0.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }
              ],
              [
                {
                  type: 0,
                  text: ['Ejemplos', null],
                  conditions: {
                    correctIndex: null
                  }
                },
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
              [
                {
                  type: 0,
                  text: ['6', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-1.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [2]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [1, -0.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-2.5, -1.5]
                  }
                }
              ]
            ]
          }
        }
      },
      //Primeras caracteristicas Board4
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_7:
          {
            allinputs: [],
            header: [],
            dataInteraction:
            {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells:
            [
              [
                {
                  type: 0,
                  text: ['Dominio', null],
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
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [1]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  //oneToManyInput: true,
                  conditions: {
                    valueInputs: [-1.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [0]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [3]
                  }
                }
              ],
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
              [
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-1]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [1.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [0]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-3]
                  }
                }
              ],
            ]
          }
        }
      },
      //Segundas  caracteristicas Board4
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: 
        {
          artifact_8: 
          {
            allinputs: [],
            header: [],
            dataInteraction:
            {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells:
            [
              [
                {
                  type: 0,
                  text: ['Ejemplos', null],
                  conditions: {
                    correctIndex: null
                  }
                },
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
              [
                {
                  type: 0,
                  text: ['6', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [1.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-2, 0.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }
              ],
              [
                {
                  type: 0,
                  text: ['Ejemplos', null],
                  conditions: {
                    correctIndex: null
                  }
                },
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
              [
                {
                  type: 0,
                  text: ['6', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-1.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [2]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [1, -0.5]
                  }
                },
                {
                  type: 3,
                  // una pregunta. Varios inputs
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-2.5, -1.5]
                  }
                }
              ]
            ]
          }
        }
      },
      /*{
        type: 11,// tipo 
        //classGlobal: "QA",
        parent: '#preguntaFinal',
        contents:
        {
          artifact_7:
          {
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            questions:
            [
              {
                type: 2,
                question: '¿Por qué b no puede ser el máximo de la curva? ',
                answers_values: ['', 'Porque b es un punto abierto.', 'Porque b es un punto cerrado.'],
                conditions:
                {
                  correctIndex: 1
                }
              },
              {
                type: 2,
                question: '¿Por qué la curva del gráfico no tiene máximo?',
                answers_values: ['', 'Porqué su punto mas bajo es vacio  por tal motivo no pertenece al rango de la curva.', 'Porqué su punto mas alto es vacio  por tal motivo no pertenece al rango de la curva.'],
                conditions:
                {
                  correctIndex: 2
                }
              }
            ]
          },
        },
      },*/
    ]
  }
};

var defBoards = 
{
  board_1:
  {
    style:
    {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      grid: true,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 225
    },
    curves: [[[[-3, -0.5], [0, 1.5], [2, 0], [2.5, -0.5], [3.5, 0.5]]]]
  },  
  board_2:
  {
    style:
    {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      grid: true,
      boundingbox: [-2, 4, 2, -2],
      maxWidth: 350,
      maxHeight: 220
    },
    curves: [[[[-1.1, -1.2], [-0.8, 0], [0, 1.5], [1, 1.7]]]]
  },
  board_3:
  {
    style:
    {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      grid: true,
      boundingbox: [-4, 4, 2, -2],
      maxWidth: 350,
      maxHeight: 225
    },
    curves: [[[[-3.5, -1], [-3, 0], [-2.5, 0.6], [-2.1, 0.8], [-1.2, 0.9]]], [[[-0.7, 0.9], [0, 1.1], [0.6, 1.6], [1, 2.6]]]]
  },
  board_4:
  {
    style:
    {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      maxWidth: 300,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-4, 4, 4, -2]
    },
    points: [[-2.2, 2.2, true, null, null, '#2196f3'], [-2.4, 2.4, true, null, null, '#2196f3'], [-2.6, 2.6, true, null, null, '#2196f3'], [2.2, 2.2, true, null, null, '#2196f3'], [2.4, 2.4, true, null, null, '#2196f3'], [2.6, 2.6, true, null, null, '#2196f3']],
    curves: [[[[-2, 2], [-1, 0], [0, -1], [1, 0], [2, 2]]]]
  },
  board_5:
  {
    style:
    {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-4, 4, 4, -2]
    },
    points: [[-2.7, 2.3, true, null, null, '#2196f3'], [-3.05, 2.5, true, null, null, '#2196f3'], [-3.4, 2.7, true, null, null, '#2196f3']],
    lines: [[[[3, -0.5], [-2.5, 2.2]]]]
  },
  board_6:
  {
    style:
    {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-4, 4, 4, -4]
    },
    points: [[-2.3, -0.45, true, null, null, '#2196f3'], [-2.65, -0.38, true, null, null, '#2196f3'], [-3.1, -0.3, true, null, null, '#2196f3'], [-0.25, -2.7, true, null, null, '#2196f3'], [-0.2, -3.1, true, null, null, '#2196f3'], [3.3, 0.4, true, null, null, '#2196f3'], [3.6, 0.3, true, null, null, '#2196f3'], [0.25, 3.4, true, null, null, '#2196f3'], [0.2, 3.7, true, null, null, '#2196f3']],
    curves: [[[[-2.1, -0.5], [-1, -1], [-0.5, -1.8], [-0.3, -2.5]]], [[[0.3, 3.2], [0.7, 2], [2, 0.7], [1.2, 1.2], [3.1, 0.4]]]]
  },
  board_7:
  {
    style:
    {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-4, 4, 4, -4]
    },
    points: [[0.19, -3.2, true, null, null, '#2196f3'], [0.15, -3.5, true, null, null, '#2196f3'], [3.2, 1.4, true, null, null, '#2196f3'], [3.4, 1.6, true, null, null, '#2196f3'], [3.6, 1.8, true, null, null, '#2196f3']],
    curves: [[[[0.2, -3], [0.5, -1], [1, 0], [2, 0.5], [3, 1.2]]]]
  },
  board_8:
  {
    style:
    {
      axis: [false, true, true],
      grid: true,
      maxHeight: 200,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-4, 2, 4, -2]
    },
    curves: [[[[-3, 0], [-1.5, 1], [0, 0], [1.5, -1], [3, 0]]]]
  },
  board_9:
  {
    style:
    {
      axis: [false, true, true],
      grid: true,
      maxHeight: 200,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-4, 2, 4, -2]
    },
    points: [[3, 1.5, true, '', 3, true]],
    lines: [[[[3, 1.5], [2, -1.5]]], [[[0.5, 1.5], [2, -1.5]]], [[[0.5, 1.5], [-1.5, -0.5]]], [[[-1.5, -0.5], [-2, 1.5]]], [[[-2, 1.5], [-2.5, 1]]]]
  },
  board_11:
  {
    style:
    {
      axis: [false, true, true],
      grid: false,
      maxHeight: 200,
      maxWidth: 400,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-0.5, 2.5, 2.5, -0.5],
      pan: {
        needTwoFingers: true,
        enabled: false,
        needShift: true
      }
    },
    points: [
      //[x,y,visible,name,type]
      [2.2, 2.2, true, '', 2, true], [2.2, -0.3, false, 'a', false], [-0.2, 2, false, 'b']],
    lines: 
    [
      //[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[2.2, 0], [2.2, 2.2]], 1, false, false], [[[0, 2.2], [2.2, 2.2]], 1, false, false]
    ],
    curves:
    [
      //[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[-0.2, 1], [0, 1], [1.5, 1.5], [2.2, 2.2]]]
    ]
  }
};

let position = seleccionarAleatorios(1, 8, 1);
//position = 1;
const newPropertyName = `board_${position}`;
//const newPropertyName2 = `board_${position+1}`;
//console.log(position);
const desiredBoard = {};
desiredBoard[newPropertyName]=defBoards[newPropertyName];
//desiredBoard[newPropertyName2]=defBoards[newPropertyName2];

//console.log(desiredBoard);
//const newObject = {[newPropertyName]: desiredBoard.newPropertyName,[newPropertyName2]:desiredBoard.newPropertyName2};
//console.log(newObject);
defBoards = desiredBoard;
console.log(defBoards)

let artefact = [];
let ejemplo = [];
let artefact1;
let artefact2;
let ejemplo1;
let ejemplo2;
let inicio;
let fin;

switch(newPropertyName){
  case 'board_1':{
    artefact1 = 'artifact_1';
    artefact2 = 'artifact_2';
    ejemplo1 = 'ejemplo1'
    ejemplo2 = 'ejemplo2'
    inicio = 0;
    fin = 2;
    break;
  }
  case 'board_2':{
    artefact1 = 'artifact_3';
    artefact2 = 'artifact_4';
    ejemplo1 = 'ejemplo1';
    ejemplo2 = 'ejemplo2';
    inicio = 2;
    fin = 4;
    break;
  }
  case 'board_3':{
    artefact1 = 'artifact_5';
    artefact2 = 'artifact_6';
    ejemplo1 = 'ejemplo1';
    ejemplo2 = 'ejemplo2';
    inicio = 4;
    fin = 6;
    break;
  }
  case 'board_4':{
    artefact1 = 'artifact_7';
    artefact2 = 'artifact_8';
    ejemplo1 = 'ejemplo1';
    ejemplo2 = 'ejemplo2';
    inicio = 6;
    fin = 8;
    break;
  }
  case 'board_5':{
    artefact = 'artifact_5';
    ejemplo = 'ejemplo5';
    break;
  }
  case 'board_6':{
    artefact = 'artifact_6';
    ejemplo = 'ejemplo6';
    break;
  }
  case 'board_7':{
    artefact = 'artifact_7';
    ejemplo = 'ejemplo7';
    break;
  }
  case 'board_8':{
    artefact = 'artifact_8';
    ejemplo = 'ejemplo8';
    break;
  }
}

//console.log(ejemplo);

/*for (const artef of artefact) {
  if (artef in artefact) {
    newObject2[artef] = def['artefact_1']['datadefault'][artef];
  } else {
    console.error(`Property "${artef}" not found in dataObject`);
  }
}*/

/*function verificarElementos(ejemplo, def) {
  let pos = [];
  let index = 0;
  for (const ejem of ejemplo) {
    //console.log(ejem);
    //if (def.contents.hasOwnProperty(artifact)) {
      // Recorrer el arreglo datadefault para buscar el elemento
      for (const item in def.artefact_1.datadefault) {
        //console.log(item);
        //console.log(def.artefact_1.datadefault[item].parent);
        if (def.artefact_1.datadefault[item].parent === ejem) {
          pos[index] = item;
          index++;
          //console.log(`El elemento "${ejem}" está presente en el objeto.`);
          //console.log('Encontrado ' + position +' '+ item);
          continue;
          //return true; // Detener la búsqueda si se encuentra el elemento          
        }
      }
    //}
    
    //console.log(pos);
  }
  return pos;
  //console.log(`Ningún elemento de "${artifacts}" está presente en el objeto.`);
  return false;
}*/

/*let pos = verificarElementos(ejemplo, def);
position = 1;*/
console.log(position);
//console.log(def)
def.artefact_1.datadefault = def.artefact_1.datadefault.slice(inicio,fin);
console.log(def)

let div = document.querySelectorAll('#artifact_1');
div.id = artefact1;
div = document.querySelectorAll('#artifact_2');
div.id = artefact2;
console.log(div);
//div[0].parentElement.appendChild(div[0]);
//div[1].parentElement.appendChild(div[1]);

let div2 = document.querySelectorAll('[data-board="board_1"]');
div2[0].setAttribute('data-board', `board_${position}`);
div2[1].setAttribute('data-board', `board_${position}`);

let div3 = document.querySelectorAll('#ejemplo1');
//console.log(div3);
div3.id = ejemplo1;
div3 = document.querySelectorAll('#ejemplo2');
div3.id = ejemplo2;
//div3[1].childNodes[1].id = ejemplo2;
//div3.id = ejemplo[Number(pos[0])];
console.log(div3);
//console.log(div3[1].childNodes[1].id);

defBoardDefault();
generator(def);




//console.log(child);

//

var btnValidate1 = document.querySelector('#btn-validation1');
var btnReset1 = document.querySelector('#btn-reset1');
var btnNotExist1 = document.querySelector('#btn-not-Exist1');
var btnValidate2 = document.querySelector('#btn-validation2');
var btnReset2 = document.querySelector('#btn-reset2');
var btnNotExist2 = document.querySelector('#btn-not-Exist2');
var btnValidate3 = document.querySelector('#btn-validation3');
var btnReset3 = document.querySelector('#btn-reset3');
var inputsTable1 = document.querySelectorAll('.input-table1');
var inputsTable2 = document.querySelectorAll('.input-table2');
var inputActiveTable1 = null;
var inputActiveTable2 = null;
var countersTable1 = {
  respCorrect: 0,
  respIncorrect: 0
};
var countersTable2 = {
  respCorrect: 0,
  respIncorrect: 0
};

//***************/

// //RESPUESTA TABLA 1
// var successResponse = [{
//   idInput: 'input_1',
//   responses: ['∄']
// }, {
//   idInput: 'input_2',
//   responses: ['∄']
// }, {
//   idInput: 'input_3',
//   responses: ['∄']
// }, {
//   idInput: 'input_4',
//   responses: ['∄']
// }, {
//   idInput: 'input_5',
//   responses: ['∄']
// }, {
//   idInput: 'input_6',
//   responses: ['∄']
// }, {
//   idInput: 'input_7',
//   responses: ['∄']
// }, {
//   idInput: 'input_8',
//   responses: ['∄']
// }, {
//   idInput: 'input_9',
//   responses: ['∄']
// }, {
//   idInput: 'input_10',
//   responses: ['∄']
// }, {
//   idInput: 'input_11',
//   responses: ['∄']
// }, {
//   idInput: 'input_12',
//   responses: ['∄']
// }, {
//   idInput: 'input_13',
//   responses: ['∄']
// }, {
//   idInput: 'input_14',
//   responses: ['∄']
// }, {
//   idInput: 'input_15',
//   responses: ['∄']
// }, {
//   idInput: 'input_16',
//   responses: ['∄']
// }, {
//   idInput: 'input_17',
//   responses: ['1']
// }, {
//   idInput: 'input_18',
//   responses: ['-3/2', '-1.5', '-7/5', '-1.4', '-8/5', '-1.6']
// }, {
//   idInput: 'input_19',
//   responses: ['0']
// }, {
//   idInput: 'input_20',
//   responses: ['3']
// }, {
//   idInput: 'input_21',
//   responses: ['3/2', '1.5', '7/5', '1.4', '8/5', '1.6']
// }, {
//   idInput: 'input_22',
//   responses: ['-2;1/2', '-2,1/2', '1/2;-2', '1/2,-2', '{-2,1/2}', '{1/2,-2}', '-2;0.5', '-2,0.5', '0.5;-2', '0.5,-2', '{-2,0.5}', '{0.5,-2}', '-2;0,5', '0,5;-2', '-2;2/5', '-2,2/5', '2/5;-2', '2/5,-2', '{-2,2/5}', '{2/5,-2}', '-2;0.4', '-2,0.4', '0.4;-2', '0.4,-2', '{-2,0.4}', '{0.4,-2}', '-2;0,4', '0,4;-2', '-2;3/5', '-2,3/5', '3/5;-2', '3/5,-2', '{-2,3/5}', '{3/5,-2}', '-2;0.6', '-2,0.6', '0.6;-2', '0.6,-2', '{-2,0.6}', '{0.6,-2}', '-2;0,6', '0,6;-2'] //AQUI
// },
// // '1/2', '0.5', '2/5', '0.4','3/5','0.6'
// {
//   idInput: 'input_23',
//   responses: ['∄']
// }, {
//   idInput: 'input_24',
//   responses: ['∄']
// }];
// // RESPUESTAS  TABLA 2
// var successResponse2 = [{
//   idInput: 'input_25',
//   responses: ['-1']
// }, {
//   idInput: 'input_26',
//   responses: ['0']
// }, {
//   idInput: 'input_27',
//   responses: ['∄']
// }, {
//   idInput: 'input_28',
//   responses: ['∄']
// }, {
//   idInput: 'input_29',
//   responses: ['-1/2', '-0.5', '-2/5', '-0.4', '-3/5', '-0.6']
// }, {
//   idInput: 'input_30',
//   responses: ['3']
// }, {
//   idInput: 'input_31',
//   responses: ['∄']
// }, {
//   idInput: 'input_32',
//   responses: ['∄']
// }, {
//   idInput: 'input_33',
//   responses: ['∄']
// }, {
//   idInput: 'input_34',
//   responses: ['∄']
// }, {
//   idInput: 'input_35',
//   responses: ['∄']
// }, {
//   idInput: 'input_36',
//   responses: ['∄']
// }, {
//   idInput: 'input_37',
//   responses: ['∄']
// }, {
//   idInput: 'input_38',
//   responses: ['∄']
// }, {
//   idInput: 'input_39',
//   responses: ['∄']
// }, {
//   idInput: 'input_40',
//   responses: ['∄']
// }, {
//   idInput: 'input_41',
//   responses: ['-1']
// }, {
//   idInput: 'input_42',
//   responses: ['3/2', '1.5', '7/5', '1.4', '8/5', '1.6']
// }, {
//   idInput: 'input_43',
//   responses: ['0']
// }, {
//   idInput: 'input_44',
//   responses: ['-3']
// }, {
//   idInput: 'input_45',
//   responses: ['-3/2', '-1.5', '-7/5', '-1.4', '-8/5', '-1.6']
// }, {
//   idInput: 'input_46',
//   responses: ['2']
// }, {
//   idInput: 'input_47',
//   responses: ['-1/2;1', '-1/2,1', '1;-1/2', '1,-1/2', '-0.5;1', '-0.5,1', '1;-0.5', '1,-0.5', '{-0.5,1}', '{1,-0.5}', '{1,-1/2}', '{-1/2,1}', '-0,5;1', '1;-0,5', '-2/5;1', '-2/5,1', '1,-2/5', '1;-2/5', '-0.4;1', '-0.4,1', '1;-0.4', '1,-0.4', '{-0.4,1}', '{1,-0.4}', '{1,-2/5}', '{-2/5,1}', '-0,4;1', '1;-0,4', '-3/5;1', '-3/5,1', '-0.6;1', '-0.6,1', '{-0.6,1}', '{1,-0.6}', '{1,-3/5}', '{-3/5,1}', '-0,6;1', '1;-0,6', '1;-1/2', '1,-1/2', '-1/2;1', '-1/2,1', '{-0.5,1}', '{1,-0.5}', '{1,-1/2}', '{-1/2,1}', '-0,5;1', '1;-0,5', '-2/5;1', '-2/5,1', '1;-2/5', '1,-2/5', '-0.4;1', '-0.4,1', '1,-0.4', '1;-0.4', '{-0.4,1}', '{1,-0.4}', '{1,-2/5}', '{-2/5,1}', '-0,4;1', '1;-0,4', '-3/5;1', '-3/5,1', '1;-3/5;', '1,-3/5;', '-0.6;1', '-0.6,1', '1;-0.6', '1,-0.6', '{-0.6,1}', '{1,-0.6}', '{1,-3/5}', '{-3/5,1}', '-0,6;1', '1;-0,6']
//   // compareTo: {
//   //     input: "input48",v
//   //     values: [
//   //         { value: "-0.5 y 1", with: "-1.5 y -2.5" },
//   //         { value: "1 y -0.5", with: "-2.5 y -1.5" }
//   //     ]
//   // }
//   //'-1/2', '-0.5', '-2/5', '-0.4','-3/5','-0.6'
// }, {
//   idInput: 'input_48',
//   responses: ['-3/2;-5/2', '-3/2,-5/2', '-5/2;-3/2', '-5/2,-3/2', '{-3/2,-5/2}', '{-5/2,-3/2}', '{-3/2, -5/2}', '{-5/2, -3/2}', '-2.5;-1.5', '-2.5,-1.5', '-1.5;-2.5', '-1.5,-2.5', '{-1.5,-2.5}', '{-2.5,-1.5}', '-2,5;-1,5', '-1,5;-2,5', '-2.4;-1.4', '-2.4,-1.4', '-1.4;-2.4', '-1.4,-2.4', '{-1.4,-2.4}', '{-2.4,-1.4}', '-2,4;-1,4', '-1,4;-2,4', '-2.6;-1.6', '-2.6,-1.6', '-1.6;-2.6', '-1.6,-2.6', '{-1.6,-2.6}', '{-2.6,-1.6}', '-2,6;-1,6', '-1,6;-2,6', '-7/5;-12/5', '-7/5,-12/5', '-12/5;-7/5', '-12/5,-7/5', '{-7/5,-12/5}', '{-12/5,-7/5}', '-8/5;-13/5', '-8/5,-13/5', '-13/5;-8/5', '-13/5,-8/5', '{-8/5,-13/5}', '{-13/5,-8/5}', '-2.4;-1.5', '-2.4,-1.5', '-1.5;-2.4', '-1.5,-2.4', '{-1.5,-2.4}', '{-2.4,-1.5}', '-2,4;-1,5', '-1,5;-2,4', '-2.5;-1.4', '-2.5,-1.4', '-1.4;-2.5', '-1.4,-2.5', '{-1.4,-2.5}', '{-2.5,-1.4}', '-2,5;-1,4', '-1,4;-2,5', '-2.6;-1.5', '-2.6,-1.5', '-1.5;-2.6', '-1.5,-2.6', '{-1.5,-2.6}', '{-2.6,-1.5}', '-2,6;-1,5', '-1,5;-2,6', '-2.5;-1.6', '-2.5,-1.6', '-1.6;-2.5', '-1.6,-2.5', '{-1.6,-2.5}', '{-2.5,-1.6}', '-2,5;-1,6', '-1,6;-2,5', '-2.4;-1.6', '-2.4,-1.6', '-1.6;-2.4', '-1.6,-2.4', '{-1.6,-2.4}', '{-2.4,-1.6}', '-2,4;-1,6', '-1,6;-2,4', '-2.6;-1.4', '-2.6,-1.4', '-1.4;-2.6', '-1.4,-2.6', '{-1.4,-2.6}', '{-2.4,-1.6}', '-2,4;-1,6', '-1,4;-2,6', '-7/5;-5/2', '-7/5,-5/2', '-5/2;-7/5', '-5/2,-7/5', '{-7/5,-5/2}', '{-5/2,-7/5}', '-7/5;-13/5', '-7/5,-13/5', '-13/5;-7/5', '-13/5,-7/5', '{-7/5,-13/5}', '{-13/5,-7/5}', '-3/2;-12/5', '-3/2,-12/5', '-12/5;-3/2', '-12/5,-3/2', '{-3/2,-12/5}', '{-12/5,-3/2}', '-3/2;-13/5', '-3/2,-13/5', '-13/5;-3/2', '-13/5,-3/2', '{-3/2,-13/5}', '{-13/5,-3/2}', '-8/5;-12/5', '-8/5,-12/5', '-12/5;-8/5', '-12/5,-8/5', '{-8/5,-12/5}', '{-12/5,-8/5}', '-8/5;-5/2', '-8/5,-5/2', '-5/2;-8/5', '-5/2,-8/5', '{-8/5,-5/2}', '{-5/2,-8/5}']
//   //'-2.5' ; '-1.5', {-2.5 , -1.5}          -3/2', '-1.5', '-7/5', '-1.4', '-8/5', '-1.6'                                                                                                                                                                                                                                                                                                                   '-7/5', '-1.4',   -12/5=2.4                                   {'-8/5'= '-1.6'    ,    -13/5= 2.6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           '-7/5', '-1.4',   -5/2=2.5                                                          '-7/5', '-1.4',   -13/5=2.6                                      '-3/2'=1.5   -12/5=2.4                                                 '-3/2'=1.5   -13/5=2.6                                         -8/5 = 1.6        -12/5 = 2.4                                    -8/5 = 1.6        -5/2 = 2.5
// }];

//BOTON   ∄	(SIMBOLO de "NO EXISTE")

// btnNotExist1.addEventListener('click', function () {
//   if (inputActiveTable1) {
//     document.querySelector(`#${inputActiveTable1}`).value = "∄";
//   }
// });
// btnNotExist2.addEventListener('click', function () {
//   if (inputActiveTable2) {
//     document.querySelector(`#${inputActiveTable2}`).value = "∄";
//   }
// });
// inputsTable1.forEach(function (input) {
//   input.addEventListener('focus', function () {
//     inputActiveTable1 = input.id;
//   });
// });
// inputsTable2.forEach(function (input) {
//   input.addEventListener('focus', function () {
//     inputActiveTable2 = input.id;
//   });
// });

//VALIDAR

// btnValidate1.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-table1');
//   var dataInteraction = [];
//   inputs.forEach(function (input) {
//     dataInteraction.push({
//       name: input.id,
//       value: input.value
//     });
//     var successValues = successResponse.find(function (object) {
//       return object.idInput === input.id;
//     });
//     var inputValue = input.value.trim().toLowerCase().replaceAll(' ', '').replaceAll('y', ';');
//     if (successValues.responses.includes(inputValue)) {
//       countersTable1.respCorrect += 1;
//       document.querySelector(`#${input.id}`).classList.remove("input_invalid");
//       document.querySelector(`#${input.id}`).classList.add("input_valid");
//     } else {
//       countersTable1.respIncorrect += 1;
//       document.querySelector(`#${input.id}`).classList.remove("input_valid");
//       document.querySelector(`#${input.id}`).classList.add("input_invalid");
//     }
//   });
//   // console.log("correctas:" , countersTable1.respCorrect, "incorrectas:", countersTable1.respIncorrect);
//   //    console.log(cleanData('artifact_1', countersTable1.respCorrect, countersTable1.respIncorrect))
//   sendData(createData({
//     artifactType: "Standard",
//     artifactName: 1,
//     respCorrect: countersTable1.respCorrect,
//     respIncorrect: countersTable1.respIncorrect,
//     useElementArtifact: true,
//     inputsValues: dataInteraction
//   }));
//   countersTable1.respCorrect = 0;
//   countersTable1.respIncorrect = 0;
// });
// btnValidate2.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-table2');
//   var dataInteraction = [];
//   inputs.forEach(function (input) {
//     dataInteraction.push({
//       name: input.id,
//       value: input.value
//     });
//     var successValues = successResponse2.find(function (object) {
//       return object.idInput === input.id;
//     });
//     var inputValue = input.value.trim().toLowerCase().replaceAll(' ', '').replaceAll('y', ';');
//     if (successValues.responses.includes(inputValue)) {
//       countersTable2.respCorrect += 1;
//       document.querySelector(`#${input.id}`).classList.remove("input_invalid");
//       document.querySelector(`#${input.id}`).classList.add("input_valid");
//     } else {
//       countersTable2.respIncorrect += 1;
//       document.querySelector(`#${input.id}`).classList.remove("input_valid");
//       document.querySelector(`#${input.id}`).classList.add("input_invalid");
//     }
//   });
//   // console.log("correctas:" , countersTable2.respCorrect, "incorrectas:", countersTable2.respIncorrect);
//   //    console.log(cleanData('artifact_2', countersTable2.respCorrect, countersTable2.respIncorrect));
//   sendData(createData({
//     artifactType: "Standard",
//     artifactName: 2,
//     respCorrect: countersTable2.respCorrect,
//     respIncorrect: countersTable2.respIncorrect,
//     useElementArtifact: true,
//     inputsValues: dataInteraction
//   }));
//   countersTable2.respCorrect = 0;
//   countersTable2.respIncorrect = 0;
// });

// //RESET

// btnReset1.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-table1');
//   inputs.forEach(function (input) {
//     input.value = '';
//     document.querySelector(`#${input.id}`).classList.remove("input_invalid");
//     document.querySelector(`#${input.id}`).classList.remove("input_valid");
//   });
// });
// btnReset2.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-table2');
//   inputs.forEach(function (input) {
//     input.value = '';
//     document.querySelector(`#${input.id}`).classList.remove("input_invalid");
//     document.querySelector(`#${input.id}`).classList.remove("input_valid");
//   });
// });
// btnValidate3.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-board-11');
//   var dataInteraction = [];
//   inputs.forEach(function (input) {
//     dataInteraction.push({
//       name: input.id,
//       value: input.value
//     });
//     document.querySelector(`#${input.id}`).classList.remove("input_default");
//     document.querySelector(`#${input.id}`).classList.add("input-sended");
//   });
//   //    console.log(cleanDataForm('artifact_3', dataInteraction))
//   sendData(createData({
//     artifactType: "Yellow",
//     artifactName: 3,
//     comments: dataInteraction,
//     useElementArtifact: true,
//     inputsValues: dataInteraction
//   }));
// });
// btnReset3.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-board-11');
//   inputs.forEach(function (input) {
//     input.value = '';
//     document.querySelector(`#${input.id}`).classList.remove("input-sended");
//     document.querySelector(`#${input.id}`).classList.add("input_default");
//   });
// });
// function createData(_ref) {
//   var artifactType = _ref.artifactType,
//     artifactName = _ref.artifactName,
//     _ref$respCorrect = _ref.respCorrect,
//     respCorrect = _ref$respCorrect === void 0 ? 0 : _ref$respCorrect,
//     _ref$respIncorrect = _ref.respIncorrect,
//     respIncorrect = _ref$respIncorrect === void 0 ? 0 : _ref$respIncorrect,
//     _ref$comments = _ref.comments,
//     comments = _ref$comments === void 0 ? null : _ref$comments,
//     _ref$useElementArtifa = _ref.useElementArtifact,
//     useElementArtifact = _ref$useElementArtifa === void 0 ? false : _ref$useElementArtifa,
//     _ref$inputsValues = _ref.inputsValues,
//     inputsValues = _ref$inputsValues === void 0 ? null : _ref$inputsValues;
//   var data = {
//     typeArtifact: artifactType,
//     artifact: artifactName,
//     results: {
//       correct: respCorrect,
//       incorrect: respIncorrect
//     }
//   };
//   if (comments) {
//     data.comments = {};
//     comments.forEach(function (field) {
//       data.comments[field.name] = field.value;
//     });
//   }
//   if (useElementArtifact) {
//     data.elementArtifact = {
//       inputsValues: {}
//     };
//     inputsValues.forEach(function (input) {
//       data.elementArtifact.inputsValues[input.name] = input.value;
//     });
//   }
//   return data;
// }

// function cleanDataForm (artifactName, inputFields) {
//     console.log(inputFields);
//     const data = {
//         [artifactName]: {},
//     }
//     inputFields.forEach((field) => {
//         data[artifactName][field.name] = field.value
//     })
//     return data
// }

// function cleanData(artifactName, respCorrect, respIncorrect) {
//     const data = {
//         [artifactName]: {
//             respCorrect: respCorrect,
//             respIncorrect: respIncorrect,
//         }
//     }

//     return data
// }

