class inglesClass_epistemicModels extends generalPage{
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
      <div id="timer_inglesClass_epistemicModels"></div>
      <div class="header-h2"><h2>Epistemic models</h2></div>
      <div class="text-general list-select-option">
        <p>After introducing the different epistemic models that the researcher Jacqueline Hurtado de Barrera presents, let’s recapitulate through this activity.</p>
        <p>Read the definitions below and associate them with the given concepts.</p>
    
              <div class="drag-and-drop-element">
                <table>
                  <tbody>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Empiricism">
                            <option value="">--- Select ---</option>
                            <option value="Dialectical materialism">Dialectical materialism</option>
                            <option value="Empiricism">Empiricism</option>
                            <option value="Phenomenology">Phenomenology</option>
                            <option value="Positivism">Positivism</option>
                            <option value="Pragmatism">Pragmatism</option>
                            <option value="Rationalism">Rationalism</option>
                            <option value="Sociological pragmatism">Sociological pragmatism</option>
                            <option value="Structuralism">Structuralism</option>
                          </select>
                      </td>
                      <td>
                          <p>To investigate is to describe from the outside, based on the researcher's criteria.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Phenomenology">
                            <option value="">--- Select ---</option>
                            <option value="Dialectical materialism">Dialectical materialism</option>
                            <option value="Empiricism">Empiricism</option>
                            <option value="Phenomenology">Phenomenology</option>
                            <option value="Positivism">Positivism</option>
                            <option value="Pragmatism">Pragmatism</option>
                            <option value="Rationalism">Rationalism</option>
                            <option value="Sociological pragmatism">Sociological pragmatism</option>
                            <option value="Structuralism">Structuralism</option>
                          </select>
                      </td>
                      <td>
                          <p>To investigate is to describe from the inside, from the experience of the participant.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Structuralism">
                            <option value="">--- Select ---</option>
                            <option value="Dialectical materialism">Dialectical materialism</option>
                            <option value="Empiricism">Empiricism</option>
                            <option value="Phenomenology">Phenomenology</option>
                            <option value="Positivism">Positivism</option>
                            <option value="Pragmatism">Pragmatism</option>
                            <option value="Rationalism">Rationalism</option>
                            <option value="Sociological pragmatism">Sociological pragmatism</option>
                            <option value="Structuralism">Structuralism</option>
                          </select>
                      </td>
                      <td>
                          <p>To investigate is to analyze and explain a set of relationships in terms of a structure.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Dialectical materialism">
                            <option value="">--- Select ---</option>
                            <option value="Dialectical materialism">Dialectical materialism</option>
                            <option value="Empiricism">Empiricism</option>
                            <option value="Phenomenology">Phenomenology</option>
                            <option value="Positivism">Positivism</option>
                            <option value="Pragmatism">Pragmatism</option>
                            <option value="Rationalism">Rationalism</option>
                            <option value="Sociological pragmatism">Sociological pragmatism</option>
                            <option value="Structuralism">Structuralism</option>
                          </select>
                      </td>
                      <td>
                          <p>To investigate is to analyze dialectically.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Positivism">
                            <option value="">--- Select ---</option>
                            <option value="Dialectical materialism">Dialectical materialism</option>
                            <option value="Empiricism">Empiricism</option>
                            <option value="Phenomenology">Phenomenology</option>
                            <option value="Positivism">Positivism</option>
                            <option value="Pragmatism">Pragmatism</option>
                            <option value="Rationalism">Rationalism</option>
                            <option value="Sociological pragmatism">Sociological pragmatism</option>
                            <option value="Structuralism">Structuralism</option>
                          </select>
                      </td>
                      <td>
                          <p>To investigate is to experimentally verify hypotheses derived from theories.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Rationalism">
                            <option value="">--- Select ---</option>
                            <option value="Dialectical materialism">Dialectical materialism</option>
                            <option value="Empiricism">Empiricism</option>
                            <option value="Phenomenology">Phenomenology</option>
                            <option value="Positivism">Positivism</option>
                            <option value="Pragmatism">Pragmatism</option>
                            <option value="Rationalism">Rationalism</option>
                            <option value="Sociological pragmatism">Sociological pragmatism</option>
                            <option value="Structuralism">Structuralism</option>
                          </select>
                      </td>
                      <td>
                          <p>To investigate is to demonstrate through reason.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Pragmatism">
                            <option value="">--- Select ---</option>
                            <option value="Dialectical materialism">Dialectical materialism</option>
                            <option value="Empiricism">Empiricism</option>
                            <option value="Phenomenology">Phenomenology</option>
                            <option value="Positivism">Positivism</option>
                            <option value="Pragmatism">Pragmatism</option>
                            <option value="Rationalism">Rationalism</option>
                            <option value="Sociological pragmatism">Sociological pragmatism</option>
                            <option value="Structuralism">Structuralism</option>
                          </select>
                      </td>
                      <td>
                          <p>To investigate is to solve specific issues.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Sociological pragmatism">
                            <option value="">--- Select ---</option>
                            <option value="Dialectical materialism">Dialectical materialism</option>
                            <option value="Empiricism">Empiricism</option>
                            <option value="Phenomenology">Phenomenology</option>
                            <option value="Positivism">Positivism</option>
                            <option value="Pragmatism">Pragmatism</option>
                            <option value="Rationalism">Rationalism</option>
                            <option value="Sociological pragmatism">Sociological pragmatism</option>
                            <option value="Structuralism">Structuralism</option>
                          </select>
                      </td>
                      <td>
                          <p>To investigate is to transform society for a new social order.</p>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
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
        'generalStage.css|general',
        'list-select-option.css|general'
    ]
  }
  importJSFiles(){
    this.listSelectOptions = new listSelectOptionsClass();
    this.listSelectOptions.setPoints(2);
    this.listSelectOptions.messageCorrectAnswer='<strong>Well done</strong> , excellent understanding!';
  }
}
stagePage.pageContainerSet('epistemicModels',inglesClass_epistemicModels);
