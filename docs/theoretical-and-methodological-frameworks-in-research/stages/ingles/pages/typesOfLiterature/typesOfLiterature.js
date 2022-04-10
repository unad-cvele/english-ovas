class inglesClass_typesOfLiterature extends generalPage{
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
      <div class="header-h2"><h2>Types of literature</h2></div>
      <div class="text-general"><p>Click on the icons below the titles to listen to more information.</p></div>
      <div class="conceptual-map">
        <div class="secondary-boxes-container">
            <div class="general-box secondary-box-container">
                <div class="secondary-box secondary-box-content">
                <audio controls="" class="general">
              <source src="./images/Diapositiva4-2.mp3" type="audio/mpeg">
              Your browser does not support the audio tag.
          </audio>
                    <h3>What kind of literature can I find?</h3>
                    <h4>Primary Literature</h4>
                    <p>Original research studies, based on direct observation, statistical records, interviews, or experimental methods. They contain original research data, and are usually published in peer-reviewed journals.</p>
                    <h4>Secondary Literature</h4>
                    <p>Interpretations and evaluations that are derived from or refer to the primary source literature. Primary literature is synthesized, generalized, and integrated with new research.</p>
                    <h4>Tertiary Literature</h4>
                    <p>Collection of primary and secondary sources such as textbooks, encyclopedia articles, and guidebooks or handbooks with the purpose of providing an overview of key research findings and an introduction to principles and practices within the discipline.</p>
                </div>
                <div class="text-center hand"><img src="./images/hand-down.png" alt="Hand down"></div>
                <div class="popup-open-button"><button class="btn-general button-popUpToDiscover" onclick="stages_ingles.popUpToDiscover.show(this);">
                    How to identify primary literature or empirical articles?
                </button></div>
                
                <div class="popUpToDiscover">
                    <div class="text-popUpToDiscover">
                    <div class="close-button-container"><button onclick="stages_ingles.popUpToDiscover.hide(this);">X</button></div>
                        <p>To identify an article based on empirical research, look for the following characteristics:</p>
                        <p>The article is published in a <u>peer-reviewed journal.</u></p>
                        <p>The article includes original <u>charts, graphs, or statistical analysis.</u></p>
                        <p>The article is <u>substantial in size</u>, likely to be more than 5 pages long.</p>
                        <p>The article contains the following parts (the exact terms may vary): <u>abstract, introduction, methods, results, discussion, references.</u></p>
                    </div>
                </div>
            </div>
            <div class="general-box secondary-box-container">
                <div class="secondary-box secondary-box-content">
                <audio controls="" class="general">
              <source src="./images/Diapositiva4-1.mp3" type="audio/mpeg">
              Your browser does not support the audio tag.
          </audio>
                    <h3>What else do I need to consider about the lit review?</h3>
                    <p>Check these statements and consider them when developing the review:</p>
                    <p>Length and details of the review, number of citations, and whether it would include all relevant material or just recent material.</p>
                    <p>Search of the literature in different related disciplines.
                    Literature review in English language or in other languages too.
                    </p>
                    <p>Review of methodological designs, the research problem, and other components of the whole study.</p>
                    <p>Inclusion in the review of the most cited references.</p>
                    <p>The scope of your review will depend on your topic and discipline.</p>
                </div>
                
            </div>
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
        'conceptual-map.css|general'
    ]
}        
}

stagePage.pageContainerSet('typesOfLiterature',inglesClass_typesOfLiterature);