class inglesClass_theResearchQuestions extends generalPage{
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
      <div class="header-h2"><h2>The research questions</h2></div>
      <img class="responsive" src="./images/theResearchQuestions.jpg" />
      <div class="text-general">
        
        <p>Generally, the research problem is formulated into a question which is a specific inquiry that the researcher seeks to provide a response to at the end of the study. The importance resides in the fact that the questions are answered to achieve the objectives of the study. Therefore, the research questions must be congruent with the research objectives.</p>
        <div class="text-center">
                <button class="btn-general button-popUpToDiscover" onclick="stages_ingles.popUpToDiscover.show(this);">
                  Click to find out more
                </button>
            </div>
            <div class="popUpToDiscover">
                  <div class="text-popUpToDiscover">
                  <p>Answers to research question are resulted from the analysis of the information
                  (data) collected and contain knowledge of patterns, rule, regularities of the object being
                  studied. Typically, a research question focuses on the research, determines the methodology and hypothesis, and guides all stages of inquiry, analysis, and reporting. With the right research questions, you will be able to gather useful information for your investigation.
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
        'generalStage.css|general'
    ]
}
}

stagePage.pageContainerSet('theResearchQuestions',inglesClass_theResearchQuestions);