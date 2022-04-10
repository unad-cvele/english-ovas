class popUpToDiscoverClass{
    hide(element,noScrollIntoView = null){
        /* console.log(element); */
        let textContainer = element.parentElement.parentElement.parentElement;
        /* console.log(textContainer); */
       // element.style.display='none';
        /* console.log('MOSTRAR : popUpToDiscoverClass');
        console.log(textContainer); */
        textContainer.classList.remove('show');
        let buttonPopUp= textContainer.previousElementSibling.getElementsByTagName('button')[0];
        buttonPopUp.style.display='inline-block';
        /* console.log(buttonPopUp); */
       /*  if(!noScrollIntoView){
            textContainer.scrollIntoView({ block: 'center', behavior: 'smooth' });
        } */ 
        
    }
    show(element,noScrollIntoView = null){
        element.style.display='none';
        let textContainer = element.parentElement.nextElementSibling;
        /* console.log('MOSTRAR : popUpToDiscoverClass');
        console.log(textContainer); */
        textContainer.classList.add('show');
        if(!noScrollIntoView){
            textContainer.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
        
    }
    showHideCombined(element){
        let state=element.getAttribute('data-state-show');
        let textContainer = element.nextElementSibling;
        if(state){
            element.removeAttribute('data-state-show');
            textContainer.classList.remove('show');
        }
        else{
            element.setAttribute('data-state-show','true');
            
            textContainer.classList.add('show');
        }
        
    }
}