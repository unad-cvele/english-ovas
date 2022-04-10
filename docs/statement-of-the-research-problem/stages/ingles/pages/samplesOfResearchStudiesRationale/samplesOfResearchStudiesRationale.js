class inglesClass_samplesOfResearchStudiesRationale extends generalPage{
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
      <div class="header-h2"><h2>Samples of research studies rationale</h2></div>
      <div class="text-general">
          <p>When writing the rationale of a research study, the words and sentences that we use play an essential role since they communicate directly and clearly the elements that justifies the study. Look at some academic phrases researchers generally use to stand out different elements of their study in the rationale section:</p>
          <ul>
              <li>This thesis documents several key contributions to the fields of __</li>
              <li>This thesis will make a number of significant contributions to the field of __</li>
              <li>The contributions of this research will have wide interest and applicability in ___</li>
              <li>The contributions of this work are presented as follows: __</li>
              <li>It has numerous advantages as explained here __</li>
              <li>It has significant benefits in terms of __</li>
              <li>There is a clear advantage in following the methods of __</li>
              <li>This has particular advantages over other __</li>
              <li>All of these advantages make it particularly valuable in __</li>
              <li>The main advantage compared to previous methods is __</li>
              <li>One practical advantage of the method is that it can be used in __</li>
              <li>The advantage becomes all the more significant when __</li>
              <li>In comparison with other techniques, this method has the advantage of __</li>
              <li>It yielded significant speed advantages when __</li>
              <li>The benefit of using the __ is expected to __</li>
              <li>The additional advantage of using this method is that it results in __</li>
          </ul>
          <p>Have a look at the samples below to identify these and other phrases as well as the structure and tips to write your own rationale.</p>
          <p class="text-center"><strong>Sample research rationale</strong></p>
          <p class="text-center">
              <button 
                        class="btn-general" 
                         
                        onclick="window.open('./images/sampleResearchRationale.pdf','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"
                    >
                    Download Sample research rationale
                    </button>
          </p>
          <p class="text-center"><strong>Sample project justification and guidelines</strong></p>
          <p class="text-center"><button
              class="btn-general" 
              onclick="window.open('./images/SampleProjectJustificationAndGuidelines.pdf','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"
          >
            Download Sample project justification and guidelines
          </button></p>
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

stagePage.pageContainerSet('samplesOfResearchStudiesRationale',inglesClass_samplesOfResearchStudiesRationale);