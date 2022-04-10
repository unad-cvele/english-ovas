class bookClass{
    constructor(){

    }
    back(element){
        this.change(element,'back');
    }
    next(element){
       this.change(element,'next');
    }
    change(element,type){
        let currentIndex=0;
        let bookContainer='';
        let pageIndex=0;
        
        if(type=='numbers'){
            console.log('numbers');
            bookContainer=element.parentElement.parentElement.parentElement;
            console.log(bookContainer);
            currentIndex=bookContainer.getAttribute('data-book-page');
            currentIndex=parseInt(currentIndex);
            let page=element.innerHTML;
            page=parseInt(page);
            pageIndex=page-1;
        }
        else{
            bookContainer=element.parentElement.parentElement;
        }
        currentIndex=bookContainer.getAttribute('data-book-page');
        currentIndex=parseInt(currentIndex);

        if(type!='numbers'){
            if(type=='next'){
                pageIndex=currentIndex+1;
            }
            else if(type=='back'){
                pageIndex=currentIndex-1;
            }
        }
        let bookPages=bookContainer.getElementsByClassName('book-page');
        if(bookPages[pageIndex]){
            bookContainer.setAttribute('data-book-page',pageIndex);
            bookPages[currentIndex].classList.remove('show');
            bookPages[pageIndex].classList.add('show');
            let pageNumberOf=pageIndex;
            pageNumberOf++;
            document.getElementById('numberOfPageBook').innerHTML=pageNumberOf;
        }
    }
    changeWithNumber(element){
        
        this.change(element,'numbers');

    }
}

let book = new bookClass;