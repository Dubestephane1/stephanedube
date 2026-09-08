// Portfolio interactions — scroll animations, nav, chatbot, terminal typing.
document.addEventListener('DOMContentLoaded', function() {

  // --- Fade-in sections on scroll ---
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInSections.forEach(section => observer.observe(section));

  // --- Auto-update footer year ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Navbar: shadow on scroll + active link ---
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }
    updateActiveNavLink();
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;
    let currentId = null;

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', () => requestAnimationFrame(updateNavbar));
  updateNavbar();

  // --- Mobile menu toggle ---
  if (navbar) {
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileBtn.setAttribute('aria-label', 'Toggle navigation menu');
    mobileBtn.setAttribute('aria-expanded', 'false');

    const navLogo = navbar.querySelector('.nav-logo');
    if (navLogo) navLogo.parentNode.insertBefore(mobileBtn, navLogo.nextSibling);

    const navList = navbar.querySelector('.nav-links');
    if (navList) {
      mobileBtn.addEventListener('click', () => {
        const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        mobileBtn.setAttribute('aria-expanded', !isExpanded);
        navList.classList.toggle('mobile-active');
        const icon = mobileBtn.querySelector('i');
        icon.className = isExpanded ? 'fas fa-bars' : 'fas fa-times';
      });

      // Close menu when a link is clicked
      navList.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navList.classList.remove('mobile-active');
          mobileBtn.setAttribute('aria-expanded', 'false');
          const icon = mobileBtn.querySelector('i');
          if (icon) icon.className = 'fas fa-bars';
        });
      });
    }
  }

  // --- Hero terminal: live typing effect ---
  const typeLine = document.getElementById('typeLine');
  if (typeLine) {
    const lines = [
      'whoami',
      'AI Engineer · Full-Stack Developer',
      'python deploy.py --production',
      '✓ build passed | pylint 10.00/10',
      '✓ 2× Harvard · Google IT ×2 · Microsoft · IBM DevOps · 60+ badges',
      'ready for work — let\'s talk ▍',
    ];
    let lineIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function type() {
      const current = lines[lineIdx];

      if (!deleting) {
        charIdx++;
        typeLine.textContent = current.substring(0, charIdx);

        if (charIdx === current.length) {
          deleting = true;
          setTimeout(type, 2200); // pause at full line
        } else {
          setTimeout(type, 34); // typing speed
        }
      } else {
        charIdx--;
        typeLine.textContent = current.substring(0, charIdx);

        if (charIdx === 0) {
          deleting = false;
          lineIdx = (lineIdx + 1) % lines.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, 14); // deleting speed
        }
      }
    }
    setTimeout(type, 1200);
  }

  // --- Chatbot ---
  const chatIcon = document.getElementById('chatIcon');
  const chatWindow = document.getElementById('chatWindow');
  const chatHint = document.getElementById('chatHint');
  const closeChatBtn = document.getElementById('closeChat');
  const chatInput = document.getElementById('chatInput');
  const sendMessageButton = document.getElementById('sendMessage');
  const chatMessages = document.querySelector('.chat-messages');

  if (chatIcon && chatWindow) {
    chatIcon.addEventListener('click', () => {
      chatWindow.classList.toggle('open');
      if (chatHint) chatHint.style.display = 'none';
      if (chatWindow.classList.contains('open') && chatInput) chatInput.focus();
    });
  }

  if (closeChatBtn && chatWindow) {
    closeChatBtn.addEventListener('click', () => chatWindow.classList.remove('open'));
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function autoLink(str) {
    return str.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  }

  function addMessage(content, isUser = false) {
    if (!chatMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    const formatted = content.replace(/\n{2,}/g, '\n');

    if (isUser) {
      messageDiv.textContent = formatted.replace(/\n/g, ' ');
    } else {
      messageDiv.innerHTML = autoLink(escapeHtml(formatted)).replace(/\n/g, '<br>');
    }
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  async function handleSendMessage() {
    if (!chatInput || !window.odinAgent) return;

    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    chatInput.value = '';

    try {
      const response = await window.odinAgent.processQuery(message);
      addMessage(response, false);
    } catch (error) {
      console.error('Error getting response:', error);
      addMessage("Sorry, I'm having trouble processing that. Please try again.", false);
    }
  }

  if (sendMessageButton) sendMessageButton.addEventListener('click', handleSendMessage);
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSendMessage();
      }
    });

    // Quickly open the bot if the user types anywhere (nice touch, optional)
    // Note: disabled to avoid surprises — the floating icon is enough.
  }

  // --- Chat suggestion chips ---
  const suggestions = document.querySelectorAll('.suggestion');
  suggestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-q');
      if (!q || !chatInput || !window.odinAgent) return;
      chatInput.value = q;
      handleSendMessage();
    });
  });

  // --- Global error logging (kept light for debugging) ---
  window.addEventListener('error', (e) => console.error('Error caught:', e.error));
});