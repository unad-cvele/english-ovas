class inglesClass_theDialecticalCriticalMethod extends generalPage{
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
      <div class="header-h2"><h2>The dialectical critical method</h2></div>
      <div class="text-general theHypotheticoDeductiveMethod">
      <div class="theHypotheticoDeductiveMethod__main_description">
        <p>This method originates from the epistemic model of <strong>historical or dialectical materialism</strong> developed by Marx, for which to investigate is to study society in constant change, based on its internal contradictions that drive social phenomena (dialectic), and to analyze the origin and development of the facts (as part of the historical dynamics). Dialectical reason and social practice are the great instruments of this model for doing science. The method of research in dialectical materialism is oriented to research in social sciences and research problems arise from contradictions.</p>
        <p>A dialectic is when two seemingly conflicting things are true at the same time. Dialectics opposes the formal and fixed definition and understanding of a social issue and encourages us to understand the truth in totality rather than through a one-sided view.</p>
        <p>It is a critical and revolutionary method because it is not a means to produce thinking that celebrates existing society but is rather a means to produce consciousness of society as a product of human action that is thus historical rather than eternal, and that is thus transformable.</p>
        <p>Marx's method can have the following stages:</p>
      </div>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">1.	Description</button>
                <div class="text-acordeon">
                    <p>A stage of a detailed description of the situations to be studied.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">2.	Abstraction</button>
                <div class="text-acordeon">
                    <p>A stage of abstraction, by which the essential elements of the process are isolated and interpreted in terms of their contradictions.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">3.	Concretization</button>
                <div class="text-acordeon">
                    <p>A stage of progressive concretization, whereby, in the development, more and more particular elements are introduced and explanations are constructed.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">4.	Retrospection</button>
                <div class="text-acordeon">
                    <p>A stage, where one returns to describe the situations based on the explanations formulated based on the formulated explanations.</p>
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

//let stages_ingles_theDialecticalCriticalMethod = new inglesClass_theDialecticalCriticalMethod('theDialecticalCriticalMethod');

stagePage.pageContainerSet('theDialecticalCriticalMethod',inglesClass_theDialecticalCriticalMethod);