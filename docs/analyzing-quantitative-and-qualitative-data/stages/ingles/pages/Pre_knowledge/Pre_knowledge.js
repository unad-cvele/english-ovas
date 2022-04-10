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
      return `
      <div id="timer_inglesClass_Pre_knowledge"></div>
      <div class="header-h2"><h2>Pre-knowledge</h2></div>
      <div class="text-general list-select-option">
        <p>Before getting into the contents, let’s review how much knowledge you have about the main topics of this resource. Read the definitions below and associate them with the given concepts.</p>
    
              <div class="drag-and-drop-element">
                <table>
                  <tbody>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Coding">
                            <option value="">--- Select ---</option>
                            <option value="Coding">Coding</option>
                            <option value="Correlation analysis">Correlation analysis</option>
                            <option value="Longitudinal data analysis">Longitudinal data analysis</option>
                            <option value="Regression analysis">Regression analysis</option>
                            <option value="Tabulation">Tabulation</option>
                          </select>
                      </td>
                      <td>
                          <p>It is the process of assigning labels to words and phrases to organize qualitative data and identify recurring themes and the relationships between them.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Longitudinal data analysis">
                            <option value="">--- Select ---</option>
                            <option value="Coding">Coding</option>
                            <option value="Correlation analysis">Correlation analysis</option>
                            <option value="Longitudinal data analysis">Longitudinal data analysis</option>
                            <option value="Regression analysis">Regression analysis</option>
                            <option value="Tabulation">Tabulation</option>
                          </select>
                      </td>
                      <td>
                          <p>It consists of the statistical tools and methods used to analyze data collected on the same group of individuals on multiple occasions over time.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Tabulation">
                            <option value="">--- Select ---</option>
                            <option value="Coding">Coding</option>
                            <option value="Correlation analysis">Correlation analysis</option>
                            <option value="Longitudinal data analysis">Longitudinal data analysis</option>
                            <option value="Regression analysis">Regression analysis</option>
                            <option value="Tabulation">Tabulation</option>
                          </select>
                      </td>
                      <td>
                          <p>It is the systematic and logical presentation of numeric data in rows and columns to process data and facilitate comparison and statistical analysis.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Regression analysis">
                            <option value="">--- Select ---</option>
                            <option value="Coding">Coding</option>
                            <option value="Correlation analysis">Correlation analysis</option>
                            <option value="Longitudinal data analysis">Longitudinal data analysis</option>
                            <option value="Regression analysis">Regression analysis</option>
                            <option value="Tabulation">Tabulation</option>
                          </select>
                      </td>
                      <td>
                          <p>It is a set of statistical methods used to estimate relationships between a dependent variable and one or more independent variables.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <select class="text-option-to-move" onchange="stagePage.activity('listSelectOptions',this);" data-answer="Correlation analysis">
                            <option value="">--- Select ---</option>
                            <option value="Coding">Coding</option>
                            <option value="Correlation analysis">Correlation analysis</option>
                            <option value="Longitudinal data analysis">Longitudinal data analysis</option>
                            <option value="Regression analysis">Regression analysis</option>
                            <option value="Tabulation">Tabulation</option>
                          </select>
                      </td>
                      <td>
                          <p>It is a statistical method that is used to discover if there is a relationship between the variables/datasets, and how strong that relationship may be.</p>
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
stagePage.pageContainerSet('Pre_knowledge',inglesClass_Pre_knowledge);
