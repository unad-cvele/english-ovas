class inglesClass_conclusions extends generalPage{
    constructor(pageName){
        super(pageName);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
      return `
      <div class="header-h2"><h2>Analyzing quantitative and qualitative data</h2></div>
      <div class="research-ethics">
        
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/files/conclusions/conclusions-1.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <p>In this virtual resource we have addressed the importance of analyzing data as a paramount step in the research process since, depending on the quality of the analysis of data collected, results and resolution of the research problem can be achieved successfully.</p>
            </div>
        </div>
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/files/conclusions/conclusions-2.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <p>The process of data analysis was approached in this resource through the explanation of some concepts and procedures, the general steps to conduct data analysis in both qualitative and quantitative designs, some types of analysis, methods and tools for statistical analysis.
                </p>
            </div>
        </div>
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/files/conclusions/conclusions-3.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <p>The activities carried out in this resource allowed us to get understanding on the different processes to analyze several types of data through several types of procedures, which have
                helped us in the construction and reconstruction of our knowledge.
                </p>
            </div>
        </div>
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/files/conclusions/conclusions-4.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <p>This content is essential to develop our work as researchers since we will be able to apply  this acquired knowledge, with clear theoretical and methodological references, and thus
                be able to transform the social realities of our environment through our research proposals.
                </p>
            </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
        <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'research-ethics.css|general'
    ]
    }
}

//let stages_ingles_researchEthics = new inglesClass_researchEthics('researchEthics');

stagePage.pageContainerSet('conclusions',inglesClass_conclusions);
