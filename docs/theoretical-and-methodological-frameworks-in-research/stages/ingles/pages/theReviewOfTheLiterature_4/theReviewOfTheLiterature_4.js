class inglesClass_theReviewOfTheLiterature_4 extends generalPage{
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
      <div class="header-h2"><h2>How can I structure the body of the literature review?</h2></div>
      <div class="text-general"><p>Depending on the length of the review and on its purposes, you can organize
      your literature review using different approaches. You can choose one of the
      following methodologies or you can combine them but congruently.</p>
      <p><strong>Click on the icons below to listen to the descriptions of the approaches.</strong></p></div>
      <div class="horizontal-items-audio">
      <ul class="wtree">
      <li>
        <button onclick="stages_ingles.popUpToDiscover.showHideCombined(this);" ><strong>Chronological or historical approach:</strong> review within a period of time.</button>
        <div class="single-audio">
            <audio controls="" class="general">
                <source src="./images/Diapositiva6-1.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p>This methodology is about tracing the development of the topics or theories over time. You need to explain and interpret this development by analyzing patterns, turning points and key debates that have shaped the direction of the field. </p>
            <p>For the review, it is important to set a starting date, year or period and justify the choice of this period. </p>
            <p>This chronological approach is related to a historical one since it focuses on examining research throughout a period of time, often starting with the first time an issue, concept, theory, phenomena emerged in the literature, then tracing its evolution within the scholarship of a discipline. The purpose is to place research in a historical context to show familiarity with state-of-the-art developments and to identify the likely directions for future research.</p>
        </div>
      </li>


      <li>
        <button onclick="stages_ingles.popUpToDiscover.showHideCombined(this);"><strong>Thematic approach:</strong> review organized in themes and concepts.</button>
        <div class="single-audio">
            <audio controls="" class="general">
                <source src="./images/Diapositiva6-2.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p>With this methodology, you can organize the literature review into several subsections to address the different themes, concepts and aspects of your topics, but you have to be careful not to just make a list of themes; the presentation of the research must respond to an organizational pattern in order to attain connections.</p>
            <p>The thematic approach can also be developed along with the chronological approach to account for the progression of time of the different themes.</p>
        </div>
          
      </li>
      <li>
        <button onclick="stages_ingles.popUpToDiscover.showHideCombined(this);"><strong>Methodological approach:</strong> review based on research procedures.</button>
        <div class="single-audio">
            <audio controls="" class="general">
                <source src="./images/Diapositiva6-3.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p>A literature review can also emphasize the methods or procedures that the different research studies implemented to obtain and analyze data, as well as to state the final findings. This means that the review cares more about how the researchers came about stating the findings more than the findings themselves, unlike the thematic approach, which emphasizes more the results. </p>
            <p>Reviewing methods of analysis provides a framework of understanding at different levels, for example, qualitative and quantitative approaches, empirical and scientific research, ethnographic and experimental research, etc.</p>
        </div>
          
      </li>
      <li>
        <button onclick="stages_ingles.popUpToDiscover.showHideCombined(this);"><strong>Theoretical approach:</strong> review to discuss and question theories.</button>
        <div class="single-audio">
            <audio controls="" class="general">
                <source src="./images/Diapositiva6-4.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p>In this kind of lit review, you can discuss theories, concepts, approaches, etc. This approach can mean the theoretical framework for your research to the extent that it helps to establish what theories already exist, the relationships between them, to what degree the existing theories have been investigated, and to develop new hypotheses to be tested. </p>
            <p>Often this form is used to help establish a lack of appropriate theories or reveal that current theories are inadequate for explaining new or emerging research problems. </p>
            <p>The unit of analysis can focus on a theoretical concept or a whole theory or framework.</p>
        </div>
      </li>
      <li>
        <button onclick="stages_ingles.popUpToDiscover.showHideCombined(this);"><strong>Argumentative approach:</strong> review to support or refute an argument.</button>
        <div class="single-audio">
            <audio controls="" class="general">
                <source src="./images/Diapositiva6-5.mp3" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
            <p>This approach examines literature selectively in order to support or refute an argument, a deeply imbedded assumption, a hypothesis, or a philosophical problem already established in the literature. The purpose is to develop a body of literature that establishes a contrarian viewpoint.</p>
            <p>Argumentative approaches to analyzing the literature can be a legitimate and important form of discourse.</p>
        </div>
      </li>
  </ul>
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
        'horizontal-items-audio.css|local'
    ]
}        
}

stagePage.pageContainerSet('theReviewOfTheLiterature_4',inglesClass_theReviewOfTheLiterature_4);