



$(document).ready(function () {

    //ANIMATION ON SCROLL

    AOS.init();

    //COUNTER
    $('.count-num').rCounter();


    //NAVIGATION ANIMATION
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.navigation').addClass('position-fixed w-100 bg-dark').css({
                'z-index' : '3', 
                'padding' : '0px',
               // 'transition' : '.5s linear'
            });
            $('.navbar-brand img').css({
                'max-width' : '65%',
                'transition' : '.5s linear'
            });
        }
        else{
            $('.navigation').removeClass('position-fixed w-100 bg-dark').css({
                'z-index' : '3', 
                'padding' : '0',
                'transition' : '.5s linear'
            });
            $('.navbar-brand img').css({
                'max-width' : '100%'
            });
        }
    });

    //SMOOTH SCROLL IOS

    $('.nav-link').click(function(){
        $('.navbar-collapse').removeClass('show').addClass('hide');
    });



    $(document).ready(function () {
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
            $(this).toggleClass('open');
        });
    });

    $('.navbar a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body')
                .animate({
                    scrollTop: $(hash).offset().top
                }, 800);
        }
    });


});

