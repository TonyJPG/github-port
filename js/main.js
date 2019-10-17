/* version 8/10/18 */
/*global $, document, window, console*/

//google map script
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {
            lat: 40.414,
            lng: -3.675
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    })
}

//function to close dropdown menu when it's open
function closeTheMenu() {
    if ($(".in").length) {
        $(".in").removeClass("in");
    }
}


$(document).ready(function() {
    "use strict";

    // Add scrollspy to <body>
    $("body").scrollspy({
        target: ".navbar",
        offset: 1
    });

    // Add smooth scrolling on all links inside the navbar
    $("nav a").click(function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 1200, "easeInOutCubic", $(this).blur()); // Add hash (#) to URL when done scrolling (default click behavior) -> , function () {window.location.hash = hash;}
        } // .blur() removes focus on buttons ;D

        // This hide dropdown menu when you click an option
        closeTheMenu();

    });

    //this modify the navbar when you scroll away from the top
    $(window).scroll(function() {
        $("nav").toggleClass("shrink", $(this).scrollTop() > 1, 250);
        $(".navbar-brand").toggleClass("shrink", $(this).scrollTop() > 1, 250);
        $("#my-navbar").toggleClass("shrink", $(this).scrollTop() > 1, 250);
        $("ul.nav").toggleClass("shrink", $(this).scrollTop() > 1, 250);
    });


    //NEW modal functionality (video added)
    var modal = document.getElementsByClassName("modal")[0], //modal container
        span = document.getElementsByClassName("close-modal")[0]; //exit X
    //when you click a gallery's elem
    $(".port-cover").click(function() {
        if ($(this).hasClass("is-video")) { //if elem is video
            $(".modal").append("<video class='modal-content' controls>Video not working.</video>");
        } else { //if elem is image
            $(".modal").append("<img class='modal-content'>");
        }
        $(".modal").append("<div id='caption'></div>");
        modal.style.display = "block";
        document.getElementsByClassName("modal-content")[0].src = $(this).next().data("url"); //use the sibling attributes
        document.getElementById("caption").innerHTML = $(this).next().data("desc");
        $("body").addClass("modal-open"); //this stop scroll when looking at a project
    });

    //when clicks on X, close the modal
    span.onclick = function() {
        modal.style.display = "none";
        $("body").removeClass("modal-open"); //this stop scroll when looking at a project
        $(".modal-content").remove();
        $("#caption").remove();
    };


    //button to scroll up code
    $('#boton-subir').click(function(event) {
        event.preventDefault();
        closeTheMenu();
        $("html, body").animate({
            scrollTop: 0
        }, 1200, "easeInOutCubic", $(this).blur());
    });


    //This shows what element did I click - devtool
    //    $(document).click(function (event) {
    //        console.log(event.target);
    //    });
});

/* ---- particles.js config ---- */
const particlesObj = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "random"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
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
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
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
};
particlesJS("particles-js", particlesObj);
particlesJS("particles-js2", particlesObj);
