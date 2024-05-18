class ProgressCircle {
  constructor(informationUser) {
    this.nodeParent = null;
    this.countStart = 0;
    this.currentProgress = 0;
    this.userInformation = informationUser;
    //this.getValue()
  }

  setNode(node) {
    this.nodeParent = node;

    const element = `
          <div class="progressBar">
          <div class="progressBar__circle">
              <span class="progressBar__number">0%</span>
          </div>
         
           </div>
          `;
    this.nodeParent.insertAdjacentHTML('afterbegin', element);
  }

  updateProgress(percent) { 
    setInterval(() => {
      if (this.currentProgress > percent) {
        clearInterval();
      } else {
        this.nodeParent.querySelector(
          '.progressBar'
        ).style.background = `conic-gradient(#00ff11 ${
          this.currentProgress * 3.6
        }deg, #fff 0deg)`;
        this.nodeParent.querySelector(
          '.progressBar__number'
        ).textContent = `${this.currentProgress}%`;
        this.currentProgress += 1;
        //console.log(this.currentProgress);
      }
    }, 50);
  }

  //:::::::::::::::::::::::::::::::||funcion dejada para cuando sea dinamico||:::::::::::::::::::::::::::::::::::::::::::

  /* async getValue(){
          let percent = 20
          try{
              const options = {
                  idMoodle:this.userInformation.idMoodle,
                  shortName: this.userInformation.shortName,
                  chapter: this.userInformation.chapter
              }
              const result = await fetch('https://unerg.alcaravan.com.ve:3031/movil/sync',{
                  method:'POST',
                  headers: {
                      "Content-Type": "application/json"
                    },
                  body:JSON.stringify(options)
              }) 
              
              const data = await result.json()    
             
             
              const informationPage = data[`${this.userInformation.chapter}`][this.userInformation.page]
              const {numberArtifacts,artifactsFalse,artifactsTrue} = informationPage
  
              console.log(parseInt(numberArtifacts),artifactsFalse.length,artifactsTrue.length);
              console.log('data: ', informationPage);
              const succesPercent = artifactsTrue.length / parseInt(numberArtifacts) * 100
              console.log('porcentaje de correctos: ',succesPercent, '%');
              percent = succesPercent
          }catch(e){
              console.warn('ERROR EN LA PETICION:   ',e)
          }
   
          this.updateProgress(percent)
          return null
      } */
}


class ProgressBar{
  instance = false
  constructor(){
    this.nodeParent = null;
    this.countStart = 0;
    this.currentProgress = 0;
    if(ProgressBar.instance) return ProgressBar.instance
    
    ProgressBar.instance = this
    
  }

  setNode(node){

    this.nodeParent = node;
    
    const element = `
        <section class="containerLinealProgress">
        <div class="linealProgress">
            <div class="linealProgress__progress">
            </div>
            <span class="linealProgress__percent"></span>
        </div>
    </section>
        `;
        ProgressBar.instance.nodeParent.insertAdjacentHTML('afterbegin', element);
  }
    
  updateProgress(percent) {
    let x = 1
    const y =setInterval(()=>{
      
      if( ProgressBar.instance.currentProgress >= percent){
        clearInterval(y);
      }{

        ProgressBar.instance.nodeParent.querySelector(
          '.linealProgress__progress '
        ).style.width =   ProgressBar.instance.currentProgress+'%'
        ProgressBar.instance.nodeParent.querySelector('.linealProgress__percent').textContent =  ProgressBar.instance.currentProgress + '%'
        ProgressBar.instance.currentProgress += 1;
      }
    },20)
  }

  updateListSucces

}





async function generateProgress(dataElements = '') {

  let dataArtifactsTrue = [];
  

  if (typeof window.Android !== 'undefined') {
    
    console.log('-- mobile option --');
    let data = null
    // const artifactsTrue = dataElements?.split("//");
    if(typeof dataElements == 'string') data = JSON.parse(dataJson)
    else data = dataElements
   
    //const params = JSON.parse(dataJson)

    const {artifactsTrue} = data

    if (!artifactsTrue) {
      return;
    }
    artifactsTrue.forEach((nameArtifact) => {
      createProgressBorder(nameArtifact);
    });
  } else {
    const nodeUser = document.querySelector('#idMoodle');
    const idMoodle = nodeUser?.dataset?.idmoodle;

    let dataMicroserviceURL =
      document
        .querySelector('#idMoodle')
        ?.dataset?.microservice?.replace(/[ ]/g, '') ?? false;
    if (!dataMicroserviceURL) {
      return;
    }
    const data = await petition(`${dataMicroserviceURL}/movil/sync`);
    

    if (data.error) {
      throw data.error;
    }
    
    updateProgress({data,idMoodle})
  }
}

