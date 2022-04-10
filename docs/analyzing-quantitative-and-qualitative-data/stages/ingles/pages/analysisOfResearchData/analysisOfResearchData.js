class inglesClass_analysisOfResearchData extends generalPage{
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
      <div class="header-h2"><h2>Analysis of research data</h2></div>
      <div class="text-general theHypotheticoDeductiveMethod">
      <div class="theHypotheticoDeductiveMethod__main_description">
        <p>Data analysis is the systematic process of curating, organizing, reducing and interpreting raw data to derive insights. This process helps in reducing a large chunk of data into smaller fragments, which makes sense to the research. Several statistical and logical techniques are applied to evaluate, condense and explain data.</p>
      </div>
          <div class="main-container-acordeon">
          <h3 style="color:#fff">General steps for analyzing data</h3>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Step 1. Cleaning data</button>
                <div class="text-acordeon">
                    <p>Irrespective of the type of data, the techniques and the purposes of the analysis, the first step to initiate the analysis process is to clean data. This means, to eliminate any outliers that may affect the final results and will help ensure that all data is truly relevant. This process of data cleaning is done since raw data is seldom usable in its current form: collected data might have incorrect or superfluous data, incompleteness or inconsistencies. These irregularities must be amended or removed.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Step 2. Analyzing data</button>
                <div class="text-acordeon">
                    <p>After curation and organization of data, it is now set to extract meaningful insights from it. Here, techniques and methods of data analysis are used to look for hidden patterns and relationships, and find insights and predictions.
                    Univariate or bivariate analysis, time-series analysis, and regression analysis are just a few types of data analysis techniques. Their application depend on what insights researchers are hoping to gain.
                    </p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Step 3. Interpreting data</button>
                <div class="text-acordeon">
                    <p>This involves interpreting the outcomes and presenting them in a manner that’s digestible for all types of audiences. Insights must be clear and unambiguous, so it is important to create visualizations by selecting the most appropriate charts and graphs that support findings and allow sharing the results.</p>
                    <p>Here it is important to clarify that the processes of <strong>analysis and interpretation</strong> are different, since the <u>former</u> deals with the ordering of the information, applying procedures to search for meanings or relationships in the study variables, while the <u>latter</u> deals with the implementation of the entire conceptual and problematic scaffolding in relation to the data already analyzed.</p>
                </div>
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
        'theHypotheticoDeductiveMethod.css|general'
    ]
}        
}


stagePage.pageContainerSet('analysisOfResearchData',inglesClass_analysisOfResearchData);