class inglesClass_Pre_knowledge extends generalPage{
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
      <div class="header-h2"><h2>Pre-knowledge</h2></div>
      <div class="text-general">
          <p>Before getting into the contents, let’s analyze how much knowledge you have about the main topics of this resource. Check the following inquiries.</p>
          <form action="" id="form-Pre_knowledge">
                <div class="drag-and-drop-element">
                    <p><strong>1. </strong>Can you provide a definition of the concept “epistemic model”?</p>
                    <div class="answer-text">
                    </div>
                    <select>
                        <option value="">
                            ---Select---
                        </option>
                        <option value="1">
                            Yes
                        </option>
                        <option value="2">
                            No
                        </option>
                    </select>
                </div>
                <div class="drag-and-drop-element">
                    <p><strong>2. </strong>Can you give an accurate definition of the holistic approach of research?</p>
                    <div class="answer-text">
                    </div>
                    <select>
                        <option value="">
                            ---Select---
                        </option>
                        <option value="1">
                            Yes
                        </option>
                        <option value="2">
                            No
                        </option>
                    </select>
                </div>
                <div class="drag-and-drop-element">
                    <p><strong>3. </strong>Have you ever conducted a phenomenological study?</p>
                    <div class="answer-text">
                    </div>
                    <select>
                        <option value="">
                            ---Select---
                        </option>
                        <option value="1">
                            Yes
                        </option>
                        <option value="2">
                            No
                        </option>
                    </select>
                </div>
                <div class="drag-and-drop-element">
                    <p><strong>4. </strong>Do you know the difference between Action Research and Participatory Action Research?</p>
                    <div class="answer-text">
                    </div>
                    <select>
                        <option value="">
                            ---Select---
                        </option>
                        <option value="1">
                            Yes
                        </option>
                        <option value="2">
                            No
                        </option>
                    </select>
                </div>
                <div class="drag-and-drop-element">
                    <p><strong>5. </strong>Do you know what’s the main purpose of the sociological pragmatism?</p>
                    <div class="answer-text">
                    </div>
                    <select>
                        <option value="">
                            ---Select---
                        </option>
                        <option value="1">
                            Yes
                        </option>
                        <option value="2">
                            No
                        </option>
                    </select>
                </div>
                        
                    </form>
            <div class="Pre_knowledge__finalmessage">If most of your answers were NO, don’t worry, after navigating through this resource you will be able to answer YES, so let’s get started.</div>
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
        'Pre_knowledge.css|general'
    ]
    }    
    importJSFiles(){
        return [
            'questions'
        ]
    }    
}

stagePage.pageContainerSet('Pre_knowledge',inglesClass_Pre_knowledge);