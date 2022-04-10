class inglesClass_quantitativeAndQualitativeResearchData extends generalPage{
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
      <div class="header-h2"><h2>Quantitative and qualitative research data</h2></div>
      <div class="text-general"><p>Taking into account the research aims, the research design and methodologies, data to gather can be placed into two broad categories: quantitative and qualitative.</p></div>
      <div class="conceptual-map-v2__main-container">
        <div class="conceptual-map-base conceptual-map-v2">
            <div class="conceptual-map-base__main-row">Quantitative data</div>
            <ul class="conceptual-map-base__ul">
                <li>
                    <div class="conceptual-map-base__secondary-row">Information expressed in numbers and refers to quantity, time, frequency, levels, etc., and can therefore be quantified, measured and analyzed by numerical variables through statistical methods and mathematically computed.</div>
                </li>
                <li>
                    <div class="conceptual-map-base__secondary-row">This data can be represented with a wide variety of statistical types of graphs and charts such as lines, bar graphs, scatter plots, etc.</div>
                </li>
                <li>
                    <div class="conceptual-map-base__secondary-row">For instance, a study, which main topic is online education, is interested in measuring the percentage of young learners within three different age range groups that prefer virtual training and the level of interest in particular applications.</div>
                </li>
            </ul>
        </div>
        <div class="conceptual-map-base">
            <div class="conceptual-map-base__main-row conceptual-map-base__main-row-2">Qualitative data</div>
            <ul class="conceptual-map-base__ul">
                <li>
                    <div class="conceptual-map-base__secondary-row">Information expressed in words and refers to qualities, descriptions, narrations, etc., and can therefore be categorized, described and analyzed by categorical variables through interpretations and categorizations.</div>
                </li>
                <li>
                    <div class="conceptual-map-base__secondary-row">For instance, the same study, which main topic is online education, but is interested in describing common metacognitive features of young learners that prefer virtual training and the kind of applications they use.</div>
                </li>
            </ul>
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
        'conceptual-map-base.css|general',
        'conceptual-map-v2.css|general'
    ]
}        
}

//let stages_ingles_quantitativeAndQualitativeResearchData = new inglesClass_quantitativeAndQualitativeResearchData('quantitativeAndQualitativeResearchData');

stagePage.pageContainerSet('quantitativeAndQualitativeResearchData',inglesClass_quantitativeAndQualitativeResearchData);