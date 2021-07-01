// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Particles

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 4
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.1683582663908799,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 110.48066982851817,
            "color": "#ffffff",
            "opacity": 0.06313181133058181,
            "width": 2.683101981549727
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 801.7060304327614,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "remove"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 267.9854800594439,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Portfolio grid


            
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ANCHOR JQ scroll         
$(window).scroll(function() {
    
    let fromTop = $(this).scrollTop();
    let menuItems = $('.nav-list__link');
    let scrollItems = $('[id^="anchor"]');
    let cur = scrollItems.map(function() {
        
        if ($(this).offset().top < fromTop+1)
        return this;
    });
    
    cur = cur[cur.length-1];
    let id = cur && cur.id;
    
    menuItems.closest('li')
    .removeClass("nav-list-active-item")  
    .parent().find("[href='#"+id+"']")
    .closest('li').addClass("nav-list-active-item");
});
            
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!MOBILE NAVIGATION + toggle
$(document).on("click", ".nav a", function(e) {
    e.preventDefault();

    let id  = $(this).attr('href');
    let top = $(id).offset().top;

    $('body, html').animate({scrollTop: top}, 500);
    $('.nav').removeClass('nav-mobile');
    $('.menu-btn').removeClass('open');
    $('body').css('overflow','');
    $('.mobile').css('visibility', 'visible');

});

$('.menu-btn').on('click', function(){
    const $nav = $('.nav');

    $nav.toggleClass('nav-mobile');
    
    if( $nav.hasClass('nav-mobile')) {
        $('body').css('overflow','hidden');
        $('.menu-btn').addClass('open');
        $('.mobile').css('visibility', 'hidden');

    } else {
        $('body').css('overflow','');
        $('.menu-btn').removeClass('open');
        $('.mobile').css('visibility', 'visible');
    }
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!BUTTONS ANCHOR CLICK
$(document).on("click", ".scroll-down", function(e) {
    e.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 800);
});

$(document).on("click", ".home-button", function(e) {
    e.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 500);
});

$(document).on("click", '#button-lets-go', function(e) {
    e.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 500);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!for button SCROLL DOWN
const scrollDown = document.querySelector('.scroll-down');

scrollDown.addEventListener('animationend', function() {
    scrollDown.classList.remove('scroll-down-animate');
    setTimeout(function() {

scrollDown.classList.add('scroll-down-animate');
    }, 5000);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!COPY PHONE NUMBER
$(document).ready(function($) {
    $('.text_copy_link').click(function() {

    let $text_copy = $(this);
    let $temp = $("<input>");

    $("body").append($temp);
    $temp.val($text_copy.text()).select();
    document.execCommand("copy");
    $temp.remove();
    $('.copy_link_mess').fadeIn(400);
    setTimeout(function(){$('.copy_link_mess').fadeOut(400);},2000);
    });
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!MEdia
const media = window.matchMedia("(max-width: 980px)");

portfolioGrid(media);

function portfolioGrid(media) {

    const $grid = $('.portfolio-grid');
    
    if (media.matches) {

        if ( $grid.hasClass('waterfall-initialized') ) {
            $grid.removeClass('waterfall-initialized');
            $grid.masonry('destroy');
        }
        if ( !$grid.hasClass('slick-initialized') ){
            $grid.slick({
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true,
                arrows: false,
                speed: 150,
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '80px',
                    }
                  }
                ]
              });
        }

    } else {
        if ( $grid.hasClass('slick-initialized') ) {

            $grid.slick('unslick');
        }
        if ( !$grid.hasClass('waterfall-initialized') ) {
            $grid.addClass('waterfall-initialized');
            
            $grid.masonry({
                itemSelector: '.portfolio-grid__col',
                percentPosition: true,
                horizontalOrder: true
            });            
        }
    }
  };

  window.addEventListener('resize', function(){
    const media = window.matchMedia("(max-width: 980px)");
    portfolioGrid(media);
  });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!COUNTER FOR DARK
let time = 2, clearCouner = 1;
$(window).scroll(function(){
    $('#counter').each(function() {
        let pos = $(this).offset().top,
        topWindow = $(window).scrollTop();
        if (pos < topWindow + 680){
            if (clearCouner < 2) {
                $('.dark-title').addClass('dark-title-vis');
                $('h3').each(function() {
                    let i = 1,
                    num = $(this).data('num'),
                    step = 800 * time / num,
                    that = $(this),
                    int = setInterval(function(){
                        if (i <= num) {
                            that.html(i);
                        } else {
                            clearCouner = clearCouner + 2;
                            clearInterval(int);
                        }
                        i++;
                    }, step);
                });
            }
        }
    });
});

// CLOCK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const clock = document.querySelector('#clock');


setInterval(function() {
    
    let date = new Date();
    let yy = date.getFullYear();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    if (hh < 10) {
        hh = '0'+ hh;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (ss < 10) {
        ss = '0' + ss;
    }

    clock.innerHTML = `${yy} - ${hh} : ${mm} : ${ss}`;
    
   
},1000);




