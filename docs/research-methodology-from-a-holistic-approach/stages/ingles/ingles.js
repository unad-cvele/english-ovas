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
                <h1>Research Methodology from a Holistic Approach</h1>
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
            <li><strong>Research Methodology from a Holistic Approach</strong></li>
            <li>
              <a href="#technicalData" class="active">Technical data</a>
            </li>
            <li>
              <a href="#learningGoalsOfThisResource">Learning goal of this resource</a>
            </li>
            <li>
              <a href="#presentation">Presentation</a>
            </li>
            <li>
              <a href="#Pre_knowledge">Pre-knowledge</a>
            </li>
            <li>
              <a href="#definitionOfConcepts">Definition of concepts</a>
            </li>
            <li>
              <a href="#inductiveGeneralizationMethod">Inductive Generalization Method</a>
            </li>
            <li>
              <a href="#theHypotheticoDeductiveMethod">The hypothetico-deductive method</a>
            </li>
            <li>
              <a href="#inductiveAndDeductiveResearchMethods">Inductive and deductive research methods</a>
            </li>
            <li>
              <a href="#structuralAnalysisMethod">Structural analysis method</a>
            </li>
            <li>
              <a href="#ethnographicMethod">Ethnographic method</a>
            </li>
            <li>
              <a href="#theDialecticalCriticalMethod">The dialectical critical method</a>
            </li>
            <li>
              <a href="#actionResearchMethod">Action research method</a>
            </li>
            <li>
              <a href="#participatoryActionResearchMethod">Participatory action research method</a>
            </li>
            <li>
              <a href="#actionResearchAndParticipatoryActionResearchMethods">Action research and participatory action research methods</a>
            </li>
            <li>
              <a href="#phenomenologicalMethod">Phenomenological method</a>
            </li>
            <li>
              <a href="#typesOfresearch">Types of research</a>
            </li>
            <li>
              <a href="#epistemicModels">Epistemic models</a>
            </li>
            <li>
              <a href="#researchMethods">Research Methods</a>
            </li>
            <li>
              <a href="#conclusions">Conclusions</a>
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