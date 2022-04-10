class inglesClass_hypothesisAndVariablesExercise4 extends generalPage{
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
      <div class="header-h2"><h2>Hypothesis and variables: Exercise 4</h2></div>
      <div class="text-general">
        <div class="drag-and-drop-element drag-and-drop-title">
          <h3>Research problem</h3>
          <p>Is there a relationship between the time spent by the teacher to prepare a lesson and the achievement of the learning goals by learners in the language class?</p>
        </div>
          <form action="" id="form-hypothesisAndVariablesExercise4">
            <div class="drag-and-drop-element">
                  <p>To find out what’s the appropriate amount of time to prepare a class so that the learning goals are achieved and what amount of time is not convenient for a lesson preparation</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise4.selectVerify(this);" name="p1-hypothesisAndVariablesExercise4" id="p1-hypothesisAndVariablesExercise4" data-index="0">
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
                  <p>A specific amount of time spent by the teacher to prepare a lesson.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise4.selectVerify(this);" name="p2-hypothesisAndVariablesExercise4" id="p2-hypothesisAndVariablesExercise4" data-index="1">
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
                  <p>The achievement of the learning goals by learners in the language class.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise4.selectVerify(this);" name="p3-hypothesisAndVariablesExercise4" id="p3-hypothesisAndVariablesExercise4" data-index="2">
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
                  <p>There is no relationship between the time spent by the teacher to prepare a lesson and the achievement of the learning goals by learners in the language class.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise4.selectVerify(this);" name="p4-hypothesisAndVariablesExercise4" id="p4-hypothesisAndVariablesExercise4" data-index="3">
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
                  <p>There is a relationship between the time spent by the teacher to prepare a lesson and the achievement of the learning goals by learners in the language class.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise4.selectVerify(this);" name="p5-hypothesisAndVariablesExercise4" id="p5-hypothesisAndVariablesExercise4" data-index="4">
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
                  <p>To find out what’s the appropriate amount of time to prepare a class so that the learning goals are achieved</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise4.selectVerify(this);" name="p6-hypothesisAndVariablesExercise4" id="p6-hypothesisAndVariablesExercise4" data-index="5">
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

stagePage.pageContainerSet('hypothesisAndVariablesExercise4',inglesClass_hypothesisAndVariablesExercise4);