class inglesClass_learningGoalsOfThisResource extends generalPage{
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
      <div class="header-h2"><h2>Learning goal of this resource</h2></div>
      <img alt="Learning goals of this resource" class="responsive" src="./images/learningGoalsOfThisResource.png" />
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
        <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this)">Show in text</button>
        <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      <div class="text-show-content">
            <p>The main goal of this virtual learning object is to get knowledge about different epistemic models, methods, and types of research according to the perspective of the holistic approach of research. This knowledge will allow researchers to understand how this approach can be applied to the field of education.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}        
}

//let stages_ingles_learningGoalsOfThisResource = new inglesClass_learningGoalsOfThisResource('learningGoalsOfThisResource');

stagePage.pageContainerSet('learningGoalsOfThisResource',inglesClass_learningGoalsOfThisResource);