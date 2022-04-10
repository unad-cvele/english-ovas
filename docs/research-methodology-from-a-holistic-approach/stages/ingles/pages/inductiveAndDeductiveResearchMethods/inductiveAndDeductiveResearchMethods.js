class inglesClass_inductiveAndDeductiveResearchMethods extends generalPage{
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
      <div class="header-h2"><h2>Inductive and deductive research methods</h2></div>
      <div class="text-general inductiveAndDeductiveResearchMethods">
      <h3>Difference between the inductive method and the hypothetico-deductive method</h3>
      <ul>
        <li>The inductive method aims at developing a theory. It begins with a set of empirical observations, seeking patterns in those observations, and then theorizing about those patterns.</li>
        <li>The deductive method aims at testing an existing theory. It begins with a theory, developing hypotheses from that theory, and then collecting and analyzing data to test those hypotheses.</li>
        <li>The inductive method moves from specific observations to broad generalizations, and the deductive method the other way around.</li>
      </ul>
      <p>Inductive and deductive approaches to research can be employed together for a more complete understanding of the topic that a researcher is studying.</p>
      <p>A larger research project begins with an inductive study (developing a theory). The inductive study is followed up with deductive research to confirm or invalidate the conclusion.</p>
      <p>The conclusion (theory) of the inductive study can be used as a starting point for the deductive study.</p>
        
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
        'inductiveAndDeductiveResearchMethods.css|general'
    ]
}        
}

//let stages_ingles_inductiveAndDeductiveResearchMethods = new inglesClass_inductiveAndDeductiveResearchMethods('inductiveAndDeductiveResearchMethods');

stagePage.pageContainerSet('inductiveAndDeductiveResearchMethods',inglesClass_inductiveAndDeductiveResearchMethods);