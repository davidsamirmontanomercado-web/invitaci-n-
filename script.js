// ====== Corazones flotantes ======
const heartsContainer = document.getElementById('hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-float');
  heart.textContent = ['❤️', '💖', '💕', '💗', '🌹'][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 14) + 'px';
  const duration = Math.random() * 4 + 6;
  heart.style.animationDuration = duration + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 350);

// ====== Lógica de los botones ======
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const modal = document.getElementById('modal');

let yesScale = 1;      // tamaño del botón sí
let noScale = 1;       // tamaño del botón no (se encoge)
let noCount = 0;
const frasesNo = [
  'no',
  '¿segura? 🥺',
  'piénsalo bien...',
  'no me hagas esto 😢',
  '¡por favor! 🙏',
  'última oportunidad...',
  'ya casi no puedo más 😭',
  'no puedes decir no 💔'
];

noBtn.addEventListener('click', () => {
  noCount++;
  yesScale += 0.35;         // El sí crece
  noScale = Math.max(0.4, noScale - 0.1); // El no se encoge

  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.fontSize = (1.1 * Math.min(yesScale, 2.2)) + 'rem';

  noBtn.style.transform = `scale(${noScale})`;
  noBtn.textContent = frasesNo[Math.min(noCount, frasesNo.length - 1)];

  // El botón no se mueve un poco para despistar
  const x = (Math.random() - 0.5) * 60;
  const y = (Math.random() - 0.5) * 40;
  noBtn.style.marginLeft = x + 'px';
  noBtn.style.marginTop = y + 'px';
});

yesBtn.addEventListener('click', () => {
  modal.classList.add('active');

  // Explosión de corazones
  for (let i = 0; i < 40; i++) {
    setTimeout(createHeart, i * 40);
  }
});

// Cerrar modal al hacer clic fuera (opcional)
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});