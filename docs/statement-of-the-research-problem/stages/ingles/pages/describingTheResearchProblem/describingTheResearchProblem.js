class inglesClass_describingTheResearchProblem extends generalPage{
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
      <div class="header-h2"><h2>Describing the research problem</h2></div>
<div class="text-general">
  <p>After having identified the research problem, what you need to do next is to write a concise and concrete problem statement in some paragraphs. In this description, several purposes and aspects are involved. Play the audio below and follow the transcription to find out about the aspects to include when contextualizing the research problem.</p>
  <div class="text-center">
          <button class="btn-general button-popUpToDiscover" onclick="stages_ingles.popUpToDiscover.show(this,'none');">
                Click to read and listen
          </button>
      </div>
      <div class="popUpToDiscover">
          <div class="text-popUpToDiscover">
          <audio controls class="general">
              <source src="images/describingTheResearchProblem.mp3" type="audio/mpeg">
              Your browser does not support the audio tag.
          </audio>
              <p><strong>Place the problem into a particular context:</strong> the first thing is to contextualize the problem, it means, to locate it in a particular context. The following questions are to be answered while describing the problem: what do you already know about the problem? who does it affect and how? Where or when does the problem arise? How frequent or intense it is? What are the causes and consequences of the problem? What previous attempts have been made to address the problem? it means, does it exist previous research about it?</p>
              <p><strong>Show the relevance of the problem:</strong> during the description of the problem, it is also essential to explain the importance of this study. Think of these inquiries: why do you need to research about the problem? How will the research process help understand or solve the issue? How do the results will contribute to the field of knowledge or to the communities? What will happen if the problem is not addressed? What benefits will it have for future research? This information is similar to the Rationale or Justification of the research, which is an exclusive section of the research project, yet in this section you emphasize more the goals, purposes and impact of the study.</p>
              <p><strong>Link the problem, the topic, the research design and the procedures:</strong> there must be congruence between the topic and the problem, and the type of research that you will conduct must be the most appropriate to address the problem and obtain the expected results. This information is related to the methodological section of the project.</p>
              <p><strong>Set the objectives of the research:</strong> while writing the description of the problem, you need to explain also what your goals are to conduct the study. These objectives do not refer just to the reasons to develop the research, yet also to the decisions you will make to make the project advance and succeed. You need then to wonder what will you do to find out? Why are you conducting the study? What kind of results do you expect? What design, methods and procedures will you implement? What do you want to do with the problem identified?</p>
          </div>
      </div>
<p>Furthermore, bear in mind that the research problem:</p>
  <ul>
      <li>Has an impact on the whole topic being investigated.</li>
      <li>Should lead to further research: the ongoing problem should be the starting point for more research studies in the future.</li>
      <li>Should be of interest to the researcher and should suit his/her skills, time, and resources.</li>
      <li>Must be ethical: the approach used towards solving the problem must comply with ethical procedures that respect the integrity of people and the environment.</li>
  </ul>
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

stagePage.pageContainerSet('describingTheResearchProblem',inglesClass_describingTheResearchProblem);