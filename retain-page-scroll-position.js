$(window).scroll(function() {
    sessionStorage.scrollTop = $(this).scrollTop();
  });
  
  $(document).ready(function() {
    if(localStorage.getItem("resetScroll") == "true"){
      localStorage.setItem("resetScroll", "false");
    }
    else if (sessionStorage.scrollTop != "undefined") {
      $(window).scrollTop(sessionStorage.scrollTop);
    }
  });

  $(".reset-scroll-top").on("click", function() {
    console.log("reset scroll top");
    localStorage.setItem("resetScroll", "true");
  });