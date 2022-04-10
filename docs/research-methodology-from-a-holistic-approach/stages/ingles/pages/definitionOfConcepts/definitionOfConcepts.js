class inglesClass_definitionOfConcepts extends generalPage{
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
      <div class="header-h2"><h2>Definition of concepts</h2></div>
      <div class="text-general">
          <p>Before introducing the main methods for doing research, we will first explain what we understand by the concept of method, and it will be compared with other related concepts to solve the confusion and misconceptions that researchers generally have when they research. It is important to say that the definitions of these concepts will be based on the perspective of the holistic approach to research, developed by the researcher Jacqueline Hurtado de Barrera. Most of the contents of this resource is an adaptation of her work, which has been developed during the last decades.</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Epistemic model</button>
                <div class="text-acordeon">
                    <p>According to Hurtado de Barrera, J. (2000) an epistemic model refers to a philosophical position on the notion of <strong>knowledge</strong>. An epistemic model attempts to provide answers, from a <u>philosophical perspective</u> to questions such as what is knowledge, what is it for, what are the sources of knowledge, how is such knowledge validated, what is considered research, and how does research relate to society, values, politics and ideologies, among other things.</p>
                    <p>Some examples of epistemic models are positivism, interpretivism, constructivism, structuralism and pragmatism.</p>
                    <p>Depending on the epistemic model, the researcher orients his or her work. Each model has its method, techniques and preferences for certain types of research as well as its mechanisms for validating knowledge. For instance, the method (way) to research for the pragmatism is through action-research where participants are observed and interviewed to identify problems.</p>
                    <p>A characteristic of the epistemic models is that they are manifested in various fields of thought and general theories of knowledge from different disciplines. For this reason, it is possible that within the same epistemic model there may exist different theories that allow us to account for the same event. For example, positivism manifested itself in the field of physics, medicine, law, psychology, education, sociology... The same has happened with other models.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Methodology</button>
                <div class="text-acordeon">
                        <p>This term means the study or science of methods. It can be defined as the description, analysis and critical appraisal of research methods to point out the contributions and limitations of such methods, and to make explicit their presuppositions, implications and the consequences of their use.</p>
                        <p>Methodology is the science that deals with the study, development, evaluation and critique of existing methods, as well as the design, testing and monitoring of new methods. In the field of research, methodology is the area of knowledge that studies the general methods of the scientific process. It includes not only the study of methods, but also the study of the techniques, tactics, strategies and procedures used by the researcher to achieve the objectives of his work, and includes the knowledge of each of the steps (some sequential and others-simultaneous) involved in the research process.</p>
                        <p>All in all, the methodology is <strong>about how a method, a series of techniques, tools, and procedures are used together</strong> to conduct a research study. This is why in a written thesis there is usually an entire chapter called Research Methodology.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Method</button>
                <div class="text-acordeon">
                        <p>The method is the <u>systematic way or manner of proceeding</u> or doing something to achieve an objective and <strong>comprises the set of steps or general stages that guide the action</strong>. The method establishes also the guidelines, the purposes and foundations to, in the case of research, conduct a study.</p>
                        <p>Examples of methods are the hypothetical deductive method, the action-research method, or the phenomenology method. Consequently, it is inappropriate to say "ethnographic research" or "critical research" to refer to the ethnographic method or the dialectical critical method, respectively.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Technique</button>
                <div class="text-acordeon">
                        <p>Each of the steps of the method uses a series of techniques to be developed. Techniques are <u>specific ways of doing something</u>. For example, some data collection techniques are interviewing and observation, but there are also sampling techniques (such as simple random sampling or stratified sampling), and there are data analysis techniques (such as analysis of variance or correlation, in the case of statistics).</p>
                        <p>When the analysis techniques are based on numerical data and belong to the field of statistics, they are called "quantitative techniques", and when they are based on verbal data, they are called "qualitative techniques". This allows us to understand that the terms "qualitative" or "quantitative" do not allude to epistemic models, paradigms or types of research, but the techniques used in research analysis. Methods should not be confused with techniques; this is why it is inappropriate to say "qualitative method" or "quantitative method".</p>

                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Type of research</button>
                <div class="text-acordeon">
                        <p>Hurtado de Barrera, J. (2010) claims that the type of research refers <u>to the degree of depth and type of result</u> to be achieved in the research. The types of research, in this case, are defined <strong>by the objective</strong>, rather than by the area of knowledge in which the study is conducted, the methods used or the source of the data. Each type of research has its characteristics and processes.</p>
                        <p>Some methods are more suitable for developing certain types of research, but there are also methods applicable to several types of research.</p>
                        <p>Examples of types of research are exploratory research, descriptive research, projective research and explanatory research. This means that if the goal is to describe, then descriptive research will be predominant, and in the case that the goal is to evaluate, then evaluative research will be applied.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Research design</button>
                <div class="text-acordeon">
                        <p>The research design refers to the <u>operational aspects related to data collection</u> (sources, time and number of study events). Examples of designs are field design, documentary design, experimental design, evolutionary design, case study design, etc. It is improper to say "experimental research" or "field research" to refer to experimental design or field design, respectively.</p>
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
        'generalStage.css|general'
    ]
}        
}

//let stages_ingles_definitionOfConcepts = new inglesClass_definitionOfConcepts('definitionOfConcepts');

stagePage.pageContainerSet('definitionOfConcepts',inglesClass_definitionOfConcepts);