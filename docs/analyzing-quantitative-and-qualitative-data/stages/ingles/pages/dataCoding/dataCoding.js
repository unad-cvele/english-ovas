class inglesClass_dataCoding extends generalPage{
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
      <div class="header-h2"><h2>Data coding</h2></div>
      <iframe class="iframe-video-principal" src="https://www.youtube.com/embed/shontF-KnK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
        <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this,'noScrollIntoView')">Show in text</button>
        <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      <div class="text-show-content">
          <h4>Data coding</h4>
          <p>Coding data is assigning numbers, letters or symbols (called codes) to the observed or recorded modes of the variables that make up the database, as well as assigning codes to the missing values (those that have not been recorded or observed). </p>
          <p>Example: If the database includes the variable pets, a number or letter should be assigned to each one of the options presented in the data collection instrument. In the case of quantitative variables, the number of decimal places to be recorded must be defined.</p>
          <p>In this second example, we can see that every option of the questions has a code. These codes will be entered in a table to facilitate the analysis. In this way, we might be able to know, for instance, how many people answered Yes in question 1 and how many picked No. In question 2, the codification can help establish, as a general theory, how often teenagers are bullied at school.</p>
          <p>In the process of coding, the variables and units of observation must be first arranged in a table (generally the individuals from whom data are collected). There are two main general arrangements, the most frequent being to arrange the cases (generally the individuals) in rows and the variables in columns.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}        
}


stagePage.pageContainerSet('dataCoding',inglesClass_dataCoding);
