 /*Navbar*/

 $(document).scroll(function () {
    const y = $("html").scrollTop();
  
    y > 400 ? $("nav").addClass("nav-opacidad") : $("nav").removeClass("nav-opacidad");
  });

   /*Tooltips*/

$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

  $("#enviarFormulario").click(function () {
    alert("El formulario fue enviado correctamente");
  });

  $(".card-title").click(function () {
    $(".card-text").toggle();
  });