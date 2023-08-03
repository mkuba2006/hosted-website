const i = document.querySelectorAll('#button');
const favourite = document.querySelector('#fav');
const navbar = document.querySelector('.navbar');
const dropdown = document.querySelector("body > nav > div > ul");


const image = document.querySelectorAll("section div.card-container .card-img-for")
const icons = document.querySelectorAll("body section div.card-container a i") ;
for(let i=0;i<image.length; i++){
    icons[i].style.opacity='0';
    image[i].addEventListener('mouseenter',()=>{
        icons[i].style.opacity='1';
    });
    image[i].addEventListener('mouseleave',()=>{
        icons[i].style.opacity='0';
    });
    icons[i].addEventListener('click',()=>{
        icons[i].classList.toggle('fa-regular');
        icons[i].classList.toggle('fa-solid');
    })
}

for (let i = 0; i < icons.length; i++) {
    const parent = icons[i].parentElement;

    const img = parent.querySelector('section').innerHTML;
    const ppar = parent.parentElement;
    const pppar = ppar.parentElement;
    const txt = pppar.querySelector('h1 a').textContent;
    const txtNode = document.createTextNode(txt).textContent;
    const t = document.createElement('p');
    t.innerHTML = txtNode;

    const nel = document.createElement('li');
    nel.className = 'li_fav noadd';
    nel.innerHTML = img;
    nel.appendChild(t);

    icons[i].addEventListener('click', () => {
      nel.classList.toggle('noadd');
      nel.classList.toggle('add');
      console.log(nel);
      if(nel.classList.contains('add')){
        dropdown.appendChild(nel);
      }else{
        dropdown.removeChild(nel);
      }
    });

}
  





i.forEach((a)=>{
    console.log(a);
    const copy = document.createElement('li');
    copy.className = 'li_fav';

    const parent = a.parentElement;

    const tit = document.createElement('a');
    const title = parent.querySelector('#title').textContent;
    tit.innerHTML = title;

    const img = parent.querySelector('#img_back').innerHTML;
    copy.innerHTML = img;
    copy.appendChild(tit)


    a.className = 'faR faH';
    const heart = a.querySelector('i');
    a.addEventListener('click', ()=>{
        console.log(a);
        heart.classList.toggle('fa-regular');
        heart.classList.toggle('fa-solid');
        a.classList.toggle('faR');
        a.classList.toggle('faS');  
        if(a.classList.contains('faS')){
            dropdown.appendChild(copy);
        } else{
            dropdown.removeChild(copy);
        }
        console.log(heart);
    })

})


if(window.innerWidth < 601){
    const title = document.getElementById("site");
    const arrow = document.createElement('div');
    arrow.id='arrow'
    arrow.innerHTML='<i class="fa-solid fa-caret-right"></i>';
    title.append(arrow);
    let rotationState = 0;
    arrow.style.transition = "transform 0.3s ease";

    const search = document.getElementById("before-search");
    const list = document.getElementById("drp");
    const nav = document.getElementById('nvb');
    const products =document.getElementById('products');
    const h = nav.clientHeight;
    products.style.top = h - 50+'px';
    nav.style.boxShadow='none';

    search.style.display = 'block';
    search.style.transform = 'translateY(-90px)';
    search.style.transition = 'transform 0.5s ease';

    list.style.display = 'none';
    // list.style.transform = 'translateY(-120px)';
    // list.style.transition = 'transform 0.5s ease';
    arrow.addEventListener('click', () => {
        if (rotationState === 0) {
            rotationState = 1;
            arrow.style.transform = "rotate(90deg)";
            search.style.transform = "translateY(0px)";
            // list.style.transform = "translateY(0px)";
            products.style.top=220+'px';
            nav.style.boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
        } else{
            rotationState = 0;
            arrow.style.transform = "rotate(0deg)";
            // list.style.transform = 'translateY(-120px)';
            products.style.top = h - 50+'px';
            search.style.transform = 'translateY(-90px)';
        } 

    });

}