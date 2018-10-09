//Variables
let backToTop = document.getElementById('backToTop');
let navbar = document.getElementById('navbar');
let timer = null;

//Make navbar and back to top arrow appear/disappear
window.addEventListener('scroll', function (e) {
  if (window.pageYOffset > 20) {
    navbar.style.opacity = "0";
    if (backToTop.style.opacity != 1) {
      clearTimeout(timer);
      backToTop.style.display = "block";
      timer = setInterval(() => {
        backToTop.style.opacity += .10;
        if (+getComputedStyle(backToTop).getPropertyValue("opacity") >= 1) {
          clearInterval(timer);
        }
      }, 100)
    }
  } else {
    navbar.style.opacity = "1";
    if (backToTop.style.opacity = 1) {
      clearTimeout(timer);
      timer = setInterval(() => {
        backToTop.style.opacity -= .10;
        if (+getComputedStyle(backToTop).getPropertyValue("opacity") <= 0) {
          backToTop.style.display = "none";
          clearInterval(timer);
        }
      }, 100)
    }
  }
});

//Make back to top arrow scroll smooth to top
backToTop.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

//Smooth scroll to sections
let links = document.getElementsByClassName('nav-link');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    let sectionHash = this.hash.replace(/^#/, "");
    let section = document.getElementById(sectionHash);
    section.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  });
}


//JQUERY
/*$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    $('#navbar').addClass('disappear');
    $('#backToTop').fadeIn(200);
  } else {
    $('#navbar').removeClass('disappear');
    $('#backToTop').fadeOut(200);
  }
});*/

/*$('#backToTop').click(function () {
  console.log("clicked");
  $('html').animate({
    scrollTop: 0
  }, 500);
});*/

/*$(document).ready(function () {
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
});*/