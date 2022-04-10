class slider_scroll_class{
    constructor(sliderUniqueClass){
        this.sliderUniqueClass=sliderUniqueClass;
        this.sliderId=document.querySelectorAll(`.${this.sliderUniqueClass}`)[0];
        this.buttonLeft=this.sliderId.querySelectorAll(`.section-general__button-left`)[0];
        this.buttonRight=this.sliderId.querySelectorAll(`.section-general__button-right`)[0]; 
        this.sliderContainer=this.sliderId.querySelectorAll(`.${this.sliderUniqueClass}__slider`)[0];
        this.sliderElements=this.sliderContainer.querySelectorAll(`.${this.sliderUniqueClass}__card`);
        this.currentElement=0;  
        this.listenerButtonsAssing();
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
        this.moveScroll('left'); 
    }
    goRight(){
        this.moveScroll('right');
    }
    moveScroll(position){
        let size_scroll_to_move=this.sliderElements[0].clientWidth;
        let sliderContainer_scroll_width= this.sliderContainer.scrollWidth - this.sliderContainer.clientWidth;
        let sliderContainer_scroll_left=this.sliderContainer.scrollLeft;
        /* console.log(`size_scroll_to_move: ${size_scroll_to_move}`);
        console.log(`sliderContainer_scroll_left: ${sliderContainer_scroll_left}`);
        console.log(`sliderContainer_scroll_width: ${sliderContainer_scroll_width}`); */

        if(position=='left'){
            size_scroll_to_move= - size_scroll_to_move;
            if(sliderContainer_scroll_left==0){
                size_scroll_to_move=sliderContainer_scroll_width;
            }
        }
        else{
            if(sliderContainer_scroll_left==sliderContainer_scroll_width){
                size_scroll_to_move= - sliderContainer_scroll_width;
            }
        }
        this.sliderContainer.scrollBy({
            left: size_scroll_to_move,
            behavior: 'smooth',
          });
    }
    moveIndicators(){
        /* if(this.sliderIndicatorContainer){
            for (let index = 0; index < this.sliderIndicators.length; index++) {
                this.sliderIndicators[index].classList.remove(`${this.sliderUniqueClass}__indicator--active`);
                
            }
            this.sliderIndicators[this.currentElement].classList.add(`${this.sliderUniqueClass}__indicator--active`);
        } */
        
    }
}
const slider__ovas= new slider_scroll_class('section-ovas');
const slider__docentes= new slider_scroll_class('section-docentes');
const slider__noticias= new slider_scroll_class('section-noticias');