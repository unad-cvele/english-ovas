class inglesClass_processingDataFromSurveysAndQuestionnairesForAnalysis extends generalPage{
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
      <div class="header-h2"><h2>Processing data from surveys and questionnaires for analysis</h2></div>
      <div class="text-general">
        <p>To analyze the results of surveys, interviews or written questionnaires effectively, researchers can follow these four general steps.</p>
        <p>Read the description of the steps below and associate them with the corresponding process.</p>
          <form action="" id="form-processingDataFromSurveysAndQuestionnairesForAnalysis">
                        <div class="drag-and-drop-element">
                            <h3>1.</h3>
                            <p>It is about a careful examination of the answers of the questionnaire or instrument administered to identify any problems after completion and solve them. Some actions to conduct in this step are to remove major errors, duplicates, and outliers; remove unwanted data points; bring structure to your data; fill in major gaps.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsprocessingDataFromSurveysAndQuestionnairesForAnalysis.selectVerify(this);" name="p1-processingDataFromSurveysAndQuestionnairesForAnalysis" id="p1-processingDataFromSurveysAndQuestionnairesForAnalysis" data-index="0">
                                <option value="">
                                    ---Select---
                                </option>
                                <option value="1">
                                    Analyzing the data
                                </option>
                                <option value="2">
                                    Cleaning the data
                                </option>
                                <option value="3">
                                    Coding the data
                                </option>
                                <option value="4">
                                    Tabulating the data
                                </option>
                            </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <h3>2.</h3>
                            <p>This process means assigning a numerical, verbal or iconic value to the data recorded in the instrument. It is necessary to design the codebook, identify the codes of the non-pre-coded question categories, and code the answers of the non-pre-coded questions. This process is important since this helps identify patterns and tendencies in the data analyzed. This process makes it easier to analyze and interpret data and thus set the results of the study.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsprocessingDataFromSurveysAndQuestionnairesForAnalysis.selectVerify(this);" name="p2-processingDataFromSurveysAndQuestionnairesForAnalysis" id="p2-processingDataFromSurveysAndQuestionnairesForAnalysis" data-index="1">
                                <option value="">
                                ---Select---
                                </option>
                                <option value="1">
                                    Analyzing the data
                                </option>
                                <option value="2">
                                    Cleaning the data
                                </option>
                                <option value="3">
                                    Coding the data
                                </option>
                                <option value="4">
                                    Tabulating the data
                                </option>
                            </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <h3>3.</h3>
                            <p>This process is about expressing values, magnitudes, concepts, etc., by means of tables or charts. A digital or manual data table is created and, based on the questions and answers of the instrument, the data (codes) are entered into the different rows and columns of the table. The rows can correspond to the individuals or questionnaires and the columns to the variables or questions. This process makes complex data simple and as a result of this, it becomes easy to understand the data.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsprocessingDataFromSurveysAndQuestionnairesForAnalysis.selectVerify(this);" name="p3-processingDataFromSurveysAndQuestionnairesForAnalysis" id="p3-processingDataFromSurveysAndQuestionnairesForAnalysis" data-index="2">
                                <option value="">
                                ---Select---
                                </option>
                                <option value="1">
                                    Analyzing the data
                                </option>
                                <option value="2">
                                    Cleaning the data
                                </option>
                                <option value="3">
                                    Coding the data
                                </option>
                                <option value="4">
                                    Tabulating the data
                                </option>
                            </select>
                        </div>
                        <div class="drag-and-drop-element">
                            <h3>4.</h3>
                            <p>If the data are quantitative (closed-ended questions) you can sort the data and observe frequencies, and if it is qualitative, (open-ended questions) you can identify common themes among the responses in the instruments. If category analysis is used, you can group similar responses into certain categories, assign a numerical value to each category and code the responses according to the codes.</p>
                            <p>Tables, frequency polygons and graphs are used to organize the data, depending on the type of variable that the questions in the questionnaire addressed and how the responses were collected. For each of the variables being examined, obtain the frequency distribution and percentages.</p>
                            <p>Descriptive statistics helps organize, summarize and present the data in a simple way and measure how the frequencies were distributed and how certain variables behaved in that distribution or data set.</p>
                            <div class="answer-text">
                            </div>
                            <select onchange="questionsprocessingDataFromSurveysAndQuestionnairesForAnalysis.selectVerify(this);" data-index="3">
                                <option value="">
                                ---Select---
                                </option>
                                <option value="1">
                                    Analyzing the data
                                </option>
                                <option value="2">
                                    Cleaning the data
                                </option>
                                <option value="3">
                                    Coding the data
                                </option>
                                <option value="4">
                                    Tabulating the data
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

stagePage.pageContainerSet('processingDataFromSurveysAndQuestionnairesForAnalysis',inglesClass_processingDataFromSurveysAndQuestionnairesForAnalysis);