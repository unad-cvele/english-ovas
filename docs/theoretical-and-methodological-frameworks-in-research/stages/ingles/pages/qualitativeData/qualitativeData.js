class inglesClass_qualitativeData extends generalPage{
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
        <div class="header-h2"><h2>Qualitative Data</h2></div>
        <div class="text-general">
            <p>Regarding qualitative data, also known as categorical or classificatory data, has a limited number of distinct values or categories. It is further divided into ordinal, nominal, dichotomous, and polychotomous data.</p>
            
        </div>
        <div class="circular-map">
            <div class="circular-map__row">
                <div class="circular-map__container circular-map__container-1">
                    <div class="circular-map__container-title">
                        <h3>Nonimal Data</h3>
                    </div>
                    <div class="circular-map__description-container">
                        <p>Just names a thing without applying it to an order. Even though we can use the numbers, they do not denote quantity. It can neither be ranked nor logically ordered, such as religion, sex, etc. Classification of the values of this variable type is based on equality, sameness or
                        difference and cannot be measured. A variable like “mode of study” could have values like “full-time”, “part-time”, “distance learning”, etc.
                        </p>
                    </div>
                </div>
                <div class="circular-map__container circular-map__container-2">
                    <div class="circular-map__container-title">
                        <h3>Ordinal Data</h3>
                    </div>
                    <div class="circular-map__description-container">
                        <p>Is placed into some kind of order by their position on the scale. It can be logically ordered or ranked in two or more categories but do not necessarily establish a numeric difference between each category, for example, examination grades (A+, A, B+, etc.), clothing size (L, S, M, XL, etc.), the first, second and third person in a competition.
                        </p>
                    </div>
                </div>
            </div>
            <div class="circular-map__row">
                <div class="circular-map__container circular-map__container-3">
                    <div class="circular-map__container-title">
                        <h3>Dichotomous Data</h3>
                    </div>
                    <div class="circular-map__description-container">
                        <p>Can also be ordered or ranked as the ordinal variables, but they have only two categories, unlike ordinal and nominal variables, that can have two or more categories or levels. For
                        example, gender can be just male and female, or a test score can be dichotomized as high or low.                        
                        </p>
                    </div>
                </div>
                <div class="circular-map__container circular-map__container-4">
                    <div class="circular-map__container-title">
                        <h3>Polichotomous Data</h3>
                    </div>
                    <div class="circular-map__description-container">
                        <p>Has more than two categories. For example, language proficiency level which could have
                        subsets like “beginner”, “intermediate”, “advanced” …                        
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-general">
            
            <p>The two types of data being different does not mean that qualitative and quantitative cannot converge. Both of them can be combined in a study if a mixed-method approach is designed. Mixed methods encompass multifaceted approaches that capitalize strengths in a study, increase validity and reliability of the research, and develop creative options to traditional or single design approaches to research.</p>
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
        'circular-map.css|general'
    ]
}        
}

//let stages_ingles_qualitativeData = new inglesClass_qualitativeData('qualitativeData');

stagePage.pageContainerSet('qualitativeData',inglesClass_qualitativeData);