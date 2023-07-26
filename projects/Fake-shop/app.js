let items =  products;
categories = new Set();
let products_container = document.querySelector('.products')



const search_input = document.querySelector('.f_input');
search_input.addEventListener('input', (e)=>{
    const es = e.target.value;
    const found_item = items.filter((product)=>{
        if(product.nazwa_albumu.toLowerCase().includes(es.toLowerCase())){
          return product;
        }
    });
    const nie = document.querySelector('#nie');
    if(found_item.length < 1){
      nie.classList.remove('notactive');
    }else{
      nie.classList.add('notactive');
    }

  render_items(found_item)
})



const render_items = (items) =>{
    products_container.innerHTML =``;
    for(let i = 0; i<= items.length; i++){
        const new_prod = document.createElement('div');
        new_prod.className = `card-container product${items[i].id}`;
        new_prod.innerHTML =`
          <div class="global">
            <a class="image-container">
              <i class="fa fa${items[i].id} fa-regular fa-star"></i>
              <section>
                <img class="hero-image" src="${items[i].obraz}"/>
              </section>
            </a>


            <main class="main">
              <h1><a href="#m">${items[i].nazwa_albumu}</a></h1>
              <div class="opis-cont">
                <p id="p">
                  ${items[i].opis}
                </p>
                <button id='content-button'>Show content</button>
              </div>

            </main>
          </div>
          <div class="card-attribute">
            <p>created by <span><a href="#">${items[i].zespol}</a></span></p>
          </div>
          </div>
        `

        const p = new_prod.querySelector('.opis-cont p');
        const but = new_prod.querySelector('#content-button');
        const opisParagraph = new_prod.querySelector("p");
        const opisText = opisParagraph.textContent;
        if (opisText.length > 100 && window.innerWidth >1075 || window.innerWidth <500) {
          but.addEventListener('click',()=>{
            p.classList.toggle('Act');
            but.classList.toggle('Act');
            but.textContent = !p.classList.contains('notAct') ? 'Hide content' : 'Show content';
          })

          if(window.innerWidth >1075){
            opisParagraph.textContent = opisText.substring(0, 132) + " ...";
          }
          else if(window.innerWidth <500){
            opisParagraph.textContent = opisText;
          }
        }

      products_container.appendChild(new_prod);
    }
};




document.onload = render_items(items);

// <img src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png" alt="clock" class="small-image"/>

{/* <div class="flex-row">
<div class="coin-base">
<i class="fa-solid fa-star"></i>
  <h2>${items[i].rank}</h2>
</div>
<div class="time-left">
  <p>${items[i].rok_wydania}</p>
</div>
</div> */}