class inglesClass_tabulation extends generalPage{
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
      <div class="header-h2"><h2>Tabulation</h2></div>
      <div class="text-general structuralAnalysisMethod">
      <div class="structuralAnalysisMethod__main_description">
        <p>To tabulate is to count the units that are placed in each category of a variable (simple or univariate tabulation) or the units that are placed simultaneously in certain categories of two or more variables (cross tabulation or bivariate or multivariate tabulation).</p>
        <p>The above requires to determine in advance which results of the variables are to be presented and which relationships between them are to be analyzed, in order to provide an answer to the problem and the objectives formulated.</p>
        <p>Tabulation can be done manually when the questionnaire is small and is carried out by simply counting the data, or computerized, when the information collected in the surveys is very extensive and requires, for its efficient use, the performance of multiple combined classifications between variables.</p>
        <p>A survey tabulator can perform the following types of analysis:</p>
      </div>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Frequency tables</button>
                <div class="text-acordeon">
                    <p>This is a very easy way to group data. These tables indicate the number of people who were surveyed and who provided each possible answer to the questions asked.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Cross tabulations</button>
                <div class="text-acordeon">
                    <p>This makes data analysis more understandable. The job is to examine the answers to one question and relate them to the answers to other questions.</p>
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
        'structuralAnalysisMethod.css|general'
    ]
}        
}

stagePage.pageContainerSet('tabulation',inglesClass_tabulation);