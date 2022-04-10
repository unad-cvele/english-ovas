class inglesClass_analyzingQuantitativeData extends generalPage{
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
      <div class="header-h2"><h2>Analyzing quantitative data</h2></div>
      <div class="container"> 
            <div class="slider">

                <div class="box1 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Analyzing quantitative data</h1>
                        
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                
                <div class="box2 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Identify the level of measurement</h1>
                        <p>
                            Associate measurement scales such as nominal, ordinal, interval and ratio with the variables. This step is important to arrange the data in proper order, which can be entered into an excel sheet to organize it in a specific format.
                        </p>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                <div class="box3 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Prepare the data</h1>
                        <p>
                        The aim is to convert raw data into something meaningful and readable. This process includes <strong>data validation:</strong> that data was completely collected and without any bias; <strong>data editing:</strong> conduct basic data checks, check for outliers, and edit the raw research data to identify and clear out any errors in data that may hamper the accuracy of the results; <strong>data coding:</strong> grouping and assigning values to responses from the data collection instruments.
                        </p>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                <div class="box4 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Connect descriptive statistics</h1>
                        <p>
                        This helps researchers summarize the data and find patterns, Some descriptive statistics are: <strong>Mean:</strong> An average of values for a specific variables; <strong>Median:</strong> A midpoint of the value scale for a variable; <strong>Mode:</strong> For a variable, the most common value; <strong>Frequency:</strong> Number of times a particular value is observed in the scale; <strong>Range:</strong> Lowest and highest values for a scale; <strong>Percentages:</strong> Format to express scores and set of values for variables. 
                        </p>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
                <div class="box5 box">
                    <div class="bg"></div>
                    <div class="details">
                        <h1>Select appropriate tables</h1>
                        <p>
                              This is done to represent and analyze collected data. After deciding on a suitable measurement scale, researchers can use a tabular format to represent data. This data can be analyzed using various techniques such as Cross-tabulation or TURF.
                        </p>
                    </div>

                    <div class="illustration"><div class="inner"></div></div>
                </div>
                                
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" class="prev" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="next" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/></svg>
            <div class="trail">
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
        'introSlider.css|general'
    ]
      }
      importJSFiles(){
            return [
                  'gsap-latest-beta.min',
                  'CSSRulePlugin3.min',
                  'slider'
            ]
        }
hideAditional(){

}
        showAditional(){

            const slider = document.querySelector(".slider")
            // All trails 
            const trail = document.querySelector(".trail").querySelectorAll("div")
            
            // Transform value
            let value = 0
            // trail index number
            let trailValue = 0
            // interval (Duration)
            let interval = 5000
            
            // Function to slide forward
            const slide = (condition) => {
            // CLear interval
            clearInterval(start)
            // update value and trailValue
            condition === "increase" ? initiateINC() : initiateDEC()
            // move slide
            move(value, trailValue)
            // Restart Animation
            animate()
            // start interal for slides back 
            start = setInterval(() => slide("increase"), interval);
            clearInterval(start)
            }
            
            // function for increase(forward, next) configuration
            const initiateINC = () => {
            // Remove active from all trails
            trail.forEach(cur => cur.classList.remove("active"))
            // increase transform value
            value === 80 ? value = 0 : value += 20
            // update trailValue based on value
            trailUpdate()
            }
            
            // function for decrease(backward, previous) configuration
            const initiateDEC = () => {
            // Remove active from all trails
            trail.forEach(cur => cur.classList.remove("active"))
            // decrease transform value
            value === 0 ? value = 80 : value -= 20
            // update trailValue based on value
            trailUpdate()
            }
            
            // function to transform slide 
            const move = (S, T) => {
            // transform slider
            slider.style.transform = `translateX(-${S}%)`
            //add active class to the current trail
            trail[T].classList.add("active")
            }
            
            const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
            tl.from(".bg", {x: "-100%", opacity: 0})
            .from(".slider p", {opacity: 0}, "-=0.3")
            .from(".slider h1", {opacity: 0, y: "30px"}, "-=0.3")
            .from(".slider button", {opacity: 0, y: "-40px"}, "-=0.8")
            
            // function to restart animation
            const animate = () => tl.restart()
            
            // function to update trailValue based on slide value
            const trailUpdate = () => {
            if (value === 0) {
                  trailValue = 0
            } else if (value === 20) {
                  trailValue = 1
            } else if (value === 40) {
                  trailValue = 2
            } else if (value === 60) {
                  trailValue = 3
            } else {
                  trailValue = 4
            }
            }   
            
            // Start interval for slides
            let start = setInterval(() => slide("increase"), interval)
            clearInterval(start)
            
            // Next  and  Previous button function (SVG icon with different classes)
            document.querySelectorAll("svg").forEach(cur => {
            // Assign function based on the class Name("next" and "prev")
            cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
            })
            
            // function to slide when trail is clicked
            const clickCheck = (e) => {
            // CLear interval
            clearInterval(start)
            // remove active class from all trails
            trail.forEach(cur => cur.classList.remove("active"))
            // Get selected trail
            const check = e.target
            // add active class
            check.classList.add("active")
            
            // Update slide value based on the selected trail
            if(check.classList.contains("box1")) {
                  value = 0
            } else if (check.classList.contains("box2")) {
                  value = 20
            } else if (check.classList.contains("box3")) {
                  value = 40
            } else if (check.classList.contains("box4")) {
                  value = 60
            } else {
                  value = 80
            }
            // update trail based on value
            trailUpdate()
            // transfrom slide
            move(value, trailValue)
            // start animation
            animate()
            // start interval
            start = setInterval(() => slide("increase"), interval)
            clearInterval(start)
            }
            
            // Add function to all trails
            trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))
            trail.forEach(cur => cur.addEventListener("focus", (ev) => clickCheck(ev)))
            
            // Mobile touch Slide Section
            
        }
}

stagePage.pageContainerSet('analyzingQuantitativeData',inglesClass_analyzingQuantitativeData);