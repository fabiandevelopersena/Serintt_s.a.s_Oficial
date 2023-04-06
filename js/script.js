let header = document.getElementById('header')

let nube1 = document.getElementById('nube1')
let slogan = document.getElementById('slogan')
let btn = document.getElementById('btn')
let persona = document.getElementById('persona')


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    
    /* nube1.style.left = value* -5  + 'px'; */
    /* btn.style.marginTop = value * 0.7 + 'px'; */
    slogan.style.marginBottom =   value* -1  + 'px';
    header.style.marginTop = value * 0.4 + 'px';
    persona.style.marginLeft = value* 4  + 'px';

})

const navigation = document.querySelector('nav')
document.querySelector('.menu').onclick = function (){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}




