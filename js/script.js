/*var wrap = $("#wrap");

wrap.on("scroll", function(e) {

  if (this.scrollTop > 147) {
    wrap.addClass("doFixed");
  } else {
    wrap.removeClass("doFixed");
  }

});*/

if($(window).width() <= 550){

$(window).on("scroll", function(e) {

    var y = $(window).scrollTop();
    /*if (y >= 500) {
        $(".doHeader").removeClass("doFixed");
        $(".doHeader").addClass("doBottom");
    }
    else*/ if (y >= 114) {
        $(".doHeader").addClass("doFixed");
    }
    else {
        $(".doHeader").removeClass("doFixed");
    }
});
} else {
  $(".placeholder").removeClass("placeholder")
}
