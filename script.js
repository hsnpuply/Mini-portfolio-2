const navbar = document.querySelector(".navbar");
const navbarOffsetTop= navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link')

const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [97,80,75,67,51,40];

const progressPercentageUsage = document.querySelectorAll('.progress-percent');


// test

const rangha= document.querySelectorAll('.rang');

const gif = document.querySelectorAll('.project-img');






window.addEventListener('scroll',()=>{
 mainFn();

}); 



const mainFn = ()=>{
     if(window.scrollY >= navbarOffsetTop){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky');
    }

    sections.forEach((bakhsh,shomarande)=>{
        if(window.scrollY >= bakhsh.offsetTop - 10){
            navbarLinks.forEach((linke)=>{
                linke.classList.remove('change');
            });
                // rangha.forEach((rang)=>{
                //     rang.classList.remove('add');
                // })
            navbarLinks[shomarande].classList.add('change');
            // rangha[shomarande].classList.add('add')
        }
    });


    if(window.scrollY + window.innerHeight  > progress.offsetTop){
        progressPercentageUsage.forEach((e,i)=>{
           e.style.width=`${progressBarPercents[i]}%`;
           if(progressBarPercents[i] >= 80){
           e.style.backgroundColor ='green';
           }else if(progressBarPercents[i] >= 70){
           e.style.backgroundColor ='#1ccb5e';
           }else if(progressBarPercents[i] >= 60){
           e.style.backgroundColor ='#e1d717';
           }
           else if(progressBarPercents[i] >= 50){
           e.style.backgroundColor ='#e3450e';
           }else{
           e.style.backgroundColor ='#e30e0e';
           }

          
           

        })

    }


}

mainFn();

window.addEventListener('resize',()=>{
    window.location.reload();
})