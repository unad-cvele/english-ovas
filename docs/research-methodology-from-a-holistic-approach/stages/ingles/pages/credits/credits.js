class inglesClass_credits extends generalPage{
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
      <div class="header-h2"><h2>Credits</h2></div>
      <div class="text-general">
      <div class="text-center">
          <p><strong>Programa</strong></p>
          <p>Maestría en Mediación Pedagógica en el Aprendizaje del Inglés</p>
          <p><strong>Grupo de investigación</strong></p>
          <p>VIRTUALEX</p>
          <p><strong>Recurso educativo producto del Proyecto de Investigación Especial</strong></p>
          <p>“Implementación de una ruta para la gestión del conocimiento sobre la lengua inglesa, en el Centro Virtual de Escritura, Lenguaje y Expresión (CVELE) de la UNAD"</p>
          <p><strong>Diseñador pedagógico del recurso</strong></p>
          <p>Edwin Londoño Alape</p>
          <p><strong>2021</strong></p>
          </div>
      </div>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
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

stagePage.pageContainerSet('credits',inglesClass_credits);