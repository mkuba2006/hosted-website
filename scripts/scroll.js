ScrollReveal().reveal('#one',{origin: 'left', distance: '30%'});
ScrollReveal().reveal('.addon .n', { origin: 'bottom', interval: 200});
ScrollReveal().reveal('#dos div', { delay: 200, origin: 'left', distance: '30%', interval: 200});
ScrollReveal().reveal('#opis h3', { delay: 200, origin: 'left', distance: '30%'});
ScrollReveal().reveal('#opis h1', { delay: 400, origin: 'left', distance: '30%'});
ScrollReveal().reveal('#opis #buttons', { delay: 600, origin: 'left', distance: '30%'});
ScrollReveal().reveal('#opis2 img', { delay: 600, origin: 'bottom', distance: '10%'});
ScrollReveal().reveal('#opis #buttons button', { delay: 200, origin: 'left', distance: '20%', interval: 500});
ScrollReveal().reveal('#opis2 img', { delay: 600, origin: 'bottom', distance: '10%'});

ScrollReveal().reveal('#about h3', {delay: 200, origin: 'left', distance: '30%'});
ScrollReveal().reveal('#about #container', {delay: 200, origin: 'bottom', distance: '80%'});

ScrollReveal().reveal('#fform', {delay: 200, origin: 'bottom', distance: '40%'});
ScrollReveal().reveal('#media', {delay: 400, origin: 'bottom', distance: '40%'});
ScrollReveal().reveal('#prawa', {delay: 200, origin: 'bottom', distance: '40%'});

ScrollReveal().reveal('#app .title-songs', {origin: 'left', distance: '5%'});
ScrollReveal().reveal('#app .product-list .prod-item', {delay: 200, origin: 'bottom', distance: '20%',interval: 100});

ScrollReveal().reveal('#nav > div:nth-child(2) a', { delay: 500, origin: 'left', distance: '130%', interval: 200 });
ScrollReveal().reveal('#nav > div:nth-child(2) a button', { delay: 500, origin: 'left', distance: '30%', interval: 200 });

document.addEventListener('DOMContentLoaded', () => {
    if (window.outerWidth > 1000) {
      ScrollReveal().reveal('#certificates #first_cert', { delay: 200, origin: 'left', distance: '20%' });
      ScrollReveal().reveal('#certificates #second_cert', { delay: 400, origin: 'left', distance: '20%' });
      const img = document.querySelector("#img1");
      const width = img.offsetWidth;
      const els = document.querySelectorAll("#cloud");
      els.forEach(e => e.style.width = `${width}px`);
    }
  });
  
  


// if(window.outerWidth > 1000){
//     ScrollReveal().reveal('#certificates #first_cert', {delay: 200, origin: 'left', distance: '20%'});
//     ScrollReveal().reveal('#certificates #second_cert', {delay: 400, origin: 'left', distance: '20%'});
//     ScrollReveal().reveal('#nav > div:nth-child(2) a', {delay: 500, origin: 'left', distance: '130%', interval: 200});
//     ScrollReveal().reveal('#nav > div:nth-child(2) a button', {delay: 500, origin: 'left', distance: '30%', interval: 200});
// }