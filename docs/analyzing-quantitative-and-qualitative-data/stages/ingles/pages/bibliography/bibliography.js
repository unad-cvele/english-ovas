class inglesClass_bibliography extends generalPage{
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
      <div class="header-h2"><h2>Bibliography</h2></div>
      <div class="text-general">
          <p>Hillier, W. (2021). A Step-by-Step Guide to the Data Analysis Process.     
                <a class="btn-link" href="https://careerfoundry.com/en/blog/data-analytics/the-data-analysis-process-step-by-step/" onclick="window.open('https://careerfoundry.com/en/blog/data-analytics/the-data-analysis-process-step-by-step/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://careerfoundry.com/en/blog/data-analytics/the-data-analysis-process-step-by-step/</a>
          </p>
          <p>Northern Illinois University. (n.d.). Data analysis.     
                <a class="btn-link" href="https://ori.hhs.gov/education/products/n_illinois_u/datamanagement/datopic.html#" onclick="window.open('https://ori.hhs.gov/education/products/n_illinois_u/datamanagement/datopic.html#','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://ori.hhs.gov/education/products/n_illinois_u/datamanagement/datopic.html#</a>
          </p>
          <p>QuestionPro. (n.d.). Quantitative Data: Definition, Types, Analysis and Examples.     
                <a class="btn-link" href="https://www.questionpro.com/blog/quantitative-data/" onclick="window.open('https://www.questionpro.com/blog/quantitative-data/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://www.questionpro.com/blog/quantitative-data/</a>
          </p>
          <p>QuestionPro. (n.d.). Data analysis in research: Why data, types of data, data analysis in qualitative and quantitative research.    
                <a class="btn-link" href="https://www.questionpro.com/blog/data-analysis-in-research/" onclick="window.open('https://www.questionpro.com/blog/data-analysis-in-research/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://www.questionpro.com/blog/data-analysis-in-research/</a>
          </p>
          <p>Serpa, F., Rojas. L. (2012). Guía básica para procesar y analizar datos. NPERCI Publications Series. No. 10.</p>


          <p>Valcheva, S. (n.d.). Qualitative vs Quantitative Data: Definitions, Analysis, Examples. Intellsopt.     
                <a class="btn-link" href="http://www.intellspot.com/qualitative-vs-quantitative-data/" onclick="window.open('http://www.intellspot.com/qualitative-vs-quantitative-data/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">http://www.intellspot.com/qualitative-vs-quantitative-data/</a>
          </p>
          <p>Valcheva, S. (n.d.). Qualitative Data Analysis Methods and Techniques. Intellspot    
                <a class="btn-link" href="http://www.intellspot.com/qualitative-data-analysis-methods/" onclick="window.open('http://www.intellspot.com/qualitative-data-analysis-methods/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">http://www.intellspot.com/qualitative-data-analysis-methods/</a>
          </p>
          <p>Your Guide to Qualitative and Quantitative Data Analysis Methods. (2018, September 5). Humans of data.    
                <a class="btn-link" href="https://humansofdata.atlan.com/2018/09/qualitative-quantitative-data-analysis-methods/" onclick="window.open('https://humansofdata.atlan.com/2018/09/qualitative-quantitative-data-analysis-methods/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://humansofdata.atlan.com/2018/09/qualitative-quantitative-data-analysis-methods/</a>
          </p>
          

          
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

stagePage.pageContainerSet('bibliography',inglesClass_bibliography);