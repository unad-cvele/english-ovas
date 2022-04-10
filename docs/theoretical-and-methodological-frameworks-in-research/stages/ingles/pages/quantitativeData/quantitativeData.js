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
      <div class="text-general">
        <p>There are 2 general types of quantitative data: discrete and continuous data. Continuous data is further divided into interval and ratio data.</p>
      </div>
      <div class="">
        <div class="conceptual-map-base conceptual-map--quantitativeData">
            <div class="conceptual-map-base__main-row">Types of quantitative data</div>
            <ul class="conceptual-map-base__ul conceptual-map--quantitativeData__ul--primary">
                <li>
                    <div class="conceptual-map-base__secondary-row">
                        <h3>Discrete Data</h3>
                        <p>Includes integer numbers, which do not include decimals or fractions. It is restricted to certain values that cannot be subdivided into parts. for instance, 5 children in a household, not 5.67 children, or 125 graduated professionals, not 125.77770. The possible scores are discrete on the scale.</p>
                    </div>
                </li>
                <li>
                    <div class="conceptual-map-base__secondary-row">
                        <h3>Continuous Data</h3>
                        <p>Can take an infinite number of intermediate values along a specific continuum or interval. It can be meaningfully divided into finer levels. For instance, you can measure height at very precise scales: meters, centimeters, millimeters and etc., or the waiting time in a queue since the time can be 1.65 minutes or 1.6584795214 minutes.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="conceptual-map-base conceptual-map--quantitativeData">
            <ul class="conceptual-map-base__ul conceptual-map--quantitativeData__ul--secondary">
                <li>
                    <div class="conceptual-map-base__secondary-row">
                        <h3>Interval Data</h3>
                        <p>Can be measured along a continuum in a scale and its subsets have a numerical value. The feature of rank ordering can be found in this type or variable. An interval scale is one where there is order and the difference between two values is meaningful. Temperature, rate of bank interest, blood pressure reading, etc., are examples of these variables.</p>
                    </div>
                </li>
                <li>
                    <div class="conceptual-map-base__secondary-row">
                        <h3>Ratio Data</h3>
                        <p>Has the features of magnitude and order and have an absolute or true zero point, unlike the interval variables. A ratio variable, has all the properties of an interval variable, but also has a clear definition of 0.0. Examples of ratio variables include test scores, height and weight.</p>
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