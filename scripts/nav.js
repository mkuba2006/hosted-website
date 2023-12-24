const nav = document.getElementById('nav1');



$(document).ready(function(){
	$('#burger1').click(function(){
		$(this).toggleClass('open');
	});
});



const elementDoNasluchiwania = window;
let lastScrollPosition = 0;

function scrollListener(event) {
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition == 0) {
    nav.style.background='rgba(0, 0, 0, 0.259)';
  }
  if (currentScrollPosition !== 0) {
    nav.style.backgroundColor='rgba(0, 0, 0, 0.9)';
  }
  lastScrollPosition = currentScrollPosition;
}
elementDoNasluchiwania.addEventListener("scroll", scrollListener);







const navi = document.querySelector("#secret")
const nav_links = navi.querySelectorAll('a');
const burger = document.querySelector("#burger1");

const burger2 = document.querySelector("#burger2");


burger2.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  burger2.classList.toggle("toggle");
  navi.classList.toggle("nav_active");
  nav_links.forEach((link, index) => {
    link.style.animation = `navLink 0.5s ease forwards ${index / 7}s`;
  });
});

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  burger2.classList.toggle("toggle");
  navi.classList.toggle("nav_active");
  nav_links.forEach((link, index) => {
    link.style.animation = `navLink 0.5s ease forwards ${index / 7}s`;
  });
});

const hrefs = document.querySelectorAll("#secret a");
const secretDiv = document.getElementById('secret');

hrefs.forEach(href=>{
  href.addEventListener('click', ()=>{
    secretDiv.classList.remove('nav_active');
    burger.classList.toggle("toggle");
  })
})

const toggleMenu = () => document.body.classList.toggle('open');
const as = document.querySelectorAll("body aside a");
for(let i=0;i<as.length;i++){
  as[i].addEventListener('click',()=>{
    document.body.classList.remove('open');
    burger.classList.toggle("toggle");
  })
}