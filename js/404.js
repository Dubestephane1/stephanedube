// Create floating particles
const particlesContainer = document.getElementById('particles');
const particleCount = 20;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Random size between 2px and 6px
  const size = Math.random() * 4 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Random position
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;

  // Random animation duration
  const duration = Math.random() * 10 + 5;
  particle.style.animationDuration = `${duration}s`;

  // Append
  particlesContainer.appendChild(particle);
}

// Optional: Add subtle sound on hover (uncomment if you want)
// const hoverSound = new Audio('path/to/glitch-sound.mp3');
// document.querySelector('.btn').addEventListener('mouseenter', () => hoverSound.play());