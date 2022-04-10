class inglesClass_theReviewOfTheLiteratureExercises extends generalPage{
    constructor(pageName){
        super(pageName);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
    stages_ingles.topicsChoose.itemsValid=0;
      return `
      <div class="header-h2"><h2>Exercise 1</h2></div>
      <div class="topics-choose">
        <div class="pre-info"><p>Read the research question below and select the topics that you would use for the review of the literature, according to the topics and problems that can be perceived from this question. Read the concepts and click on the ones that you consider appropriate.</p>
        <p><strong>What is the impact of the language used in social media on academic writing among young learners?</strong></p>
        </div>
            <div class="topics-to-select">
                <button class="topic" onclick="stages_ingles.topicsChoose.show(this);">
                    Paraphrasing
                </button>
                <button class="topic" data-item="social-networking-site" onclick="stages_ingles.topicsChoose.show(this);">
                    Social networking sites
                </button>
                <button class="topic" data-item="abbreviations-and-acronyms" onclick="stages_ingles.topicsChoose.show(this);">
                    Abbreviations and acronyms
                </button>
                <button class="topic" data-item="the-language-of-internet" onclick="stages_ingles.topicsChoose.show(this);">
                    The language of internet
                </button>
                <button class="topic" onclick="stages_ingles.topicsChoose.show(this);">
                    Self-esteem and self-image
                </button>
                <button class="topic" onclick="stages_ingles.topicsChoose.show(this);">
                    Extrinsic motivation
                </button>
                <button class="topic" data-item="the-economy-of-language" onclick="stages_ingles.topicsChoose.show(this);">
                    The economy of language
                </button>
            </div>
            <div class="topics-selected">
                <div class="topic item-social-networking-site">
                    Social networking site
                </div>
                <div class="topic item-abbreviations-and-acronyms">
                    Abbreviations and acronyms
                </div>
                <div class="topic item-the-language-of-internet">
                    The language of internet
                </div>
                <div class="topic item-the-economy-of-language">
                    The economy of language
                </div>
            </div>
            <div class="text-center choose-well-done">
            <h3>Well done!</h3>
            <img src="./images/success.png" alt="Well Done" />
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
        'topics-choose.css|local'
    ]
}        
}

stagePage.pageContainerSet('theReviewOfTheLiteratureExercises',inglesClass_theReviewOfTheLiteratureExercises);