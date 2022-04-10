class inglesClass_analysisMethodsForQualitativeData extends generalPage{
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
      <div class="header-h2"><h2>Analysis Methods for Qualitative Data</h2></div>
      
      <div class="text-general">
          <p>There are several techniques to analyze the data in qualitative research:</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Content Analysis</button>
                <div class="text-acordeon">
                    <p>It is widely accepted and the most frequently employed technique for data analysis in research methodology. It can be used to analyze the documented information from text, images, and sometimes from the physical items. It depends on the research questions to predict when and where to use this method.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Narrative Analysis</button>
                <div class="text-acordeon">
                    <p>This method is used to analyze content gathered from various sources such as personal interviews, field observation, and surveys. The majority of times, stories, or opinions shared by people are focused on finding answers to the research questions.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Discourse Analysis</button>
                <div class="text-acordeon">
                    <p>Similar to narrative analysis, discourse analysis is used to analyze the interactions with people. Nevertheless, this particular method considers the social context under which or within which the communication between the researcher and respondent takes place. In addition to that, discourse analysis also focuses on the lifestyle and day-to-day environment while deriving any conclusion.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Grounded Theory</button>
                <div class="text-acordeon">
                    <p>When you want to explain why a particular phenomenon happened, then using grounded theory for analyzing quality data is the best resort. Grounded theory is applied to study data about the host of similar cases occurring in different settings. When researchers are using this method, they might alter explanations or produce new ones until they arrive at some conclusion.</p>
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

//let stages_ingles_analysisMethodsForQualitativeData = new inglesClass_analysisMethodsForQualitativeData('analysisMethodsForQualitativeData');

stagePage.pageContainerSet('analysisMethodsForQualitativeData',inglesClass_analysisMethodsForQualitativeData);