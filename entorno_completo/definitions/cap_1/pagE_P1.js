'use strict';

var def = 
{
  artefact_1: 
  {
    datadefault: [
      //Inicio artefactos de Annelys 1 -- 4 
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
                  },
                },
                {
                  type: 0,
                  text: ['Rango', null],
                  conditions: {
                    correctIndex: null
                  },
                },
                {
                  type: 0,
                  text: ['Corte con eje X', null],
                  conditions: {
                    correctIndex: null
                  },
                },
                {
                  type: 0,
                  text: ['Corte con eje Y', null],
                  conditions: {
                    correctIndex: null
                  },
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
                }
              ],
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
                  },
                },
              ],
            ],
          },
        },
      },
      //Segundas caracterisdticas Board1
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
                    [
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
                        }
                    ],
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
                    [
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
                            },
                        },
                    ],
                ],
            },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
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
                  }
                ],
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
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
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
              [
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
                }
              ],
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
              [
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
                  },
                },
              ],
          ],
        },
      },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_5: {
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
                }
              ],
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
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_6: {
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
              [
                {
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
                }
              ],
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
              [
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
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  },
                },
              ],
            ],
          },
        },
      },      
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_7: {
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
                }
              ],
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
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_8: {
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
              [
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
                }
              ],
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
              [
                {
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
                  },
                },
              ],
            ],
          },
        },
      },
      //Fin Artefactos de Annelys

      //Inicio Artefactos de Luis 5 -- 6
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

                {
                  type: 0,
                  text: ['Dominio', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  //text: ['Max.Abs', null],
                  text: ['Rango',null],
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
                  answers_values: ['', '(-∞, ∞)', '(-∞, 0) ∪ (0, ∞)', '(-∞, 0) ∪ (0, 2.5) ∪ (2.5, ∞)'],
                  conditions: {
                    correctIndex: 1
                  }
                ,
              }, 
              {
                type: 2,
                answers_values: ['', '(-3, -1] ∪ [0, 2.5) ∪ (3, 3)', '(-3, -1] ∪ [0, 2.5) ∪ [3, 3]', '[-3, -1] ∪ (0, 3]', '(-3, -1] ∪ [0, 3]'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },  
              {
                type: 2,
                answers_values: ['', '(-∞, -1) ∪ [0, 2.5)', '(-∞, -1) ∪ (0, 2.5)', '(-∞, -1] ∪ [0, 2.5)'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },
              
              {
                type: 2,
                answers_values: ['', '(-1, 0) ∪ [2.5, ∞)', '(-1, 0) ∪ (2.5, ∞)', '(-1, 0)'],
                conditions: {
                  correctIndex: 3
                }
              ,
              },
              ],

              [

                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Cortes X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Cortes Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

              [{
                type: 2,
                answers_values: ['', '(-∞, 0)', '(-∞, 0]', '(-∞, -1)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 2,
                answers_values: ['', '(0, ∞)', '[0, ∞)', '(0, 2.5) ∪ [3, ∞)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              },],
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
                  valueInputs: [3]
                }
              },
              {
                type: 2,
                answers_values: ['', '(2.5, ∞)', '[2.5, ∞)', '[0, 0] ∪ (2.5, ∞)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1]
                }
              }],

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

              [{
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [0,  3]
                }
              }, 
              {
                type: 2,
                answers_values: ['', '[0, 0] ∪ [2.5, ∞)', '[0, ∞)', '[0, 2.5) ∪ (2.5, ∞)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
            ]

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

                {
                  type: 0,
                  text: ['Dominio', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  //text: ['Max.Abs', null],
                  text: ['Rango',null],
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
                  answers_values: ['', '(-∞, ∞)', '(-∞, -1) ∪ (-1, ∞)', '(-∞, -1) ∪ (-1, 0.5) ∪ (0.5, ∞)'],
                  conditions: {
                    correctIndex: 1
                  }
                ,
              }, 
              {
                type: 2,
                answers_values: ['', '(-4, -1.5] ∪ [-1, 0.5) ∪ (1.5, 3]', '(-4, -1.5) ∪ [-1, 0.5) ∪ [1.5, 3]', '[-4, -1.5] U (-1, 3]', '(-4, -1.5) ∪ [-1, 0.5) ∪ (1, 3]'],
                conditions: {
                  correctIndex: 4 
                }
              ,
              },  
              {
                type: 2,
                answers_values: ['', '(-∞, 2)', '(-∞, -1) ∪ (-1, 0.5) ∪ (0.5, 2)', '(-∞, 2]'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },
              
              {
                type: 2,
                answers_values: ['', '(2, ∞)', '[2, ∞)', '(0.5, ∞)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              ],

              [

                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Cortes X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Cortes Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

              [{
                type: 2,
                answers_values: ['', '(-∞, 0)', '(-∞, 0]', '(-∞, -1) ∪ (-1, 0)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 2,
                answers_values: ['', '(0, ∞)', '[0, ∞)', '(0, 0.5) U (0.5, ∞)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              },],
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


              [{
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [3]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [2]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }],

              [ {
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

              [{
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-1, 1.5]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-1, 0.5]
                }
              }],

            ]
          }
        }
      },
      //Fin Artefactos de Lui

      //Inicio Artefactos de Manuel 7 -- 8

      //Fin Artefactos de Manuel
    ],
  },
};
var defBoards = { 
  //Inicio Boards de Annely 1 -- 4
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
  //Fin Boards de Annely
  
  //Inicio Boards de Luis 5 --6
  board_5: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      maxWidth: 300,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 5, -4]
    },

    curves: [
              [[[ -3.63, -2.8 ], [ -2.71, -2.48 ],[ -2, -2], [ -1.01, -0.97 ], [ -0.05, -1.95 ]]],
              [[[ 0, 0 ], [ 2.45, 2.45 ]]],
              [[[ 2.5, 3 ], [ 4, 3 ]]],
            ],

    points: [[0, 0, true], [0, -2, true, '', 2, true], [2.5, 2.5, true, '', 2, true], [2.5, 3, true], [4,3, true], 
            [4.4, 3, true], [-3.63, -2.8, true], [-4, -2.85, true], [-4.4, -2.87, true]]
          
    
  },
  board_6: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 5, -4]
    },

    

    curves: [
              [[[ -3.5, -3.7 ],[ -2, -3.5 ], [ -1.5, -3 ],[ -1, -1.55]]],
              [[[ 0.5, 1.5 ],[ 1.5, 2.2 ],[ 2, 3 ],[ 2.5, 2.2 ],[ 3.5, 1.4 ]]],
              [[[-1,-1],[0.45,0.45]]]
            ],
    points: [[0.5, 0.5, true, '', 2, true], [-1, -1.5, true, '', 2, true], [-1,-1, true], [0.5, 1.5, true], [3.5, 1.4, true],[3.9, 1.28, true], [4.3, 1.18, true], [4.7, 1.15, true]
            ,[-3.5, -3.7, true], [-3.9, -3.7, true], [-4.3, -3.7, true]]
  },
  //Fin Boards de Luis
  //Inicio Boards de Manuel 7 --8

  //Fin Boards de Manuel
};

