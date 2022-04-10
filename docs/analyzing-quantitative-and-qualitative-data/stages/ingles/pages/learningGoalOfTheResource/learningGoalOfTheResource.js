class inglesClass_learningGoalOfTheResource extends generalPage{
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
      <div class="header-h2"><h2>Learning goal of the resource</h2></div>
      <img alt="learningGoalOfTheResource" class="responsive" src="./images/files/learningGoalOfTheResource.png" />
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
        <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this)">Show in text</button>
        <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      <div class="text-show-content">
            <p>Learning goal of the resource</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
    }
}


stagePage.pageContainerSet('learningGoalOfTheResource',inglesClass_learningGoalOfTheResource);