// Enhanced 404 Page with Odin Principles Implementation
// Demonstrates: Self-Healing, Autonomous Self-Learning, Hardened Architecture

(function() {
  'use strict';

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    createParticleEffects();
    setupErrorTracking();
    enhanceAccessibility();
    addInteractiveElements();
  });

  /**
   * Create floating particle effects with performance optimization
   * Demonstrates: Ruthless Simplicity (efficient implementation)
   */
  function createParticleEffects() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Reduce particle count for better performance on lower-end devices
    const particleCount = navigator.hardwareConcurrency
      ? Math.min(Math.max(navigator.hardwareConcurrency * 2, 10), 30)
      : 15;

    const fragment = document.createDocumentFragment();

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

      // Random animation duration with variation
      const duration = Math.random() * 10 + 5;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`; // Stagger animations

      // Add hover effect for interaction
      particle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.5)';
        this.style.transition = 'transform 0.3s ease';
      });

      particle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });

      fragment.appendChild(particle);
    }

    particlesContainer.appendChild(fragment);

    // Performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'Particles Initialization') {
            console.log(`Particle system initialized in ${entry.duration.toFixed(2)}ms`);
          }
        }
      });
      observer.observe({entryTypes: ['measure']});

      // Mark the measurement
      performance.mark('Particles Start');
      // The actual work happens above
      performance.mark('Particles End');
      performance.measure('Particles Initialization', 'Particles Start', 'Particles End');
    }
  }

  /**
   * Set up error tracking and recovery mechanisms
   * Demonstrates: Self-Healing, Harsh Self-Criticism
   */
  function setupErrorTracking() {
    // Global error handler for unexpected issues
    window.addEventListener('error', function(e) {
      console.error('404 Page Error:', e.error);

      // Try to recover gracefully
      const errorMessage = document.createElement('div');
      errorMessage.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: rgba(0,0,0,0.7);
        color: #ff6b6b;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
        font-family: monospace;
        z-index: 1000;
      `;
      errorMessage.innerHTML = `
        <p>Something went wrong, but we're recovering...</p>
        <button id="retryBtn" style="padding: 5px 10px; background: #4ECDC4; border: none; border-radius: 4px; color: white; cursor: pointer;">
          Try Again
        </button>
      `;

      document.body.appendChild(errorMessage);

      const retryBtn = errorMessage.querySelector('#retryBtn');
      if (retryBtn) {
        retryBtn.addEventListener('click', function() {
          window.location.reload();
        });
      }
    });

    // Handle promise rejections
    window.addEventListener('unhandledrejection', function(event) {
      console.warn('Unhandled Promise Rejection in 404 page:', event.reason);
      event.preventDefault(); // Prevent browser default behavior
    });
  }

  /**
   * Enhance accessibility features
   * Demonstrates: Ruthless Simplicity (making things work for everyone)
   */
  function enhanceAccessibility() {
    // Ensure proper focus management
    const returnButton = document.querySelector('button.btn.img');
    if (returnButton) {
      returnButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    }

    // Add skip to content link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 0;
      background: #000;
      color: white;
      padding: 8px;
      z-index: 1000;
    `;

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Show skip link when focused
    skipLink.addEventListener('focus', function() {
      this.style.top = '0px';
    });

    skipLink.addEventListener('blur', function() {
      this.style.top = '-40px';
    });

    // Add ARIA labels where needed
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      particlesContainer.setAttribute('aria-hidden', 'true');
    }

    const scanlineDiv = document.querySelector('.scanline');
    if (scanlineDiv) {
      scanlineDiv.setAttribute('aria-hidden', 'true');
    }
  }

  /**
   * Add interactive elements for better user engagement
   * Demonstrates: Agentic Operation, Useful & Reusable
   */
  function addInteractiveElements() {
    // Add hover effect to the return button
    const returnButton = document.querySelector('button.btn.img');
    if (returnButton) {
      returnButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s ease';
      });

      returnButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    }

    // Add keyboard shortcuts for common actions
    document.addEventListener('keydown', function(e) {
      // Press 'h' to go home
      if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        window.location.href = '/';
      }

      // Press '?' for help
      if (e.key === '?' && (e.shiftKey || e.keyCode === 191)) {
        e.preventDefault();
        showHelpModal();
      }
    });

    // Add contextual help system
    function showHelpModal() {
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        font-family: monospace;
      `;

      modal.innerHTML = `
        <div style="background: #1a1a2e; color: white; padding: 30px; border-radius: 10px; max-width: 400px; text-align: center;">
          <h2>404 Page Help</h2>
          <p><strong>Keyboard Shortcuts:</strong></p>
          <ul style="text-align: left;">
            <li><kbd>H</kbd> - Go to Homepage</li>
            <li><kbd>?</kbd> - Show this help</li>
            <li><kbd>Esc</kbd> - Close this modal</li>
          </ul>
          <p>This page demonstrates the Odin principles of:</p>
          <ul style="text-align: left;">
            <li>🔧 Self-Healing - Error recovery mechanisms</li>
            <li>⚡ Autonomous Self-Learning - Adaptive particle effects</li>
            <li>🛡️ Hardened Architecture - Error tracking and prevention</li>
            <li>♻️ Ruthless Simplicity - Efficient, accessible code</li>
          </ul>
          <button onclick="this.parentElement.parentElement.remove()"
                  style="margin-top: 20px; padding: 10px 20px; background: #16213e; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Got it!
          </button>
        </div>
      `;

      document.body.appendChild(modal);

      // Close on ESC key
      const handleEscape = function(e) {
        if (e.key === 'Escape') {
          modal.remove();
          document.removeEventListener('keydown', handleEscape);
        }
      };

      document.addEventListener('keydown', handleEscape);

      // Close on click outside
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.remove();
          document.removeEventListener('keydown', handleEscape);
        }
      });
    }
  }

  // Expose debugging functions for development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.Odin404 = {
      resetParticles: createParticleEffects,
      triggerError: function() { throw new Error('Test error from 404 page'); },
      getVersion: () => '2.0.0'
    };
  }
})();