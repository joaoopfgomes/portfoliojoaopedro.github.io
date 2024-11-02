const image = document.getElementById('interactiveImage');
const hiddenText = document.getElementById('hiddenText');
let textVisible = false; // Estado para verificar se o texto está visível

// Função para mover a imagem levemente
function moveImage() {
    image.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        image.style.transform = 'translateY(0)';
    }, 300);
}

// Mover a imagem a cada segundo
setInterval(moveImage, 1000);

// Adicionar evento de clique na imagem
image.addEventListener('click', () => {
    if (textVisible) {
        hiddenText.style.opacity = '0'; // Diminui a opacidade
        hiddenText.style.maxHeight = '0'; // Define a altura máxima para 0
        image.style.transform = 'translateX(0)'; // Move a imagem de volta
    } else {
        hiddenText.style.opacity = '1'; // Aumenta a opacidade
        hiddenText.style.maxHeight = '500px'; // Define uma altura máxima para a transição
        image.style.transform = 'translateX(100px)'; // Move a imagem para o lado
    }
    textVisible = !textVisible; // Inverte o estado de visibilidade
});

document.querySelectorAll('.pasta').forEach(pasta => {
    pasta.addEventListener('click', () => {
      const imagesId = pasta.id + '-images';
      const imagesDiv = document.getElementById(imagesId);
      
      if (imagesDiv.style.display === 'none' || imagesDiv.style.display === '') {
        imagesDiv.style.display = 'block';
        setTimeout(() => {
          const imgs = imagesDiv.querySelectorAll('img');
          imgs.forEach(img => {
            img.classList.add('show');
          });
        }, 10); // Pequeno atraso para permitir a transição
      } else {
        const imgs = imagesDiv.querySelectorAll('img');
        imgs.forEach(img => {
          img.classList.remove('show');
        });
        setTimeout(() => {
          imagesDiv.style.display = 'none';
        }, 500); // Tempo igual à transição CSS
      }
    });
  });
  
  const pasta = document.getElementById('hardware-pasta');
  const imagensDiv = document.getElementById('hardware-imagens');
  
  pasta.addEventListener('click', () => {
    if (imagensDiv.style.display === 'none' || imagensDiv.style.display === '') {
      imagensDiv.style.display = 'block'; // Mostra as imagens
      setTimeout(() => {
        const imgs = imagensDiv.querySelectorAll('img');
        imgs.forEach(img => {
          img.classList.add('show'); // Adiciona a classe para mostrar com transição
        });
      }, 10); // Pequeno atraso para permitir a transição
    } else {
      const imgs = imagensDiv.querySelectorAll('img');
      imgs.forEach(img => {
        img.classList.remove('show'); // Remove a classe para esconder com transição
      });
      setTimeout(() => {
        imagensDiv.style.display = 'none'; // Oculta após a transição
      }, 500); // Tempo igual à transição CSS
    }
  });
  
  

  



const cardthai = document.getElementById('dialogthai');
const thaiimage = document.getElementById('thaiprint');

thaiimage.onclick = function() {
  cardthai.showModal();
};

const cardBI = document.getElementById('dialogBI');
const BIimage = document.getElementById('BIprint');

BIimage.onclick = function () {
  cardBI.showModal();
};

const cardDash = document.getElementById('dialogDash');
const dashimage = document.getElementById('dashprint');

dashimage.onclick = function () {
  cardDash.showModal();
};