let position = localStorageSeleccionados("P1", 1, 4, 1);
[def, defBoards] = PintaSeleccionP1(position, def, defBoards,'P1');

defBoardDefault();
generator(def);

var btnValidate1 = document.querySelector("#btn-validation1");
var btnReset1 = document.querySelector("#btn-reset1");
var btnNotExist1 = document.querySelector("#btn-not-Exist1");
var btnValidate2 = document.querySelector("#btn-validation2");
var btnReset2 = document.querySelector("#btn-reset2");
var btnNotExist2 = document.querySelector("#btn-not-Exist2");
var btnValidate3 = document.querySelector("#btn-validation3");
var btnReset3 = document.querySelector("#btn-reset3");
var inputsTable1 = document.querySelectorAll(".input-table1");
var inputsTable2 = document.querySelectorAll(".input-table2");
var inputActiveTable1 = null;
var inputActiveTable2 = null;
var countersTable1 = {
    respCorrect: 0,
    respIncorrect: 0,
};
var countersTable2 = {
    respCorrect: 0,
    respIncorrect: 0,
};

let validar = document.querySelectorAll('.check');
let intentos1, intentos2;
let tds = document.querySelectorAll('tbody');;
let inputElement;
let mathvalues;
for (let i = 0; i < validar.length; i++) {
    // Add a click event listener to each element
    validar[i].addEventListener('click', function() {
        // Print a different message depending on the element
        switch (this) {
            case validar[0]:
                intentos1++;
                const selectElement = tds[0].querySelectorAll('select');
                const selectedValues = [];
                for(let j=0;j<selectElement.length;j++){
                    const selectedOption = selectElement[j].querySelector('option:checked');
                    const selectedValue = selectedOption.value;
                    selectedValues.push(selectedValue);
                }
                localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
                inputElement = tds[0].querySelectorAll('math-field');
                mathvalues = [];
                for(let j=0;j<inputElement.length;j++){
                    const inputValue = inputElement[j].value;
                    mathvalues.push(inputValue);
                    // Store or use the value
                }
                localStorage.setItem('mathValuesA', JSON.stringify(mathvalues));
                localStorage.setItem('P1_Intentos1',intentos1);                
                break;
            case validar[1]:
                intentos2++;
                inputElement = tds[1].querySelectorAll('math-field');
                mathvalues = [];
                for(let j=0;j<inputElement.length;j++){
                    const inputValue = inputElement[j].value;
                    mathvalues.push(inputValue);
                    // Store or use the value
                }
                localStorage.setItem('mathValuesB', JSON.stringify(mathvalues));
                localStorage.setItem('P1_Intentos2',intentos2);
                break;        
        }
    });
}

