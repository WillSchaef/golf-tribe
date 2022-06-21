//Add scrolled class to header
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 40) {
      $("header").addClass("scrolled");
  } else {
      $("header").removeClass("scrolled");
  }
});
//Add scrolled class to section
$(window).scroll(function () {
var sScroll = $(window).scrollTop();
if (sScroll >= 40) {
    $("section").addClass("s-scrolled");
} else {
    $("section").removeClass("s-scrolled");
}
});
  
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Fade in effect
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fade-out');
});