const i = document.querySelectorAll('#button');
const favourite = document.querySelector('#fav');
const navbar = document.querySelector('.navbar');
const dropdown = document.querySelector("body > nav > div > ul");



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





// favourite.addEventListener('click', ()=>{
//     cont.classList.toggle('uls');
// })


// i.forEach((a)=>{
//     const copy = document.createElement('li');
//     copy.className = 'li_fav';

//     const parent = a.parentElement;

//     const tit = document.createElement('a');
//     const title = parent.querySelector('#title').textContent;
//     tit.innerHTML = title;

//     const img = parent.querySelector('#img_back').innerHTML;
//     copy.innerHTML = img;
//     copy.appendChild(tit)


//     a.className = 'faR faH';
//     const heart = a.querySelector('i');
//     a.addEventListener('click', ()=>{
//         heart.classList.toggle('fa-regular');
//         heart.classList.toggle('fa-solid');
//         a.classList.toggle('faR');
//         a.classList.toggle('faS');  
//         if(a.classList.contains('faS')){
//             cont.appendChild(copy);
//         } else{
//             cont.removeChild(copy);
//         }
//         console.log(heart);
//     })

// })
