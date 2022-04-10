class inglesClass_qualitativeData extends generalPage{
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
      <div class="header-h2"><h2>Qualitative Data</h2></div>
      <div class="">
        <div class="conceptual-map-base conceptual-map--quantitativeData conceptual-map--qualitativeData">
            <div class="conceptual-map-base__main-row">Qualitative data refers to data that is expressed in words, therefore, it cannot be quantified, counted or verified, yet categorized, described and measured by categorical variables. This data expresses qualitative attributes to abstract issues such as emotions, culture, etc.</div>
            <ul class="conceptual-map-base__ul conceptual-map--quantitativeData__ul--primary">
                <li>
                    <div class="conceptual-map-base__secondary-row">
                    <h3>Some examples of qualitative data in educational research are:</h3>
                        <ul class="conceptual-map-base__ul_default">
                            <li>The type and quality of feedback that learners receive from a teacher to their written works.</li>
                            <li>Analysis of the discourse of certain group of people with certain characteristics about a specific issue.</li>
                            <li>Teachers’ beliefs and behaviors regarding learners’ mistakes in the language class.</li>
                            <li>Intercultural content of the textbooks for the native language class.</li>
                            <li>Development of the linguistic ecology theory to study how a given language interacts with its social environment.</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="conceptual-map-base conceptual-map--quantitativeData">
            <ul class="conceptual-map-base__ul conceptual-map--quantitativeData__ul--secondary">
                <li>
                    <div class="conceptual-map-base__secondary-row">
                        <p>Qualitative data can be nominal which names things without applying any order, and can neither be ranked nor logically ordered, such as religion, sex, etc. Classification of the values of this data is based on equality, sameness or difference and cannot be measured. </p>
                        <p>On the other hand, ordinal data is placed into some kind of order by their position on scales. It can be logically ordered or ranked in two or more categories but do not necessarily establish a numeric difference between each category.</p>
                    </div>
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
        'conceptual-map--quantitativeData.css|general',
        'conceptual-map--qualitativeData.css|general'
    ]
}        
}

stagePage.pageContainerSet('qualitativeData',inglesClass_qualitativeData);