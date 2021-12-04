$(document).ready(function() {
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
       if(scroll >= 50){
           $('.sticky').addClass('stickyadd')
       }else{
        $('.sticky').removeClass('stickyadd')
       }
    })

    var type = new Typed(".element",{
        strings: ["Abu Daud ", "a Developer", "a Designer","a Busnessman"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    })

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style","width: 100%;transition:1s all");
            p[1].setAttribute("style","width: 85%;transition:1.5s all");
            p[2].setAttribute("style","width: 90%;transition:2s all");
            p[3].setAttribute("style","width: 80%;transition:2.5s all");
        },
        offset: '90%'
      });
      AOS.init();
//    particlesJS.load("particles-js","lib/js/particlesjs-config.json");

    })