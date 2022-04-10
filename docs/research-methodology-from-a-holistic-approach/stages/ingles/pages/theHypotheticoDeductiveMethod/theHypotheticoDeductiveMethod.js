class inglesClass_theHypotheticoDeductiveMethod extends generalPage{
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
      <div class="header-h2"><h2>The hypothetico-deductive method</h2></div>
      <div class="text-general theHypotheticoDeductiveMethod">
      <div class="theHypotheticoDeductiveMethod__main_description">
        <p>As the name indicates there are two parts to the hypothetico-deductive method: a <u>hypothesis or theory</u>, arising from whatever source, that is proposed for a test to be validated or rejected, and a <u>deduction</u>, where the test results are drawn from the hypotheses. Robert Nola (2007) claims also that there is a crucial aspect in the method and it refers to those results which are deduced and compared with experimentation. The results pass or fail when the comparison is made. In some cases, the hypothesis might be invented to account for some already known fact; it is then tested by deducing further consequences from it, which are then subject to test.</p>
        <p>This method originates from the epistemic model of <strong>positivism</strong> which is guided by theory and hypotheses about the presumed relationships between phenomena with the objective of verifying these hypotheses.</p>
        <p>The positivist method was for a long time called the "scientific method", thus disqualifying any other scientific method of research by labelling it as "non-scientific". For positivists, knowledge is valid to the extent that it has been obtained through the so-called "scientific method", it means the hypothetical-deductive method.</p>
        <p>The method of positivism has been described in the following steps:</p>
      </div>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">1. Problem</button>
                <div class="text-acordeon">
                    <p>The researcher identifies the broad problem area in which the main problem is occurring to do a research project. Then, the problem statement is defined. It can be scientific research with a definite aim and a general objective of the research.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">2. Hypothesis</button>
                <div class="text-acordeon">
                    <p>Development of hypothesis which should be testable and falsifiable. It is not possible to formulate hypotheses without a theory. This method requires that the researcher has at his disposal a prior theory to derive his hypotheses, regardless of how such a theory has been constructed or from where it has arisen.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">3. Experiment</button>
                <div class="text-acordeon">
                    <p>The collection of data is based on quantitative and qualitative data which is analyzed to check if the hypothesis generated were supported. Finally, data is interpreted for finding out the meaning of the results.</p>
                    <p>The method of positivism is designed to contrast the hypotheses derived from a theory, but not to construct theories. Positivism doesn’t deal with the creation of theories from which the hypotheses are derived, but of the application of the latter for verification.</p>
                    <p>Hypothesis testing takes place when the statements derived from a theoretical framework are contrasted with reality. This testing is preferably done employing an experiment, although in expost-facto designs the experiment does not take place and other mechanisms are used. The contrast tells whether the theory has empirical support or not. A characteristic of the experiment is that it is done in a controlled and replicable manner.</p>
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
        'theHypotheticoDeductiveMethod.css|general'
    ]
}        
}

//let stages_ingles_theHypotheticoDeductiveMethod = new inglesClass_theHypotheticoDeductiveMethod('theHypotheticoDeductiveMethod');

stagePage.pageContainerSet('theHypotheticoDeductiveMethod',inglesClass_theHypotheticoDeductiveMethod);