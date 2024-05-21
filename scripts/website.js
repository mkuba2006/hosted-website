
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

  

var typed = new Typed('#type', {
  strings: ['','Web designer', 'Frontend developer'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});





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
