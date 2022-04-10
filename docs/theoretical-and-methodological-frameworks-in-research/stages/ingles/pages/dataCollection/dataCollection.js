class inglesClass_dataCollection extends generalPage{
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
      <div class="header-h2"><h2>Data Collection</h2></div>
      <div class="cards-audio-module">
            <div class="start">
                <p>Research data is any information that has been collected, observed, generated or created to validate original research findings.</p>
                <p>Data collection is the systematic and methodical process of gathering, measuring, and analyzing information from different sources so as to answer the stated research questions, test hypothesis, and evaluate outcomes of the research.</p>
                <p>Depending on the aims of the research, the researcher has to consider the type of data to be collected, the techniques to be implemented and the sources to obtain the information. These sources ought to include the sample frame, but they also might refer to documents, direct observation of events, and so on.</p>
                <p>During this process, the researcher should also decide how data will be organized and stored and how ethical procedures will be ensured.</p>
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
        'generalStage.css|general',
        'cards-audio-container.css|general'
    ]
}        
}

stagePage.pageContainerSet('dataCollection',inglesClass_dataCollection);