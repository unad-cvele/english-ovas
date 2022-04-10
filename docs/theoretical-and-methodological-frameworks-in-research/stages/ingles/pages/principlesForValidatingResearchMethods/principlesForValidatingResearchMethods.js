class inglesClass_principlesForValidatingResearchMethods extends generalPage{
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
      <div class="header-h2"><h2>Principles for validating research methods</h2></div>
      <div class="text-general">
          <p>In order for the researcher to design suitable instruments and apply them properly, some principles are to be considered.</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Usability</button>
                <div class="text-acordeon">
                        <p>Refers to the ease with which an instrument can be administered, understood by the participants, and interpreted or scored by the researcher. Some usability considerations are the time participants need to respond to the instruments, proper use of language and structure, if the directions and purposes are clear, easiness to score them, if equivalent forms exist, previous problems reported by others in the case that the instrument is preexisting.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Validity</button>
                <div class="text-acordeon">
                    <p>Is basically the accuracy of the instruments and procedures for the purpose of collecting and managing data. Validity tells the extent to which the instruments really measure what they are supposed to measure, how well the collected data covers the actual area of investigation, and how well the results correspond to established theories and other measures of the same concept.
                    </p>
                    <p>The <strong>Content Validity</strong> evaluates the appropriateness of the content of an instrument. This process is applicable to any kind of instrument, but special attention ought to be paid to those instruments that assess knowledge and cognition such as achievement and placement tests.</p>
                    <p><strong>External Validity</strong> analyzes the extent to which the results of a study can be generalized from a sample to a population. If the whole population is represented by the sample of the research and if the impact of the research touches the population, this might mean that the process of data collection and analysis was valid.</p>
                    <p>Moreover, researchers can validate instruments through content, criterion-related, and construct validity. Content validity is the extent to which the questions on a survey are representative of the questions that could be asked to assess a particular construct. This can be done by consulting a couple of experts. Criterion-referenced validity is used when the researcher wants to determine if the scores from an instrument are a good predictor of an expected outcome.</p>
                    <p>Construct validity is established by determining if the scores recorded by an instrument are meaningful, significant, useful, and have a purpose on the study. In order to determine if construct validity has been achieved, the scores need to be assessed statistically and practically. This can be done by comparing the relationship of a question from the scale to the overall scale, testing a theory to determine if the outcome supports the theory, and by correlating the scores with other similar or dissimilar variables. The use of similar instruments is referred to as convergent validity and the use of dissimilar instruments is divergent validity.
                    </p>
                    <p>Validation is an entire process that involves not only the design of the instruments but also their application (data collection) and the analysis of information. If data analysis runs smoothly, this might mean that the instruments were accurate. Errors and troubles when coding data might be the consequence of an ill-designed instrument.</p>
                    <p>There are numerous statistical tests and measures to assess the validity of instruments. For instance, pilot testing is the process of testing the validity of an instrument by doing a preliminary study or application of it on a sample group.</p>
                    
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Reliability</button>
                <div class="text-acordeon">
                        <p>Is about the stability and consistency of the measure and the results. Reliability informs the extent to which the results can be reproduced when the research is repeated under the same conditions. Reliability can occur in different ways: when different raters/observers give consistent answers or estimates (Inter-Rater/Observer); when a measure is consistent over time (Test-Retest); when two tests are constructed the same way, from the same content (Parallel-Forms); when results are consistent across items (Internal Consistency).
                        
                        </p>
                </div>
            </div>
        </div>
        <p>Both validity and reliability are principles to be kept in any research study since a method can be reliable but not valid, and if it is not reliable, it probably is not valid.</p>
            
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

//let stages_ingles_principlesForValidatingResearchMethods = new inglesClass_principlesForValidatingResearchMethods('principlesForValidatingResearchMethods');

stagePage.pageContainerSet('principlesForValidatingResearchMethods',inglesClass_principlesForValidatingResearchMethods);