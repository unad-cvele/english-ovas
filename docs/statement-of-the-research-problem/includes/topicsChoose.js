class topicsChooseClass{
    constructor(){
        this.itemsValid=0;
    }
    show(element,noScrollIntoView = null){
        /* element.style.display='none'; */
        let elementData= element.getAttribute('data-item');
        if(this.itemsValid<4){
         if(elementData){
            this.itemsValid++;
            element.style.display='none';
            console.log(elementData);
            let topicToShow = element.parentElement.nextElementSibling.getElementsByClassName(`item-${elementData}`)[0];
            topicToShow.classList.add('show');
            console.log('MOSTRAR : popUpToDiscoverClass');
           console.log(topicToShow);
           if(this.itemsValid==4){
               let successAnswers = element.parentElement.nextElementSibling.nextElementSibling;
               successAnswers.classList.add('show');
               successAnswers.scrollIntoView({ block: 'center', behavior: 'smooth' });
            console.log('VALIDADOSS');
        }
         }
         else{
            element.classList.add('danger');
         }

         
         

         }

        
       /* textContainer.classList.add('show');
        if(!noScrollIntoView){
            textContainer.scrollIntoView({ block: 'center', behavior: 'smooth' });
        } */
        
    }
}