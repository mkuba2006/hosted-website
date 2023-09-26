let foods = food;
let product_container = document.getElementById('container');
let fo2= foods;
const Kraje = document.querySelectorAll('button#nat');
const Typy = document.querySelectorAll('button#type');
const clear = document.getElementById('clear');
var activeElement = document.querySelector('.active');
const itext = document.getElementById('text');


let nations =[];
let groups =[];
let foods2=[];


//klik kraj
Kraje.forEach(kraj =>{
    
    const value = kraj.value.toLowerCase();

    kraj.addEventListener('click',()=>{
        itext.textContent='';
        document.getElementById('text').value=''
        const filtrKraj = foods.filter((product)=>{
            if(product.continent.toLowerCase().includes(value)){
                return product;
            }
        });
        nations = filtrKraj 
        let activeButtonCount = 0;
        let activeButton;
        
        Typy.forEach(button => {
          if (button.classList.contains('active')) {
            activeButtonCount++;
            activeButton = button;
          }
        });
    
        kraj.classList.toggle('active');

        if(kraj.classList.contains('active')){
            if(activeButtonCount>0){ //Kraj 1 | Typ 1
                const filtrKraj1 = foods2.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                foods=filtrKraj1;
                fo2= filtrKraj1;
                render(foods); 
            }
            else{//Kraj 1 | Typ 0
                const filtrKraj1 = foods.filter((product)=>{
                    if(product.continent.toLowerCase().includes(value)){
                        return product;
                    }
                });
                foods = filtrKraj1; 
                 fo2= filtrKraj1;
                render(foods);  
            }
        }
        else{
            if(activeButtonCount>0){ //Kraj 0 | Typ 1
                if(foods=[]){
                    render(foods2);
                } else{
                    render(foods)
                }
            }
            
            else{//Kraj0 | Typ0
                nations =[];
                groups =[];
                foods = food;
                render(foods);
                foods = food;
            }
        }
    })
})









//klik Typ
Typy.forEach(typ =>{
    const value = typ.value.toLowerCase()
    typ.addEventListener('click',()=>{
        itext.textContent='';
        document.getElementById('text').value=''
        const filtrTyp = foods.filter((product)=>{
            if(product.group.toLowerCase().includes(value)){
                return product;
            }
        });
        groups = filtrTyp 
        let activeButtonCount = 0;
        Kraje.forEach(button => {
          if (button.classList.contains('active')) {
            activeButtonCount++;
          }
        });
        typ.classList.toggle('active');

        

        if(typ.classList.contains('active')){
            if(activeButtonCount>0){ //Typ 1 | Kraj 1
                const filtrTyp1 = nations.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                });
                foods=food;
                const filtrTyp2 = foods.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                });
                foods=filtrTyp1;
                fo2= filtrTyp1;
                render(foods);  
                foods2=filtrTyp2;
            }
            else{//Typ 1 | Kraj 0
                const filtrTyp2 = foods.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                 });
                 foods2=filtrTyp2;
                const filtrTyp1 = nations.filter((product)=>{
                    if(product.group.toLowerCase().includes(value)){
                        return product;
                    }
                });
                render(filtrTyp1); 
                foods = filtrTyp1;
                fo2= filtrTyp1;
                if(foods.length ===0){
                    foods = food;
                    const filtrTyp1 = foods.filter((product)=>{
                        if(product.group.toLowerCase().includes(value)){
                            return product;
                        }
                    });
                    foods = filtrTyp1;
                    fo2= filtrTyp1;
                    render(foods);
                }
            }
        }
        else{
            if(activeButtonCount>0){ //Typ 0 | Kraj 1
                groups =[];
                if(nations.length === 0){
                    render(foods);
                } 

                else{
                    let activeButtonCount = 0;
                    let activeButton;
                    Kraje.forEach(button => {
                      if (button.classList.contains('active')) {
                        activeButton = button.value.toLowerCase();
                      }
                    });
                    foods = nations;
                    const filtrTyp1 = foods.filter((product)=>{
                        if(product.continent.toLowerCase().includes(activeButton)){
                            return product;
                        }
                    });
                    foods = filtrTyp1;
                    fo2= filtrTyp1;
                    render(foods);
                }
            }          
            else{//Kraj0 | Typ0
                foods = food;
                groups =[];
                nations=[];
                render(foods);
            }
        }
    })
})








