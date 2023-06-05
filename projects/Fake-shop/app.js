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
    console.log(found_item.length);
    if(found_item.length === 0){
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
          <a class="hero-image-container">
          <i class="fa fa${items[i].id} fa-regular fa-star"></i>
            <section>
              <img class="hero-image" src="${items[i].obraz}"/>
            </section>
          </a>
          <main class="main">
            <h1><a href="#m">${items[i].nazwa_albumu} #${items[i].id}</a></h1>
            <p>${items[i].opis}</p>
            <div class="flex-row">
              <div class="coin-base">
              <i class="fa-solid fa-star"></i>
                <h2>${items[i].rank}</h2>
              </div>
              <div class="time-left">
                <img src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png" alt="clock" class="small-image"/>
                <p>${items[i].rok_wydania}</p>
              </div>
            </div>
          </main>
          <div class="card-attribute">
            <img src="https://i.postimg.cc/SQBzNQf1/image-avatar.png" alt="avatar" class="small-avatar"/>
            <p>created by <span><a href="#">${items[i].zespol}</a></span></p>
          </div>
          </div>
        `
      products_container.appendChild(new_prod);
    }
};




document.onload = render_items(items);



