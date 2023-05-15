class productsk{
    constructor(nazwa, obraz, opis, link, cyfra){
        this.nazwa = nazwa ;
        this.obraz = obraz ;
        this.opis = opis ;
        this.link = link ;
        this.cyfra = cyfra;
    }
}

class product{
    constructor(product){
        this.product = product;
    }
     render(){
        const prod_body = document.createElement('li');
        prod_body.className ="prod-item";
        prod_body.innerHTML = `
            <div id="ram">
                <div class="obraz obraz${this.product.cyfra}">
                    <img src="${this.product.obraz}" class="img img${this.product.cyfra}">
                </div>
                <div class="kontent kontent${this.product.cyfra}">
                    <h1><a href="${this.product.link}">${this.product.nazwa}</a></h1>
                    <h3>${this.product.opis}</h3>
                </div>
            </div>
        `;
        return prod_body;
    }
};

    
 class  productlist{
    product = [
        new productsk("She", "https://i1.sndcdn.com/artworks-mE7HIEZuYJQu-0-t500x500.jpg", "By Green Day", "https://www.youtube.com/watch?v=cXGSKEjR6_U", "1"),
        new productsk("Burn the witch","https://m.media-amazon.com/images/I/41aUiU5+p+L._CR0,0,300,300_UX256.jpg","By RadioHead","https://www.youtube.com/watch?v=yI2oS2hoL0k","2"),
        new productsk("In Bloon","https://i.pinimg.com/originals/97/d7/b4/97d7b44360d4a08cae1fc5498ff37850.jpg","By Nirvana","https://www.youtube.com/watch?v=PbgKEjNBHqM","3"),
        new productsk("Light My Fire","https://ecsmedia.pl/c/the-doors-b-iext124735647.jpg","By The Doors","https://www.youtube.com/watch?v=mbj1RFaoyLk","4"),
        new productsk("Bombtrack","https://i1.sndcdn.com/artworks-000116918708-e8g8z2-t500x500.jpg","By Rage Againt The Machines","https://www.youtube.com/watch?v=vWJBemWqV48","5"),
        new productsk("Reckoner","https://upload.wikimedia.org/wikipedia/en/9/95/Reckoner.jpg","By RadioHead","https://www.youtube.com/watch?v=RHdj_-x_51c","6"),
    ];
    render(){
        const prodList = document.createElement("ul");
        prodList.className = "product-list";
        prodList.id = "prod-list";

        for (const prod of this.product) {
          const productItem = new product(prod);
          const prodEl = productItem.render();
          prodList.append(prodEl);
        }
        return prodList;
    }
};

class rnd{
    render(){
        const renderHook = document.getElementById("app");
        const title = document.createElement("h1");
        title.textContent ="My favourite songs 🎵";
        ScrollReveal().reveal(title, { delay: 400, origin: 'left', distance: '30%'});
        title.className ="title-songs";
        renderHook.append(title);
        const productList = new productlist();
        const prodListEl = productList.render();
        renderHook.append(prodListEl);
    }
}


class App {
    static cart;
    static init() {
      const shop = new rnd();
      shop.render();
      this.cart = shop.cart;
    }
  }
  
  App.init();