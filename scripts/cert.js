
const imageElement1 = document.querySelector("#first_cert > img");
const imageCoordinates1 = imageElement1.getBoundingClientRect();


const imageElement2 = document.querySelector("#second_cert > img");
const imageCoordinates2 = imageElement2.getBoundingClientRect();



const cert1 = document.querySelector("#first_cert");
const cert2 = document.querySelector("#second_cert");


if(window.outerWidth < 788){
    const cloud1 = document.querySelector('.cloud1');
    const cloud2 = document.querySelector('.cloud2');

    cloud1.style.height = '50%';
    cloud1.style.top = '0px';

    cloud2.style.height = '50%';
    cloud2.style.top = '50%';

}



console.log("Image Coordinates:");
console.log("Top:", imageCoordinates2.top);
console.log("Left:", imageCoordinates2.left);
console.log("Bottom:", imageCoordinates2.bottom);
console.log("Right:", imageCoordinates2.right);
console.log("Width:", imageCoordinates2.width);
console.log("Height:", imageCoordinates2.height);
