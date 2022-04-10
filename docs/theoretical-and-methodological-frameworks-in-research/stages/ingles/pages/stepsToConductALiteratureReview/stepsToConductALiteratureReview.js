class inglesClass_stepsToConductALiteratureReview extends generalPage{
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
      <div class="header-h2"><h2>Steps to conduct a literature review</h2></div>
      <div class="timeline">
        <div class="start">
            <h3>How to conduct a literature review?</h3>
            <p>Depending on the main purposes of the lit review, different steps can be lied down to build up this section. Here are the main steps to state the review:</p>
        </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stages_ingles.popUpToDiscoverTimeline.show(this);"></button>
                </div>
                <div class="box-right">
                    <h3>Define the topics or field of research</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stages_ingles.popUpToDiscoverTimeline.hide(this);">X</button></div>
                            <p><strong>Define the topics or field of research:</strong> to begin, you need to have in mind the topics related to your research that you will use for the search. This includes concepts, theories, subject areas, methodological approaches, etc. These specifications will narrow the search and limit the number of articles and documents for the analysis.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stages_ingles.popUpToDiscoverTimeline.show(this);"></button>
                </div>
                <div class="box-right">
                    
                    <h3>Set up the objectives of the review</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stages_ingles.popUpToDiscoverTimeline.hide(this);">X</button></div>
                            <p><strong>Set up the objectives of the review: </strong>it is important to know why you are conducting the review. Maybe the study wants to compare some theories or concepts to confirm, add to, or challenge established knowledge, or provide new outlooks of prior research, or reveal new insights of the problems, etc. Recall the list of reasons provided in the first part of this resource.</p>
                            <p>Take into account that the lit review serves also to prove that your research is not doing more of the same, but is something different that will hence contribute to the field of study.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stages_ingles.popUpToDiscoverTimeline.show(this);"></button>
                </div>
                <div class="box-right">
                    
                    <h3>Search for the sources</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stages_ingles.popUpToDiscoverTimeline.hide(this);">X</button></div>
                            <p><strong>Search for the sources: </strong>consider only scholar and reliable sources and search only the literature related to your study. Use several databases and sources, type keywords, and use filters to reduce the number of articles to read.                            
                                </p>
                            <p>Start with the most recent material and work backwards to find good recent studies and use seminal references. Assess whether you have enough literature or if you need to choose another topic.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stages_ingles.popUpToDiscoverTimeline.show(this);"></button>
                </div>
                <div class="box-right">
                    
                    <h3>Analyze and evaluate the literature</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stages_ingles.popUpToDiscoverTimeline.hide(this);">X</button></div>
                            <p><strong>Analyze and evaluate the literature: </strong>as you read, you should write the section by understanding the connections between the sources you have been reading in order to establish theoretical and practical trends, patterns, themes, contradictions, gaps, conflicts, debates, etc. Bear in mind that the lit review is not a mere list of previous studies, but relationships and analysis must be set up. It is neither just a summary of the sources but is also about synthetizing, analyzing, interpreting, and critically evaluating to give a clear picture of the state of knowledge on the subject.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stages_ingles.popUpToDiscoverTimeline.show(this);"></button>
                </div>
                <div class="box-right">
                    <h3>State the findings of the review</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stages_ingles.popUpToDiscoverTimeline.hide(this);">X</button></div>
                            <p><strong>State the findings of the review: </strong>the lit review should have an <u>introduction</u>, where you present the purpose and the focus of the review and relate them with the research problem and objectives; a <u>main body</u>, where you present the findings of the literature reviewed by giving an overview of the main points of each source, combining them into a coherent whole, adding your own interpretations where needed, discussing the significance of findings in relation to the literature as a whole, and mentioning the strengths and weaknesses of the sources.</p>
                            <p>You can use subheadings for the different themes or the <strong>methodological approach</strong> you chose to present the lit review, and do not forget <strong>1)</strong> to write well-structured paragraphs with transition words and topic sentences to draw connections, comparisons and contrasts, and <strong>2)</strong> to include citations to avoid plagiarism.
                            </p>
                            <p>Finally, you present the <u>conclusion</u>, where you summarize the key findings taken from the literature and emphasize their significance and show how your research addresses gaps and contributes new knowledge, or discuss how you have drawn on existing theories and methods to build a framework for your research.</p>
                        </div>
                    </div>
                </div>
            </div>
        <div class="finish">
            <a href="#theReviewOfTheLiterature_4" class="btn-general btn-finish-timeline" onclick="stages_ingles.menu.getFromPageName(event,this);">Let’s discover some approaches to organize the review.</a>
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
        'timeline.css|local'
    ]
}        
}

stagePage.pageContainerSet('stepsToConductALiteratureReview',inglesClass_stepsToConductALiteratureReview);