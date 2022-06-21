//Intersection Observer


if (!('IntersectionObserver' in window) || !('IntersectionObserverEntry' in window) || !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
    //On load, scroll, or resize.  Do this.
    //Enable scrollDown feature
    ["load", "resize", "scroll"].forEach(function (evt) {
      window.addEventListener(evt, scrollRevealElement('.scrollIn'));
    });
  }
  else {
    //Intersection Observer Scroll Reveal
    //Intersection Observer options
    var scrollOptions = {
      rootMargin: '-200px 0px'    //Root margin has us get 100px into the section (top or bottom) before it is visible to obersver
    };
    //Find all sections to do a scroll in effect
    var targets = document.querySelectorAll('.scrollIn'); //Targets all items that have a scrollIn class
    //Observe the targets
    var scrollReveal = function (target) {
      var scrollObserver = new IntersectionObserver( function(entries,observer) {
          entries.forEach(function callbackFN(entry) {
              //Once visible
              if(entry.isIntersecting){
                  entry.target.classList.add('visible'); //Add visible class to section
                  observer.disconnect();
              }
          })
      }, scrollOptions);
      scrollObserver.observe(target);
    }
    targets.forEach(scrollReveal); //runs function for all targets
}