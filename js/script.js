// Odin Principles: Self-Healing & Autonomous Operation
document.addEventListener('DOMContentLoaded', function() {
  // Fade-in sections on scroll
  const fadeInSections = document.querySelectorAll('.fade-in-section');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Unobserve after animation for performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInSections.forEach(section => {
    observer.observe(section);
  });

  // Auto-update footer year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Active nav link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNavLink() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Account for header
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Add active class styling
  const navStyle = document.createElement('style');
  navStyle.textContent = `
    .nav-links a.active {
      color: var(--primary-color) !important;
      font-weight: 600;
    }
    .nav-links a.active::after {
      width: 100% !important;
    }
  `;
  document.head.appendChild(navStyle);

  // Update on scroll and load
  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateActiveNavLink);
  });

  // Initial check
  updateActiveNavLink();

  // Video playback rate
  const video = document.getElementById("background-video");
  if (video) {
    video.playbackRate = 0.5;

    // Add error handling for video
    video.addEventListener('error', function(e) {
      console.warn('Video loading failed, showing fallback', e);
      // Could add fallback image here
    });
  }

  // Chatbot toggle
  const chatIcon = document.querySelector('.chat-icon');
  const chatWindow = document.querySelector('.chat-window');
  const closeChatBtn = document.querySelector('.close-chat');
  const chatInput = document.getElementById('chatInput');
  const sendMessageButton = document.getElementById('sendMessage');
  const chatMessages = document.querySelector('.chat-messages');

  if (chatIcon && chatWindow) {
    chatIcon.addEventListener('click', () => {
      chatWindow.classList.toggle('open');
      // Focus input when opening chat
      if (chatWindow.classList.contains('open') && chatInput) {
        chatInput.focus();
      }
    });
  }

  if (closeChatBtn && chatWindow) {
    closeChatBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });
  }

  // Chat functionality
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
    // Collapse consecutive newlines so multi-paragraph replies don't leave empty lines
    const formatted = content.replace(/\n{2,}/g, '\n');

    if (isUser) {
      // User input is rendered as plain, escaped text
      messageDiv.textContent = formatted.replace(/\n/g, ' ');
    } else {
      // Bot responses (trusted content) can include clickable links
      messageDiv.innerHTML = autoLink(escapeHtml(formatted)).replace(/\n/g, '<br>');
    }
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  async function handleSendMessage() {
    if (!chatInput || !window.odinAgent) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, true);
    
    // Clear input
    chatInput.value = '';
    
    try {
      // Get response from Odin agent
      const response = await window.odinAgent.processQuery(message);
      // Add bot response
      addMessage(response, false);
    } catch (error) {
      console.error('Error getting response from Odin agent:', error);
      addMessage("Sorry, I'm having trouble processing your request. Please try again.", false);
    }
  }

  // Send message button click
  if (sendMessageButton) {
    sendMessageButton.addEventListener('click', handleSendMessage);
  }

  // Enter key in input
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSendMessage();
      }
    });
  }

  // Animate skill badges on hover
  const skillBadges = document.querySelectorAll('.skill-badge');
  skillBadges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
      badge.style.transform = 'scale(1.1)';
      badge.style.transition = 'transform 0.2s ease';
    });

    badge.addEventListener('mouseleave', () => {
      badge.style.transform = 'scale(1)';
    });
  });

  // Add mobile menu toggle functionality
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    // Create mobile menu button
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileBtn.setAttribute('aria-label', 'Toggle navigation menu');
    mobileBtn.setAttribute('aria-expanded', 'false');

    // Insert after nav-logo
    const navLogo = navbar.querySelector('.nav-logo');
    if (navLogo) {
      navLogo.parentNode.insertBefore(mobileBtn, navLogo.nextSibling);
    }

    const navLinks = navbar.querySelector('.nav-links');
    if (navLinks) {
      mobileBtn.addEventListener('click', () => {
        const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        mobileBtn.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('mobile-active');

        // Animate burger to X
        const icon = mobileBtn.querySelector('i');
        if (isExpanded) {
          icon.className = 'fas fa-bars';
        } else {
          icon.className = 'fas fa-times';
        }
      });
    }

    // Add mobile menu styles
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
      .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
      }

      @media (max-width: 768px) {
        .mobile-menu-btn {
          display: block;
        }

        .nav-links {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(18, 18, 18, 0.9);
          backdrop-filter: blur(10px);
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          display: none;
        }

        .nav-links.mobile-active {
          display: flex;
        }

        .nav-links li {
          margin: 0.5rem 0;
        }
      }
    `;
    document.head.appendChild(mobileStyle);
  }

  // Lazy load background video if supported
  const backgroundVideo = document.getElementById('background-video');
  if (backgroundVideo) {
    // Check if we should load video based on connection/preferences
    if (navigator.connection &&
        (navigator.connection.saveData ||
         navigator.connection.effectiveType === '2g')) {
      // Save data or slow connection - use poster image instead
      backgroundVideo.style.display = 'none';
      // Would normally show a poster image here
    }
  }

  // Expose some functions for debugging/testing (transparency)
  window.odinUtils = {
    refreshAnimations: () => {
      // Re-run observers if needed
      console.log('Odin utilities: Animation refresh triggered');
    },
    getVersion: () => '1.0.0'
  };

  // Service Worker registration for offline capabilities (Self-Healing)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(error => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }

  // Performance monitoring (Ruthless Simplicity - measure what matters)
  if (window.PerformanceObserver) {
    const perfObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics for continuous improvement
        console.log(`Performance: ${entry.name} - ${entry.duration.toFixed(2)}ms`);
      }
    });
    perfObserver.observe({entryTypes: ['measure', 'mark', 'layout-shift', 'largest-contentful-paint']});
  }

  // Error reporting for Self-Healing
  window.addEventListener('error', (e) => {
    console.error('Error caught:', e.error);
    // In a production system, this would send to error tracking
  });

  // Unhandled promise rejection handling
  window.addEventListener('unhandledrejection', (event) => {
    console.warn('Unhandled promise rejection:', event.reason);
    // In a production system, this would send to error tracking
  });
});