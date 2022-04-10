class inglesClass_theResearchProblemAndTheResearchTopic extends generalPage{
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
      <div class="header-h2"><h2>The research problem and the research topic</h2></div>
      <div class="text-general">
            <p>Hurtado de Barrera (2000) conceives research as an inquiry process which seeks to learn about some event, either with the aim of finding general laws or simply of obtaining particular answers to a determined need or concern. This concern or need is known as a <strong>problem</strong>.</p>
            <p>The research problem is then the issue that will be addressed by means of research procedures. Its ultimate goal is to transform a generalized problem into a targeted, well-defined problem; one that can be resolved through focused research and careful decision-making.</p>
            <div class="text-center">
                <button class="btn-general button-popUpToDiscover" onclick="stages_ingles.popUpToDiscover.show(this);">
                    Click here to discover some instances of research problems.
                </button>
            </div>
            <div class="popUpToDiscover">
                <div class="text-popUpToDiscover">
                    <strong>Some instances of research problems are: </strong>
                    <ul>
                        <li>The misconception of translation in language teaching and learning.</li>
                        <li>The relationship between classroom design and children’s behavior.</li>
                        <li>The impact of novels in writing skills.</li>
                        <li>Implementation of a cross-cultural-based curriculum.</li>
                        <li>Discrimination in the teaching discourse.</li>
                    </ul>
                </div>
            </div>
            <p>Each research problem is underpinned by a research topic which is the subject or subject matter of a proposed study. This topic becomes the central idea to learn about or to explore through the specific problem that was posed (Creswell, 2009).</p>
            <div class="text-center">
                <button class="btn-general button-popUpToDiscover" onclick="stages_ingles.popUpToDiscover.show(this);">
                    Click here to discover some instances of research topics.
                </button>
            </div>
            <div class="popUpToDiscover">
                <div class="text-popUpToDiscover">
                    <strong>Some instances of research topics are: </strong>
                    <ul>
                        <li>Psychological stress at the school.</li>
                        <li>Distance education for children.</li>
                        <li>The intelligence scales.</li>
                        <li>Critical thinking in teenagers.</li>
                        <li>The interlanguage phenomenon.</li>
                        <li>Use of authentic materials for ELT.</li>
                    </ul>
                </div>
            </div>
            <p><strong>Search for more!</strong></p>
            <p>Have a look at this reference to discover more instances of topics and problems in the language education field.</p>
            <p>Pardede, P. (2018). Identifying and formulating the research project in Research in ELT.</p>
            <div class="text-center">
            <button class="btn-general btn-download" onclick="window.open('./images/theResearchProblemAndTheResearchTopic.pdf','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">Download</button>
                
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

stagePage.pageContainerSet('theResearchProblemAndTheResearchTopic',inglesClass_theResearchProblemAndTheResearchTopic);