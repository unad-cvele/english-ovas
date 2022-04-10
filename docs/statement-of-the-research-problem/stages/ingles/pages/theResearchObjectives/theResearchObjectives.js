class inglesClass_theResearchObjectives extends generalPage{
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
      <div class="header-h2"><h2>The research objectives</h2></div>
      <div class="text-general">
          <p>The research objectives describe what the researcher expects to achieve by a project.
          While the problem formulation serves to describe the aim of the thesis, the objectives provide an accurate description of the <strong>specific actions</strong> to be taken in order to reach this aim. 
          Research objectives may be linked with a hypothesis or used as a statement of purpose in a study that does not have a hypothesis.
          </p>
          <div class="text-center">
                <button class="btn-general button-popUpToDiscover" onclick="stages_ingles.popUpToDiscover.show(this);">
                    General and specific objectives
                </button>
            </div>
            <div class="popUpToDiscover">
                  <div class="text-popUpToDiscover">
                    <h3>General and specific objectives</h3>
                    <p>The general objective of the study states what you expect to achieve in general terms. Specific objectives break down the general objective into smaller, logically connected parts that systematically address the various aspects of the problem. The specific objectives should specify exactly what you will do in each phase of the study, how, where, when and for what purpose.</p>
                    
                </div>
            </div>
            <p>Do’s and don’ts to set the research objectives</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Observable features in research objectives</button>
                <div class="text-acordeon">
                <ol>
                    <li>They should be presented briefly and concisely.</li>
                    <li>They should be presented in logical sequence.</li>
                    <li>They should be realistic (achieved within the expected timeframe, the available resources).</li>
                    <li>They should use action verbs that are specific enough to be evaluated or measured (e.g., assess, determine, compare, verify, calculate, describe…).</li>
                    <li>They should summarize what is to be achieved by the study.</li>
                    <li>They should be relevant: to reflect the main aspects of the study and the importance or impact of the research procedures.</li>
                    <li>They include obtaining answers to research questions or testing the research hypothesis.</li>
                </ol>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Mistakes to avoid in research objectives</button>
                <div class="text-acordeon">
                    <ol>
                        <li>Choosing the topic too broadly (too general topics, including many different and unrelated topics).</li>
                        <li>Setting an unrealistic aim (problems or solutions that are not factual, hard to achieve or irrelevant to the problem).</li>
                        <li>Choosing research methods incompatible with the timeframe available (lack of coherence between the problem, the objectives and the methods).</li>
                        <li>Inaccurate verb (verbs that are not measurable and questions that are not cohesive).</li>
                        <li>Omitting essential information such as the population, methods or design, geographical context….</li>
                        <li>Including several goals in the same objective (several verbs which will end up in several objectives).</li>
                    </ol>
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

stagePage.pageContainerSet('theResearchObjectives',inglesClass_theResearchObjectives);