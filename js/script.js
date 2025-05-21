var header = document.getElementById('header');
var navigation_header = document.getElementById('navigation-header');
var main = document.getElementById('main');
var showSidebar = false;
//animação de sidebar e blur
function activesidebar()
{
    showSidebar = !showSidebar;

    if (showSidebar){  navigation_header.style.marginLeft= '0vw';
    navigation_header.style.animationName= 'showSideBar';
    main.style.filter = 'blur(3.5px)';}

    else{  navigation_header.style.marginLeft= '-100vw';
    navigation_header.style.animationName= 'closeSideBar';
    main.style.filter = '';}
}

function closesidebar()
{
    //se showsidebar for true ele vai entrar na linha 8
    //tranformar em false e fechar a sidebar
    if (showSidebar){ activesidebar()} 
}


//mudar o header ao sair da pagina
document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState === "visible") {
    document.title = "Blog do Gabriel 🐧";
  }else{ document.title = "Veja mais um pouco 😢"; };

});



//carrosel de fotos
window.addEventListener('resize', function(event)
{
    //caso usuario redimencione saia o blur e feche a sidebar
    if (window.innerWidth > 800 && showSidebar)
    {
        activesidebar();
    }
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  var swiper = new Swiper(".slide-content-video", {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  


  function fecharPopup() {
    document.getElementById('popup-overlay').style.display = 'none';
  }

  window.onload = function() {
    document.getElementById('popup-overlay').style.display = 'flex';
  };