class inglesClass_inductiveGeneralizationMethod extends generalPage{
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
      <div class="header-h2"><h2>Inductive Generalization Method</h2></div>
      <div class="text-general inductiveGeneralizationMethod">
          <p>When researching in any field, it is common that researchers adopt some methods that guide the research path. Conventionally, different methods have been applied in the field of education, such as ethnography, action research, among others, so in this resource, we will study some of those methods by comparing and associating them with epistemic models.</p>
          <h3>The method of inductive generalization</h3>
          <p>This method originates from the epistemic model of <strong>empiricism</strong>, founded by Francis Bacon, who considers <u>experience</u> as the only source of knowledge. It is based on the direct and natural <u>observation</u> of facts, and the mental process it uses is fundamentally inductive. There is a clear theory of the inductive process, which consists of arriving at a generalization by systematically grouping particular observations. This generalization refers to the theories that are proposed towards the end of the research process as a result of observations.</p>
          <p>The method of inductive generalization of empiricism might comprise the following stages:</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">1. Observation of facts</button>
                <div class="text-acordeon">
                    <p>Direct and natural observation of facts is the starting point of the method of empiricism. This observation must be made leaving aside prejudices. No theories or hypotheses would apply in inductive studies at the beginning of the research since the researcher is not sure about the type and nature of the research findings until the study is completed.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">2. Description of what is observed</button>
                <div class="text-acordeon">
                    <p>Describing in detail the observed facts and recording such descriptions. Different recording techniques and tools can be used by the researcher.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">3. Classification of the characteristics</button>
                <div class="text-acordeon">
                    <p>The researcher manages the information so he identifies the main characteristics of the gathered data. The observed characteristics are organized, compared and classified in order to be analyzed.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">4. Identification of regularities</button>
                <div class="text-acordeon">
                    <p>The researcher must be able to find aspects that are recurrent in the observed facts. Patterns, resemblances and regularities in experience (premises) are observed in order to reach conclusions (or to generate theory).</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">5. Generalization</button>
                <div class="text-acordeon">
                    <p>This last step consists of constructing general concepts and laws (theories) from the regularities found in the observed facts. Theories are built up to explain the phenomenon studied.</p>
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
        'inductiveGeneralizationMethod.css|general'
    ]
}        
}

//let stages_ingles_inductiveGeneralizationMethod = new inglesClass_inductiveGeneralizationMethod('inductiveGeneralizationMethod');

stagePage.pageContainerSet('inductiveGeneralizationMethod',inglesClass_inductiveGeneralizationMethod);