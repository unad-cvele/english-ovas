class inglesClass_samplingInResearch extends generalPage{
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
      <div class="header-h2"><h2>Sampling in Research</h2></div>
      <video class="responsive" src="./images/samplingInResearch.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-general">
          <p>En espera de la información y el video</p>
          
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

stagePage.pageContainerSet('samplingInResearch',inglesClass_samplingInResearch);