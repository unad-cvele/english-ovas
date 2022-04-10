class inglesClass_hypothesisAndVariablesExercise2 extends generalPage{
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
      <div class="header-h2"><h2>Hypothesis and variables: Exercise 2</h2></div>
      <div class="text-general">
        <div class="drag-and-drop-element drag-and-drop-title">
          <h3>Research problem</h3>
          <p>A group of language teachers struggles with the time to teach a lesson plan.</p>
        </div>
          <form action="" id="form-hypothesisAndVariablesExercise2">
            <div class="drag-and-drop-element">
                  <p>Teachers take more than 45 minutes to teach a lesson plan.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise2.selectVerify(this);" name="p1-hypothesisAndVariablesExercise2" id="p1-hypothesisAndVariablesExercise2" data-index="0">
                      <option value="">
                          ---Select---
                      </option>
                      <option value="1">
                        Alternate hypothesis
                      </option>
                      <option value="2">
                        Dependent variable
                      </option>
                      <option value="3">
                        Independent variable
                      </option>
                      <option value="4">
                        Null hypothesis
                      </option>
                      <option value="5">
                        One-tailed alternate hypothesis
                      </option>
                      <option value="6">
                        Two-tailed alternate hypothesis
                      </option>
                  </select>
              </div>
              <div class="drag-and-drop-element">
                  <p>To test if it takes fewer than 45 minutes to teach a lesson plan.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise2.selectVerify(this);" name="p2-hypothesisAndVariablesExercise2" id="p2-hypothesisAndVariablesExercise2" data-index="1">
                      <option value="">
                          ---Select---
                      </option>
                      <option value="1">
                        Alternate hypothesis
                      </option>
                      <option value="2">
                        Dependent variable
                      </option>
                      <option value="3">
                        Independent variable
                      </option>
                      <option value="4">
                        Null hypothesis
                      </option>
                      <option value="5">
                        One-tailed alternate hypothesis
                      </option>
                      <option value="6">
                        Two-tailed alternate hypothesis
                      </option>
                  </select>
              </div>
              <div class="drag-and-drop-element">
                  <p>To test if teachers take less than or more than 45 minutes to teach a lesson plan.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise2.selectVerify(this);" name="p3-hypothesisAndVariablesExercise2" id="p3-hypothesisAndVariablesExercise2" data-index="2">
                      <option value="">
                          ---Select---
                      </option>
                      <option value="1">
                        Alternate hypothesis
                      </option>
                      <option value="2">
                        Dependent variable
                      </option>
                      <option value="3">
                        Independent variable
                      </option>
                      <option value="4">
                        Null hypothesis
                      </option>
                      <option value="5">
                        One-tailed alternate hypothesis
                      </option>
                      <option value="6">
                        Two-tailed alternate hypothesis
                      </option>
                  </select>
              </div>
              <div class="drag-and-drop-element">
                  <p>The same lesson plan for all the teachers.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise2.selectVerify(this);" name="p4-hypothesisAndVariablesExercise2" id="p4-hypothesisAndVariablesExercise2" data-index="3">
                      <option value="">
                          ---Select---
                      </option>
                      <option value="1">
                        Alternate hypothesis
                      </option>
                      <option value="2">
                        Dependent variable
                      </option>
                      <option value="3">
                        Independent variable
                      </option>
                      <option value="4">
                        Null hypothesis
                      </option>
                      <option value="5">
                        One-tailed alternate hypothesis
                      </option>
                      <option value="6">
                        Two-tailed alternate hypothesis
                      </option>
                  </select>
              </div>
              <div class="drag-and-drop-element">
                  <p>The time spent to teach a lesson plan (less than or more than 45 min)</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise2.selectVerify(this);" name="p5-hypothesisAndVariablesExercise2" id="p5-hypothesisAndVariablesExercise2" data-index="4">
                      <option value="">
                          ---Select---
                      </option>
                      <option value="1">
                        Alternate hypothesis
                      </option>
                      <option value="2">
                        Dependent variable
                      </option>
                      <option value="3">
                        Independent variable
                      </option>
                      <option value="4">
                        Null hypothesis
                      </option>
                      <option value="5">
                        One-tailed alternate hypothesis
                      </option>
                      <option value="6">
                        Two-tailed alternate hypothesis
                      </option>
                  </select>
              </div>
              <div class="drag-and-drop-element">
                  <p>Teachers does not take more than 45 minutes to teach a lesson plan.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise2.selectVerify(this);" name="p6-hypothesisAndVariablesExercise2" id="p6-hypothesisAndVariablesExercise2" data-index="5">
                      <option value="">
                          ---Select---
                      </option>
                      <option value="1">
                        Alternate hypothesis
                      </option>
                      <option value="2">
                        Dependent variable
                      </option>
                      <option value="3">
                        Independent variable
                      </option>
                      <option value="4">
                        Null hypothesis
                      </option>
                      <option value="5">
                        One-tailed alternate hypothesis
                      </option>
                      <option value="6">
                        Two-tailed alternate hypothesis
                      </option>
                  </select>
              </div>
            </form>
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
  importJSFiles(){
    return [
        'questions'
    ]
  }
}

stagePage.pageContainerSet('hypothesisAndVariablesExercise2',inglesClass_hypothesisAndVariablesExercise2);