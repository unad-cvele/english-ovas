class inglesClass_primaryAndSecondaryResearchData extends generalPage{
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
      <div class="header-h2"><h2>Primary and secondary research data</h2></div>
      <div class="text-general">
          <p>When gathering data, the researcher can opt for the kind of sources and data to collect based on the objectives stated for the study. This data can be primary or secondary.</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Primary Data Collection</button>
                <div class="text-acordeon">
                        <p>Primary data collection refers to the direct gathering of original raw data through first-hand sources. As this data is collected directly by the researcher, it is reliable and objective in as much as it was collected with the purpose of addressing a particular research problem.</p>
                        <p>For example, a research institute desires to find out the kind of books that a sample population of 30 people no longer read as they grow up. People are observed and interviewed during a considerable amount of time. The data gathered throughout this process is primary.</p>
                        <p>The original photographs of an event, the results of an opinion poll, the government documents about a new policy, or a student thesis are primary sources of information as well.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Secondary Data Collection</button>
                <div class="text-acordeon">
                    <p>Secondary data collection refers to the gathering of second-hand data collected by the researcher. This data is already existing, which means that was collected in the past by other individuals and is generally published in books, journals, reports, etc.</p>
                    <p>For example, a researcher desires to find out the kind of books that people no longer read as they grow up. He consults some websites that inform about a study conducted by a research institute about this issue. The information he gets from these sites is secondary.</p>
                    <p>Documentaries about events, an article analyzing another document, or a blog post interpreting the results of a poll, are examples of secondary sources of information.</p>
                    
                </div>
            </div>
        </div>
            <p>Both primary and secondary data might present strengths and drawbacks, so the researcher needs to be careful to avoid presenting unreliable data. For instance, primary data is specific to the needs of the research, can be controlled, is up to date, and bias can be avoided, but some cons are that collecting this data is time-consuming, might be difficult to obtain, and errors might appear during treatment.</p>
            <p>On the other hand, secondary data is easily accessible and low-cost, but it might be unreliable, outdated or biased.</p>
            <p>Primary sources are more credible as evidence, but generally, research uses both primary and secondary sources since this adds value to the research.</p>
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

//let stages_ingles_primaryAndSecondaryResearchData = new inglesClass_primaryAndSecondaryResearchData('primaryAndSecondaryResearchData');

stagePage.pageContainerSet('primaryAndSecondaryResearchData',inglesClass_primaryAndSecondaryResearchData);