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

  

function updateTimer() {
  const startDate = new Date('2006-10-05');
  const currentDate = new Date();
  const timeDifference = currentDate - startDate;

  const millisecondsInASecond = 1000;
  const secondsInAMinute = 60;
  const secondsInAnHour = 60 * secondsInAMinute;
  const secondsInADay = 24 * secondsInAnHour;
  const secondsInAMonth = 30 * secondsInADay;
  const secondsInAYear = 365 * secondsInADay;

  const years = Math.floor(timeDifference / (secondsInAYear * millisecondsInASecond));
  const months = Math.floor((timeDifference % (secondsInAYear * millisecondsInASecond)) / (secondsInAMonth * millisecondsInASecond));
  const days = Math.floor((timeDifference % (secondsInAMonth * millisecondsInASecond)) / (secondsInADay * millisecondsInASecond));
  const hours = Math.floor((timeDifference % (secondsInADay * millisecondsInASecond)) / (secondsInAnHour * millisecondsInASecond));
  const minutes = Math.floor((timeDifference % (secondsInAnHour * millisecondsInASecond)) / (secondsInAMinute * millisecondsInASecond));
  const seconds = Math.floor((timeDifference % (secondsInAMinute * millisecondsInASecond)) / millisecondsInASecond);
  const milliseconds = timeDifference % millisecondsInASecond;

  const timerElement = document.querySelector("#opis > h1:nth-child(3) > span > div > p");
  timerElement.innerHTML = `${years}.${months}${days}${hours}${minutes}${seconds}${milliseconds}`;
  const yrs = document.getElementById('yrs');
  yrs.textContent=`${years} y.o`;
}
setInterval(updateTimer, 10);
updateTimer();








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
