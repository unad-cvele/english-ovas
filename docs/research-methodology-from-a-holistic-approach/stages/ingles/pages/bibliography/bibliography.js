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
          <p>Allen, K. R., Kaestle, C. E., & Goldberg, A. E. (2011). More than just a punctuation mark: How boys and young men learn about menstruation. <i>Journal of Family Issues</i>, 32, 129–156.</p>
          <p>Emerald Publishing (n.d.). How to use ethnographic methods & participant observation.    
                <a class="btn-link" href="https://www.emeraldgrouppublishing.com/how-to/observation/use-ethnographic-methods-participant-observation" onclick="window.open('https://www.emeraldgrouppublishing.com/how-to/observation/use-ethnographic-methods-participant-observation','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://www.emeraldgrouppublishing.com/how-to/observation/use-ethnographic-methods-participant-observation</a>
          </p>
          <p>Hurtado de Barrera, J. (2000). <i>Metodología de la investigación holística.</i> Caracas. Fundación Sypal.</p>
          <p>Karmala, E., Kristina, D., Supriyadi, S. (2018). Learning Public Speaking Skills from An Ethnography Study of Kampung Inggris. 2nd English Language and Literature International Conference (ELLiC).
          </p>

          <p>Mashriqi, K. (2013). Women's Access to Higher Education in Afghanistan: A Qualitative Phenomenological Study [Doctoral Dissertations]. ProQuest LLC. University of Phoenix.</p>

          <p>Nola, R. (2007). The hypothetico-deductive method. In Theories of Scientific Method: An Introduction (pp. 170-184). Acumen Publishing. doi:10.1017/UPO9781844653881.008
          </p>

          <p>Pressbooks. (n.d.). Inductive and deductive reasoning.  

                <a class="btn-link" href="https://scientificinquiryinsocialwork.pressbooks.com/chapter/6-3-inductive-and-deductive-reasoning/" onclick="window.open('https://scientificinquiryinsocialwork.pressbooks.com/chapter/6-3-inductive-and-deductive-reasoning/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://scientificinquiryinsocialwork.pressbooks.com/chapter/6-3-inductive-and-deductive-reasoning/</a>
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