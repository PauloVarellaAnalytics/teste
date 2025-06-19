document.addEventListener('DOMContentLoaded', () => {
    const wordChangingElement = document.querySelector('.word-changing');
    const words = [
        'vagas',
        'empregos',
        'oportunidades',
        'cargos',
        'trabalhos', 
    ];
    let wordIndex = 0;

    function setupLetters(word) {
        wordChangingElement.innerHTML = '';
        const letters = word.split('').map(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            return span;
        });
        letters.forEach(span => wordChangingElement.appendChild(span));
        return letters;
    }

    function runAnimationCycle() {
        const currentLetters = Array.from(wordChangingElement.children);

        anime({
            targets: currentLetters,
            translateY: -25,
            opacity: 0,
            easing: 'easeInExpo',
            duration: 600,
            delay: anime.stagger(60),
            complete: () => {
                wordIndex = (wordIndex + 1) % words.length;
                const nextWord = words[wordIndex];
                const newLetters = setupLetters(nextWord);

                anime({
                    targets: newLetters,
                    translateY: [25, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: anime.stagger(100),
                    complete: () => {
                        setTimeout(runAnimationCycle, 500);
                    }
                });
            }
        });
    }

    const initialLetters = setupLetters(words[wordIndex]);

    anime({
        targets: initialLetters,
        translateY: [25, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800,
        delay: anime.stagger(100),
        complete: () => {
            setTimeout(runAnimationCycle, 500);
        }
    });

    function createRocketParticle(container) { // Aceita o container como argumento
        const particle = document.createElement('span');
        particle.classList.add('particle');
        particle.innerHTML = '🚀'; // Ícone de foguete
        container.appendChild(particle);

        anime({
            targets: particle,
            translateX: anime.random(-25, 25), // Movimento horizontal aleatório
            translateY: anime.random(-250, -150), // Sobe bastante
            scale: 1.2, // Um pouco maior
            rotate: anime.random(-15, 15), // Gira um pouco
            opacity: [1, 0], // Aparece e some
            duration: anime.random(600, 1000), // Duração da animação
            easing: 'easeOutQuad',
            complete: () => { particle.remove(); } // Remove a partícula após a animação
        });
    }

    // Função que cria e anima a ESTRELA
    function createStarParticle(container) { // Aceita o container como argumento
        const particle = document.createElement('span');
        particle.classList.add('particle');
        particle.innerHTML = '✨'; // Ícone de estrela
        container.appendChild(particle);

        anime({
            targets: particle,
            translateX: anime.random(-60, 60), // Se espalham mais
            translateY: anime.random(-120, -50), // Não voam tão alto
            scale: anime.random(0.5, 1), // São menores
            opacity: [1, 0],
            duration: anime.random(400, 700), // Duram menos tempo na tela
            easing: 'easeOutExpo',
            complete: () => { particle.remove(); }
        });
    }
// OUVIDO DE EVENTO PARA OS CARDS DE SERVIÇO
        const serviceCards = document.querySelectorAll('.service-box');

        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', (event) => { // <-- MUDANÇA AQUI: 'click' para 'mouseenter'
                // Ao passar o mouse, queremos que o efeito aconteça.
                // Você pode querer limitar a frequência para não sobrecarregar
                // com muitas partículas se o mouse for movido rapidamente.

                // Uma forma simples de limitar: verifica se já tem partículas ativas, ou usa um timeout.
                // Por simplicidade, vamos disparar a cada 'mouseenter'.
                // Se ficar com muitas partículas, podemos adicionar um 'debounce' ou 'throttle'.

                createRocketParticle(card);
                for (let i = 0; i < 5; i++) {
                    createStarParticle(card);
                }
            });

            // Opcional: Se você quiser um comportamento quando o mouse SAIR do card.
            // card.addEventListener('mouseleave', () => {
            //     // Exemplo: remover partículas que ainda estejam animando
            //     // Ou parar a emissão se você fizesse em loop
            // });
        });



});