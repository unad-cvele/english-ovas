class inglesClass_theReviewOfTheLiteratureExercises_2 extends generalPage{
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
      <div class="header-h2"><h2>Exercise 2</h2></div>
      <div class="text-general">
          <p>Read the statements below and say whether you consider they are true or false.</p>
          <form action="" id="form-theReviewOfTheLiteratureExercises_2">
                        <div class="drag-and-drop-element">
                            <p><strong>A. </strong>As the literature review searches for theories and concepts, it might mean a great contribution for the theoretical framework of the research study.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTheReviewOfTheLiteratureExercises_2.selectVerify(this);" name="p1-theReviewOfTheLiteratureExercises_2" id="p1-theReviewOfTheLiteratureExercises_2" data-index="0">
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
                            <p><strong>B. </strong>The review identifies problems in the literature such as gaps, controversies, limitations, etc., but it does not seek to solve them.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTheReviewOfTheLiteratureExercises_2.selectVerify(this);" name="p2-theReviewOfTheLiteratureExercises_2" id="p2-theReviewOfTheLiteratureExercises_2" data-index="1">
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
                            <p><strong>C. </strong>A book that discusses several theories and outlooks about autonomy in language learning can be considered a primary source for literature.
                            </p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTheReviewOfTheLiteratureExercises_2.selectVerify(this);" name="p3-theReviewOfTheLiteratureExercises_2" id="p3-theReviewOfTheLiteratureExercises_2" data-index="2">
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
                            <p><strong>D. </strong>Methodological aspects of research such as the research design and the data analysis methods can also be searched in the literature.
                            </p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTheReviewOfTheLiteratureExercises_2.selectVerify(this);" data-index="3">
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
                            <p><strong>E. </strong>For the review, you have to look for the whole existing literature, from the origins until the last publications.
                            </p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTheReviewOfTheLiteratureExercises_2.selectVerify(this);" data-index="4">
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
                            <p><strong>F. </strong>An article that discusses methodologies and findings of a set of research studies can be categorized like secondary literature.
                            </p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTheReviewOfTheLiteratureExercises_2.selectVerify(this);" data-index="5">
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
                            <p><strong>G. </strong>The literature review is a list of previous studies and existing related theories and a summary of them.
                            </p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTheReviewOfTheLiteratureExercises_2.selectVerify(this);" data-index="6">
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
                            <p><strong>H. </strong>As you organize your review, you can mix different approaches, for example, an argumentative, thematic and chronological review.
                            </p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTheReviewOfTheLiteratureExercises_2.selectVerify(this);" data-index="7">
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

stagePage.pageContainerSet('theReviewOfTheLiteratureExercises_2',inglesClass_theReviewOfTheLiteratureExercises_2);