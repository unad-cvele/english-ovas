class inglesClass_typologiesOfResearchProblems extends generalPage{
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
      <div class="header-h2"><h2>Typologies of research problems</h2></div>
      <div class="text-general">
            <p>It is worth mentioning that a research problem is not just a difficulty that has negative consequences and must be eliminated, yet a problem might mean distinct situations:</p>
            <ul>
                <li>
                    An unresolved controversy.
                </li>
                <li>
                    A gap in knowledge.
                </li>
                <li>
                    An unexplored topic or phenomenon.
                </li>
                <li>
                    An unrequited need within the chosen subject.
                </li>
                <li>
                    A condition to improve.
                </li>
                <li>
                    A troubling question that exists in theory, literature, or practice.
                </li>
                <li>
                    The need to create new problems.
                </li>
            </ul>
            <div class="text-center">
                <button class="btn-general button-popUpToDiscover" onclick="stages_ingles.popUpToDiscover.show(this,'none');">
                Exercise
                </button>
            </div>
            <div class="popUpToDiscover">
                <div class="text-popUpToDiscover">
                    <h3>Exercise</h3>
                    <p>The following instances of research problems reflect different natures in the problem. Can you identify them? </p>
                    <p>Select the option you consider best:
                    </p>
                    <form action="" id="form-typologiesOfResearchProblems">
                        <div class="drag-and-drop-element">
                            <p>Is there a relationship between classroom design and children’s behavior?</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTypologiesOfResearchProblems.selectVerify(this);" name="p1-typologiesOfResearchProblems" id="p1-typologiesOfResearchProblems" data-index="0">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    A condition to improve.
                                </option>
                                <option value="2">
                                    A new problem.
                                </option>
                                <option value="3">
                                    A troubling question that exists in theory, literature, or practice.
                                </option>
                                <option value="4">
                                    An unexplored topic or phenomenon.
                                </option>
                                <option value="5">
                                    An unresolved controversy.
                                </option>
                            </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <p>What factors influence the time devoted by children to online activity?</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTypologiesOfResearchProblems.selectVerify(this);" name="p2-typologiesOfResearchProblems" id="p2-typologiesOfResearchProblems" data-index="1">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    A condition to improve.
                                </option>
                                <option value="2">
                                    A new problem.
                                </option>
                                <option value="3">
                                    A troubling question that exists in theory, literature, or practice.
                                </option>
                                <option value="4">
                                    An unexplored topic or phenomenon.
                                </option>
                                <option value="5">
                                    An unresolved controversy.
                                </option>
                            </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <p>To what extent does blended learning respond to the needs and expectations of the students regarding the writing skills?</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTypologiesOfResearchProblems.selectVerify(this);" data-index="2">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    A condition to improve.
                                </option>
                                <option value="2">
                                    A new problem.
                                </option>
                                <option value="3">
                                    A troubling question that exists in theory, literature, or practice.
                                </option>
                                <option value="4">
                                    An unexplored topic or phenomenon.
                                </option>
                                <option value="5">
                                    An unresolved controversy.
                                </option>
                            </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <p>Do the more novels students read the better they can write an essay?</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTypologiesOfResearchProblems.selectVerify(this);" data-index="3">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    A condition to improve.
                                </option>
                                <option value="2">
                                    A new problem.
                                </option>
                                <option value="3">
                                    A troubling question that exists in theory, literature, or practice.
                                </option>
                                <option value="4">
                                    An unexplored topic or phenomenon.
                                </option>
                                <option value="5">
                                    An unresolved controversy.
                                </option>
                            </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <p>Do students learning speaking skills in small group discussions achieve listening skills better than the students learning the same skill in a big class?</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsTypologiesOfResearchProblems.selectVerify(this);" data-index="4">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    A condition to improve.
                                </option>
                                <option value="2">
                                    A new problem.
                                </option>
                                <option value="3">
                                    A troubling question that exists in theory, literature, or practice.
                                </option>
                                <option value="4">
                                    An unexplored topic or phenomenon.
                                </option>
                                <option value="5">
                                    An unresolved controversy.
                                </option>
                            </select>
                        </div>
                    </form>
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
    importJSFiles(){
        return [
            'questions'
        ]
    }
}

stagePage.pageContainerSet('typologiesOfResearchProblems',inglesClass_typologiesOfResearchProblems);