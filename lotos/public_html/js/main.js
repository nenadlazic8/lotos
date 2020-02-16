



$(document).ready(function () {

    AOS.init();


    $('.count-num').rCounter();

    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.navigation').addClass('position-fixed w-100 bg-dark').css({
                'z-index' : '3', 
                'padding' : '0px',
                'transition' : '.5s linear'
            });
            $('.navbar-brand img').css({
                'max-width' : '65%',
                'transition' : '.5s linear'
            });
        }
        else{
            $('.navigation').removeClass('position-fixed w-100 bg-dark').css({
                'z-index' : '3', 
                'padding' : '25px 35px',
                'transition' : '.5s linear'
            });
            $('.navbar-brand img').css({
                'max-width' : '100%'
            });
        }
    });


    $('.nav-link').click(function(){
        $('.navbar-collapse').removeClass('show').addClass('hide');
    });


});

