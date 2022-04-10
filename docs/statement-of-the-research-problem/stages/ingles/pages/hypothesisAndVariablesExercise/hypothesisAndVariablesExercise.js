class inglesClass_hypothesisAndVariablesExercise extends generalPage{
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
      <div class="header-h2"><h2>Hypothesis and variables: Exercise 1</h2></div>
      <div class="text-general">
        <p>To understand more the relationship between hypotheses and variables, develop the following activities.</p>
        <p>From exercises 1 to 4 you find some research problems, so are asked to identify the hypothesis and variables that can emerge from the problems. Read the statements below each problem and say whether they are the null or the alternate hypothesis, the one-tailed or two-tailed hypothesis, the dependent or the independent variable.</p>
        <div class="drag-and-drop-element drag-and-drop-title">
          <h3>Research problem</h3>
          <p>To what extend do in-service teachers read more or less science fiction than pre-service teachers?</p>
        </div>
          <form action="" id="form-hypothesisAndVariablesExercise">
            <div class="drag-and-drop-element">
                  <p>In-service teachers do not read more science fiction than pre-service teachers.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise.selectVerify(this);" name="p1-hypothesisAndVariablesExercise" id="p1-hypothesisAndVariablesExercise" data-index="0">
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
                  <p>In-service teachers read more science fiction than pre-service teachers.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise.selectVerify(this);" name="p2-hypothesisAndVariablesExercise" id="p2-hypothesisAndVariablesExercise" data-index="1">
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
                  <p>How much science fiction do in-service teachers read?</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise.selectVerify(this);" name="p3-hypothesisAndVariablesExercise" id="p3-hypothesisAndVariablesExercise" data-index="2">
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
                  <p>How much science fiction do in-service and pre-service teachers read?</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise.selectVerify(this);" name="p4-hypothesisAndVariablesExercise" id="p4-hypothesisAndVariablesExercise" data-index="3">
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
                  <p>A specific amount of time for in-service and pre-service teachers to read.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise.selectVerify(this);" name="p5-hypothesisAndVariablesExercise" id="p5-hypothesisAndVariablesExercise" data-index="4">
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
                  <p>The amount of time or number of resources teachers that read.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise.selectVerify(this);" name="p6-hypothesisAndVariablesExercise" id="p6-hypothesisAndVariablesExercise" data-index="5">
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

stagePage.pageContainerSet('hypothesisAndVariablesExercise',inglesClass_hypothesisAndVariablesExercise);