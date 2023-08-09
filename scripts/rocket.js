window.onload = () => {
    function getTotalDocumentHeight() {
        const body = document.body;
        const html = document.documentElement;
    
        const fullHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
        );
    
        return fullHeight;
    }
    
    const totalDocumentHeight = getTotalDocumentHeight();
    console.log('Total document height:', totalDocumentHeight);



    const items = document.getElementById("itemsa");
    items.style.height = totalDocumentHeight+'px';
    console.log(totalDocumentHeight);  



    const itemekElements = document.querySelectorAll("#itemek");
    itemekElements.forEach(i => {
        const calculatedHeight = totalDocumentHeight * 0.1;
        i.style.height = calculatedHeight + 'px';
        console.log(calculatedHeight);
    });
    for (let i = 1; i < itemekElements.length; i++) {
        itemekElements[i].style.backgroundColor = "white";
    }
    for (let i = 1; i < itemekElements.length; i += 2) {
        itemekElements[i].style.backgroundColor = "yellow";
    }
    for (let i = 1; i < itemekElements.length; i += 3) {
        itemekElements[i].style.backgroundColor = "blue";
    }
    for (let i = 1; i < itemekElements.length; i += 4) {
        itemekElements[i].style.backgroundColor = "green";
    }






    const dynamicElement = document.getElementById('scroll');

    window.addEventListener('scroll', () => {
        const newHeight = 100 + window.scrollY * 0.5;
    
        dynamicElement.style.height = `${newHeight}vh`;
        console.log(totalDocumentHeight);  
    });
};