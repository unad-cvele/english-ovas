class slider_class{
    constructor(sliderUniqueClass){
        console.log(`${sliderUniqueClass} __ DEFINE`);
        this.sliderUniqueClass=sliderUniqueClass;
        this.sliderId=document.querySelectorAll(`.${this.sliderUniqueClass}`)[0]; 
        console.log(this.sliderId);
        this.buttonLeft=this.sliderId.querySelectorAll(`.section-general__button-left`)[0];
        this.buttonRight=this.sliderId.querySelectorAll(`.section-general__button-right`)[0]; 
        this.sliderContainer=this.sliderId.querySelectorAll(`.${this.sliderUniqueClass}__slider`)[0];
        this.sliderElements=this.sliderContainer.querySelectorAll(`.${this.sliderUniqueClass}__card`);
        this.sliderIndicatorContainer=this.sliderId.querySelectorAll(`.${this.sliderUniqueClass}__indicators`)[0];
        this.sliderIndicators=this.sliderId.querySelectorAll(`.${this.sliderUniqueClass}__indicator`);
        this.currentElement=0;  
        this.listenerButtonsAssing();
        console.log(`${sliderUniqueClass} __ X2`);
    }
    listenerButtonsAssing(){
        let these = this;
        this.buttonLeft.addEventListener(
            'click',
            function () {
                these.goLeft();
            }
        );
        this.buttonRight.addEventListener(
            'click',
            function () {
                these.goRight();
            }
        );
    }
    goLeft(){
        if(this.currentElement>0){
            this.sliderElements[this.currentElement].classList.add(`${this.sliderUniqueClass}__card--hide-right`);
            this.currentElement--;
            this.sliderElements[this.currentElement].classList.remove(`${this.sliderUniqueClass}__card--hide-left`);
            this.moveIndicators();
        }
        
    }
    goRight(){
        let maxElements = this.sliderElements.length - 1;
        if(this.currentElement<maxElements){
            this.sliderElements[this.currentElement].classList.add(`${this.sliderUniqueClass}__card--hide-left`);
            this.currentElement++;
            this.sliderElements[this.currentElement].classList.remove(`${this.sliderUniqueClass}__card--hide-right`);
            this.moveIndicators();
        }
        
    }
    moveIndicators(){
        if(this.sliderIndicatorContainer){
            for (let index = 0; index < this.sliderIndicators.length; index++) {
                this.sliderIndicators[index].classList.remove(`${this.sliderUniqueClass}__indicator--active`);
                
            }
            this.sliderIndicators[this.currentElement].classList.add(`${this.sliderUniqueClass}__indicator--active`);
        }
        
    }
}
