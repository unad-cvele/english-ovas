class inglesClass_technicalData extends generalPage{
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
      <div class="header-h2"><h2>Research Methodology from a Holistic Approach</h2></div>
      <img alt="Research Methodology from a Holistic Approach" class="responsive" src="./images/technicalData.png" />
      <div class="text-center">
        <button class="btn-general" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this)">Show in text</button>
      </div>
      <div class="text-show-content">
            <p>Research Methodology from a Holistic Approach</p>
            <p>School of Education Sciences</p>
            <p>Master of Pedagogical Mediation in English Language Learning</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
    }
}

//let stages_ingles_technicalData = new inglesClass_technicalData('technicalData');

stagePage.pageContainerSet('technicalData',inglesClass_technicalData);