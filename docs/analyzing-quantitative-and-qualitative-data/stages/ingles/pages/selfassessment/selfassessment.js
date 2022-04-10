class inglesClass_selfassessment extends generalPage{
    constructor(pageName){
        super(pageName);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
    stages_ingles.topicsChoose.itemsValid=0;
      return `
      <div class="header-h2"><h2>Self-assessment</h2></div>
      <div class="text-general">
        <p>To check your understanding on the topics, let’s develop this activity. Say whether the following statements are true or false.</p>
          <form action="" id="form-selfassessment">
                        <div class="drag-and-drop-element">
                            <h3>1.</h3>
                            <p>The nominal level of measurement is used to classify data into categories while the interval and ratio measurement levels are much more exact in numerical terms. </p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsselfassessment.selectVerify(this);" name="p1-selfassessment" id="p1-selfassessment" data-index="0">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    True
                                </option>
                                <option value="2">
                                    False
                                </option>
                            </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <h3>2.</h3>
                            <p>If a company makes a profit of $ 897,564, this amount is considered like continues data.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsselfassessment.selectVerify(this);" name="p2-selfassessment" id="p2-selfassessment" data-index="1">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    True
                                </option>
                                <option value="2">
                                    False
                                </option>
                            </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <h3>3.</h3>
                            <p>If you need to get the average age of all the female students in a city with a population of million people, you conduct inferential statistics to make conclusions about the whole population of school girls using data drawn from a sample of it.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsselfassessment.selectVerify(this);" name="p3-selfassessment" id="p3-selfassessment" data-index="2">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    True
                                </option>
                                <option value="2">
                                    False
                                </option>
                                </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <h3>4.</h3>
                            <p>This is an example of quantitative data coding: if a survey is completed with a 1000 sample size, the researcher can create an English level bracket to distinguish the respondents based on their English level. Thus, it becomes easier to analyze small data buckets rather than deal with the massive data pile.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsselfassessment.selectVerify(this);" data-index="3">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    True
                                </option>
                                <option value="2">
                                    False
                                </option>
                                </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <h3>5.</h3>
                            <p>Regression analysis is a statistical measure that defines co-relationship or association of two continues variables.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsselfassessment.selectVerify(this);" data-index="4">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    True
                                </option>
                                <option value="2">
                                    False
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
        'generalStage.css|general',
        'topics-choose.css|local'
    ]
    }    
    importJSFiles(){
        return [
            'questions'
        ]
    }    
}

stagePage.pageContainerSet('selfassessment',inglesClass_selfassessment);