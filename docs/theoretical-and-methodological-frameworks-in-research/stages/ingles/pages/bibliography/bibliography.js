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
          <p>Adom, D., Kamil, E., & Adu, J. (2018). Theoretical and conceptual framework: mandatory ingredients of a quality research. <i>International Journal of Scientific Research 7(1)</i>, (pp. 438-441).</p>
          <p>Collins, C. & Stockton, C. (2018). The Central Role of Theory in Qualitative Research. <i>International Journal of Qualitative Methods</i>, Vol 17.</p>
          <p>Complete Dissertation by Statistics Solution. (n.d.). Creating and Validating an Instrument.   
                <a class="btn-link" href="https://www.statisticssolutions.com/creating-and-validating-an-instrument/" onclick="window.open('https://www.statisticssolutions.com/creating-and-validating-an-instrument/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://www.statisticssolutions.com/creating-and-validating-an-instrument/</a>
          </p>
          <p>Kabir, S.M.S. (2016). Methods for data collection in <i>Basic Guidelines for Research: An Introductory Approach for All Disciplines</i> (pp. 201-275). Book Zone Publication, Bangladesh.</p>

          <p>Maxwell, J. A. (2005). <i>Qualitative research design: An interactive approach (2nd Ed.). </i>Thousand Oaks, CA: SAGE Publications.</p>

          <p>McCombes, S. (2019, February 22).<i> How to write a literature review.</i> Scribbr.   
                <a class="btn-link" href="https://www.scribbr.com/dissertation/literature-review/" onclick="window.open('https://www.scribbr.com/dissertation/literature-review/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://www.scribbr.com/dissertation/literature-review/</a>
          </p>

          <p>Resnik, D.B. (December 23, 2020). What is Ethics in Research & why is it important? 

                <a class="btn-link" href="https://www.niehs.nih.gov/research/resources/bioethics/whatis/index.cfm" onclick="window.open('https://www.niehs.nih.gov/research/resources/bioethics/whatis/index.cfm','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://www.niehs.nih.gov/research/resources/bioethics/whatis/index.cfm</a>
          </p>

          <p>Taherdoost, H. (2016). Sampling Methods in Research Methodology; How to Choose a Sampling Technique for Research. <i>International Journal of Academic Research in Management, 5(2), pp. 18-27.</i></p>

          <p>The Norwegian National Research Ethics Committees. (June 8, 2019). Guidelines for Research Ethics in the Social Sciences, Humanities, Law and Theology. 

                <a class="btn-link" href="https://www.forskningsetikk.no/en/guidelines/social-sciences-humanities-law-and-theology/guidelines-for-research-ethics-in-the-social-sciences-humanities-law-and-theology/" onclick="window.open('https://www.forskningsetikk.no/en/guidelines/social-sciences-humanities-law-and-theology/guidelines-for-research-ethics-in-the-social-sciences-humanities-law-and-theology/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://www.forskningsetikk.no/en/guidelines/social-sciences-humanities-law-and-theology/guidelines-for-research-ethics-in-the-social-sciences-humanities-law-and-theology/</a>
          </p>

          <p>University of Southern California. (n.d.). <i>Organizing Your Social Sciences Research Paper. 5. The Literature Review. </i>

                <a class="btn-link" href="https://libguides.usc.edu/writingguide/literaturereview" onclick="window.open('https://libguides.usc.edu/writingguide/literaturereview','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://libguides.usc.edu/writingguide/literaturereview</a>
          </p>

          <p>University of Southern California. (n.d.). <i>Organizing Your Social Sciences Research Paper. Theoretical framework.</i>

                <a class="btn-link" href="https://libguides.usc.edu/writingguide/theoreticalframework" onclick="window.open('https://libguides.usc.edu/writingguide/theoreticalframework','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://libguides.usc.edu/writingguide/theoreticalframework</a>
          </p>

          <p>Vinz, S. (2015, October 14). Developing your theoretical framework. Scribbr. 

                <a class="btn-link" href="https://www.scribbr.com/dissertation/theoretical-framework/" onclick="window.open('https://www.scribbr.com/dissertation/theoretical-framework/','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">https://www.scribbr.com/dissertation/theoretical-framework/</a>
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