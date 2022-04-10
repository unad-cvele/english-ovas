class inglesClass_theVariablesInResearch extends generalPage{
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
      <div class="header-h2"><h2>The variables in research</h2></div>
        <div class="grid-infographic">
          <div class="text-center grid-infographic-cell grid-infographic-one">
            THE VARIABLES IN RESEARCH
          </div>
          <div class="grid-infographic-cell grid-infographic-two">
              <p>The variables are attributes or characteristics of the object of study that can take on different values. </p>
              <p>As the name implies, a variable is something that varies in a research according to external factors.</p>
              <p>In experimental research, variables are measured and researchers generally state them to find out what effect one variable has on another one.</p>
          </div>
          <div  class="text-center grid-infographic-cell grid-infographic-three">
              <h3>Example:</h3>
              <p>A research study about the use of the native language of learners in the English class to achieve lexical skills in this foreign language.</p>
              <img class="bombillo" src="./images/bombillo.png" alt="Lamp" />
          </div>
          <div  class="grid-infographic-cell grid-infographic-four">
              <p>We can identify <u>two variables</u>: “the use of the native language of students” and “the achievement of lexical skills in the foreign language”. </p>
              <p>In this case, the researcher might research how the use of the native language helps learners to acquire vocabulary in English, it means to discover the effect of the learners’ native language on the process of acquiring new vocabulary.</p>
          </div>
          <div  class="text-center grid-infographic-cell grid-infographic-five">
              <p>The variables in a study of a cause-and-effect relationship are called <u>independent</u> and <u>dependent variables</u>.</p>
          </div>
          <div  class="grid-infographic-cell grid-infographic-six">
              <p>The <strong>independent variable</strong> is the cause. Its value is independent of other variables. In experimental research, the independent variable is manipulated or changed by the experimenter to measure the effect of this change on the dependent variable.</p>
              <p>The <strong>dependent variable</strong> is the effect. Its value depends on changes in the independent variable.</p>
          </div>
          <div  class="text-center grid-infographic-cell grid-infographic-seven">
            <img class="bombillo" src="./images/bombillo.png" alt="Lamp" />
          </div>
          <div  class="grid-infographic-cell grid-infographic-eight">
              <p>In our example, <u>the learners’ native language</u> is the <u>independent variable</u>: depending on how the researcher manages this language in the class, the learners will achieve high or low lexical skills.</p>
              <p><u>The achievement of lexical skills</u> is the <strong>dependent variable</strong>: it depends on how the independent variable is manipulated, managed or applied.</p>
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
        'infographic.css|local'
    ]
}
}

stagePage.pageContainerSet('theVariablesInResearch',inglesClass_theVariablesInResearch);