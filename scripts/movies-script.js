let movies = mov;
const container = document.querySelector('.products');
const render = (movies) => {
    container.innerHTML = '';
    for (let i = 0; i < movies.length; i++) {
        const item = document.createElement('li');
        item.className = 'item sr-item';
        item.innerHTML = `
        <div class="ram">
            <div class="for_img" id="for_img${movies[i].id}">
                <img src="${movies[i].imga}" img${movies[i].id}/>
            </div>

            <div class="content">
                <h1>${movies[i].name}</h1>
                <h3>${movies[i].date}</h3>
                <select>
                    ${movies[i].gat1 ? `<option>${movies[i].gat1}</option>` : ''}
                    ${movies[i].gat2 ? `<option>${movies[i].gat2}</option>` : ''}
                    ${movies[i].gat3 ? `<option>${movies[i].gat3}</option>` : ''}
                </select>
            </div>
        </div>
        `;
        container.appendChild(item);
    }
};

const Title = document.createElement('h1');
Title.className = 'titlep';
Title.textContent = 'My favourite series 🎥';
const line = document.createElement('div');
line.className= 'line';
line.id='line';
document.querySelector('.products').before(Title);
document.querySelector('.products').before(line);
ScrollReveal().reveal(document.querySelector('.titlep'), {
    origin: 'left',
    distance: '10%'
});
ScrollReveal().reveal('.item', {
    delay: 200,
    origin: 'bottom',
    distance: '20%',
    interval: 100
  });
  render(movies);
  ScrollReveal().reveal('.sr-item', {delay: 200,origin: 'bottom',distance: '20%',interval: 100});








