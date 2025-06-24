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

});