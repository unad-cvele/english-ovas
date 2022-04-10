class inglesClass_analyzingQuantitativeAndQualitativeData extends generalPage{
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
      <div class="header-h2"><h2>Analyzing Quantitative and Qualitative Data</h2></div>
      <img alt="Analyzing Quantitative and Qualitative Data" class="responsive" src="./images/files/analyzingQuantitativeAndQualitativeData.png" />
      <div class="text-center">
        <button class="btn-general" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this)">Show in text</button>
      </div>
      <div class="text-show-content">
            <p>Analyzing Quantitative and Qualitative Data</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
    }
}

stagePage.pageContainerSet('analyzingQuantitativeAndQualitativeData',inglesClass_analyzingQuantitativeAndQualitativeData);
