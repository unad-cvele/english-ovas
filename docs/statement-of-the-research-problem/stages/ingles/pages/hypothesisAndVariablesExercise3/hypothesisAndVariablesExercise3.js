class inglesClass_hypothesisAndVariablesExercise3 extends generalPage{
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
      <div class="header-h2"><h2>Hypothesis and variables: Exercise 3</h2></div>
      <div class="text-general">
        <div class="drag-and-drop-element drag-and-drop-title">
          <h3>Research problem</h3>
          <p>The use of graphic organisers to boost memory in language learners.</p>
        </div>
          <form action="" id="form-hypothesisAndVariablesExercise3">
            <div class="drag-and-drop-element">
                  <p>What kind of information will students be able to memorise when designing graphic organisers?</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise3.selectVerify(this);" name="p1-hypothesisAndVariablesExercise3" id="p1-hypothesisAndVariablesExercise3" data-index="0">
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
                  <p>What kind of information will students be able to memorise when designing graphic organisers in comparison to those who don’t use these resources?</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise3.selectVerify(this);" name="p2-hypothesisAndVariablesExercise3" id="p2-hypothesisAndVariablesExercise3" data-index="1">
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
                  <p>Design of graphic organisers.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise3.selectVerify(this);" name="p3-hypothesisAndVariablesExercise3" id="p3-hypothesisAndVariablesExercise3" data-index="2">
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
                  <p>Memorisation of information</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise3.selectVerify(this);" name="p4-hypothesisAndVariablesExercise3" id="p4-hypothesisAndVariablesExercise3" data-index="3">
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
                  <p>Students who design graphic organisers will not be able to memorise information faster than students who do not design them.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise3.selectVerify(this);" name="p5-hypothesisAndVariablesExercise3" id="p5-hypothesisAndVariablesExercise3" data-index="4">
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
                  <p>Students who design graphic organisers will be able to memorise information faster than students who do not design them.</p>
                  <div class="answer-text">
                  </div>
                  <select onchange="questionsHypothesisAndVariablesExercise3.selectVerify(this);" name="p6-hypothesisAndVariablesExercise3" id="p6-hypothesisAndVariablesExercise3" data-index="5">
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

stagePage.pageContainerSet('hypothesisAndVariablesExercise3',inglesClass_hypothesisAndVariablesExercise3);