function updateProgress({data = null,nameNewArtifactTrue = null,idMoodle}){
  let artifactsTrue = null;
  let numberArtifacts = null;
  let dataProgressArtifact = {}

  if(data == null){
    //'logica desde el localStorage'
    const dataProgressArtifact = JSON.parse(localStorage.getItem(`user_${idMoodle}`))
    artifactsTrue = dataProgressArtifact?.artifactsTrue
    numberArtifacts = dataProgressArtifact?.numberArtifacts
    
    if(nameNewArtifactTrue != null && !artifactsTrue.includes(nameNewArtifactTrue)){
      artifactsTrue.push(nameNewArtifactTrue)
      artifactsTrue.sort()

      const generalProgressLocal =
      (artifactsTrue.length / parseInt(numberArtifacts)) * 100;

 
      ProgressBar.instance.updateProgress(generalProgressLocal)
      
    }

  }else{
    artifactsTrue = data.artifactsTrue
    numberArtifacts = data.numberArtifacts

    dataProgressArtifact = JSON.parse(localStorage.getItem(`user_${idMoodle}`)) ?? {}

    const generalProgress =
    (artifactsTrue.length / parseInt(numberArtifacts)) * 100;
    
    createProgressCard(generalProgress, artifactsTrue);
  }

  const dataToLocalStorage = {
    numberArtifacts,
    artifactsTrue,
  }

  localStorage.setItem(`user_${idMoodle}`, JSON.stringify(dataToLocalStorage))


    artifactsTrue.forEach((nameArtifact) => {
      createProgressBorder(nameArtifact);
    });
    
    updateListSucces(artifactsTrue)
}

function createProgressBorder(nameArtifact) {
  const element = seachElement(nameArtifact);
  if (element !== null) {
    element.classList.add('artifactTrue');
  }
  return true;
}

function createProgressCard(generalProgress, artifactsTrue) {
  const template = `<div class="referencePosition">
      <div class="progressContainer">
          <span class="user progressBarTilte">Progreso de Página
            <span class = "min_progress"></span>
          </span>
          <div class="contentProgress" >
              <div class="progressElement" data-type="general"></div>
              <div class = "containerListSuccess" >
                  <div class="progressElement listArtifactSuccess" data-type="listSucces">
                  </div>
                  <button class="moreList ">
                      <div class="showMoreBtn__icon upIcon"></div>
                  </button>
              </div>
          </div>
          
          
  
      </div>
  </div>`;

  const container = document.querySelector('.cardProgress');

  if (container === null) {
    return null;
  }

  container.insertAdjacentHTML('afterbegin', template);
  const containerElement = document.querySelector('.progressContainer');
  containerElement.style.display = 'flex';


  containerElement.setAttribute('data-maximize','true')

  containerElement.addEventListener('click', e =>{

    if(containerElement.dataset.maximize == 'false'){
      openCard(containerElement)
    }

  })  

  const btnMoreSucces = document.querySelector('.moreList');
  const btnMin = document.querySelector('.min_progress');
  const listSucces = document.querySelector(
    '.progressElement[data-type = \'listSucces\']'
  );

  const iconBtn = document.querySelector('.showMoreBtn__icon');
  const minContent = document.querySelector('.contentProgress');

  btnMoreSucces.addEventListener('click', (e) => {
    e.preventDefault();
    listSucces.classList.toggle('heightAuto');
    iconBtn.classList.toggle('rotate');
  });

  btnMin.addEventListener('click', (e) => {
    //minContent.classList.add("minContentProgrees");
    if(containerElement.dataset.maximize == 'true'){
      closedCard(containerElement)
      e.stopPropagation()
    }

    //btnMin.querySelector(".showMoreBtn__icon").classList.toggle("rotate");
  });

  window.addEventListener('scroll', () => {
    const aux = containerElement.getBoundingClientRect();
    if (aux.y < 1) {
      containerElement.classList.add('fixedBar');    
      containerElement.classList.add(containerElement.dataset.maximize == 'true'? 'fixedBar--open' : 'fixedBar--closed' )
    } else if (
      containerElement.classList.contains('fixedBar') &&
      document.querySelector('.referencePosition').getBoundingClientRect().y > 1
    ) {//cuando esta
      
      containerElement.classList.remove('fixedBar');
      containerElement.classList.remove('fixedBar--open');
      containerElement.classList.remove('fixedBar--closed');
      openCard(containerElement)
    }
  });

  /*     const progressCircleObject = new ProgressCircle();
  progressCircleObject.setNode(document.querySelector(".progressCircle"));
  progressCircleObject.updateProgress(generalProgress);
 */

  const linealProgress = new ProgressBar()

  linealProgress.setNode(document.querySelector('.progressElement'))
  linealProgress.updateProgress(generalProgress);
  listSucces.appendChild(createListSucces(artifactsTrue));



  const links = document.querySelectorAll('.linked_Artifact')
  
  links.forEach(link => {
    link.addEventListener('click',(e)=>{
      closedCard(containerElement)
      e.stopPropagation()
    })
  })

  return linealProgress;
}


