const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Active nav link highlighting
    const navLinks = document.querySelectorAll('.nav-links a');
    const allSections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      let current = '';
      allSections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
          a.classList.add('active');
        }
      });
    });
 
    document.addEventListener("DOMContentLoaded", function() {
      var video = document.getElementById("background-video");
      video.playbackRate = 0.5;
    });
