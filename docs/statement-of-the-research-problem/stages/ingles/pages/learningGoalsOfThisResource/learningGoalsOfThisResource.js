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
      <div class="header-h2"><h2>Learning goals of this resource</h2></div>
      <img alt="Learning goals of this resource" class="responsive" src="./images/learningGoalsOfThisResource.jpg" />
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
        <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this)">Show in text</button>
        <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      <div class="text-show-content">
            <p>This virtual learning object will help understand how to state a research problem, by means of practical guidelines, instances and exercises, with the aim of guiding the own problematization process as a researcher.</p>
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