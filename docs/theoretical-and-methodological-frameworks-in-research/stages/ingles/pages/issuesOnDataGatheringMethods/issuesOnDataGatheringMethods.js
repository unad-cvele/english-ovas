class inglesClass_issuesOnDataGatheringMethods extends generalPage{
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
      <div class="header-h2"><h2>Issues on data gathering methods</h2></div>
      <div class="cards-audio-module">
            <div class="start">
               <p>While the diverse methods of data collection are different in nature, there are some commonalities that the researcher has to consider.</p>
               <ul>
                <li>
                    Any procedure for collecting data from participants must meet legal and ethical guidelines. This includes obtaining legal consents for recording people and interviewing children under 14; ensuring privacy and confidentiality of participants’ identification, personal information and other sensitive data; informing participants about the purposes of the procedures, their role, clear guidelines about their participation, and the possible risks of the research on them. 
                </li>
                <li>
                    No matter which method you use, each has strengths and weaknesses. Some of them are the easiness or difficulty to collect a large amount of information, manage and analyze it; the objectivity or subjectivity of the instruments and the procedures as well as the participants’ responses; the appropriateness of the instruments to gather and understand abstract information such as emotions, feelings, beliefs, etc.; availability of people to respond to the instruments; analysis and coding of data can be extremely time consuming; lack of privacy or anonymity of respondents’ identity and responses; avoidance or potential for having biased answers.<br/>The researcher must be aware of these and other situations and manage them so the instruments are suitable for the goals of the study.
                </li>
                <li>
                    Conventionally, specific methods have been used for gathering quantitative data such as questionnaires, surveys and documents, while focus groups, oral histories and interviews allow gathering qualitative data. Nevertheless, most of them can be used for both purposes. The structure, data collected and analysis techniques of the methods will permit the researcher to collect both types of data.
                </li>
                <li>
                    Research methods and instruments are not created out of nothing. They should be based on the conceptual framework of the study and the variables. They should also consider the type of data to gather, the personal and social contexts of respondents. All in all, the methods ought to be thoroughly congruent with every single aspect of the research study.
                </li>
                <li>
                    Generally, the data collection process follows some steps: 1) identify the type of data to gather, the purposes of the instruments and the target audience. 2) choose the most appropriate methods. This includes selecting existing instruments (already validated) or designing the own instruments. 3) plan the data collection procedures to understand how you will implement the instruments: how long, how much data, when to stop, how to administer the methods, etc. 4) design of instruments considering the previous steps and watching out for structures, accuracy of questions, good use of language, etc. 5) conduct pilot tests or others techniques to assess and validate the instruments. The validation techniques have also to be designed. 6) after assessing the instruments and analyzing data, the researcher refines the instruments to be finally valid and reliable. 7) collect the data by implementing the instruments according to the plan stated. At this stage, the researcher can start storing and organizing the information and have it ready to be analyzed. 8) analyze data and implement findings by turning raw data into valuable insights that can be used for the purposes of the study.
                </li>
               </ul>
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
        'cards-audio-container.css|general'
    ]
}        
}

stagePage.pageContainerSet('issuesOnDataGatheringMethods',inglesClass_issuesOnDataGatheringMethods);