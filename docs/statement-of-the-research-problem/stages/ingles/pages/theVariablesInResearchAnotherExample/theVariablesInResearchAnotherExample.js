class inglesClass_theVariablesInResearchAnotherExample extends generalPage{
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
      <div class="header-h2"><h2>The variables in research - another example</h2></div>
      <div class="text-general">
        <p>Let’s check another example of variables:</p>
        <table class="table-general">
            <tr>
                <th>Research objective:</th>
                <td>To measure the teachers’ attitudes towards the increase of class time and the number of students in a private language institute.</td>
            </tr>
            <tr>
                <th>Independent variable:</th>
                <td>The class time and the number of students.</td>
            </tr>
            <tr>
                <th>Dependent variable:</th>
                <td>The teachers’ attitudes towards the new changes.</td>
            </tr>
            <tr><td colspan="2">The increase in class time and students is the first variable, then <strong>the increased amount of time, the total time of a class,</strong> and <strong>the total amount of students</strong> might become the attributes of this variable.<br/><br/>The attitudes are the second variable, then <strong>expectations, beliefs, skills</strong> and <strong>knowledge</strong> might become the attributes of this variable.</td></tr>
        </table>
        <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">A variable is a logical grouping of attributes.</button>
                <div class="text-acordeon">
                    <p>According to Kaur, S.P. (2013) attributes are characteristics or qualities that describe an object of study. For example, if <u>gender</u> is a variable then male and female are the attributes. If <u>residence</u> is the variable then urban, semi urban, rural become the attributes. If <u>student grade</u> is the variable, then the attributes are pass and fail. </p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">It is pertinent to know as how certain variables within a study are related to each other. </button>
                <div class="text-acordeon">
                    <p>It is thus important to define the variables to facilitate accurate explanation of the relationship between the variables. There is no limit to the number of variables that can be measured, although the more variables, the more complex the study and the more complex the statistical analysis. Moreover, the longer the list of variables, the longer the time required for data collection (Kaur SP, 2013).</p>
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

stagePage.pageContainerSet('theVariablesInResearchAnotherExample',inglesClass_theVariablesInResearchAnotherExample);