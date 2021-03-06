class inglesClass_considerationsInDataAnalysis extends generalPage{
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
      <div class="header-h2"><h2>Considerations in data analysis</h2></div>
      <div class="text-general">
        <p>There are a number of issues that researchers should be cognizant of with respect to data analysis. In the process of analysis, researchers should:</p>
      </div>
      <div class="horizontal-items-audio">
      <ul class="wtree">
            <li>
                <button onclick="stages_ingles.popUpToDiscover.showHideCombined(this);" >One</button>
                <div class="single-audio">
                    <p>Have the necessary skills to analyze data. Some previous knowledge is needed to ensure the accuracy of the process.</p>
                </div>
            </li>
            <li>
                <button onclick="stages_ingles.popUpToDiscover.showHideCombined(this);" >Two</button>
                <div class="single-audio">
                    <p>Draw unbiased inference, based on the findings of the process, the accuracy of the implementation of the data collection methods and the clearness of the objectives and procedures.</p>
                </div>
            </li>
            <li>
                <button onclick="stages_ingles.popUpToDiscover.showHideCombined(this);" >Three</button>
                <div class="single-audio">
                    <p>Provide honest and accurate analysis. This and other ethical considerations must lead the research work.</p>
                </div>
            </li>
            <li>
                <button onclick="stages_ingles.popUpToDiscover.showHideCombined(this);" >Four</button>
                <div class="single-audio">
                    <p>Determine statistical significance to state that results from data generated by testing or experimentation are not likely to occur by chance but is instead likely to be attributable to a specific cause.</p>
                </div>
            </li>
            <li>
                <button onclick="stages_ingles.popUpToDiscover.showHideCombined(this);" >Five</button>
                <div class="single-audio">
                    <p>Demonstrate reliability and validity through the consistent stability, reproducibility, and accuracy of the data analysis process.</p>
                </div>
            </li>
        </ul>
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
        'horizontal-items-audio.css|local'
    ]
}        
}

stagePage.pageContainerSet('considerationsInDataAnalysis',inglesClass_considerationsInDataAnalysis);