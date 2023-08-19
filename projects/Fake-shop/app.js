let items =  products;
categories = new Set();
let products_container = document.querySelector('.products')
const render_items = (items) =>{
    products_container.innerHTML =``;
    for(let i = 0; i < items.length; i++){
        const new_prod = document.createElement('div');
        new_prod.className = `card-container product${items[i].id}`;
        if(window.innerWidth > 590){
          new_prod.innerHTML =`
            <div class="global">
              <a class="card-img-for">
                <i class="fa fa${items[i].id} fa-regular fa-star"></i>
                <section>
                  <img class="card-img" src="${items[i].obraz}"/>
                </section>
              </a>
            </div>

            <div class="card-text">
              <h1><a href="#m">${items[i].nazwa_albumu.slice(0, 14)}${items[i].nazwa_albumu.length > 14 ? '...' : ''}</a></h1>
              <p id="band">created by <span><a href="#">${items[i].zespol}</a></span></p>
              <p id="rate">rate: <span>${items[i].rank}</span></p>
              <div class="opis-cont">
                <p id="p">
                  ${items[i].opis}
                </p>
              <button id='content-button'>Show content</button>
            </div>
          `
          
          const p = new_prod.querySelector('.opis-cont p');
          const but = new_prod.querySelector('#content-button');
          const opisParagraph = new_prod.querySelector("#p");
          const opisText = opisParagraph.textContent;
          but.addEventListener('click',()=>{
            p.classList.toggle('Act');
            but.classList.toggle('Act');
            but.textContent = p.classList.contains('Act') ? 'Hide content' : 'Show content';
          })

          if(window.innerWidth >1075){
            opisParagraph.textContent = opisText.substring(0, 132) + " ...";
          }
          else if(window.innerWidth <500){
            opisParagraph.textContent = opisText;
          }
        }
        else{
          new_prod.innerHTML =`
          <div class="global">
            <a class="card-img-for">
              <section>
                <img class="card-img" src="${items[i].obraz}"/>
              </section>
            </a>
          </div>
          <div class="card-text">
            <h1><a href="#m">${items[i].nazwa_albumu.slice(0, 14)}${items[i].nazwa_albumu.length > 14 ? '...' : ''}</a></h1>
            <p>created by <span><a href="#">${items[i].zespol}</a></span></p>
        `
        }
      products_container.appendChild(new_prod);
      if(window.innerWidth <600){
        ScrollReveal().reveal('.card-container', { delay: 200, origin: 'bottom', distance: '60%', interval: 110});
      }else {
        ScrollReveal().reveal('.card-container', { delay: 200, origin: 'bottom', distance: '100%', interval: 110});
      }
    }
    
};





const search_input = document.querySelector('.f_input');

const type = (txt)=>{
  const found_item = items.filter(product => product.nazwa_albumu.toLowerCase().includes(txt));
  const nie = document.querySelector('#nie');
  nie.classList.toggle('notactive', found_item.length >= 1);
  setTimeout(()=>{
    render_items(found_item);
    initializeApp();
  },200)
}

search_input.addEventListener('input',(e)=>{
  const text = e.target.value.toLowerCase();
  type(text);
})


const sortItems = (option) => {
  if (option === 'ascNAME') {
    items.sort((a, b) => a.nazwa_albumu.localeCompare(b.nazwa_albumu));
  } 
  else if (option === 'desNAME') {
    items.sort((a, b) => b.nazwa_albumu.localeCompare(a.nazwa_albumu));
  } 
  else if (option === 'ascRATING') {
    items.sort((a, b) => {
      const rankA = parseFloat(a.rank);
      const rankB = parseFloat(b.rank);
      return rankA - rankB;
    });
  } else if (option === 'desRATING') {
    items.sort((a, b) => {
      const rankA = parseFloat(a.rank);
      const rankB = parseFloat(b.rank);
      return rankB - rankA;
    });
  } else if (option === 'return') {
    items.sort((a, b) => a.id - b.id); // Sort by ID from low to high
  }

  render_items(items);
};

const selectElement = document.getElementById('options');
selectElement.addEventListener('change', (e) => {
  const selectedOption = e.target.value;
  sortItems(selectedOption);
  search_input.value = "";
});




document.onload = render_items(items);