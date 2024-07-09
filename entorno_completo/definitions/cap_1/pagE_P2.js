const defBoards = {
    board_0: {
        style: {
            boundingbox:[-4,4,4,-4],
            maxHeight: 300,
            maxWidth: 300,
},
    },
    board_1: {
        style: {
            boundingbox:[-5,5,5,-5],
            maxHeight: 300,
            maxWidth: 300,
        },
    },
};
  
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
  
const def = {
      //No valida algunos ejemplos de funciones (problema hablado con el equipo de ALcaravan. Sus motores no son capaces de hacerlo).
      artifact_1: {
        statementBottom: ['Mínimo absoluto alcanzado en -1,5 y 1,5.', 'No tiene máximos.'],
        conditions: {
          conexa: { type: 4 },
          max:
          {global:0,
          localcount:0,},
          min: { global: [-1.5,1.5]},
        },
      },
      artifact_2: {
        statementBottom: ['Mínimo absoluto alcanzado en -1,5 y 1,5.','Máximo de f es -3 alcanzado en 0,5.','Dominio R.'],
        conditions: {
          conexa: { type: 3 },
          dom: {
            range: [[[1,2],[4,5], 3, false, false]],
          },
          max:{
            maxTotal: -3,
            global:[0.5],
          },
          min: { global: [-1.5,1.5],},
        },
      },
      artifact_3: {
        statementBottom: ['Dominio = ( -4,4 ]', 'Rango ( -3,2 ]','f es creciente en ( 0,2 )','f es decreciente en ( -2,-1 )'],
        conditions: {
          conexa: { type: 3 },
          dom: { range: [[-4, 4, 3, true, false]] },
          rang: {
            mulIntervals: [
              [[2,-3, false, true]]
            ],
          },
          upDown:{intervals:[[false,[-2,-1]]]},
          upDown:{intervals:[[true,[0,2]]]},
        },
      },
      artifact_4: {
        statementBottom: ['Máximo absoluto alcanzado en -2,5 y 2,5.', 'Dominio R.'],
        conditions: {
          conexa: { type: 3 },
          dom: {
            range: [[[1,2,8],[4,5,6], 3, false, false]],
          },
          max:
          {global: [-2.5, 2.5],},
        },
      },
      artifact_5: {
        //Igual que artefacto 2.
        statementBottom: ['Mínimo absoluto alcanzado en -2,5 y 2,5.', 'Máximo de f es 2 alcanzado en 0.','Dominio R.'],
        conditions: {
          conexa: { type: 3 },
          dom: {
            range: [[[1,2],[4,5], 3, false, false]],
          },
          max:{
            maxTotal: 2,
            global:[0],    
          },
          min: { global: [-2.5,2.5],},
        },
      },
      artifact_6: {
        statementBottom: ['Dominio [ -3,∞ )', 'Rango [ -4,3 ]','f crece en ( -2,0 )','f decrece en ( 0,2 )'],
        conditions: {
          conexa: { type: 3 },
          dom: { range: [[-3, [4,5], 3, false, false]] },
          rang: {
            mulIntervals: [
              [[3,-4, false, false]]
            ],
          },
          upDown:{intervals:[[false,[0,2]]]},
          upDown:{intervals:[[true,[-2,0]]]},
        },
      },
      artifact_7: {
        statementBottom: ['Mínimo absoluto alcanzado en dos puntos.', 'Dominio [ -4,2 )'],
        conditions: {
          conexa: { type: 3 },
          dom: { range: [[-4, 2, 3, false, true]] },
          min: { global: 2},
        },
      },
      artifact_8: {
        //Igual que artefacto 2 y 5.
        statementBottom: ['Mínimo absoluto alcanzado en -1 y 3,5.','Máximo de f es 2 alcanzado en 0.','Dominio R.'],
        conditions: {
          conexa: { type: 3 },
          dom: {
            range: [[[1,2],[4,5], 3, false, false]],
          },
          max:{
            maxTotal: 2,
            global:[0],   
          },
          min: { global: [-1,3.5]},
        },
      },
      artifact_9: {
        statementBottom: ['Dominio ( -4,0 )','Rango [ -2,2 ]','f creciente en ( -2,-0.5)','Máximo de f es 2 alcanzado en -3'],
        conditions: {
          conexa: { type: 3 },
          dom: { range: [[-4, 0, 3, true, true]] },
          rang: {
            mulIntervals: [
              [[2,-2, false, false]]
            ],
          },
          upDown:{intervals:[[true,[-2,-0.5]]]},
          max:{
            maxTotal: 2,
            global:[-3],    
          },
        },
      },
      artifact_10: {
        //Problema: Acepta dos maximos globales.
        statementBottom: ['Mínimo absoluto alcanzado en dos puntos.', 'Un máximo absoluto alcanzado en 2.5'],
        conditions: {
          conexa: { type: 3 },
          max:{ global: [2.5],
            localcount:1,
          },
          min: { global: 2},
        },
      },
      artifact_11: {
        //Igual que artefacto 2,5 y 8.
        statementBottom: ['Máximo absoluto alcanzado en 0 y 3.','Mínimo de f es -1,5 alcanzado en 1.', 'Dominio R'],
        conditions: {
          conexa: { type: 3 },
          dom: {
            range: [[[1,2],[4,5], 3, false, false]],
          },
          max:{ global:[0,3] },
          min:{
            minTotal: -1.5,
            global:[1],    
          },
        },
      },
      artifact_12: {
        statementBottom: ['Dominio [ -3,4 ]','Rango ( -2,2 ]','f decreciente en (2,4)'],
        conditions: {
          conexa: { type: 3 },
          dom: { range: [[-3, 4, 3, false, false]] },
          rang: {
            mulIntervals: [
              [[2,-2, false, true]]
            ],
          },
          upDown:{intervals:[[false,[2,4]]]},
        },
      },
    };