let resets = document.querySelectorAll('.reset');
for (let i = 0; i < resets.length; i++) {
    // Add a click event listener to each element
    resets[i].addEventListener('click', function() {
        switch (this) {
            case resets[0]:
                const selected = JSON.parse(localStorage.getItem('selectedValues'));
                const mathValues = JSON.parse(localStorage.getItem('mathValuesA'));
                if (mathValues) {
                    localStorage.removeItem('mathValuesA');                    
                } 
                if (selected) {
                    localStorage.removeItem('selectedValues');
                }                
                break;
            case resets[1]:
                const mathValuesB = JSON.parse(localStorage.getItem('mathValuesB'));
                if (mathValuesB) {
                    localStorage.removeItem('mathValuesB')
                }
                break;        
        }
    });
}

window.addEventListener('load', function() {
    const tbodyElement = document.querySelectorAll('tbody');
    const selectElements = tbodyElement[0].querySelectorAll('select');
    const selectedValues = JSON.parse(localStorage.getItem('selectedValues'));
    if (selectedValues) {
        for (let i = 0; i < selectElements.length; i++) {
            const selectedValue = selectedValues[i];
            const selectedOption = selectElements[i].querySelector(`option[value="${selectedValue}"]`);
            selectedOption.selected = true;
        }
    }
    const mathFieldElements = tbodyElement[0].querySelectorAll('math-field');
    const mathFieldElementsB = tbodyElement[1].querySelectorAll('math-field');
    const mathValues = JSON.parse(localStorage.getItem('mathValuesA'));
    const mathValuesB = JSON.parse(localStorage.getItem('mathValuesB'));
    if (mathValues) {
        for (let i = 0; i < mathFieldElements.length; i++) {
            mathFieldElements[i].value = mathValues[i];
        }
    }
    if (mathValues) {
        for (let i = 0; i < mathFieldElementsB.length; i++) {
            mathFieldElementsB[i].value = mathValuesB[i];
        }
    }
    const intentos1_LS = localStorage.getItem('P1_Intentos1');
    const intentos2_LS = localStorage.getItem('P1_Intentos2');
    if (intentos1_LS)
        intentos1 = intentos1_LS
    else
        intentos1 = 0;
    if (intentos2_LS)
        intentos2 = intentos2_LS
    else
        intentos2 = 0;
});