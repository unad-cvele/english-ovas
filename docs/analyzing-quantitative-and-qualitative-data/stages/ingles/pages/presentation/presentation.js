class inglesClass_presentation extends generalPage{
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
      <div class="header-h2"><h2>Presentation</h2></div>
      <video class="responsive" src="./images/files/presentation.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
        <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this,'noScrollIntoView')">Show in text</button>
        <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      <div class="text-show-content">
          <h4>Analyzing Quantitative and Qualitative Data</h4>
          <p>Data analysis involves the general process, and its different procedures, for analyzing data in order to provide some level of understanding, explanation, and interpretation of patterns and themes in textual and numerical data. Researchers look at the data to find meaning in it.</p>
          <p>Considering this, you will first approach a general outlook of quantitative and qualitative data and then, some general steps for their analysis will be presented. The types of analysis, the considerations and the explanation of concepts presented will allow you to understand the general process of data analysis. Finally, some specific explanations will be provided for the analysis of both qualitative and quantitative data.</p>

      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}        
}

//let stages_ingles_presentation = new inglesClass_presentation('presentation');

stagePage.pageContainerSet('presentation',inglesClass_presentation);
