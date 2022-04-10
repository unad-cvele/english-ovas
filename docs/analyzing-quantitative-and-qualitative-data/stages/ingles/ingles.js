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
                <h1>Analyzing Quantitative and Qualitative Data</h1>
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
            <li><strong>Analyzing Quantitative and Qualitative Data</strong></li>
            <li>
              <a href="#analyzingQuantitativeAndQualitativeData" class="active">Analyzing Quantitative and Qualitative Data</a>
            </li>
            <li>
              <a href="#learningGoalOfTheResource">Learning goal of the resource</a>
            </li>
            <li>
              <a href="#presentation">Presentation</a>
            </li>
            <li>
              <a href="#Pre_knowledge">Pre-knowledge</a>
            </li>
            <li>
              <a href="#quantitativeData">Quantitative Data</a>
            </li>
            <li>
              <a href="#qualitativeData">Qualitative Data</a>
            </li>
            <li>
              <a href="#analysisOfResearchData">Analysis of research data</a>
            </li>
            <li>
              <a href="#typesOfDataAnalysis">Types of data analysis</a>
            </li>
            <li>
              <a href="#processingDataFromSurveysAndQuestionnairesForAnalysis">Processing data from surveys and questionnaires for analysis</a>
            </li>
            <li>
              <a href="#dataCoding">Data coding</a>
            </li>
            <li>
              <a href="#tabulation">Tabulation</a>
            </li>
            <li>
              <a href="#crosssectionalAndLongitudinalStudies">Cross-sectional and longitudinal studies</a>
            </li>
            <li>
              <a href="#analysisMethodsForQuantitativeData">Analysis Methods for Quantitative Data</a>
            </li>
            <li>
              <a href="#analyzingQuantitativeData">Analyzing quantitative data</a>
            </li>
            <li>
              <a href="#typesOfStatisticalAnalysis">Types of statistical analysis</a>
            </li>
            <li>
              <a href="#analyzingQualitativeData">Analyzing qualitative data</a>
            </li>
            <li>
              <a href="#analysisMethodsForQualitativeData">Analysis Methods for Qualitative Data</a>
            </li>
            <li>
              <a href="#statisticalSoftwarePrograms">Statistical software programs</a>
            </li>
            <li>
              <a href="#considerationsInDataAnalysis">Considerations in data analysis</a>
            </li>
            <li>
              <a href="#selfassessment">Self-assessment</a>
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
    stagePage.get('analyzingQuantitativeAndQualitativeData');
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