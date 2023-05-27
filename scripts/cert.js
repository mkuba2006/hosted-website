
const imageElement1 = document.querySelector("#first_cert > img");
const imageCoordinates1 = imageElement1.getBoundingClientRect();

console.log(imageCoordinates1);

const imageElement2 = document.querySelector("#second_cert > img");
const imageCoordinates2 = imageElement2.getBoundingClientRect();
console.log(imageCoordinates2);



// const cert1 = document.querySelector("#first_cert");
// const cert2 = document.querySelector("#second_cert");





// const after1 = document.createElement('div');
// after1.style.cssText = `
//   width: ${imageCoordinates1.width}px -1%;
//   height: 100%;
//   left: ${imageCoordinates1.left}px -5%;
//   background-color: #000000e6;
//   top: 0;
//   position: absolute;
//   opacity: 1;
//   transition: opacity 0.3s ease;
//   z-index: 10;
// `;
// after1.appendChild(QR1);
// cert1.appendChild(after1);

// $(after1).hide(500);

// $(cert1).on({
//   mouseenter: function() {
//     $(after1).show();
//   },
//   mouseleave: function() {
//     $(after1).hide();
//   }
// });




const after2 = document.createElement('div');
after2.style.cssText = `
  width: ${imageCoordinates2.width}px -1%;
  height: 100%;
  left: ${imageCoordinates2.left}px -5%;
  background-color: #000000e6;
  top: 0;
  position: absolute;
  opacity: 1;
  transition: opacity 0.3s ease;
  z-index: 10;
`;
cert2.appendChild(after2);
$(after2).hide(500);

$(cert2).on({
  mouseenter: function() {
    $(after2).slideDown(300);
  },
  mouseleave: function() {
    $(after2).slideUp(300);
  }
});
