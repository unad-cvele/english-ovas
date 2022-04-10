class inglesClass_theResearchHypothesis extends generalPage{
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
      <div class="header-h2"><h2>The research hypothesis</h2></div>
      <div class="book" data-book-page="0">
            <p class="text-center">Browse through the different pages to discover about the research hypothesis.</p><br/>
            <div class="text-center buttons-book-container" >
                <button class="btn-general btn-book-change" onclick="book.back(this)" >Previous page</button>
                <button class="btn-general btn-book-change" onclick="book.next(this)" >Following page</button>
            </div>
            <div class="book-page show">
                    <p>A hypothesis can be considered as a tentative statement about a provisional solution to the research problem that is to be verified empirically or experimentally.</p>
                    <p>Creswell (2009) states that hypothesis are predictions that the researcher makes about the expected relationships among variables.</p>
                    <p>Similarly, B. W. Tuckman agrees that a hypothesis is defined as an expectation about events based on generalization of the assumed relationship between variables.</p>
            </div>
            <div class="book-page">
                <p><strong>Example of a hypothesis:</strong></p>
                <p>“Writing skills at a B1 level can be achieved after 350 hours of continuous study.”</p>
                <p>In this example, the goal of the study will be to prove or disprove this hypothesis by analyzing the variables “Writing skills at a B1 level” and “350 hours of continuous study” to find out if it is true that after that amount of time, we can get that level.</p>
                </div>
                <div class="book-page">
                <p>There are different kinds of hypothesis when conducting research studies:</p>
                <p><strong>The null hypothesis</strong> is a commonly accepted fact but it doesn’t mean that is valid, so the researchers work to reject, nullify or disprove it, whereas the <strong>alternative hypothesis</strong> is the alternative fact that seeks to explains the phenomenon that the null hypothesis states as true, but it is not. This alternative hypothesis is what researchers might believe to be true or hope to prove true.</p>
            </div>
            <div class="book-page">
                <p>Let’s check an example:</p>
                <p><strong>Null hypothesis:</strong> the use of the native language doesn’t help learn a foreign language.</p>
                <p><strong>Alternative hypothesis:</strong> The use of the native language helps learn a foreign language.</p>
                <p>In order to prove that the use of the native language is useful for learning a foreign one, the researcher conducts the study to support this believe and after showing reliable and reasonable evidence, she disproves the believe that using the mother tongue is not useful, it means, the null hypothesis.</p>
                </div>
                <div class="book-page">
                <p>Generally, researchers prove the alternative hypothesis by disproving the null one. This means that the null hypothesis is always tested for rejection under the assumption that it is true. If we reject the null hypothesis, then we can assume there is enough evidence to support the alternative hypothesis.</p>
                <p>Since the null and alternative hypotheses are contradictory, researchers must examine evidence to decide if they have enough evidence to reject the null hypothesis or not. The evidence is in the form of sample data.</p>
                </div>
                <div class="book-page">
                <p><strong>Facts about the hypothesis:</strong></p>
                <ul>
                    <li>The null hypothesis is rejected if the sample information favors the alternative hypothesis. The null hypothesis is not rejected if the sample information is insufficient to favor the alternative one and therefore to reject the null hypothesis.</li>
                    <li>The alternative hypothesis connotes an expected direction in the relationship or difference between variables, it means, there is a real impact between the variables, whereas the null hypothesis states that no relationship or no significant difference exists between variables.</li>
                    <li>The null hypothesis is often an initial claim that is based on previous analyses or specialized knowledge. Similarly, the alternative hypothesis is a prediction about the expected outcome based on prior literature and studies on the topic that suggest a potential outcome.</li>
                </ul>
            </div>
            <div class="book-page">
                <p>The alternative hypothesis can be either <strong>one-sided</strong> or <strong>two-sided</strong>, also known as a <strong>directional</strong> and <strong>nondirectional</strong> or <strong>one-tailed</strong> and <strong>two-tailed</strong> respectively.</p>
                <p>Two-sided alternative hypothesis (or nondirectional) is used to determine which the results will be but considering two possibilities, it means, there are two directions and the researcher tests for effects in both directions.</p>
                <p>One-sided alternative hypothesis (or directional) is used to determine which the results will be but considering only one possibility, it means, there are two directions but the researcher specifies the direction of the results and she tests for effects only in that direction, not in both.</p>
                </div>
                <div class="book-page">
                <p>Let’s check some examples:</p>
                <p><strong>Two-sided (two-tailed) alternative hypothesis:</strong></p>
                <p>A researcher wants to know if the scores obtained by a sample of students at a high school in a national exam differ from the national average of 850 points. 
                    To find it out, a two-sided alternative hypothesis is appropriate because the researcher is interested in determining if the scores are either less than or greater than the national average. 
                    In this case, the results might go in two directions: that the scores of the students are less than the national average or that the scores are greater than the national average.
                    </p>
            </div>
            <div class="book-page">
                <p><strong>One-sided (one-tailed) alternative hypothesis:</strong></p>
                <p>The same researcher wants to know if the scores of trained students are above the national average of 850. </p>
                <p>To find it out, a one-sided alternative hypothesis is used because the researcher is specifically hypothesizing that scores for trained students are greater than the national average. Only one direction is set and the researcher wants to prove that students are above the average.</p>

            </div>
            <div class="text-center internal-books-navigation">
                <div class="number-of-page">Page <strong id="numberOfPageBook">1</strong> of <strong>9</strong></div>
                <div class="pages-in-numbers">
                    <button class="number-page" onclick="book.changeWithNumber(this);">1</button>
                    <button class="number-page" onclick="book.changeWithNumber(this);">2</button>
                    <button class="number-page" onclick="book.changeWithNumber(this);">3</button>
                    <button class="number-page" onclick="book.changeWithNumber(this);">4</button>
                    <button class="number-page" onclick="book.changeWithNumber(this);">5</button>
                    <button class="number-page" onclick="book.changeWithNumber(this);">6</button>
                    <button class="number-page" onclick="book.changeWithNumber(this);">7</button>
                    <button class="number-page" onclick="book.changeWithNumber(this);">8</button>
                    <button class="number-page" onclick="book.changeWithNumber(this);">9</button>
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
        'book.css|local'
    ]
    }
    importJSFiles(){
        return [
            'book'
        ]
    }
}

stagePage.pageContainerSet('theResearchHypothesis',inglesClass_theResearchHypothesis);