document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // Active nav highlight on scroll
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');
  if ('IntersectionObserver' in window && sections.length) {
    var currentId = '';
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          currentId = entry.target.id;
        }
      });
      navLinks.forEach(function (link) {
        link.removeAttribute('aria-current');
        if (link.getAttribute('href') === '#' + currentId) {
          link.setAttribute('aria-current', 'page');
        }
      });
    }, { threshold: 0, rootMargin: '-80px 0px -40% 0px' });
    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  // Scroll progress bar
  var progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollTop = window.scrollY;
          var docHeight = document.documentElement.scrollHeight - window.innerHeight;
          progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // FAQ smooth toggle
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var content = item.querySelector('p');
    if (content) {
      if (item.open) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        content.style.marginTop = '14px';
      }
      item.addEventListener('toggle', function () {
        if (item.open) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
          content.style.marginTop = '14px';
        } else {
          content.style.maxHeight = '0';
          content.style.opacity = '0';
          content.style.marginTop = '0';
        }
      });
    }
  });

});
