class inglesClass_analyzingQualitativeData extends generalPage{
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
      <div class="header-h2"><h2>Analyzing qualitative data</h2></div>
      <div class="container"> 
            <div class="slider_2">

                <div class="box1 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Analyzing qualitative data</h1>
                        
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                
                <div class="box2 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Become familiar with the data </h1>
                        <p>
                            You need to read and re-read the data collected, write down detailed notes and impressions, and deciding which pieces of data possess value through a process of cleaning and curation. 
                        </p>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                <div class="box3 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Code data into themes </h1>
                        <p>
                            This means to create categories and subcategories. Each category is an example of some thematic idea. The goal is to group data associated with some thematic idea which allows data to be examined together. The list of built themes represents the first set of codes. 
                        </p>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                <div class="box4 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Search for patterns and connections</h1>
                        <p>
                         Look for the relative importance of data and identify relationships between data sets or themes. Recurrent responses, correlations, and other patterns are to be found out in the data analysis.
                        </p>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                <div class="box5 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Interpret and draw conclusions </h1>
                        <p>
                            After you identify the themes, connections, and patterns, now you need to assign meaning and importance to the data already analyzed. Interpretations must connect to the research problem and objectives to answer the questions. 
                        </p>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" class="prev" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="next" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/></svg>
            <div class="trail_2">
                    <div tabindex="0" class="box1 active">1</div>
                    <div tabindex="0" class="box2">2</div>
                    <div tabindex="0" class="box3">3</div>
                    <div tabindex="0" class="box4">4</div>
                    <div tabindex="0" class="box5">5</div>
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
        'introSlider2.css|general'
    ]
      }
      importJSFiles(){
            return [
                  'gsap-latest-beta.min',
                  'CSSRulePlugin3.min',
                  'slider_2'
            ]
        }
hideAditional(){

}
        showAditional(){

            const slider_2 = document.querySelector(".slider_2")
            // All trails 
            const trail_2 = document.querySelector(".trail_2").querySelectorAll("div")

            // Transform value_2
            let value_2 = 0
            // trail index number
            let trailValue_2 = 0
            // interval_2 (Duration)
            let interval_2 = 5000

            // Function to slide forward
            const slide_2 = (condition) => {
            // CLear interval_2
            clearInterval(start_2)
            // update value_2 and trailValue_2
            condition === "increase" ? initiateINC_2() : initiateDEC_2()
            // move slide
            move_2(value_2, trailValue_2)
            // Restart Animation
            animate_2()
            // start interal for slides back 
            start_2 = setInterval(() => slide_2("increase"), interval_2);
            clearInterval(start_2)
            }

            // function for increase(forward, next) configuration
            const initiateINC_2 = () => {
            // Remove active from all trails
            trail_2.forEach(cur => cur.classList.remove("active"))
            // increase transform value_2
            value_2 === 80 ? value_2 = 0 : value_2 += 20
            // update trailValue_2 based on value_2
            trailUpdate_2()
            }

            // function for decrease(backward, previous) configuration
            const initiateDEC_2 = () => {
            // Remove active from all trails
            trail_2.forEach(cur => cur.classList.remove("active"))
            // decrease transform value_2
            value_2 === 0 ? value_2 = 80 : value_2 -= 20
            // update trailValue_2 based on value_2
            trailUpdate_2()
            }

            // function to transform slide 
            const move_2 = (S, T) => {
            // transform slider
            slider_2.style.transform = `translateX(-${S}%)`
            //add active class to the current trail
            trail_2[T].classList.add("active")
            }

            const tl_2 = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
            tl_2.from(".bg", {x: "-100%", opacity: 0})
            .from(".slider_2 p", {opacity: 0}, "-=0.3")
            .from(".slider_2 h1", {opacity: 0, y: "30px"}, "-=0.3")
            .from(".slider_2 button", {opacity: 0, y: "-40px"}, "-=0.8")

            // function to restart animation
            const animate_2 = () => tl_2.restart()

            // function to update trailValue_2 based on slide value_2
            const trailUpdate_2 = () => {
            if (value_2 === 0) {
                trailValue_2 = 0
            } else if (value_2 === 20) {
                trailValue_2 = 1
            } else if (value_2 === 40) {
                trailValue_2 = 2
            } else if (value_2 === 60) {
                trailValue_2 = 3
            } else {
                trailValue_2 = 4
            }
            }   

            // Start interval_2 for slides
            let start_2 = setInterval(() => slide_2("increase"), interval_2)
            clearInterval(start_2)

            // Next  and  Previous button function (SVG icon with different classes)
            document.querySelectorAll("svg").forEach(cur => {
            // Assign function based on the class Name("next" and "prev")
            cur.addEventListener("click", () => cur.classList.contains("next") ? slide_2("increase") : slide_2("decrease"))
            })

            // function to slide when trail is clicked
            const clickCheck_2 = (e) => {
            // CLear interval_2
            clearInterval(start_2)
            // remove active class from all trails
            trail_2.forEach(cur => cur.classList.remove("active"))
            // Get selected trail
            const check = e.target
            // add active class
            check.classList.add("active")

            // Update slide value_2 based on the selected trail
            if(check.classList.contains("box1")) {
                value_2 = 0
            } else if (check.classList.contains("box2")) {
                value_2 = 20
            } else if (check.classList.contains("box3")) {
                value_2 = 40
            } else if (check.classList.contains("box4")) {
                value_2 = 60
            } else {
                value_2 = 80
            }
            // update trail based on value_2
            trailUpdate_2()
            // transfrom slide
            move_2(value_2, trailValue_2)
            // start animation
            animate_2()
            // start interval_2
            start_2 = setInterval(() => slide_2("increase"), interval_2)
            clearInterval(start_2)
            }

            // Add function to all trails
            trail_2.forEach(cur => cur.addEventListener("click", (ev) => clickCheck_2(ev)))
            trail_2.forEach(cur => cur.addEventListener("focus", (ev) => clickCheck_2(ev)))

            
        }
}

stagePage.pageContainerSet('analyzingQualitativeData',inglesClass_analyzingQualitativeData);