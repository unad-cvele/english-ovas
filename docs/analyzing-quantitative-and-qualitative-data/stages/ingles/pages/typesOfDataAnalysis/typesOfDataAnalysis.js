class inglesClass_typesOfDataAnalysis extends generalPage{
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
      <div class="header-h2"><h2>Types of data analysis</h2></div>
      <div class="timeline">
        <div class="start">
            
            <p>In the analysis stage, any type of data analysis conducted through any kind of technique can fit into one of the following types of data analysis. Click below the titles of the graph to find out what these analyses are about.</p>
        </div>
            <div class="sigle-time-container">
                <div class="box-left"></div>
                <div class="line-timeline">
                    <button title="Click here to show" onclick="stagePage.activity('popUpToDiscoverTimeline_show',this);"></button>
                </div>
                <div class="box-right">
                    <h3>Descriptive analysis</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                            <p>This process looks at what has happened in the past regarding the phenomenon of study. Its purpose is to describe the development of actions but this analysis doesn’t explain why this might have happened or to establish cause-and-effect relationships but to provide an easily digestible snapshot.</p>
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
                    <h3>Diagnostic analysis</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                            <p>This process focuses on understanding why something has happened. It is literally the diagnosis of a problem which main purpose is to identify and respond to anomalies within the data. Causes, origins and relationships are set to explain the development of actions.</p>
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
                    <h3>Predictive analysis</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                            <p>This process allows the identification of future trends based on historical data about the phenomenon of study. It seeks to predict what is likely to happen in the future. Based on past patterns and trends (descriptive analysis), data analysts can devise predictive models which estimate the likelihood of a future event or outcome.</p>
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
                    <h3>Prescriptive analysis</h3>
                    <div class="popUpToDiscover">
                        <div class="text-popUpToDiscover">
                        <div class="close-button-container"><button onclick="stagePage.activity('popUpToDiscoverTimeline_hide',this);">X</button></div>
                            <p>This process makes recommendations for the future about the subject of study. It is so complex since it looks at what has happened (descriptive analysis), why it happened (diagnostic analysis), and what might happen (predictive analysis) in order to determine what should be done next. In other words, prescriptive analytics shows you how you can best take advantage of the future outcomes that have been predicted.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="start"><p>These types of analysis can be developed together in a single study and to consider them as steps in the process, or you can approach only one or more of them depending on the objectives of the study.</p></div>
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

stagePage.pageContainerSet('typesOfDataAnalysis',inglesClass_typesOfDataAnalysis);