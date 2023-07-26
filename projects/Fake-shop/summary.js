const i = document.querySelectorAll('#button');
const favourite = document.querySelector('#fav');
const navbar = document.querySelector('.navbar');
const dropdown = document.querySelector("body > nav > div > ul");


const image = document.querySelectorAll("section div.card-container .image-container")
const icons = document.querySelectorAll("body section div.card-container a i") ;
for(let i=0;i<image.length; i++){
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
    const txt = ppar.querySelector('.main h1 a').textContent;
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
