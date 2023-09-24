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

  




function func() {
  const bubble = document.querySelector("#opis > h1:nth-child(3) > span > div > p");
  const Data = new Date('October 5, 2007 01:00:00');
  let tDay = new Date();
  var roznica = tDay - Data;
  var roznicaData = new Date(roznica);
  var lata = roznicaData.getUTCFullYear() - 1970;
  var miesiace = roznicaData.getUTCMonth();

  var cdni = tDay.getDate() - Data.getDate();
  var cgodz = tDay.getHours() - Data.getHours();
  var cmin = tDay.getMinutes() - Data.getMinutes();
  var csek = tDay.getSeconds() - Data.getSeconds();
  var cmilsek = tDay.getMilliseconds() - Data.getMilliseconds();
  bubble.textContent = `${lata}.${miesiace}${cdni}${cgodz}${cmin}${csek}${cmilsek}`;
  setTimeout(func, 20);
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



///////new
document.addEventListener("DOMContentLoaded", function() {
  const hh = document.querySelectorAll("#stitle");
  hh.forEach(h => {
    if(window.innerWidth > 1060){
      const origin = h.textContent;
      // const truncatedText = h.textContent.slice(0, 10); // Get the first 7 characters
      // console.log('trunk:',truncatedText.length , 'trunk:',origin.length);
      if(origin.length >10){
        const truncatedText = h.textContent.slice(0, 7);
        h.textContent = truncatedText+'...';
      }
    }
  });
});
