jQuery.noConflict();
(function( $ ) {
    $('.sectorsSlider label').on('click tap', function(){
        $('.sectorsSlider label').removeClass('active');
        this.classList.add('active');
        document.getElementById('rangeInput').value = $(this).data('value');
        $('.sectorsCarousel').slick('slickGoTo',parseInt($(this).data('value') - 1));
    });
    $('[href="#"]').on('click tap', function(e){
        e.preventDefault();
    });
    $('.scrollDown').on('click tap', function(e){
        console.log('coco');
        $('html, body').animate({
            scrollTop: $(window).height()
        }, {
            duration: 1000
        });
    });
    window.slicks = {
        init : function() {
            window.slicks.clients();
            window.slicks.partners();
            $('.topSlider').slick({
                dots: false,
                autoplay: true,
                autoplaySpeed: 6000,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'ease-in-out'
            });
            $('.sectorsCarousel').slick({
                dots: false,
                autoplay: true,
                autoplaySpeed: 4200,
                infinite: true,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase:'ease-in-out'
            }).on('afterChange', function(e){
                var labels = $('.sectorsSlider label');
                labels.removeClass('active');
                labels.eq($(this).slick('slickCurrentSlide')).addClass('active');
                document.getElementById('rangeInput').value = $(this).slick('slickCurrentSlide') + 1;
            });
        },
        clients:function(){
            $('.clientsCarousel').slick({
                dots: false,
                autoplay: false,
                infinite: true,
                speed: 600,
                slidesToShow: 5,
                slidesToScroll: 5,
                cssEase:'ease-in-out',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 980,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 780,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: "unslick"
                    }
                ],
                prevArrow: '<a href="#" data-role="none" class="carousel-prev" aria-label="Previous" tabindex="0" role="button">' +
                '<svg version="1.1" id="leftArrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ' +
                'width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">' +
                '<path d="M50,25C50,11.193,38.807,0,25,0S0,11.193,0,25s11.193,25,25,25S50,38.807,50,25z M13.946,24.252L29.144,9.094 ' +
                'c0.217-0.217,0.467-0.325,0.75-0.325c0.282,0,0.532,0.108,0.75,0.325l1.631,1.626c0.217,0.216,0.326,0.466,0.326,0.748 ' +
                'c0,0.282-0.109,0.531-0.326,0.748L19.458,25l12.817,12.784c0.217,0.217,0.326,0.466,0.326,0.748c0,0.282-0.109,0.531-0.326,0.748 ' +
                'l-1.631,1.626c-0.218,0.217-0.468,0.325-0.75,0.325c-0.283,0-0.533-0.109-0.75-0.325L13.946,25.748 ' +
                'C13.728,25.531,13.62,25.282,13.62,25C13.62,24.718,13.728,24.468,13.946,24.252z" fill="currentColor" />' +
                '</svg></button>',
                nextArrow: '<a href="#" data-role="none" class="carousel-next" aria-label="Next" tabindex="0" role="button">' +
                '<svg version="1.1" id="rightArrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ' +
                'width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">' +
                '<path d="M0,25c0,13.807,11.193,25,25,25s25-11.193,25-25S38.807,0,25,0S0,11.193,0,25z M36.054,25.748L20.856,40.906 ' +
                'c-0.217,0.217-0.467,0.325-0.75,0.325c-0.282,0-0.532-0.108-0.75-0.325l-1.631-1.626c-0.217-0.216-0.326-0.466-0.326-0.748 ' +
                'c0-0.282,0.109-0.531,0.326-0.748L30.542,25L17.725,12.216c-0.217-0.217-0.326-0.466-0.326-0.748c0-0.282,0.109-0.531,0.326-0.748 ' +
                'l1.631-1.626c0.218-0.217,0.468-0.325,0.75-0.325c0.283,0,0.533,0.109,0.75,0.325l15.198,15.158 ' +
                'c0.218,0.217,0.326,0.467,0.326,0.748C36.38,25.282,36.272,25.532,36.054,25.748z" fill="currentColor" />' +
                '</svg></button>',
            });
        },
        partners:function(){
            $('.partnersCarousel').slick({
                dots: false,
                arrows: false,
                speed: 600,
                slidesToShow: 7,
                slidesToScroll: 7,
                cssEase: 'ease-in-out',
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5
                        }
                    },
                    {
                        breakpoint: 980,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 780,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: "unslick"
                    }
                ]
            });
        }
    };
    window.slicks.init();
    $(".menuToggle").on( "click tap", function() {
        $('.touchMenu').toggleClass( "active" );
    });
    enquire.register("screen and (max-width:479px)", {
        unmatch : function() {
            window.slicks.clients();
            window.slicks.partners();
        }
    }).register("screen and (min-width:1200px)", {
        unmatch : function() {
            window.slicks.partners();
        }
    });
})(jQuery);