class inglesClass_researchMethods extends generalPage{
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
      <div class="header-h2"><h2>Research methods</h2></div>
      <div class="text-general">
        <p>Now, let’s see some real examples of research studies conducted under the methodologies of some of these methods.</p>
        <p>Read the abstracts of four different studies and say whether the methods associated are true or false.</p>
          <form action="" id="form-researchMethods">
                        <div class="drag-and-drop-element">
                            <h3>Abstract 1.</h3>
                            <p>Some researchers studied how boys and young men learn about menstruation. They analyzed the written narratives of 23 young men in which they described how they learned about menstruation, what they thought of it when they first learned about it, and what they think of it now. After looking for patterns across all 23 men’s narratives they concluded that sisters play an important role in boys’ early understanding of menstruation, that menstruation makes boys feel somewhat separated from girls, and that as they enter young adulthood and form romantic relationships, young men develop more mature attitudes about menstruation</p>
                            <p><i>According to this information, we can ensure that the research method used for conducting this study was the Inductive Generalization Method of Empirism.</i></p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsresearchMethods.selectVerify(this);" name="p1-researchMethods" id="p1-researchMethods" data-index="0">
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
                            <h3>Abstract 2.</h3>
                            <p>A researcher conducted a study to explore the lived experiences of 12 Afghan women enrolled in higher education institutions in Afghanistan. The objective was to develop an understanding of participants' perceptions of the factors that led to their enrollment in higher education and the factors that inhibit Afghan women from participating in higher education. Data were collected through a demographic questionnaire; one-on-one, face-to-face interviews; and an open-ended questionnaire. The following themes were identified through the data analysis: (1) Barriers inhibit Afghan women from obtaining higher education, (2) Afghan women perceive benefits of obtaining higher education, (3) Afghan women who enter higher education institutions have similar characteristics, and (4) educated Afghan women have opportunities to improve Afghanistan.</p>
                            <p><i>Based on the abstract, we can infer that this study was done according to the Hypothetico-deductive Method of Positivism.</i></p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsresearchMethods.selectVerify(this);" name="p2-researchMethods" id="p2-researchMethods" data-index="1">
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
                            <h3>Abstract 3.</h3>
                            <p>Learners who have studied the English language for several years are still not able to speak English fluently and they can solve the weakness of English teaching at school or university and the need of society to learn English by English course. “Daffodils” English course in Kampung Inggris is acknowledged as an alternative solution for English learners. The objectives of this research are: (1) to investigate why “Daffodils” English course in Kampung Inggris is an alternative solution for English learners (2) to explore the effects of Public Speaking at “Daffodils” English course in Kampung Inggris. The data are collected through document analysis, via in-depth interviews (students and teacher), and observation of a public speaking class. The research findings show that; (1) “Daffodils” English course solves the weakness of English teaching to learn English, (2) the effects of Public Speaking at “Daffodils” English course can develop students’ pronunciation, vocabulary, grammatical understanding and language experience and give good contribution for English learners.</p>
                            <p><i>This information allows us to understand that the research method used was the Ethnographic Method.</i></p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsresearchMethods.selectVerify(this);" name="p3-researchMethods" id="p3-researchMethods" data-index="2">
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
                            <h3>Abstract 4.</h3>
                            <p>A linguist was interested in analyzing in a group of 30 people belonging to the same community the hypothesis that states that as long as there is a complete understanding between the people involved in communication, it is not necessary then to master the grammatical rules of the language, just some basic knowledge of the language is enough. Several case studies and controlled meetings were conducted to find out how people communicated. the results stated that most of the people did not know many rules of grammar, but this did not prevent proper understanding among them. Additionally, they created a particular system of grammar and vocabulary that facilitates communication.</p>
                            <p><i>This summary permits us to know that the researcher conducted a study based on the Phenomenological Method.</i></p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsresearchMethods.selectVerify(this);" data-index="3">
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

stagePage.pageContainerSet('researchMethods',inglesClass_researchMethods);