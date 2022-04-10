class inglesClass_theReviewOfTheLiterature extends generalPage{
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
      <div class="header-h2"><h2>The Review Of the Literature</h2></div>
      <div class="conceptual-map">
        <div class="principal-box">
            <h3>What is a literature review?</h3>
            <p>The Literature Review, or State of the Art, is the search of the current state of a particular subject area to establish what research has been done, current and pertinent theories and practice, and gaps and conflicts in the existing literature or knowledge. This is one of the main reasons that justifies any research study.</p>
        </div>
        <div class="secondary-boxes-container">
            <div class="general-box secondary-box-container">
                <div class="secondary-box secondary-box-content">
                    <h3>Why set up the literature review?</h3>
                    <p>The lit review is one of the most important bases for any research study since it situates the research within existing knowledge for several reasons. Any research study should explain what the reasons for the lit review are.</p>
                </div>
                <div class="text-center hand"><img src="./images/hand-down.png" alt="Hand down"></div>
                <div class="popup-open-button"><button class="btn-general button-popUpToDiscover" onclick="stages_ingles.popUpToDiscover.show(this,'noScrollIntoView');">
                    The following are some of the most common reasons.
                </button></div>
                
                <div class="popUpToDiscover">
                    <div class="text-popUpToDiscover">
                    <div class="close-button-container"><button onclick="stages_ingles.popUpToDiscover.hide(this);">X</button></div>
                        <ul>
                            <li>To understand and evaluate the topic area or knowledge field.</li>
                            <li>To discover what research has contributed to the development of the area or subject topic and how.</li>
                            <li>To develop a theoretical and methodological framework for the research study.</li>
                            <li>To give new interpretations of previous findings or combine new with old interpretations.</li>
                            <li>To demonstrate familiarity of the study with the topics and the scholarly contexts.</li>
                            <li>To identify gaps in current knowledge; to show limitations of theories and points of view; to review areas of controversy, etc. and to explain how the research study will address these problems or others.</li>
                            <li>To formulate areas for further research.</li>
                            <li>To position the study in relation to other researchers and theorists.</li>
                            <li>To resolve conflicts amongst seemingly contradictory previous studies.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="general-box secondary-box-container">
                <div class="secondary-box secondary-box-content">
                    <h3>Where to search the sources?</h3>
                    <p>To conduct the lit review, you should consider scholarly sources to find documents such as books, journals, articles, and any other sources relevant to the particular issue, area of research, or theory of your study.</p>
                    <p>These sources are found in databases, institutional repositories, digital libraries, and other trustworthy sites.</p>
                    <p>Check the bibliography that is inside the books and articles to find other relevant sources. Likewise, take note of recurring citations to identify the most important publications on the topic.</p>
                </div>
                <div class="text-center hand"><img src="./images/hand-down.png" alt="Hand down"></div>
                <div class="text-center"><button class="btn-general button-popUpToDiscover" onclick="stages_ingles.popUpToDiscover.show(this,'noScrollIntoView');" >Have a look at these examples of databases in the field of social sciences and education.</button></div>
                <div class="popUpToDiscover">
                    <div class="text-popUpToDiscover">
                    <div class="close-button-container"><button onclick="stages_ingles.popUpToDiscover.hide(this);">X</button></div>
                        <h3>Online Libraries:</h3>
                        <ul class="logos">
                            <li>
                                SAGE Journals
                                <a 
                                onclick="window.open('https://journals.sagepub.com/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"

                                href="https://journals.sagepub.com/" ><img src="./images/editoriales/Sage.png" alt="Logo https://journals.sagepub.com/" /></a>
                            </li>
                            <li>
                                Education Resources Information Center - ERIC
                                <a 
                                onclick="window.open('https://eric.ed.gov/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"

                                href="https://eric.ed.gov/" ><img src="./images/editoriales/eric.png" alt="Logo https://eric.ed.gov/" /></a>
                            </li>
                            <li>
                                Cambridge University Press

                                <a 
                                onclick="window.open('https://www.cambridge.org/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"

                                href="https://www.cambridge.org/" ><img src="./images/editoriales/Cambridge.png" alt="Logo https://www.cambridge.org/" /></a>
                            </li>
                            <li>
                                Scientific Electronic Library Online - SCIELO 
                                
                                <a 
                                onclick="window.open('https://scielo.org/es/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"

                                href="https://scielo.org/es/" ><img src="./images/editoriales/scielo.png" alt="Logo https://scielo.org/es/" /></a>
                            </li>
                            <li>
                                Open Access Publishing in European Networks - OAPEN

                                <a 
                                onclick="window.open('https://www.oapen.org/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"

                                href="https://www.oapen.org/" ><img src="./images/editoriales/OAPEN.png" alt="Logo https://www.oapen.org/" /></a>
                            </li>
                        </ul>
                        <h3>International Journals:</h3>
                        <ul class="logos">
                            <li>
                                Research in English Language Pedagogy - RELP

                                <a 
                                onclick="window.open('http://relp.khuisf.ac.ir/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"

                                href="http://relp.khuisf.ac.ir/" ><img src="./images/editoriales/relp.png" alt="Logo http://relp.khuisf.ac.ir/" /></a>
                            </li>
                            <li>
                                Language Teaching Research - RLT

                                <a 
                                onclick="window.open('https://journals.sagepub.com/home/ltr','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"

                                href="https://journals.sagepub.com/home/ltr" ><img src="./images/editoriales/ltr.png" alt="Logo https://journals.sagepub.com/home/ltr" /></a>
                            </li>
                            <li>
                                Journal of Modern Research in English Language Studies - JMRELS

                                <a 
                                onclick="window.open('https://jmrels.journals.ikiu.ac.ir/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"

                                href="https://jmrels.journals.ikiu.ac.ir/" ><img src="./images/editoriales/head_en.jpg" alt="Logo https://jmrels.journals.ikiu.ac.ir/" /></a>
                            </li>
                            <li>
                                Educational Research for Social Change

                                <a 
                                onclick="window.open('http://ersc.nmmu.ac.za/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"

                                href="http://ersc.nmmu.ac.za/" ><img src="./images/editoriales/ERSC.png" alt="Logo http://ersc.nmmu.ac.za/" /></a>
                            </li>
                            <li>
                                Matices en Lenguas Extranjeras

                                <a 
                                onclick="window.open('https://revistas.unal.edu.co/index.php/male/index','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;"

                                href="https://revistas.unal.edu.co/index.php/male/index" ><img src="./images/editoriales/matices.png" alt="Logo https://revistas.unal.edu.co/index.php/male/index" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="general-box secondary-box-container">
                <div class="secondary-box secondary-box-content">
                    <h3>What kind of literature can I find?</h3>
                    <p>The kind of publications you find can be classified into three categories: primary, secondary and tertiary literature. To guarantee the validity of the research, the primary sources are the most suggested.</p>
                </div>
                <div class="text-center hand"><img src="./images/hand-down.png" alt="Hand down"></div>
                <div class="text-center"><a href="#theReviewOfTheLiterature_2" class="btn-general" onclick="stages_ingles.menu.getFromPageName(event,this);">Check the definitions and examples of these categories.</a></div>
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
        'conceptual-map.css|general'
    ]
}        
}

stagePage.pageContainerSet('theReviewOfTheLiterature',inglesClass_theReviewOfTheLiterature);