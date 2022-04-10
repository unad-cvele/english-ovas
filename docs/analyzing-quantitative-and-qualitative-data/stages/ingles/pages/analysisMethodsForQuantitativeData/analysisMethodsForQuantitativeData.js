class inglesClass_analysisMethodsForQuantitativeData extends generalPage{
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
      <div class="header-h2"><h2>Analysis Methods for Quantitative Data</h2></div>
      
      <div class="text-general">
          <p>There are multiple methods of analyzing quantitative data collected in surveys. They are:</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Cross-tabulation</button>
                <div class="text-acordeon">
                    <p>This method uses a basic tabular form to draw inferences between different data-sets in the research study. It contains data that is mutually exclusive or have some connection with each other.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Trend analysis</button>
                <div class="text-acordeon">
                    <p>This statistical analysis method refers to the process of collecting data from multiple different periods (sometimes referred to as time series data analysis), before plotting the data on a horizontal line for review. By comparing data over a specific period, you can spot patterns and project future events. Putting it another way, trend analysis is based on the idea that you can predict what’s going to happen in the future based on what has already happened in the past.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">MaxDiff analysis</button>
                <div class="text-acordeon">
                    <p>This quantitative data analysis method is used to gauge customer preferences for a purchase and what parameters rank higher than the others in this process. In a simplistic form, this method is also called the “best-worst” method.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">TURF analysis</button>
                <div class="text-acordeon">
                    <p>Total Unduplicated Reach and Frequency Analysis is a quantitative data analysis methodology that assesses the total market reach of a product or service or a mix of both. This method is used by organizations to understand the frequency and the avenues at which their messaging reaches customers and prospective customers which helps them tweak their go-to-market strategies.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Gap analysis</button>
                <div class="text-acordeon">
                    <p>It uses a side-by-side matrix to depict quantitative data that helps measure the difference between expected performance and actual performance. This data analysis helps measure gaps in performance and the things that are required to be done to bridge this gap.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">SWOT analysis</button>
                <div class="text-acordeon">
                    <p>This quantitative data analysis method assigns numerical values to indicate Strength, Weaknesses, Opportunities and Threats of an organization or product or service which in turn provides a holistic picture about competition. This method helps to create effective business strategies.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Text analysis</button>
                <div class="text-acordeon">
                    <p>Text analysis is an advanced statistical method where intelligent tools make sense of and quantify or fashion qualitative and open-ended data into easily understandable data. This method is used when the raw survey data is unstructured but has to be brought into a structure that makes sense.</p>
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
        'generalStage.css|general'
    ]
}        
}

//let stages_ingles_analysisMethodsForQuantitativeData = new inglesClass_analysisMethodsForQuantitativeData('analysisMethodsForQuantitativeData');

stagePage.pageContainerSet('analysisMethodsForQuantitativeData',inglesClass_analysisMethodsForQuantitativeData);