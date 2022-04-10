class inglesClass_crosssectionalAndLongitudinalStudies extends generalPage{
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
      <div class="header-h2"><h2>Cross-sectional and longitudinal studies</h2></div>
      <div class="text-general crosssectionalAndLongitudinalStudies">
      <div class="crosssectionalAndLongitudinalStudies__main_description">
        <p>The arrangement of data in a tabulation can be done in two ways:</p>
        <ol>
            <li>When the data represent observations made at a single point in time (net data are collected and are not compared with other points in time).</li>
            <li>When the data are recorded over time intervals (the same data are collected from the same individuals to see how they have changed).</li>
        </ol>
        <p>The first way of arrangement is typical of <strong>cross-sectional or static research designs</strong>. The second arrangement is commonly used for <strong>longitudinal research designs</strong>.</p>
      </div>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Cross-sectional Studies</button>
                <div class="text-acordeon">
                    <p>A type of observational research in which the researcher conducts surveys at a particular time period across the target sample. This survey type implements a questionnaire to understand a specific subject from the sample at a definite time period.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Longitudinal Studies</button>
                <div class="text-acordeon">
                    <p>A type of observational research in which the researcher conducts surveys from a specific time period to another, i.e., over a considerable course of time. This survey is often implemented for trend analysis or studies where the primary objective is to collect and analyze a pattern in data.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Longitudinal data analysis</button>
                <div class="text-acordeon">
                    <p>(often referred to as "trend analysis") is basically tracking how results to specific questions change over time. Once a baseline is established, you can determine if and how the numbers change.</p>
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
        'crosssectionalAndLongitudinalStudies.css|general'
    ]
}        
}

stagePage.pageContainerSet('crosssectionalAndLongitudinalStudies',inglesClass_crosssectionalAndLongitudinalStudies);