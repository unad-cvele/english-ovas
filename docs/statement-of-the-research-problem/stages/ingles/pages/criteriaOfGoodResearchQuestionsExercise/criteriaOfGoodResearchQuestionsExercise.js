class inglesClass_criteriaOfGoodResearchQuestionsExercise extends generalPage{
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
      <p>In order to propose accurate research questions, there are some mandatory features.</p>
      <p><strong>Exercise</strong></p>
      <p>Read and select the term that corresponds to the definitions presented.</p>
      <form action="" id="form-criteriaOfGoodResearchQuestionsExercise">
            <div class="drag-and-drop-element">
                    <p>Ambiguity and technical terms must be avoided so that the readers understand the questions easily. Questions must be expressed in the fewest possible words.</p>
                    <div class="answer-text">
                    </div>
                    <select onchange="questionsCriteriaOfGoodResearchQuestionsExercise.selectVerify(this);" name="p1-criteriaOfGoodResearchQuestionsExercise" id="p1-criteriaOfGoodResearchQuestionsExercise" data-index="0">
                        <option value="">
                            ---Select---
                        </option>
                        <option value="1">
                            Argumentation
                        </option>
                        <option value="2">
                            Clearness and conciseness
                        </option>
                        <option value="3">
                            Complexity
                        </option>
                        <option value="4">
                            Researchability
                        </option>
                    </select>
                </div>
                <div class="drag-and-drop-element">
                    <p>Questions shouldn’t be answered with a simple “yes” or “no”, but rather requires synthesis and analysis. The answers expected do not just contain factual information on variables involved, it must explain the patterns of relationship between the variables, or the system operating in the object of study.</p>
                    <div class="answer-text">
                    </div>
                    <select onchange="questionsCriteriaOfGoodResearchQuestionsExercise.selectVerify(this);" name="p2-criteriaOfGoodResearchQuestionsExercise" id="p2-criteriaOfGoodResearchQuestionsExercise" data-index="1">
                        <option value="">
                            ---Select---
                        </option>
                        <option value="1">
                            Argumentation
                        </option>
                        <option value="2">
                            Clearness and conciseness
                        </option>
                        <option value="3">
                            Complexity
                        </option>
                        <option value="4">
                            Researchability
                        </option>
                    </select>
                </div>
                <div class="drag-and-drop-element">
                    <p>The potential answers of the research questions are open to debate rather than accepted facts.</p>
                    <div class="answer-text">
                    </div>
                    <select onchange="questionsCriteriaOfGoodResearchQuestionsExercise.selectVerify(this);" name="p3-criteriaOfGoodResearchQuestionsExercise" id="p3-criteriaOfGoodResearchQuestionsExercise" data-index="2">
                        <option value="">
                            ---Select---
                        </option>
                        <option value="1">
                            Argumentation
                        </option>
                        <option value="2">
                            Clearness and conciseness
                        </option>
                        <option value="3">
                            Complexity
                        </option>
                        <option value="4">
                            Researchability
                        </option>
                    </select>
                </div>
                <div class="drag-and-drop-element">
                    <p>During the research, you must have access to a suitable amount of quality research materials, such as academic books and refereed journal articles, and be able to apply effectively the research methods, such as interviews, surveys, observations.</p>
                    <div class="answer-text">
                    </div>
                    <select onchange="questionsCriteriaOfGoodResearchQuestionsExercise.selectVerify(this);" name="p4-criteriaOfGoodResearchQuestionsExercise" id="p4-criteriaOfGoodResearchQuestionsExercise" data-index="3">
                        <option value="">
                            ---Select---
                        </option>
                        <option value="1">
                            Argumentation
                        </option>
                        <option value="2">
                            Clearness and conciseness
                        </option>
                        <option value="3">
                            Complexity
                        </option>
                        <option value="4">
                            Researchability
                        </option>
                    </select>
                </div> 
          </form>
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
    importJSFiles(){
        return [
            'questions'
        ]
    }
}

stagePage.pageContainerSet('criteriaOfGoodResearchQuestionsExercise',inglesClass_criteriaOfGoodResearchQuestionsExercise);