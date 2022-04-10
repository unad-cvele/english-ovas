class inglesClass_structuralAnalysisMethod extends generalPage{
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
      <div class="header-h2"><h2>Structural analysis method</h2></div>
      <div class="text-general structuralAnalysisMethod">
      <div class="structuralAnalysisMethod__main_description">
        <p>This method originates from the epistemic model of <strong>structuralism</strong> which develops its investigative processes by trying to elucidate the systematic and constant relationships that exist in human, personal and social behaviour. Such relationships are called "structures". For this model, research is to interpret and explain from the relationships that are established since the world can only be understood on the basis of structural relationships.</p>
        <p>Structuralism is a form of critical research. It focuses on the systems (structures) within society and the power relations within and among the parts (subsystems) as a whole. In formalized structures, one can easily see the hierarchy of positions and levels of power. In utilizing structuralism as a research method, the channels of power are laid bare as the researcher critically analyses and maps the relations and interplay among the parts.</p>
        <p>Structuralism is not a single unified theory or approach but has been developed in several disciplines and in diverse ways. It derives from work done in linguistics (Saussure, Pierce, Jackobson), philosophy (Kant), anthropology (Levi-Strauss), sociology (Althusser, Poulantzas), psychoanalysis (Lacan), film studies (Metz) and media analysis (Derrida, Barthes).</p>
        <p>As for the method in structuralism, according to Lévi-Strauss (1974), in anthropological and sociological studies one might advance through three stages:</p>
      </div>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">1. Observation of the real</button>
                <div class="text-acordeon">
                    <p>Reality is empirically observable, but the objects presented to the researcher are given in a crude, primitive way, within reach of the senses. Observation is only the initial step that allows the assumption of subsequent levels.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">2. Construction of models</button>
                <div class="text-acordeon">
                    <p>The researcher must, in a second instance, elaborate a model of reality in order to try to abstract the structure that allows the interpretation of the event under study. At this level, the structure is found as an abstraction and description of reality and gives rise to a conceptual model that initially is not very elaborate.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">3. Analysis of structures</button>
                <div class="text-acordeon">
                    <p>The activity of reason discovers the structure present in reality and translates it into logico-mathematical terms in order to deduce the various particular structures with their characteristics and possibilities of evolution. The structural analysis makes it possible to identify the elements of a problem and to show how they are related to each other. It is based on the principle that an element is explained by the influence it exerts on others and by the elements on which it depends. This level of abstraction is called "theoretical model" because it leads to the interpretation of the structure. The method of structuralism leads to the creation of interpretative models and theoretical models.</p>
                    <p>Structuralism does not emphasize the uniqueness of each of the parts but rather seeks to reveal how some common aspects of the parts relate those parts to the larger whole. Structuralism posits that no part in a particular system has any significance in and of itself – its identity is defined in terms of its relationship between all the parts of the system.</p>
                    <p>According to structuralism, underlying “structures” or “essences” determine the meaning of an event or phenomenon. For example, unchanging structures of grammar underpin all language (linguistics); economic structures or organizations determine social beliefs and behaviours (economics); hidden structures of the unconscious mind control behaviour (psychology; psychoanalysis).</p>
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
        'structuralAnalysisMethod.css|general'
    ]
}        
}

//let stages_ingles_structuralAnalysisMethod = new inglesClass_structuralAnalysisMethod('structuralAnalysisMethod');

stagePage.pageContainerSet('structuralAnalysisMethod',inglesClass_structuralAnalysisMethod);