class inglesClass_conclusions extends generalPage{
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
      <div class="header-h2"><h2>Research Methodology from a Holistic Approach</h2></div>
      <div class="research-ethics">
        
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/19-1.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <p>In this virtual resource we have
                addressed various epistemological
                conceptions that are attributed to
                educational research in order to
                legitimize it as a field of action that
                generates knowledge and solves
                educational problems.</p>
            </div>
        </div>
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/19-2.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <p>This epistemological approach was
                carried out through the analysis of
                theoretical, philosophical and
                methodological referents that are
                represented under the conceptions of
                epistemic models, methods, and types
                of research, which have permeated the
                development of educational research.
                </p>
            </div>
        </div>
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/19-3.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <p>The activities carried out in this
                resource allowed us to develop a
                significant variety of cognitive
                and metacognitive skills such as
                comprehension, analysis,
                reflection, critical thinking,
                among others, which have
                helped us in the construction and
                reconstruction of our knowledge.</p>
            </div>
        </div>
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/19-4.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <p>This content is essential to
                develop our work as researchers
                since we will be able to apply this
                acquired knowledge, with clear
                theoretical and methodological
                references, and thus be able to
                transform the social realities of
                our environment through our
                research proposals.</p>
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
        'research-ethics.css|general'
    ]
    }
}

//let stages_ingles_researchEthics = new inglesClass_researchEthics('researchEthics');

stagePage.pageContainerSet('conclusions',inglesClass_conclusions);