seleccionados = localStorageSeleccionados("P2",1,18,3);
PintaSeleccionP2(seleccionados);

window.onload = main();

let intentos1, intentos2, intentos3;
let points, points2;

let validar = document.querySelectorAll('.check');
for (let i = 0; i < validar.length; i++) {
    validar[i].addEventListener( 'click', function(){
        switch(this){
            case validar[0]:
                intentos1++;
                console.log('Pulsado 1');
                points = def.artifact_13.points[0].map((p)=>[Number(p[0].X().toFixed(2)),Number(p[0].Y().toFixed(2))])
                console.log(points);
                //def.artifact_4.points = points;
                points2 = JSON.stringify(points);
                console.log(points2);    
                localStorage.setItem('puntos',points2);                
                localStorage.setItem('P3_Intentos1',intentos1);
                break;
            case validar[1]:
                intentos2++;
                console.log('Pulsado 2');
                points = def.artifact_13.points;
                console.log(points);
                //def.artifact_4.points = points;
                points2 = points;//JSON.stringify(points);
                console.log(points2);    
                localStorage.setItem('puntos',points2);
                localStorage.setItem('P3_Intentos2',intentos2);
                break;
            case validar[2]:
                intentos3++;
                console.log('Pulsado 3');
                points = def.artifact_13.points;
                console.log(points);
                //def.artifact_4.points = points;
                points2 = points;//JSON.stringify(points);
                console.log(points2);    
                localStorage.setItem('puntos',points2);
                localStorage.setItem('P3_Intentos3',intentos3);
                break;
        }
    });
}
    /*const board3SVG = document.getElementById('board_3').querySelector('svg');
    console.log(board3SVG);
    const sixthGElement = board3SVG.querySelector('g:nth-child(7)');
    const elevenElement = board3SVG.querySelector('g:nth-child(11)');
    const sixthGContent = sixthGElement.innerHTML;
    const elevenContent = elevenElement.innerHTML;
    console.log(sixthGContent);
    localStorage.setItem('sixthGElement', sixthGContent);
    localStorage.setItem('ElevenGElement',elevenContent);
});*/
/*const storedString = localStorage.getItem('myObjects');
const parsedArray = JSON.parse(storedString);*/
window.addEventListener('load', function() {
    const puntos = localStorage.getItem('puntos');
    //const puntos2 = JSON.parse(puntos);
    console.log(puntos);
    if(puntos)
        def.artifact_13.points = JSON.parse(puntos);

    const intentos1_LS = localStorage.getItem('P3_Intentos1');
    const intentos2_LS = localStorage.getItem('P3_Intentos2');
    const intentos3_LS = localStorage.getItem('P3_Intentos3');
    
    if (intentos1_LS)
        intentos1 = intentos1_LS
    else
        intentos1 = 0;
    if (intentos2_LS)
        intentos2 = intentos2_LS
    else
        intentos2 = 0;
    if (intentos3_LS)
        intentos3 = intentos3_LS
    else
        intentos3 = 0;
});
/*
    const savedSixthGElement = localStorage.getItem('sixthGElement');
    const savedElevenGElement = localStorage.getItem('ElevenGElement');
    let board3SVG =[];
    if(savedSixthGElement){
        board3SVG = document.getElementById('board_3').querySelector('svg').querySelector('g:nth-child(7)');
        //const newGElement = document.createElement('g');
        board3SVG.innerHTML = savedSixthGElement;
        //const seventhGElement = board3SVG.querySelector('g:nth-child(7)');
        //seventhGElement.insertBefore(newGElement, seventhGElement.firstChild);
    }
    if(savedElevenGElement){
        board3SVG = document.getElementById('board_3').querySelector('svg').querySelector('g:nth-child(11)');
        board3SVG.innerHTML = savedElevenGElement;
        //const ElevenGElement = board3SVG.querySelector('g:nth-child(11)');
        //ElevenGElement.insertBefore(newGElement, seventhGElement.firstChild);
    }
});*/