let prev_val = '';
itext.addEventListener('input', () => {
    let ival = itext.value;
    let i= ival.length;
    let p= prev_val.length;
    console.log('bes:',ival);
    console.log('prev:',prev_val);
    if(i>p){
        console.log('1');
        const fff = fo2.filter(product => product.name.toLowerCase().includes(ival));
        render(fff);
        prev_val = ival;
    }else{
        console.log('2');
        const fff = fo2.filter(product => product.name.toLowerCase().includes(prev_val));
        render(fff);
        prev_val = ival;
    }

    if (ival === '' && prev_val ==='') {
        render(fo2);
    }else{
        const fff = fo2.filter(product => product.name.toLowerCase().includes(prev_val));
        render(fff);
    }
});





// itext.addEventListener('input', ()=>{
//     let ival = itext.value;
//     const fff = foods.filter(product=>{
//         if(product.name.toLowerCase().includes(ival)){
//             return product;
//         }
//     })
//     if(ival ===''){
//         render(foods);
//     }else{
//         foods=fff;
//         render(fff);
//     }
//     foods=food;
//     console.log(itext.value);
// })











const buttons = document.querySelectorAll('button');

function handleButtonMouseEnter() {
    const after = this.querySelector('#af1');
    after.style.width = '100%';
}

function handleButtonMouseLeave() {
    const after = this.querySelector('#af1');
    after.style.width = this.classList.contains('active') ? '100%' : '0%';
}


function handleButtonClick() {
    const after = this.querySelector('#af1');
    after.style.width = this.classList.contains('active') ? '100%' : '0%';
}


buttons.forEach(button => {
    const after = document.createElement('div');
    after.id = 'af1';
    after.style.opacity = '1';
    after.style.position = 'absolute';
    after.style.display = 'block';
    after.style.width = '0%';
    after.style.height = '1px';
    after.style.bottom = '0';
    after.style.borderRadius = '50px';
    after.style.left = '50%';
    after.style.transform = 'translateX(-50%)';
    after.style.backgroundColor = "white";
    after.style.content = '""';
    after.style.transition = '0.5s';
    button.appendChild(after);
});

buttons.forEach(button => {
    button.addEventListener('mouseenter', handleButtonMouseEnter);
    button.addEventListener('mouseleave', handleButtonMouseLeave);
    button.addEventListener('click', handleButtonClick);
});


let continentElements = document.querySelectorAll("#continent");

continentElements.forEach((continentElement) => {
    let continentText = continentElement.textContent;
    if (continentText.length > 7) {
        continentElement.textContent = continentText.substring(0, 8) + "...";
    }
});





clear.addEventListener('click', () => {
    nations = [];
    groups = [];
    foods2 = [];

    Kraje.forEach(button => button.classList.remove('active'));
    Typy.forEach(button => button.classList.remove('active'));

    foods = food;
    render(foods);

    buttons.forEach(button => button.querySelector('div').style.width = '0%');
});








const render = (product) =>{
    product_container.innerHTML='';
    for(let i = 0; i < product.length; i++){
        const new_prod = document.createElement('div');
        new_prod.className= `cards_item`;
        new_prod.innerHTML =`
        <div class="card">
          <div class="card_image">
            <img src="${product[i].img}" alt="a Reuben sandwich on wax paper." />
          </div>
          <div class="card_content">
            <h2 class="card_title">${product[i].name}</h2>
            <div class="card_text">
                <p id='continent'>${product[i].continent}</p>
                <p id='country'>${product[i].country}</p>
                <p id='group'>${product[i].group}</p>
            </div>
          </div>
        </div>
      </div>
        `;
        product_container.appendChild(new_prod);
    }
}
document.onload = render(foods);


{/* <div id="img_back"">
<img src="${product[i].img}"/>
</div>
<div id="content">
<div id="opis">
    <h1 id='name'>${product[i].name}</h1>
    <h2 id='continent'>${product[i].continent}</h2>
    <h3 id='country'>${product[i].country}</h3>
    <h3 id='group'>${product[i].group}</h3>
</div>
</div> */}