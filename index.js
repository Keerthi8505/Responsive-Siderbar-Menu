let menu = document.querySelector('#menu-icon');
let sidenavbar = document.querySelector('.side-navbar');
let  Content = document.querySelector('.content');

menu.onclick = () => {

    sidenavbar.classList.toggle('active');
    Content.classList.toggle('active');
   
}

let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}