jQuery(document).ready(function() {

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


      // 3. Lógica para o Carrossel de Depoimentos
    new Swiper('.slider_depoimentos', {
      loop: true,
      spaceBetween: 40,
      slidesPerView: 1,
      navigation: {
        nextEl: '.slider_depoimentos .swiper-button-next',
        prevEl: '.slider_depoimentos .swiper-button-prev',
      },
      pagination: {
        el: '.slider_depoimentos .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });


    // =================================================================
    // 2. A sua Lógica para o Carrossel de Ícones (COM A CORREÇÃO)
    // =================================================================
    var swiperIconesInstance = null;
    var mobileBreakpoint = 1100;

function setupIconesComponent() {
    if (!swiperIconesInstance) {
        swiperIconesInstance = new Swiper(".slider_icones", {
            slidesPerView: 1.5, // mostra parcialmente o segundo item no mobile
            spaceBetween: 16,
            navigation: {
                nextEl: ".slider_icones .swiper-button-next",
                prevEl: ".slider_icones .swiper-button-prev",
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    spaceBetween: 16
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 24
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }
        });
    }
}


    // LÓGICA DE CLIQUE PARA O ACORDEÃO (MODO TELEMÓVEL)
    // Esta lógica agora está separada e só é acionada quando está no modo telemóvel.
    jQuery('.slider_icones').on('click', '.box_icones_item', function(e) {
        // A condição 'if' aqui é a chave para a correção
        if (jQuery(window).width() <= mobileBreakpoint) {
            e.preventDefault();
            var clickedItem = jQuery(this);
            var content = clickedItem.find('p');

            // Fecha os outros itens antes de abrir o novo
            if (!clickedItem.hasClass('active')) {
                jQuery('.slider_icones .box_icones_item.active p').slideUp();
                jQuery('.slider_icones .box_icones_item.active').removeClass('active');
            }

            clickedItem.toggleClass('active');
            content.slideToggle();
        }
    });

    // Executa a configuração inicial quando a página carrega
    setupIconesComponent();

    // Executa novamente ao redimensionar a janela
    var resizeTimer;
    jQuery(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setupIconesComponent, 200);
    });



    function resetDesktopDescriptions() {
    if (jQuery(window).width() > mobileBreakpoint) {
        jQuery('.slider_icones .box_icones_item p').show();
    }
}

jQuery(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        setupIconesComponent();
        resetDesktopDescriptions();
    }, 200);
});

});