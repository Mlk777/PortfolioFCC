$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    $('#navbar').addClass('disappear');
    $('#backToTop').fadeIn(200);
  }
  else {
    $('#navbar').removeClass('disappear');
    $('#backToTop').fadeOut(200);
  }
});

$('#backToTop').click(function () {
  console.log("clicked");
  $('html').animate({
    scrollTop: 0
  }, 500);
});

$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});