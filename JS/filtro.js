$(document).ready(function (){
   $('.filter').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
       var valor = $(this).attr('data-nombre');
       if(valor == 'todos'){
           $('.cont-work').show('1000');
          
           
       }else{   
           $('.cont-work').not('.' + valor).hide('1000');
           $('.cont-work').filter('.'+valor).show('1000');
          
       }
       
   });

   let equipo = $('#about').offset().top,
    servicio = $('#trabajo').offset().top,
    trabajo = $('#skills').offset().top,
    contacto = $('#contact').offset().top;

    window.addEventListener('resize', function(){
        let equipo = $('#about').offset().top,
            servicio = $('#trabajo').offset().top,
            trabajo = $('#skills').offset().top,
            contacto = $('#contact').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-equipo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo -100
        },600);
    });

    $('#enlace-servicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -100
        },600);
    });

    $('#enlace-trabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -110
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -110
        },600);
    });

});



        