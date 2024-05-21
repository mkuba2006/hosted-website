if(window.innerWidth < 601){
    const title = document.getElementById("site");
    const arrow = document.createElement('div');
    arrow.id='arrow'
    arrow.innerHTML='<i class="fa-solid fa-caret-right"></i>';
    title.append(arrow);
    let rotationState = 0;

    const search = document.getElementById("before-search");
    const list = document.getElementById("drp");
    const nav = document.getElementById('nvb');
    const options = document.getElementById('options');
    const products =document.getElementById('products');
    const h = nav.clientHeight;
    products.style.top = h - 50+'px';

    list.style.display = 'none';

    arrow.addEventListener('click', () => {
        if (rotationState === 0) {
            rotationState = 1;
            arrow.style.transform = "rotate(90deg)";
            search.style.transform = "translateY(0px)";
            options.style.transform = "translateY(0px)";
            products.style.top=220+'px';
            nav.style.backgroundColor="#121212";
        } else{
            rotationState = 0;
            arrow.style.transform = "rotate(0deg)";
            products.style.top = h - 50+'px';
            search.style.transform = 'translateY(-130px)';
            options.style.transform = "translateY(-130px)";
            nav.style.background="none";
        } 
    });

}
function initializeApp() {
    const i = document.querySelectorAll('#button');
    const favourite = document.querySelector('#fav');
    const navbar = document.querySelector('.navbar');
    const dropdown = document.querySelector("body > nav > div > div > ul");
    const image = document.querySelectorAll("section div.card-container .card-img-for")
    if(window.innerWidth > 600){
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
            nel.id = txtNode.substring(0, 3);
            nel.appendChild(t);

            icons[i].addEventListener('click', () => {
                nel.classList.toggle('noadd');
                nel.classList.toggle('add');
                if(nel.classList.contains('add')){
                    dropdown.appendChild(nel);
                }else{
                    dropdown.removeChild(nel);
                }
            });
        }
    }
}


selectElement.addEventListener('click', () => {initializeApp()});

document.onload = initializeApp();