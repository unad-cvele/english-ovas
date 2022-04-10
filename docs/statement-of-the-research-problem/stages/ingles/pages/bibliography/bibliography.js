class inglesClass_bibliography extends generalPage{
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
      <div class="header-h2"><h2>Bibliography</h2></div>
      <div class="text-general">
          <p>Adnan, M. (2009). Research problems and objectives in language learning. University of Pittsburgh.</p>
          <p>Creswell, J. (2009). Research design: qualitative, quantitative, and mixed methods approaches. 3rd ed. SAGE Publications.</p>
          <p>Hurtado de Barrera, J. (2000). Metodología de la investigación holística. Caracas. Fundación Sypal.</p>
          <p>Kaur, S. (2013). Variables in research. Indian Journal of Research and Reports in Medical Sciences, 3(4). Pp 36-38.</p>
          <p>Van de Water, D. (2017, April 14). How to define good research objectives.<a 
              class="btn-link" 
              href="https://www.lipmanhearne.com/how-to-define-good-research-objectives/" 
              onclick="window.open('https://www.lipmanhearne.com/how-to-define-good-research-objectives/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"
          >https://www.lipmanhearne.com/how-to-define-good-research-objectives/</a>
          </p>
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

stagePage.pageContainerSet('bibliography',inglesClass_bibliography);