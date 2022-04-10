class inglesClass_ethnographicMethod extends generalPage{
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
      <div class="header-h2"><h2>Ethnographic method</h2></div>
      <div class="timeline">
        <div class="start">
            <p>Ethnographic research has its roots in <strong>ethnography</strong> (arisen from social anthropology) which is about the in-depth study of people, cultures, habits and mutual differences.</p>
            <p>The researcher studies people or phenomena in their cultural or social setting during a considerable amount of time, intending to produce a narrative account of that particular culture, against a theoretical backdrop. This narrative refers to the description of aspects that might include deeds (behaviour), words used (language), emotions and feelings, interactions with one another, expressed and unexpressed thoughts, among other issues. A lot of information can also be gained from other sources, such as written documents, corporate events, site location, recorded material, etc.</p>
            <p>The researcher conducts data gathering on an iterative basis that includes observing, reflecting, building up a theory and then going back into the field and testing it. This process of testing is essential because the researcher is the main instrument of data gathering and analysis, so there is an inevitable element of subjectivity.</p>
            <p>In order to ensure the credibility of data gathering, researchers generally make considerable use of participant observation, usually triangulated with interviews and ordinary informal conversations. Triangulation is particularly important as one method on its own is not usually reliable.</p>
        </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stagePage.activity('popUpToDiscoverTimeline_show',this);"></button>
                </div>
                <div class="box-right">
                    <h3>Features of this method</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                            <h4>This type of systematic investigation…</h4>
                            <ul>
                                <li>involves observing variables in their natural environments where there is a continuous interaction among those variables.</li>
                                <li>depends, almost entirely, on the data gathered from the observations to identify patterns and build theory that explains phenomena.</li>
                                <li>is largely qualitative (narrative), inductive (develops theory), exploratory (discovery) and longitudinal (recurring patterns over an amount of time).</li>
                                <li>data collection and analysis may be simultaneous while theories are formed on the basis of some data and then tested and refined against further data.</li>
                                <li>The objective of the theoretical framework is not to predict, but to explain, to look for contextual structures and to provide a context for events.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stagePage.activity('popUpToDiscoverTimeline_show',this);"></button>
                </div>
                <div class="box-right">
                    
                    <h3>Applications of this method</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                            <p>The ethnographic method of research can be used across a wide range of social sciences and disciplines. For instance, we can study the culture of organizations (organizational ethnography), observe consumer habits and target markets (market research or business ethnographic research), learn about teaching and learning methods (educational ethnographic research). Linguistic studies and medical studies are other fields where the ethnographic method can be applied.</p>
                            
                        </div>
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
        'generalStage.css|general',
        'timeline.css|general'
    ]
    }
    importJSFiles(){
        this.popUpToDiscoverTimeline=new popUpToDiscoverTimelineClass;
    }
}

stagePage.pageContainerSet('ethnographicMethod',inglesClass_ethnographicMethod);