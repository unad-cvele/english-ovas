class inglesClass_actionResearchAndParticipatoryActionResearchMethods extends generalPage{
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
      <div class="header-h2"><h2>Action research and participatory action research methods</h2></div>
      <div class="text-general inductiveAndDeductiveResearchMethods">
      <h3>Difference between the action research method and the participatory action research method</h3>
      <p>Action Research (AR) assumes that the generation of knowledge involves changes in reality, but these changes are not oriented towards radical social transformation, but simply to the solution of specific problems within the same social model.</p>
      <p>Participatory action research (PAR), advocates for a deep change that transforms people’s lives.</p>
      <p>In AR the process is entirely carried out by the researcher. Research is conducted on participants, so their participation is controlled and thus limited.</p>
      <p>In PAR the researcher is only a facilitator and the process is developed by the individuals themselves under investigation. Research is conducted with participants.</p>
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

stagePage.pageContainerSet('actionResearchAndParticipatoryActionResearchMethods',inglesClass_actionResearchAndParticipatoryActionResearchMethods);