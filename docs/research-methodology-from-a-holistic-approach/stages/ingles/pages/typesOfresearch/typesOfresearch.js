class inglesClass_typesOfresearch extends generalPage{
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
      <div class="header-h2"><h2>Types of research</h2></div>
      <iframe class="iframe-video-principal" src="https://www.youtube.com/embed/3bptYhZyK1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
        <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this,'noScrollIntoView')">Show in text</button>
        <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      <div class="text-show-content">
            <p>The types of research are defined by the objective of the research study, rather than by the area of knowledge in which the study is conducted, the methods used or the source of the data.</p>
            <p>So, for example, if the main objective of a study is to analyse an issue, this means that the type of research will be analytical, or if it wants to explore something, so the study will be exploratory.</p>
            <p>The type of research indicates the degree of depth and the type of results of the study and is in accordance with the general objective.</p>
            <p>The researcher Hurtado de Barrera identifies 10 types of research and each one of them has its own characteristics and processes. They are exploratory, descriptive, analytical, comparative, explanatory, predictive, projective, interactive, confirmatory and evaluative research.</p>
            Exploratory research
            <h4>Exploratory research</h4>
            <p>Exploratory research is oriented towards the discovery of the unexpected. It allows becoming familiar with little-known situations to open the path to more complex research. The result of exploration is expressed in questions. This means that after exploration, more questions than answers emerge. These questions will refer to more delimited investigations within certain lines of research.</p>
            <h4>Descriptive research</h4>
            <p>Descriptive research consists of identifying in detail the characteristics of the variables of the event under study in all its dimensions. Profiles, taxonomies, historiographic studies, are some examples of the application of this type of research.</p>
            <h4>Analytical research</h4>
            <p>Analytical (also interpretative research goes beyond the description. It seeks to find internal relationship patterns in the object of study in order to reach a deeper knowledge of it. Analytical research attempts to unravel what is beyond the obvious.</p>
            <h4>Comparative research</h4>
            <p>Comparative research aims at identifying differences and similarities between two or more groups or situations with respect to the same event of study. This is typical in the studies of differential psychology, comparative education, comparative sexology, among others.</p>
            <h4>Explanatory research</h4>
            <p>Explanatory research seeks to understand the relationships between different events. It is interested in the "why" and "how" of events or situations. This type of research generates theories that explain phenomena, like Freud's psychoanalytic theory or Darwin's theory of evolution.</p>
            <h4>Predictive research</h4>
            <p>Predictive research is interested in anticipating future situations on the object of study based on the knowledge of previous conditions and understanding of explanatory processes.</p>
            <h4>Projective research</h4>
            <p>Projective research aims at designing or creating proposals aimed at solving certain situations. Examples of projective research include architectural and engineering projects, the creation of social intervention programs, the design of study programs, etc., as long as they are supported by a research process.</p>
            <h4>Interactive research</h4>
            <p>Interactive research is aimed at modifying concrete situations through the application of previously designed projects. A well-known modality of this is participatory action research. It can also be any intervention process that proceeds from the systematic inquiry.</p>
            <h4>Confirmatory research</h4>
            <p>Confirmatory research seeks to verify the hypotheses derived from theories. It inquires about the possible relationships between events, based on the control of a series of extraneous variables. It contrasts the theories generated in explanatory research, or through other processes, with reality in order to corroborate that such theories do indeed account for what happens in certain contexts.</p>
            <h4>Evaluative research</h4>
            <p>Evaluative research consists of finding out whether the objectives that have been set in a given program or project are being achieved or not and discovering which aspects of the process have contributed to or hindered the achievement of these objectives.</p>

            <h3>The spiral of research</h3>
            <p>It is important to mention that, according to the holistic perspective of research, these types of research are not mutually exclusive, but are integrated in such a way that several of them can be applied in the same study. This means that in an investigation, analytical, descriptive, explanatory or any other type of process can be used to arrive at a result.</p>
            <p>Hurtado de Barrera explains the research process as a spiral, where different stages can be drawn. These stages correspond to the different types of research.</p>
    
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}        
}

//let stages_ingles_typesOfresearch = new inglesClass_typesOfresearch('typesOfresearch');

stagePage.pageContainerSet('typesOfresearch',inglesClass_typesOfresearch);
