class inglesClass_criteriaOfGoodResearchQuestions extends generalPage{
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
      <div class="header-h2"><h2>Criteria of good research questions</h2></div>
      <div class="text-general">
          <p>To formulate an accurate research question, you have to be aware of including the following aspects:</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Variables</button>
                <div class="text-acordeon">
                        <p>Variables involved in the research must be indicated clearly in the research question. </p>
                        <p>Example: in this question <i>“Do the more novels students read the better they can write an essay?”</i> <strong>two variables</strong> are indicated: <u>the amount of time spent on reading novels and the skill in writing an essay.</u></p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Research design and methods</button>
                <div class="text-acordeon">
                    <p>The designs of research and the methods to be used should be reflected in the research question.</p>
                    <p> Example: the question <i>“Do the higher the vocabulary knowledge the students have the better they understand reading texts?”</i> indicates that a <u>co-relational design</u> is going to be used.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Hypothesis</button>
                <div class="text-acordeon">
                    <p>A good research question relates to the hypothesis to be made to predict the answer.
                    </p>
                    <p>Example: the research question <i>“Do students learning speaking skills in small group discussions achieve listening skills better than the students learning the same
                    skill in a big class?”</i> relates to the hypothesis that <u>students learning speaking skills in small group discussions achieve listening skills better than the students learning the same skill in a big class.</u></p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Research topic</button>
                <div class="text-acordeon">
                    <p>The research question must indicate the area, scope or main topic of the research. The more specific the area is, the easier the question should be to formulate clearly. A question with too big area or scope will be difficult to accomplish.
                    </p>
                    <p>Example: the following question clearly relates the <u>field of language education</u>, the <u>didactics of the language</u> and the <u>use of a specific kind of resources</u> (authentic materials).</p>
                    <p><i>“To what extend are authentic materials more effective in bringing about learning than materials written specifically for the language classroom?”</i></p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Population or object of study</button>
                <div class="text-acordeon">
                    <p>The group of people, situation or elements that are the object of study must appear in the question.  </p>
                    <p> Examples: look at these questions:</p>
                    <p><i>“Are authentic materials more effective in bringing about learning than materials written specifically for the language classroom?”
                    “How is the development of the students’ beliefs about language learning in five semesters at the Pompeo University?”</i></p>
                    <p>In the former question, the object of study is the <u>authentic materials</u>. A group of students might be involved, but is not the main goal.
                    In the latter question, the object of study is the <u>beliefs that students have</u>. Here, beliefs and students play the main role in the study.</p>
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

stagePage.pageContainerSet('criteriaOfGoodResearchQuestions',inglesClass_criteriaOfGoodResearchQuestions);