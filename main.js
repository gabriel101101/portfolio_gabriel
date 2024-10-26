


let nav = document.getElementById("nav")
let menu = document.getElementById("enlaces")
let abrir = document.getElementById('open')
let botones= document.getElementsByClassName('btn-header')
let cerrado=true;

function menus(){
    let des_act= window.pageYOffset;

    if( des_act <= 100 ){
        nav.classList.remove('nav2');
        nav.className=('nav1');
        nav.style.transition='1s';
        menu.style.top='80px';
        abrir.style.color='#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className=('nav2');
        nav.style.transition='1s';
        menu.style.top='100px'
        abrir.style.color='#000';
    }
}


function apertura(){
    if(cerrado){
        menu.style.width= '100%';
        cerrado=false;

    }
    else{
        menu.style.width='0%';
        menu.style.overflow='hidden';
        cerrado=true;

    }
}



window.addEventListener('load', function(){
    menus();
})



window.addEventListener('click', function(e){
    if(cerrado==false){
        let span=document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width='0%';
            menu.style.overflow='hidden';
            cerrado=true;
        }

    }   
})


window.addEventListener('scroll', function(){
    menus();
})


window.addEventListener('resize', function(){
    if(screen.width=700){
        cerrado=true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
})

abrir.addEventListener('click', function(){
    apertura();
})