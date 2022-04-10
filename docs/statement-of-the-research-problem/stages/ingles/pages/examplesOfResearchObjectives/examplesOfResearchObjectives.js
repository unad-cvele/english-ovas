class inglesClass_examplesOfResearchObjectives extends generalPage{
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
      <div class="header-h2"><h2>Examples of research objectives</h2></div>
      <video class="responsive" src="./images/examplesOfResearchObjectives.mp4" controls="" controlslist="nodownload"></video>
      <div class="text-general">
        <p>Look at the following video to learn more about how to write correctly research objectives.</p>
      </div>
      <div class="text-center">
          <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
          <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
          <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this,'none')">Show in text</button>
          <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      <div class="text-show-content">
        <h3>Writing the research objetives</h3>
            <p>Recall that when choosing the right verb, you need to think about what you really want to achieve with that objective. Whether the objective is general or specific, be careful not to get confused with both of them. </p>
            <p>Let’s have a look at this example:</p>
            <p>To use the mapping technique to develop higher reading comprehension in a foreign language.</p>
            <p>To use the mapping technique to develop higher  reading comprehension in  a foreign language. </p>
            <p>This objective has different  failures. First, the use of the  mapping technique is not the  main aim of the study. This  technique is the means or the  instrument that will be  implemented in order to  achieve something. That  “something” is the main goal,  in this case, to develop higher  reading comprehension.</p>
            <p>Second, there are two verbs,  so only one has to be set.  Third, no population or  context is presented.</p>
            <p>Taking into account this, a  better version of this objective would be:</p>
            <p>To develop higher  reading comprehension in  the foreign language in third  graders, at Solomonov  Highschool, by means of the mapping technique.</p>
            <p>Nevertheless, if you want to  emphasize the mapping technique as an objective,  that’s possible, but in that  case, it needs to be presented  as a specific one, and instead  of “use”, a more accurate verb should be searched, for  instance, “implement or employ”.</p>
            <p>In this list you find common  verbs that can be used to  write down accurate research  objectives.</p>
            <p>Verbs for general objectives</p>
            <ul>
                <li>Analyse</li>
                <li>Compare</li>
                <li>Design</li>
                <li>Develop</li>
                <li>Evaluate</li>
                <li>Implement</li>
                <li>Interpret</li>
                <li>Demonstrate</li>
                <li>Establish</li>
                <li>Explain</li>
                <li>Reconstruct</li>
                <li>Generate</li>
                <li>Improve</li>
                <li>Relate</li>
            </ul>
            <p>Verbs for specific objectives</p>
            <ul>
                <li>Identify</li>
                <li>Categorize</li>
                <li>Determine</li>
                <li>Establish</li>
                <li>Explain</li>
                <li>Examine</li>
                <li>Illustrate</li>
                <li>Characterize</li>
                <li>Compare</li>
                <li>Demonstrate</li>
                <li>Define</li>
                <li>Decompose</li>
                <li>Suggest</li>
                <li>Outline</li>
            </ul>
            <p>Let’s see other examples of bad and good research objectives.</p>
            <p>Example 2</p>
            <p>- (Inaccurate)</p>
            <p>To  show and describe  students’ perceptions on the  use of VLO when  teaching reading comprehension strategies for ESP  in order to see if  the students show  apathy to the use  of virtual objects at Ohio University.</p>
            <p>In the inaccurate example,  there are many verbs (show,  describe, see, show again);  show and see are not measurable verbs, it means, it  will be difficult to set the  results; abbreviations should  be avoided; there are some  bias that will influence the  results (apathy to the use of  virtual objects).</p>
            <p>The accurate version is undoubtedly clearer and more concise.</p>
            <p>- (Accurate)</p>
            <p>To characterize students’ perceptions on the  use of Virtual Learning Objects  (VLO) when teaching reading  comprehension strategies for ESP  to students of the  professional program Social Communication and Journalism at  Ohio University.</p>
            <p>Example 3 </p>
            <p>- (Inaccurate)</p>
            <p>Evaluate the Accountancy and  Finance students’  positioning in the  EFL blended learning community of practice. </p>
            <p>- (Accurate)</p>
            <p>To describe the Accountancy and  Finance students’  positioning in the  English as Foreign  Language EFL blended learning  community of practice at a public  technological institution in Bogota.</p>
            <p>In the inaccurate example the  verb is not in infinitive;  evaluate is not the main goal  yet seeing (describing) what  happens with the positioning;  the delimitation of the population is necessary.  </p>
            <p>These aspects are enhanced in the accurate version.</p>
            <p>Example 4 </p>
            <p>- (Inaccurate)</p>
            <p>To  discover study skills students might create through the  implementation of  self-regulated  
                learning in an EFL  classroom.</p>
            <p>- (Accurate)</p>
            <p>To identify the study  skills that students  of first semester of the foreign language program  might create through the implementation of  self-regulated learning in an English as Foreign  Language (EFL)  classroom.</p>
            <p>In the inaccurate example  there are writing failures;  “identify, characterize or describe” are more specific  verbs than “discover”; the  population is necessary; the  abbreviation needs to be  resolved. </p>
            <p>Look how the second sentence is better off.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}

stagePage.pageContainerSet('examplesOfResearchObjectives',inglesClass_examplesOfResearchObjectives);