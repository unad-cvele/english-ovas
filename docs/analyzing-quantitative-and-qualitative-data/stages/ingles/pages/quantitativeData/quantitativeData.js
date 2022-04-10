class inglesClass_quantitativeData extends generalPage{
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
      <div class="header-h2"><h2>Quantitative Data</h2></div>
      <div class="">
        <div class="conceptual-map-base conceptual-map--quantitativeData">
            <div class="conceptual-map-base__main-row">Quantitative data refers to data that is presented in numbers and can express quantity, degree, measurement, scale, etc., therefore, it can be quantified, verified, and measured by numerical variables.</div>
            <ul class="conceptual-map-base__ul conceptual-map--quantitativeData__ul--primary">
                <li>
                    <div class="conceptual-map-base__secondary-row">
                    <h3>To illustrate quantitative data in educational research, look at these examples of research studies:</h3>
                        <ul class="conceptual-map-base__ul_default">
                            <li>A correlational study about the relationship between the number of hours of study at home and the scores gotten on tests.</li>
                            <li>A discourse analysis study on the frequency with which certain phrases are used by a lecturer in a speech.</li>
                            <li>A longitudinal study to determine the amount of time learners take to achieve certain goals or levels.</li>
                            <li>A study that states the percentage of people that prefer virtual training and their view on particular applications.</li>
                            <li>A comparative study on the levels of self-efficacy in some groups of learners.</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="conceptual-map-base conceptual-map--quantitativeData">
            <ul class="conceptual-map-base__ul conceptual-map--quantitativeData__ul--secondary">
                <li>
                    <div class="conceptual-map-base__secondary-row">
                        <p>Quantitative data can be discrete: integer numbers which do not include decimals or fractions and are restricted to certain values that cannot be subdivided into parts, or can also be continuous, that refers to those numbers that can take an infinite number of intermediate values along a specific continuum or interval. They can be divided into finer levels.</p>
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
        'conceptual-map--quantitativeData.css|general'
    ]
}        
}

//let stages_ingles_quantitativeData = new inglesClass_quantitativeData('quantitativeData');

stagePage.pageContainerSet('quantitativeData',inglesClass_quantitativeData);