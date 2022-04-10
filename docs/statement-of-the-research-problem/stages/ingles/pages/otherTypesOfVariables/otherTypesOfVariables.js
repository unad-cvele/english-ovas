class inglesClass_otherTypesOfVariables extends generalPage{
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
      <div class="header-h2"><h2>Other types of variables</h2></div>
      <div class="text-general">
        <p>Classification of variables can be done based on different typologies. Check in the document below some of these typologies, definitions and examples.</p>
        <p class="text-center">
              <button 
                        class="btn-general" 
                         
                        onclick="window.open('./images/otherTypesOfVariables.pdf','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"
                    >
                    Download document
                    </button>
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
        'generalStage.css|general'
    ]
}
}

stagePage.pageContainerSet('otherTypesOfVariables',inglesClass_otherTypesOfVariables);