class inglesClass_researchEthics extends generalPage{
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
      <div class="header-h2"><h2>Research Ethics</h2></div>
      <div class="research-ethics">
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/researchEthics/1_ResearchEthics.png" alt="Research Ethic" />
            </div>
            <div class="research-ethics__info">
                <p>Research Ethics is the discipline that provides norms, standards, and guidelines for the responsible conduct of research, thereby promoting good scientific practice.
                These guidelines cover practices, objectives, and relationships in several areas of research that may be applicable to all disciplines. They basically refer to internal ethical norms, linked to the self-regulation of the research community, and external ethical norms, linked to the relationship between research and society.
                </p>
            </div>
        </div>
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/researchEthics/2_ScientificResearch.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <h3>Norms that promote the ethical aims of the scientific practice</h3>
                <p>This includes appropriate management of knowledge and truth, honesty to report information and results, prohibitions against falsifying or misrepresenting research data and procedures, avoidance of error during the research, and evasion of bias in data collection and interpretation. Availability of research material to other researchers for secondary analysis and the further use and publication of results are also mandatory norms since this ensures access to knowledge as a collective good. </p>
            </div>
        </div>
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/researchEthics/3_NormCooperation.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <h3>Norms that promote essential values for cooperation</h3>
                <p>This requires trust, accountability, mutual respect, and fairness among researchers and institutions to avoid harassment among colleagues; to define and comply with roles and responsibilities; to ensure authorship, copyright, and avoidance of plagiarism as mandatory norms not to use other people’s works as your own or use unpublished data without permission and to give credit where due. </p>
                <p>Both researchers and research institutions are obliged to report possible conflicts of interest and of roles, as proof of honesty. This also includes transparency in research funding, patenting policies, confidentiality rules in peer review, and data sharing policies. </p>
            </div>
        </div>
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/researchEthics/4_NormsSociety.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <h3>Norms that promote commitment with society</h3>
                <p>This means social responsibility, protection of human rights, animal welfare, compliance with the law, and preservation of cultural monuments, the environment, and cultural traditions. Researchers ought to minimize harms and risks and maximize benefits and publish results in order to advance research and scholarship, not to advance just their own career or other personal interests.</p>
            </div>
        </div>
        <div class="research-ethics__container">
            <div class="research-ethics__imagen">
                <img src="./images/researchEthics/5_multitud.png" alt="Scientific Research" />
            </div>
            <div class="research-ethics__info">
                <h3>Norms that promote ethical relationships with people taking part in the research</h3>
                <p>This involves confidentiality of people’s identities and sensitive data, respect for the values and motives of others and for human dignity. Researchers need to inform about the purpose of the research, the methods and future probable utilization of the study, as well as the involved risks of the research for the participants in order to obtain their consent. 
                </p>
                <p>
                Researchers should keep promises and agreements, be open to criticism and ideas, and be aware that individuals cannot be forced to participate and that when involving children in the research, parental consent is needed.
                </p>
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

stagePage.pageContainerSet('researchEthics',inglesClass_researchEthics);