class inglesClass_instrumentsAndTechniquesForDataCollection extends generalPage{
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
      <div class="header-h2"><h2>Instruments and techniques for data collection</h2></div>
      
      <div class="text-general">
          <p>According to the kind of data to gather, different methods can be designed and applied for the gathering.</p>
          <p>Recall that primary data is obtained from the direct source of information, so some methods such as surveys, experiments, and observation are done. Secondary data is obtained from sources where information is already available: articles, newspapers, media, reports. In any case, some instruments need to be designed to collect data such as matrices, rubrics, questionnaires, etc.</p>
          <h3>Methods of primary data collection</h3>
          <p>For gathering this type of data there are several methods for which the researcher designs the instruments: formats, questions, registers, and so on. The number and type of methods will depend on the type of research and its purposes.</p>
          <p>The list of methods for gathering information can be extensive, yet the main and most popular methods include:</p>
          <div class="main-container-acordeon">  
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Questionnaires</button>
                    <div class="text-acordeon">
                            <p>Instrument consisting of a set of questions and prompts about issues related to the research to be replied in the same way by all the respondents.</p>
                            <p>Questionnaires can present two forms of questions: restricted (closed-ended) that ask the respondents to formulate their own answers and unrestricted (open-ended) that have the respondents pick an answer from a given number of options. They can be administered orally face-to-face, using paper and pencil, by phone call, computerized via email, web site, forum, etc.</p>
                    </div>
                </div>
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Interviews</button>
                    <div class="text-acordeon">
                            <p>Technique that involves asking questions orally to respondents individually or in groups, face-to-face, by telephone or video conference.</p>
                            <p>Interviews can be unstructured, which take place with few or no questions and they often progress in the manner of a normal conversation; semi structured, which use an interview protocol to help guide the interviewer. They can incorporate conversational aspects, but it is mostly a guided conversation since it does maintain some structure and also provides the possibility of additional details; structured, which strictly adhere to the use of an interview protocol to guide the interviewer. Only the questions on the protocol are asked and there are not a lot of opportunities for further information.</p>
                    </div>
                </div>
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Focus groups</button>
                    <div class="text-acordeon">
                            <p>This technique gathers together a group of people that does not have to be very large and that has to be homogeneous, it means, they have to share common features. The group is dynamized by a moderator who stimulates the group to discuss the issues proposed.</p>
                            <p>The moderator often poses some questions, using questionnaires, interviews or surveys, and the respondents express themselves freely in an unwound atmosphere while he or an assistant observes, takes notes and tape-records. The level of involvement of the moderator in the session will depend on how it takes place and the control he needs to have on the group.</p>
                            <p>The meetings can develop in a structured or unstructured fashion and generally require more than a session to assure the coverage of the topics and responses.</p>
                    </div>
                </div>
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Observation</button>
                    <div class="text-acordeon">
                            <p>This systematic method is used to examine people or events in natural settings or naturally occurring situations with the aim of discovering, exploring, understanding, describing behaviors, phenomena, interactions, among other situations. When observing people in a field setting, this involves expressing clearly the intentions (as part of the ethical responsibilities of the researcher), engaging to the situations (depending on the goals of the research), and recording the observations. For this, several methods are employed such as field diaries, protocols, tape-recordings, etc.
                            Observation can be developed in different ways:
                            </p>
                            <ol>
                                <li>
                                    Researcher observes without being noticed (disguised/non-participant/natural observation).
                                </li>
                                <li>
                                    Researcher observes but not in an obvious manner (unobtrusive/natural observation) and doesn’t interact with participants.
                                </li>
                                <li>
                                    Researcher has limited interaction, intervening only when further clarification of actions is needed.
                                </li>
                                <li>
                                    Researcher uses active control over the observation, as in the case of a formal interview, to elicit specific types of information (participant and controlled observation).
                                </li>
                                <li>
                                    Evaluator fully participates in the situation with either a hidden or known identity. People being observed can´t notice they are being observed, so the researcher is an ordinary member of the group and observes in secret (covert observation) or they can know they are being observed by a researcher (overt observation).
                                </li>
                            </ol>
                            <p>When the observation involves the observation of the researcher’s own immediate experience, this is known as subjective observation whereas the observations involving observer as an entity apart from the thing being observed, are referred to as the objective observation. Objective observation is also called as the retrospection.</p>
                            <p>A direct observation is done when the observer is physically present and plays one of the roles mentioned above, and an indirect observation is done when some means are used to record like photography or video.</p>
                    </div>
                </div>
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Surveys</button>
                    <div class="text-acordeon">
                            <p>Consists of a predetermined set of questions that is applied to a sample specially for assessing thoughts, opinions and feelings. A survey allows to generalize the findings from the sample to the population.</p>
                            <p>They can be administered electronically, by telephone, by mail or face to face, and the questions within the survey can be asked in several ways and include closed-ended questions, which may be presented like multiple choice, dichotomous, Lickert scales, rank order scales, yes/no, and other types of questions for which there are only a few answer categories available to the respondent.</p>
                            <p>Open-ended questions, on the other hand, leave the answer entirely up to the respondent and therefore provide a greater range of responses for qualitative data.</p>
                            <p>In order to assure that data to be collected is accurate, that the survey instrument is measuring what it intends to measure and that it is appropriate for the target group, it is highly suggested to pilot test the survey on a sample of the target group. This will validate the instrument for data gathering.</p>
                    </div>
                </div>
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Case studies</button>
                    <div class="text-acordeon">
                            <p>Is an in-depth investigation of a single person, group, event or community that inquiries about a phenomenon within its real-life context. Typically, data are gathered from a variety of sources and by using several different methods e.g., observations, diaries, surveys, official documents, etc., and the cases have single-case or multiple-case applications.</p>
                            <p>In a case study, nearly every aspect of the subject’s life and history is analyzed to seek patterns and causes for behavior. The findings from the case studied can be generalized to many others or to a larger population.</p>
                            <p>When conducting case studies, several typologies might appear depending on the goals of the research:</p>
                            <p>Retrospective: A type of case study that involves looking at historical information to find out how a specific event, situation, behavior happened in the past.</p>
                            <p>Prospective: A type of case study in which an individual or group of people is observed in order to determine how a specific event, situation, behavior is happening or will happen.
                            </p>
                    </div>
                </div>
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Diaries</button>
                    <div class="text-acordeon">
                            <p>Is a type of self-administered questionnaire that is completed by respondents to record frequent or contemporaneous events or experiences in their natural setting. A written report of observational experiences, recorded through frequent entries in a personal diary and is used to examine repeated patterns or predominant events. It is a monitoring tool for recording data over a long period of time and because it relies on timely and accurate documentation of an on-going process, it must be completed close to the event observed.</p>
                            <p>The form is filled in when events occur or at specific times or time intervals, according to the aim of the research.</p>
                            <p>The booklet used to achieve these goals should contain several pages denoting either a day of the week, 24-hour period or less, or a week; should present clear instructions on how to complete it; should have clear and well-constructed questions and short checklists; appropriate terminology and activities to complete.</p>
                            <p>Diary formats can be unstructured, where participants register events as they occur, or can be structured in the form of a log or a calendar in which evaluators make daily entries on a blank page with prompts. They may also be structured like a questionnaire with printed boxes containing events or other symbols.</p>
                    </div>
                </div>
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Experiments</button>
                    <div class="text-acordeon">
                            <p>Are investigations in which hypothesis are scientifically tested. In an experiment, an independent variable (the cause) is manipulated and the dependent variable (the effect) is measured; any extraneous variables are controlled.</p>
                            <p>Some key features are control over variables, careful measurement, establishing cause and effect relationships, and use of several instruments and techniques to monitor the experiments and gather data: observation, field notes, recordings, and so on.</p>
                            <p>Experiments can occur differently depending on the location and the purposes. In laboratories, experiments are controlled in restricted conditions: the researcher allocates participants randomly to each independent variable group, decides the environment, the moments, the circumstances, and the procedures.</p>
                            <p>In field experiments, the researcher manipulates the independent variables but in a real-life setting, so extraneous variables cannot be controlled, unlike in laboratories</p>
                            <p>In natural experiments, the experiments are also conducted in the everyday environment of the participants, but here the researcher has no control over the independent variable as it occurs naturally in real life.</p>
                    </div>
                </div>
                <div class="container-acordeon">
                    <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Oral histories</button>
                    <div class="text-acordeon">
                            <p>Allow to conduct aboriginal oral histories and oral historical research through recorded interviews between a narrator, (respondent) with personal experience of historically significant events, and a well-informed interviewer (researcher), with the goal of adding to the historical record. It involves interviewing people about their past to record and interpret historical information based on the opinions and personal experiences of people involved in the events. This is done to ensure that their history is not lost and is therefore preserved and available to future generations.</p>
                            <p>Oral histories are linked to a single phenomenon to shed light on exactly what transpired. It’s a holistic approach to evaluation that uses a variety of techniques and other primary sources as well as secondary sources to gain understanding and insight into history.</p>
                    </div>
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
}

//let stages_ingles_instrumentsAndTechniquesForDataCollection = new inglesClass_instrumentsAndTechniquesForDataCollection('instrumentsAndTechniquesForDataCollection');

stagePage.pageContainerSet('instrumentsAndTechniquesForDataCollection',inglesClass_instrumentsAndTechniquesForDataCollection);