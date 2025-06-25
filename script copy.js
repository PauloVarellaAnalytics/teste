document.addEventListener('DOMContentLoaded', function () {
  
  const swiper = new Swiper('.sliderBannerGallery', {
    // Para o carrossel girar em loop infinito
    loop: true,

    // ===== ADICIONE ESTA OPÇÃO PARA O SLIDE AUTOMÁTICO =====
    autoplay: {
      delay: 2000, // Tempo em milissegundos (ex: 3000 = 3 segundos)
      disableOnInteraction: false, // Opcional: não para o autoplay após interação do usuário
    },
    // =========================================================

    // Configuração da paginação (as bolinhas)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    

    // Configuração da navegação (as setas)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  // Encontre esta parte no seu script.js
  const swiperIcones = new Swiper(".slider_icones", {
    // Configurações padrão (para telas grandes/desktop)
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    // ADICIONE ESTA PARTE PARA RESPONSIVIDADE
    breakpoints: {
      // Quando a largura da tela for >= 320px
      320: {
        slidesPerView: 1, // Mostra 1 slide
        spaceBetween: 20 // Menos espaço entre os slides
      },
      // Quando a largura da tela for >= 480px
      480: {
        slidesPerView: 2, // Mostra 2 slides
        spaceBetween: 30
      },
      // Quando a largura da tela for >= 768px
      768: {
        slidesPerView: 3, // Mostra 3 slides
        spaceBetween: 40
      },
      // Quando a largura da tela for >= 1024px
      1024: {
        slidesPerView: 4, // Mostra 4 slides
        spaceBetween: 40
      }
    }
  });

});