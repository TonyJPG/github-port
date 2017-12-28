/*version 3*/
/*global $, document, window, console*/

//google map script
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 40.414, lng: -3.675},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  })
}

//function to close dropdown menu when it's open
function closeTheMenu() {
  if ($(".in").length) {
    $(".in").removeClass("in");
  }
}


$(document).ready(function () {
  "use strict";

  // Add scrollspy to <body>
  $("body").scrollspy({target: ".navbar", offset: 1});

  // Add smooth scrolling on all links inside the navbar
  $("nav a").click(function (event) {
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
  $(window).scroll(function () {
    $("nav").toggleClass("shrink", $(this).scrollTop() > 1, 250);
    $(".navbar-brand").toggleClass("shrink", $(this).scrollTop() > 1, 250);
    $("#my-navbar").toggleClass("shrink", $(this).scrollTop() > 1, 250);
    $("ul.nav").toggleClass("shrink", $(this).scrollTop() > 1, 250);
  });


  //NEW modal functionality (video added)
  var modal = document.getElementsByClassName("modal")[0], //modal container
      span = document.getElementsByClassName("close-modal")[0]; //exit X
  //when you click a gallery's elem
  $(".port-cover").click(function(){
    if ($(this).hasClass("is-video")){ //if elem is video
      $(".modal").append("<video class='modal-content' controls><source type='video/mp4'>Video not working.</video>");
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
  span.onclick = function () {
    modal.style.display = "none";
    $("body").removeClass("modal-open"); //this stop scroll when looking at a project
    $(".modal-content").remove();
    $("#caption").remove();
  };


  //button to scroll up code
  $('#boton-subir').click(function(event) {
    event.preventDefault();
    closeTheMenu();
    $("html, body").animate({scrollTop: 0}, 1200, "easeInOutCubic", $(this).blur());
  });


    //This shows what element did I click - devtool
//    $(document).click(function (event) {
//        console.log(event.target);
//    });
});
