
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
//WHAT WE PLAN JS

let dropdown = document.querySelector('.dropdowncontent')
let change = document.querySelector('#plus')

function drop(){
    if(dropdown.style.display == 'block'){
        dropdown.style.display ='none'
        change.className = 'fa-solid fa-plus'    
    }
    else{
        dropdown.style.display = 'block'
        change.className ='fa-solid fa-minus'

    };
};


let dropdownCont1 = document.querySelector('.dropdowncontent1')
let change1 = document.querySelector('#plus1')
function drop1(){
    if(dropdownCont1.style.display == 'block'){
        dropdownCont1.style.display ='none'
        change1.className = 'fa-solid fa-plus'    
    }
    else{
        dropdownCont1.style.display = 'block'
        change1.className ='fa-solid fa-minus'

    };
};


let dropdownCont2 = document.querySelector('.dropdowncontent2')
let change2 = document.querySelector('#plus2')
function drop2(){
    if(dropdownCont2.style.display == 'block'){
        dropdownCont2.style.display ='none'
        change2.className = 'fa-solid fa-plus'    
    }
    else{
        dropdownCont2.style.display = 'block'
        change2.className ='fa-solid fa-minus'

    };
};

let dropdownCont3 = document.querySelector('.dropdowncontent3')
let change3 = document.querySelector('#plus3')
function drop3(){
    
    if(dropdownCont3.style.display == 'block'){
        dropdownCont3.style.display ='none'
        change3.className = 'fa-solid fa-plus'    
    }else{
        dropdownCont3.style.display = 'block'
        change3.className ='fa-solid fa-minus'
    };
};

let animateContainer1 = document.querySelector('.first-text-container');

gsap.to('.first-text-container',{
    duration:'4',
    delay:1,
   direction:'alternate-reverse',
    ease : 'bounce.out',
    translateY : '-40px',
})