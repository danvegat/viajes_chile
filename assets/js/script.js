 /*Navbar*/

 $(document).scroll(function () {
    const y = $("html").scrollTop();
  
    y > 400 ? $("nav").addClass("nav-opacidad") : $("nav").removeClass("nav-opacidad");
  });