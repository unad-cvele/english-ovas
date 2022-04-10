class inglesClass_participatoryActionResearchMethod extends generalPage{
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
      <div class="header-h2"><h2>Participatory action research method</h2></div>
      <div class="text-general structuralAnalysisMethod">
      <div class="structuralAnalysisMethod__main_description">
        <p>This method originates from the epistemic model of <strong>sociological pragmatism</strong>, is based on the views of Mao Tse-tung, and is a derivation of dialectical materialism. For sociological pragmatism, the starting point of knowledge production is the sociohistorical defined human needs within concrete contexts. The purpose of knowledge lies in its possibility of <u>generating social transformation</u>. Bringing about positive social change is the predominant driving force.</p>
        <p>Participatory action research is a process of systematic inquiry, in which those who are experiencing a problematic situation in a community or workplace participate. The researcher and participants team up and participate in deciding the focus of knowledge generation, in collecting and analyzing information and in taking action to manage, improve or solve the problem.</p>
        <p>The stages of the participatory action research method are as follows:</p>
      </div>
          <div class="main-container-acordeon">  
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">1. Exploration and identification</button>
                    <div class="text-acordeon">
                        <p>The community is explored through meetings to identify basic needs. It is the community that decides what the relevant problems are and how they will be formulated.</p>
                    </div>
                </div>
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">2. Description of the problem</button>
                    <div class="text-acordeon">
                        <p>The main problem to address is described with its characteristics and assessment indicators. This involves specifying the magnitude and characteristics of the problem and for this purpose different participatory techniques can be used, this means, any social science research technique that does not involve separation between the researcher and those being investigated. Here, there is also an explanation of the factors responsible for the problem in its various manifestations.</p>
                    </div>
                </div>
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">3. Elaboration of the strategy</button>
                    <div class="text-acordeon">
                        <p>The strategy to face the problem is designed and implemented. Actions are developed, knowledge is built into practice.</p>
                        <p>In terms of the research process, in this stage both researcher and participants elaborate the means and techniques for data collection, code and analysis information, results are verified and the final reports are published.</p>
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

//let stages_ingles_participatoryActionResearchMethod = new inglesClass_participatoryActionResearchMethod('participatoryActionResearchMethod');

stagePage.pageContainerSet('participatoryActionResearchMethod',inglesClass_participatoryActionResearchMethod);