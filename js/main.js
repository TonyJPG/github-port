/*global $, document, window, console*/
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
      }, 1200, "easeInOutCubic"); // Add hash (#) to URL when done scrolling (default click behavior) -> , function () {window.location.hash = hash;}
    }
    // This hide dropdown menu when you click an option
    if ($(".in").length) {
      $(".in").removeClass("in");
    }
  });

  //this modify the navbar when you scroll away from the top
  $(window).scroll(function () {
    $("nav").toggleClass("shrink", $(this).scrollTop() > 1, 250);
    $(".navbar-brand").toggleClass("shrink", $(this).scrollTop() > 1, 250);
    $("#my-navbar").toggleClass("shrink", $(this).scrollTop() > 1, 250);
    $("ul.nav").toggleClass("shrink", $(this).scrollTop() > 1, 250);
  });

  //get the modal
  var modal = document.getElementById("my-modal"),
      modalImg = document.getElementById("modal-image"),
      captionText = document.getElementById("caption"),
      span = document.getElementsByClassName("close-modal")[0];

  //when click on the gallery's images
  $(".port-cover").click(function () { //click the invisible cover
    modal.style.display = "block";
    modalImg.src = $(this).next().data("url"); //use the sibling attributes
    captionText.innerHTML = $(this).next()[0].alt;
    $("body").addClass("modal-open"); //this stop scroll when looking at a project
  });

  //when clicks on X, close the modal
  span.onclick = function () {
    modal.style.display = "none";
    $("body").removeClass("modal-open"); //this stop scroll when looking at a project
  };

    //This shows what element did I click - devtool
//    $(document).click(function (event) {
//        console.log(event.target);
//    });
});
