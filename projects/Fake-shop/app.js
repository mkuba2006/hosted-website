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
        new_prod.className = `product product${items[i].id}`;
        new_prod.innerHTML = `
            <div id="img_back" class="img_back${items[i].id}">
                <img src="${items[i].obraz}"/>
            </div>
            <div id="content">
                <a id="title">
                ${items[i].nazwa_albumu}
                </a>
                <div id="opis">
                    <p>${items[i].zespol}</p>
                    <p>${items[i].cena} zł</p>
                </div>
            </div>
            <div id="button">Favourite <i class="fa-regular fa-heart ${items[i].id}"></i></div>
        `;
        products_container.appendChild(new_prod);
    }
};




document.onload = render_items(items);



