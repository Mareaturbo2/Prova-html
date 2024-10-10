const audio = document.getElementById('musica');
const duracaoFadeOut = 10000; 
const intervaloFadeOut = 100; 
const totalPassos = duracaoFadeOut / intervaloFadeOut;
let passoAtual = 0;

const fadeOut = setInterval(() => {
  if (passoAtual < totalPassos) {
    const volume = 1 - (passoAtual / totalPassos);
    audio.volume = volume; 
    passoAtual++;
  } else {
    clearInterval(fadeOut);
    audio.pause(); 
    audio.volume = 1; 
  }
}, intervaloFadeOut);

if (!sessionStorage.getItem('effectDisplayed')) {
    const criarCirculo = () => {
      const circulo = document.createElement('div');
      const tamanho = Math.random() * 100 + 50; 
      circulo.style.position = 'absolute';
      circulo.style.borderRadius = '50%';
      circulo.style.width = `${tamanho}px`;
      circulo.style.height = `${tamanho}px`;
      circulo.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      circulo.style.top = `${Math.random() * 100}%`;
      circulo.style.left = `${Math.random() * 100}%`;
      circulo.style.transform = 'translate(-50%, -50%)';
      circulo.style.opacity = '1';
      circulo.style.transition = 'opacity 0.5s, transform 1s ease-out';
  
      document.getElementById('fundo').appendChild(circulo);
  
      setTimeout(() => {
        circulo.style.opacity = '0';
        circulo.style.transform = 'translate(-50%, -50%) scale(2)'; 
        setTimeout(() => {
          circulo.remove();
        }, 500);
      }, 300);
    };
  
    const intervaloId = setInterval(criarCirculo, 200);
  
    setTimeout(() => {
      clearInterval(intervaloId);
      const fundo = document.getElementById('fundo');
      fundo.style.transition = 'opacity 1s ease';
      fundo.style.opacity = '0';
  
      setTimeout(() => {
        fundo.style.display = 'none';
        const conteudo = document.getElementById('conteudo');
        conteudo.style.display = 'block';
        conteudo.style.opacity = '0'; 
        conteudo.style.transition = 'opacity 1s ease';
        conteudo.style.opacity = '1'; 
      }, 1000);
    }, 5000);
  
    sessionStorage.setItem('effectDisplayed', 'true');
  } else {
    const fundo = document.getElementById('fundo');
    fundo.style.display = 'none';
    const conteudo = document.getElementById('conteudo');
    conteudo.style.display = 'block';
    conteudo.style.opacity = '0'; 
    conteudo.style.transition = 'opacity 1s ease';
    conteudo.style.opacity = '1'; 
  }
  