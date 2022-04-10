class inglesClass_actionResearchMethod extends generalPage{
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
      <div class="header-h2"><h2>Action research method</h2></div>
      <div class="text-general inductiveGeneralizationMethod">
          <p>This method originates from the epistemic model of <strong>pragmatism</strong> which main aim is to <u>solve problems</u>. Research is done under this model to create knowledge to solve practical problems.</p>
          <p>Elliot (2000) defines action research as the study of a social situation to try to improve the quality of action in that situation. It aims to provide elements of critical judgment for action, and the validity of the theories and hypotheses that it generates depends more on their usefulness in helping people act more intelligently than on "scientific tests of truth".</p>
          <p>The phases of the research method are:</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">1. Identification of the general idea</button>
                <div class="text-acordeon">
                    <p>This consists of identifying the situation to be changed or improved. It implies a previous approach to the context to clarify what is happening.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">2. Recognition and review</button>
                <div class="text-acordeon">
                    <p>It involves describing the facts. Once described, they are explained. It involves the elaboration of explanatory hypotheses.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">3. Structuring of the general plan</button>
                <div class="text-acordeon">
                    <p>This plan must count a revised statement of what is to be changed, the explanatory factors to be modified in order to improve the situation, negotiations to be carried out with stakeholders, the necessary resources, and the ethical framework.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">4. Planning of the stages to be developed</button>
                <div class="text-acordeon">
                    <p>At this phase, the exact course of action to be followed is decided, the details are made explicit and decisions are made related to the supervision of the process.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">5. Development and follow-up</button>
                <div class="text-acordeon">
                    <p>A sort of loop or spiral is generated which moves dynamically between execution and planning.</p>
                </div>
            </div>
            
        </div>
        <p>As the action plan (phase 4) is usually made up of several stages, each with its respective activities and resources, the first stage of the plan begins to be developed. During the development of the plan, the processes carried out and their results are evaluated. Based on the follow-up of the first stage, the second stage is adjusted. The next stage is developed and followed up to return to replan each new stage.</p>
        <p>Based on this, this method consists of a spiral of several self-reflective cycles: planning in order to initiate change, implementing the change (acting) and observing the process of implementation and consequences, reflecting on processes of change and re-planning, acting and observing, reflecting.</p>
        <p>For all that, action research is concerned with improvements to practice, the theoretical angle is also important as all research seeks to build theory. This, considering that action research is generally inductive rather than deductive – that is, the data collection builds rather than tests theory. The researcher may start with a particular theoretical position but should be open to what the research yields, and to open reflection. This openness, however, does not negate the importance of immersing oneself in the relevant literature, both content and methodology, in order to give a context to the problem.
        </p>
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
        'inductiveGeneralizationMethod.css|general'
    ]
}        
}

//let stages_ingles_actionResearchMethod = new inglesClass_actionResearchMethod('actionResearchMethod');

stagePage.pageContainerSet('actionResearchMethod',inglesClass_actionResearchMethod);