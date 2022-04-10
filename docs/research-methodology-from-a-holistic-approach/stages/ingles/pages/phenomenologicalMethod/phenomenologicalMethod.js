class inglesClass_phenomenologicalMethod extends generalPage{
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
      <div class="header-h2"><h2>Phenomenological method</h2></div>
      <div class="text-general">
          <p>Phenomenology can be considered as both an epistemic model and a research method. Its purpose is to attain knowledge based on the pure perception of the event under study, free in its interpretation of concepts, preconceptions or precognitions so that it can be written as it manifests itself to the consciousness.</p>
          <p>Phenomenology presupposes nothing: neither common sense, nor the natural world, nor scientific propositions, nor psychological experiences. It places itself before any belief and any judgment in order to simply explore the given.</p>
          <p>The purpose of the phenomenological approach is to illuminate the specific, to identify phenomena through how they are perceived by the actors in a situation. In the human sphere, this normally translates into gathering ‘deep’ information and perceptions through inductive, qualitative methods such as interviews, discussions and participant observation, and representing it from the perspective of the research participant(s) rather than the researcher.</p>
          <p>Phenomenological research has some overlaps with other essentially qualitative approaches including ethnography, hermeneutics and symbolic interactionism. Pure phenomenological research seeks essentially to describe rather than explain, and to start from a perspective free from hypotheses or preconceptions.</p>
          <p>In synthesis, the steps of the phenomenology method are:</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">1. Description</button>
                <div class="text-acordeon">
                    <p>The event (called phenomenon in this model), must be described as it presents itself, without analyzing or explaining. This description occurs thanks to intuition, defined as the apprehension of the event by the consciousness. Several techniques, mainly qualitative are used to gather information. The event of the study is described by the participants.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">2. Reduction</button>
                <div class="text-acordeon">
                    <p>The researcher sets aside for a moment his theories and previous knowledge in order to propitiate an original and different experience of the event. This leads to the perception of previously unseen aspects.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">3. Search for "essences"</button>
                <div class="text-acordeon">
                    <p>This consists of the search for meaning within the totality. That which connects the event with the universal and the invariant. General theories are set after analyzing information.</p>
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
        'generalStage.css|general'
    ]
}        
}

//let stages_ingles_phenomenologicalMethod = new inglesClass_phenomenologicalMethod('phenomenologicalMethod');

stagePage.pageContainerSet('phenomenologicalMethod',inglesClass_phenomenologicalMethod);