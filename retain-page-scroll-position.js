$(window).scroll(function() {
    sessionStorage.scrollTop = $(this).scrollTop();
  });
  
  $(document).ready(function() {
    if (sessionStorage.scrollTop != "undefined") {
      $(window).scrollTop(sessionStorage.scrollTop);
    }
  });

  $(".reset-scroll-top").on("click", function() {
    console.log("reset scroll top");
    sessionStorage.clear();
  });