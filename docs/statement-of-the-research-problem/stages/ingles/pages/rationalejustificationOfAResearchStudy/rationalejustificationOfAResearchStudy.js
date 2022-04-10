class inglesClass_rationalejustificationOfAResearchStudy extends generalPage{
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
      <div class="header-h2"><h2>Rationale/Justification of a research study</h2></div>
      <div class="text-general">
        <p>In every research study, the researcher must be able to explain the importance of conducting the research by providing valid arguments or reasons.</p>
        <p>The rationale of a research study, also known as significance or justification, explains why it is important to conduct the study, what problem is tackled and how it will be resolved, who will be benefited from the study and what the impact will be on the community and on the knowledge field.</p>
        <p>The rationale includes also the explanations for the chosen data collection methods, the methodological design, the target population, and generally, the way the study will be conducted.</p>
        <p>Follow the guidelines below to understand how to structure your rationale and what to include:</p>
        <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">What reasons can I stand out from my investigation?</button>
                <div class="text-acordeon">
                    <ul>
                        <li>Uniqueness of the problem and how different it will be addressed. The researcher has to explain the essence of the problem in a detailed manner by explaining why it is different; to highlight the importance of studying the problem, and what new or innovative procedures will be proposed to treat the problem.</li>
                        <li>Practical benefits associated with the solution or treatment of the problem. Demonstrate how the study will contribute to extension of existing knowledge, change prevailing belief, boost professional development, suggest some new relationships between phenomena, etc.</li>
                        <li>Accuracy of the methods and procedures of the research. Show how the study will formulate a practical and unique approach to the methods adopted for investigation; explain why the instruments, procedures, techniques and so on are the most appropriate for the study and how novel or original they are in accordance with the problem, objectives and purposes.</li>
                        <li>Benefits of the research on the community and the field of study. The study has to explain who will the research benefit, how and why; how the object of study will be improved, changed, transformed or whatever the research objectives are, and how this will contribute to the development of science and the groups of people involved directly and indirectly in the study.</li>
                    </ul>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">How to write the rationale section?</button>
                <div class="text-acordeon">
                    <ul>
                        <li>Introduce the over-arcing topic, problem and objectives by making evident their uniqueness and relevance.</li>
                        <li>It needs to be introduced and explained what other researchers have published on within your research field, it means, explain the work of previous literature and prior research. This will help to show that your work is not more of the same, it’s different and will work with something that hadn’t been done before.</li>
                        <li>Include discussion about where the gaps in knowledge are in your field. Use these to define potential research questions that need answering and explain the importance of addressing these unanswered questions.</li>
                        <li>Cite sources to reinforce the importance of study. The sources might refer to the problem, the chosen approaches, the impact, etc.</li>
                        <li>Identify how the results may contribute to advance knowledge and understanding in theory or practice, and the benefits for practitioners and scholars.</li>
                    </ul>
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

stagePage.pageContainerSet('rationalejustificationOfAResearchStudy',inglesClass_rationalejustificationOfAResearchStudy);