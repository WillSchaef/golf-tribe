// // ------------------------------------------------------------------
// // Fixed Header with Anchor Tag Adjustment
// // Creation Date: 2/23/2021
// // Last Updated: 8/27/2021
// // Description: Makes the navigation sticky and alters where the anchor tags should land
// // when clicked.  Needs to be an ID for the anchor tag to work properly
// // ------------------------------------------------------------------
//Get Height of header
//Used for anchor support

// This
function getHeaderHeight(){
    var headerHeight = document.querySelector('header.gt-header').offsetHeight;
    if (window.matchMedia('(max-width: 992px)').matches) {
      headerHeight = document.querySelector('header.gt-header').offsetHeight;
    }
    return headerHeight;
  }
  
  //Function to change header on scroll
//   function scrollDown() {
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//       document.getElementsByTagName('header')[0].classList.add('scrolled');
//     } else {
//       document.getElementsByTagName('header')[0].classList.remove('scrolled');
//     }
//   }
  
  //Anchor tag implementation
  //On click of anchor tag
  // this
  $('a[href*="#"]:not([href="#"])').click(function (e) {
    var urlPath = this.href.substring(0, this.href.indexOf("#")); //url wthout hash
    var locationPath = location.href;
    if(locationPath.includes("#")){
      locationPath = location.href.substring(0, location.href.indexOf("#")); //url wthout hash
    }
    if(urlPath == locationPath){ //If the urls are the same then do the anchor animation
      var target = $(this.href.substring(this.href.indexOf("#")));
      if (target.length) {
        var headerHeight = getHeaderHeight();
        $('html,body').stop().animate({
          scrollTop: target.offset().top - headerHeight //offsets for fixed header
          }, {
            complete: function() { //ensures that it goes all the way to the anchor link
              headerHeight = getHeaderHeight();
              if(document.body.scrollTop != headerHeight || document.documentElement.scrollTop != headerHeight){
                $('html,body').animate({
                  scrollTop: target.offset().top - headerHeight //offsets for fixed header
                }, 1);
              }
              $('html,body').stop(true, true);
            }
        });
      }
    }
    // Close mobile nav for on page anchors, if clicked in the navigation
//     if($(this).closest('ul').hasClass('c-topnav__container') || $(this).closest('ul').hasClass('c-topnav__submenu')){
//       $('.js-navbar__toggle').trigger("click");
//     }
//   });
  


  //On load of site going to the anchor tag
  $(window).on('pageshow',function(){ 
    var hash = window.location.hash
    if (hash == '' || hash == '#' || hash == undefined) return false;
    var target = $(hash);
    //target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      var headerHeight = getHeaderHeight();
      $('html,body').stop().animate({
          scrollTop: target.offset().top - headerHeight //offsets for fixed header
          }, {
          complete: function() { //ensures that it goes all the way to the anchor link
              headerHeight = getHeaderHeight();
              if(document.body.scrollTop != headerHeight || document.documentElement.scrollTop != headerHeight){
                  $('html,body').animate({
                      scrollTop: target.offset().top - headerHeight //offsets for fixed header
                  }, 500);
              }
              $('html,body').stop(true, true);
          }
      });
    }
  })
});