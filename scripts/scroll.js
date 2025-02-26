ScrollReveal().reveal('.addon .n', { origin: 'bottom', interval: 200, reset: true});
ScrollReveal().reveal('#dos .mmm', { delay: 200, origin: 'left', distance: '30%', interval: 200, reset: true});
ScrollReveal().reveal('#opis h3', { delay: 200, origin: 'left', distance: '30%', reset: true});
ScrollReveal().reveal('#opis h1', { delay: 400, origin: 'left', distance: '30%', reset: true});
ScrollReveal().reveal('#opis #buttons', { delay: 600, origin: 'left', distance: '30%', reset: true});
ScrollReveal().reveal('#opis2 img', { delay: 600, origin: 'bottom', distance: '10%', reset: true});
ScrollReveal().reveal('#opis #buttons button', { delay: 200, origin: 'left', distance: '20%', interval: 500, reset: true});
ScrollReveal().reveal('#opis2 img', { delay: 600, origin: 'bottom', distance: '10%', reset: true});
ScrollReveal().reveal('#about h3', {delay: 200, origin: 'left', distance: '30%', reset: true});
ScrollReveal().reveal('#about #container', {delay: 200, origin: 'bottom', distance: '80%', reset: true});
ScrollReveal().reveal('#fform', {delay: 200, origin: 'bottom', distance: '40%', reset: true});
ScrollReveal().reveal('#media', {delay: 400, origin: 'bottom', distance: '40%', reset: true});
ScrollReveal().reveal('#app .title-songs', {origin: 'left', distance: '5%', reset: true});
ScrollReveal().reveal('#app .product-list .prod-item', {delay: 200, origin: 'bottom', distance: '20%',interval: 100, reset: true});
ScrollReveal().reveal('#info', { delay: 200, origin: 'left', distance: '30%', interval: 200, reset: true});
ScrollReveal().reveal('#elements div', { delay: 400, origin: 'left', distance: '30%', interval: 200, reset: true});
document.addEventListener('DOMContentLoaded', () => {
    if (window.outerWidth > 1000) {
      ScrollReveal().reveal('#certificates #first_cert', { delay: 200, origin: 'left', distance: '20%', reset: true });
      ScrollReveal().reveal('#certificates #second_cert', { delay: 400, origin: 'left', distance: '20%', reset: true });
      ScrollReveal().reveal('#certificates #third_cert', { delay: 600, origin: 'left', distance: '20%', reset: true });
      const img = document.querySelector("#img1");
      const els = document.querySelectorAll("#cloud");
      els.forEach(e => e.style.width = `${img.offsetWidth}px`);
    }
    if (window.outerWidth > 800) {
      ScrollReveal().reveal('#prawa', {delay: 200, origin: 'bottom', distance: '40%', reset: true});
    }
  });
ScrollReveal().reveal('#itemek', {delay: 2000,origin: 'bottom', distance: '30%', duration: 2000, reset: true});
ScrollReveal().reveal('#my_skills div', { origin: 'left', distance: '20%', interval: 10, reset: true});
ScrollReveal().reveal('#skills h1', { origin: 'left', distance: '30%', interval: 100, reset: true});
ScrollReveal().reveal('#infos div', { origin: 'left', distance: '30%', interval: 50, reset: true});