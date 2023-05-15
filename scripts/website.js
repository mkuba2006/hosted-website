const scrollHandler = () => {
  const nav = document.querySelector('nav');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 0);
  });

  promise.then(() => {
    nav.style.top = '-12%';
    nav.style.transition = '0.4s';
    nav.style.animationTimingFunction = 'ease';
    setTimeout(() => {
      nav.style.top = '0';
    }, 100); 
  });

  window.removeEventListener('scroll', scrollHandler);
};

window.addEventListener('scroll', scrollHandler);



let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.classList.add("mp");
    });
    button.addEventListener("mouseleave", () => {
        button.classList.remove("mp");
    });
  });

 
  
  const dos = document.getElementById("dos");
  const dos_el = document.querySelectorAll("#dos div");

  const i = document.querySelectorAll("#dos i");
  if (window.outerWidth < 1200 && window.outerWidth > 930) {
    dos.style.cssText = `height: 400px; padding: 80px 0px;`;
    dos_el.forEach((el) => {
      el.style.cssText = `min-width: 200px;`;
    });
  } else if (window.outerWidth < 920 && window.outerWidth > 600) {
    dos_el.forEach((el) => {
      el.style.cssText = `min-width: 200px; font-size: 15px;`;
    });
    i.forEach((i) => {
      i.style.cssText = `font-size: 100px;`;
    });
  } else if (window.outerWidth < 600) {
    dos.style.cssText = `display: grid; width: 100vw; height: auto; padding: 100px 0px; margin-bottom: 1000px; `;
    
    dos_el.forEach((el) => {
      el.style.cssText = `min-width: 200px;width: 50vw; font-size: 15px; height: auto;`;
    });
    i.forEach((i) => {
      i.style.cssText = `100px;`;
    });
    dos_el[0].style.paddingBottom = "70px";
    dos_el[1].style.paddingBottom = "70px";
  }

function func() {
  const bubble = document.querySelector("#opis > h1:nth-child(3) > span > div > p");
  const Data = new Date('October 5, 2007 01:00:00');
  let tDay = new Date();
  var crok = tDay.getFullYear() - Data.getFullYear();
  var cdni =  tDay.getDay() - Data.getDay();
  cdni = Math.floor(cdni/(1000*60*60*24)) +1;
  var cgodz = tDay.getHours() - Data.getHours();
  var cmin = tDay.getMinutes() - Data.getMinutes();
  var csek = tDay.getSeconds() - Data.getSeconds();
  var cmilsek = tDay.getMilliseconds() - Data.getMilliseconds();
  bubble.textContent = `${crok}.${cdni}${cgodz}${cmin}${csek}${cmilsek}`;
  setTimeout(func, 10);
}
func();

document.querySelector("#appl > ul > li:nth-child(4) > div > div.content > select option")

const hrf = document.querySelectorAll("#carouselExampleCaptions > div.carousel-inner > div.carousel-item > div > h5 > a");
hrf.forEach(hr => {
  hr.addEventListener("click", function(e) {
    e.preventDefault();
    const h = this.getAttribute("href");
    setTimeout(function() {
      window.location.href = h;
    }, 200);
  });
});
