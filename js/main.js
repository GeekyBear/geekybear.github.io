(function () {
  var formLoadTime = Date.now();

  /* --- Hamburger menu --- */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('nav__mobile--open');
      hamburger.classList.toggle('nav__hamburger--open', open);
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    mobileMenu.querySelectorAll('.nav__mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('nav__mobile--open');
        hamburger.classList.remove('nav__hamburger--open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Active nav link (based on current filename) --- */
  var path = window.location.pathname;
  var filename = path.split('/').pop() || 'index.html';
  if (filename === '') filename = 'index.html';

  document.querySelectorAll('.nav__link, .nav__mobile-link').forEach(function (link) {
    var href = (link.getAttribute('href') || '').split('/').pop();
    if (href === filename || (filename === 'index.html' && href === '')) {
      link.classList.add('nav__link--active');
    }
  });

  /* --- Scroll-activated fadeUp animations --- */
  var fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window && fadeEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* --- Contact form submit via Web3Forms --- */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Bot checks: honeypot field filled or form submitted too fast
      var honeypot = form.querySelector('[name="website_url"]');
      if ((honeypot && honeypot.value) || (Date.now() - formLoadTime < 2000)) return;

      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Enviando...';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form)
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            var msg = document.getElementById('form-success');
            if (msg) msg.style.display = 'block';
            form.reset();
          } else {
            alert('No se pudo enviar el mensaje. Por favor intentá de nuevo o escribime por WhatsApp.');
          }
        })
        .catch(function () {
          alert('No se pudo enviar el mensaje. Por favor intentá de nuevo o escribime por WhatsApp.');
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = originalText;
        });
    });
  }
})();
