 $(document).ready(function(){
  $(window).scroll(function() {
 
    if ($(document).scrollTop() > 30) {
      $("#nav_div").addClass("navbar-fixed");
    } else {
      $("#nav_div").removeClass("navbar-fixed");
    }
  });

  $(".button-collapse").sideNav();
});