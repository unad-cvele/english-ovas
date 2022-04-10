class inglesClass_typesOfStatisticalAnalysis extends generalPage{
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
      <div class="header-h2"><h2>Types of Statistical Analysis</h2></div>
      <video class="responsive" src="./images/files/typesOfStatisticalAnalysis.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
        <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this,'noScrollIntoView')">Show in text</button>
        <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      <div class="text-show-content">
          <h4>Types of Statistical Analysis</h4>
          <p>In the process of analysis, it is important to recognize the two most commonly used methods or types of statistical analysis:</p>
          <h4>Descriptive statistics</h4>
          <p>Called univariate analysis since it is commonly used to analyze a single variable. It describes and summarizes data with charts, tables, and graphs.</p>
          <p>This method is used to describe the basic features of versatile types of data in research. It presents the data in such a meaningful way that patterns in the data start making sense.</p>
          <p>Nevertheless, the descriptive analysis does not go beyond making conclusions. The conclusions are based on the hypothesis researchers have formulated so far.</p>
          <p>Here are a few major types of descriptive analysis methods.</p>
          <h4>Measures of Frequency</h4>
          <p>Count, Percent, Frequency.</p>
          <p>It is used to denote how often a particular event occurs. Researchers use it when they want to showcase how often a response is given.</p>
          <h4>Measures of Central Tendency</h4>
          <p>Mean, Median, Mode.</p>
          <p>The method is widely used to demonstrate distribution by various points. Researchers use this method when they want to showcase the most commonly or averagely indicated responses.</p>
          <h4>Measures of Dispersion or Variation</h4>
          <p>Range, Variance, Standard deviation.</p>
          <p>The Variance standard deviation is equal to the difference between the observed score and mean. It is used to identify the spread of scores by stating intervals. Researchers use this method to showcase data spread out. It helps them identify the depth until which the data is spread out that it directly affects the mean.</p>
          <h4>Measures of Position</h4>
          <p>Percentile ranks, Quartile ranks.</p>
          <p>It relies on standardized scores helping researchers to identify the relationship between different scores. It is often used when researchers want to compare scores with the average count.</p>
          <hr/>
          <p>Conversely, with , you are using statistics to test a hypothesis, draw conclusions and trends and make predictions about a whole population, based on a sample taken from it. </p>
          <p>Inferential statistics are used to make predictions about a larger population after research and data analysis of the representing population’s collected sample.</p>
          <p>For example, you can ask some 30 audiences at an English lesson if they liked the way teacher performed. Researcher then uses inferential statistics on the collected sample to reason that about 80% of people liked the lesson.</p>
          <p>Here are two significant areas of inferential statistics:</p>
          <h4>Estimating parameters</h4>
          <p>It takes statistics from the sample research data and demonstrates something about the population parameter.</p>
          <h4>Testing hypothesis</h4>
          <p>It is about sampling research data to answer the survey research questions. For example, researchers might be interested to understand if the new shade of lipstick recently launched is good or not, or if the multivitamin capsules help children to perform better at games.</p>
          <p>These are sophisticated analysis methods used to showcase the relationship between different variables instead of describing a single variable. It is often used when researchers want something beyond absolute numbers to understand the relationship between variables.</p>
          <p>In order to conduct inferential statistics, we need some techniques, methods, and types of calculations. Some of the most important are Linear Regression Analysis, Logistic Regression Analysis, Analysis of Variance or Covariance, Statistical Significance, Correlation Analysis.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}        
}


stagePage.pageContainerSet('typesOfStatisticalAnalysis',inglesClass_typesOfStatisticalAnalysis);
