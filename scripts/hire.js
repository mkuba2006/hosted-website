const lines = document.querySelectorAll('#selection #line1');

lines.forEach((line) => {
  let rotated = true;
  let canClick = true; 

  const plus = line.querySelector('#plus');
  const par = line.parentElement;

  line.addEventListener('click', () => {
    if (!canClick) {
      return; 
    }

    if (rotated) {
      plus.style.transform = 'rotate(-45deg)';
      rotated = false;
      // par.style.backgroundColor = '#E900FF';
      par.style.overflowY = 'visible';
      par.style.height = 'auto';
    } else {
      plus.style.transform = 'rotate(0deg)';
      rotated = true;
      // par.style.backgroundColor = '#FEF2F4';
      par.style.overflowY = 'hidden';
      par.style.height = '40px';
    }

    canClick = false;

    setTimeout(() => {
      canClick = true;
    }, 100);
  });
});
