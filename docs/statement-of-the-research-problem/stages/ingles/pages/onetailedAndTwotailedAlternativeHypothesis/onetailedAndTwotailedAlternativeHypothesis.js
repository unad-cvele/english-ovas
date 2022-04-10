class inglesClass_onetailedAndTwotailedAlternativeHypothesis extends generalPage{
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
      <div class="header-h2"><h2>One-tailed and two-tailed alternative hypothesis</h2></div>
      <iframe width="100%" height="350" src="https://www.youtube.com/embed/9muWKhKqiks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="text-general">
        <p>Have a look at this video to find out more about one-tailed and two-tailed alternative hypothesis.</p>
        <p>Glen, S. (2014, November 4). One tailed test or two tailed test. [Video]. YouTube. https://www.youtube.com/watch?v=9muWKhKqiks&feature=emb_logo</p>
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

stagePage.pageContainerSet('onetailedAndTwotailedAlternativeHypothesis',inglesClass_onetailedAndTwotailedAlternativeHypothesis);