class inglesClass extends generalStage{
  constructor(generalScenario){
    super(generalScenario);
  }
  addCssClass(){
    return [
      'stage_general',
        'stage-pages-general'
    ]
  }
  content(){
      return `
      
      <div class="general">
        <header>
        <div id="ghost-mobile-menu" class="ghost-mobile-menu"></div>
        <a href="#menu" class="button-menu-principal">
            <div class="hamburguer">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="menu-text">Menú</div>
        </a>
            <div> 
                <h1>Theoretical and Methodological Frameworks in Research</h1>
            </div>
        </header>
        <a id="accesibility-main-menu-access" class="accesibility-main-menu-access" href="#">Navegar directamente en el menú</a>  
        <main>

        </main>
      </div>
      <div class="logo-UNAD-container">
          <img class="responsive logo-unad" src="./images/logoUNAD.png" />
        </div>
      <div class="navigation">
      
        <nav>
        
          <ul>
            <li><strong>Theoretical and Methodological Frameworks in Research</strong></li>
            <li>
              <a href="#technicalData" class="active">Technical data</a>
            </li>
            <li>
              <a href="#learningGoalsOfThisResource">Learning goals of this resource</a>
            </li>
            <li>
              <a href="#theReviewOfTheLiterature">The Review of the Literature</a>
            </li>
            <li>
              <a href="#typesOfLiterature">- Types of literature</a>
            </li>
            <li>
              <a href="#stepsToConductALiteratureReview">- Steps to conduct a literature review</a>
            </li>
            <li>
              <a href="#theReviewOfTheLiterature_4">- How can I structure the body of the literature review?</a>
            </li>
            <li>
              <a href="#theReviewOfTheLiteratureExercises">- Exercise 1</a>
            </li>
            <li>
              <a href="#theReviewOfTheLiteratureExercises_2">- Exercise 2</a>
            </li>
            <li>
              <a href="#theTheoreticalFramework">The Theoretical Framework</a>
            </li>
            <li>
              <a href="#theConceptualFramework">The Conceptual Framework</a>
            </li>
            <li>
              <a href="#theoreticalAndConceptualFrameworkExercise">Theoretical and conceptual framework: exercise</a>
            </li>
            <li>
              <a href="#samplingInResearch">Sampling in research</a>
            </li>
            <li>
              <a href="#dataCollection">Data Collection</a>
            </li>
            <li>
              <a href="#primaryAndSecondaryResearchData">Primary and secondary research data</a>
            </li>
            <li>
              <a href="#quantitativeAndQualitativeResearchData">Quantitative and qualitative research data</a>
            </li>
            <li>
              <a href="#quantitativeData">Quantitative Data</a>
            </li>
            <li>
              <a href="#qualitativeData">Qualitative Data</a>
            </li>
            <li>
              <a href="#instrumentsAndTechniquesForDataCollection">Instruments and techniques for data collection</a>
            </li>
            <li>
              <a href="#issuesOnDataGatheringMethods">Issues on data gathering methods</a>
            </li>
            <li>
              <a href="#principlesForValidatingResearchMethods">Principles for validating research methods</a>
            </li>
            <li>
              <a href="#researchEthics">Research Ethics</a>
            </li>
            <li>
              <a href="#bibliography">Bibliography</a>
            </li>
            <li>
              <a href="#credits">Credits</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="close-main-menu">
          <button> Close menú </button>
        </div>
      
      `;
  }
  hide(){
    this.divContainer.classList.add('hide');
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'generalStagePage.css|general'
    ]
  }
  importJSFiles(){
    importJS.busy=false;
    stagePage.get('technicalData');
    //stagePage.get('bibliography');
    this.menu= new pageMenuListenersClass('stage_'+stage.stageName);
    this.popUpToDiscover= new popUpToDiscoverClass;
    this.popUpToDiscoverTimeline= new popUpToDiscoverTimelineClass;
    this.topicsChoose= new topicsChooseClass;
    this.acordeonList= new acordeonListClass;
   // stagePage.get('researchProblemsQuestionsAndObjectivesExercise');
   
  }
  show(){
    this.divContainer.classList.remove('hide');
  }
}

var stages_ingles = new inglesClass('ingles');