//Sticky headers on mobile ------------------------------------------

$(document).ready(function(){

if ( $(window).width() < 400 ) {
  // Instagram-like sticky header
  function stickyTitles(stickies) {
    this.load = function() {
      stickies.each(function(){
        var thisSticky = $(this).wrap('<div class="followWrap" />');
        thisSticky.parent().height(thisSticky.outerHeight());
        $.data(thisSticky[0], 'pos', thisSticky.offset().top);
      });
    }

    this.scroll = function() {
      stickies.each(function(i){
        var thisSticky = $(this),
            nextSticky = stickies.eq(i+1),
            prevSticky = stickies.eq(i-1),
            pos = $.data(thisSticky[0], 'pos');

        if (pos <= $(window).scrollTop()) {

          thisSticky.addClass("fixed");

          if (nextSticky.length > 0 && thisSticky.offset().top >= $.data(nextSticky[0], 'pos') - thisSticky.outerHeight()) {
            thisSticky.addClass("absolute").css("top", $.data(nextSticky[0], 'pos') - thisSticky.outerHeight());
          }

        } else {

          thisSticky.removeClass("fixed");

          if (prevSticky.length > 0 && $(window).scrollTop() <= $.data(thisSticky[0], 'pos')  - prevSticky.outerHeight()) {
            prevSticky.removeClass("absolute").removeAttr("style");
          }
        }
      });
    }
  }

  var newStickies = new stickyTitles($(".doDontHeader"));

  newStickies.load();

  $(window).on("scroll", function() {
    newStickies.scroll();
  });
}});