function updateListSucces(artifactsTrue){
  
  const listSucces = document.querySelector(
    '.progressElement[data-type = \'listSucces\']'
  );

  listSucces.textContent = ''
  listSucces.appendChild(createListSucces(artifactsTrue));
}


function createListSucces(artifactsTrue) {
  const fragment = new DocumentFragment();
  artifactsTrue.sort();
  artifactsTrue.forEach((nameArtifact, index) => {
    const div = document.createElement('div');


    const link = document.createElement('a');

    div.classList.add('successArtifact__item');
    link.classList.add('linked_Artifact')
    link.href = `#${nameArtifact}`;

    link.textContent = nameArtifact.replace('artifact_', 'Artefacto ');

    div.appendChild(link);
    div.classList.add('listOfProgressArtifact')
   
    fragment.appendChild(div);
  });

  return fragment;
}

async function petition(endPoint) {
  const nodeUser = document.querySelector('#idMoodle');

  if (nodeUser == null) {
    return {
      error: 'no hay contenedor con los datos para la petición',
      response: null,
    };
  }

  const containerPage = document.querySelector('#container');
  const definitionUrl = containerPage.getAttribute('data-definitionUrl');
  const parseInfo = definitionUrl.split('/');
  const chapter = parseInfo[0].replace(':cap', 'chapter');

  const options = {
    idMoodle: nodeUser?.dataset?.idmoodle,
    shortName: nodeUser?.dataset?.shortname.replace(' ', ''),
    chapter,
  };
 
  try {
    const result = await fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    });

    if (result.ok) {
      const data = await result?.json();
      const page = parseInfo[1].replace(':pag', 'page');
      const informationPage = data[`${chapter}`][page] ?? null;
      return informationPage;
    }else{'aqui'}
    
  } catch {
    return {
      error: 'error, la petición no pudo ser realizada',
      response: null,
    };
  }
}

function openCard(containerElement){
  if(containerElement.classList.contains('fixedBar--closed')){
    containerElement.classList.remove('fixedBar--closed')
    containerElement.classList.add('fixedBar');
    containerElement.classList.add('fixedBar--open');
  }
  containerElement.classList.remove('minContentProgrees')
  containerElement.setAttribute('data-maximize','true') 
}


function closedCard(containerElement){
 
  if(containerElement.classList.contains('fixedBar')){
    containerElement.classList.remove('fixedBar--open')
    containerElement.classList.add('fixedBar');
    containerElement.classList.add('fixedBar--closed');
  }
  containerElement.classList.add('minContentProgrees');
  containerElement.setAttribute('data-maximize','false')
}

function seachElement(nameArtifact) {
  let element = null;
  const selectors = ['.', '#'];
  const dataSets = ['artifact', 'ejercicio'];

  const elementDom = document.querySelector(`.${nameArtifact}, #${nameArtifact}`);
  element = elementDom !== null ? elementDom : element;
 

  if (element === null) {
    const elementDom = document.querySelector(
      `[data-artifact=${nameArtifact}],[data-ejercicio=${nameArtifact}]`
    );
    element = elementDom !== null ? elementDom : element;
  }

  if (element !== null) return element;
  return null;
}

//window.Android = {} //descomenta para pasar a version mobile

const interval = setInterval((e) => {
  if (seachElement('artifact_1')) {
    if (typeof window.Android == 'undefined') {
      console.log('-- Loaded the Artifact --');
      generateProgress();
      clearInterval(interval);
    }
  }
}, 200);


function updateProgressBorder(artifactsTrue = []){
 /*  artifactsTrue.forEach((nameArtifact) => {
    createProgressBorder(nameArtifact);
  }); */
  return true
}
