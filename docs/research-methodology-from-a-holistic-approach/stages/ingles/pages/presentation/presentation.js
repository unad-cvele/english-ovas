class inglesClass_presentation extends generalPage{
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
      <div class="header-h2"><h2>Presentation</h2></div>
      <div class="table_simple">
        <div class="table_simple__imagen">
            <img src="./images/files/presentation-teacher.png" alt="Teacher">
        </div>
        <div class="table_simple__descripcion">
            <p>Bearing in mind that through this virtual object we will analyze the legitimacy that epistemology grants to educational research, we will make a theoretical tour on various conceptions that underpin research applied to education from a holistic approach.</p>
            <p>We will begin then with an approach to what research methods are about to understand them and know the fields of application, then we will approach the epistemic models to understand what their incidence is on educational research.</p>
            <p>Finally, we will approach the types of research that epistemology recognizes in research in order to categorize it as a field of knowledge necessary in the contribution to the educational sciences.</p>
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
        'table_simple.css|general'
    ]
}        
}

//let stages_ingles_presentation = new inglesClass_presentation('presentation');

stagePage.pageContainerSet('presentation',inglesClass_presentation);