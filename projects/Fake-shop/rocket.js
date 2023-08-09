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
    for (let i = 0; i < itemekElements.length; i++) {
        itemekElements[i].className ='itemek'+ i;
    }
    for (let i = 1; i < itemekElements.length; i +=13) {
        itemekElements[i].style.backgroundColor = "#43919B";
        const calculatedHeight = totalDocumentHeight * 0.2;
        itemekElements[i].style.height = calculatedHeight + 'px';
    }
    for (let i = 1; i < itemekElements.length; i++) {
        itemekElements[i].style.backgroundColor = "#FF1E1E";
        const calculatedHeight = totalDocumentHeight * 0.125;
        itemekElements[i].style.height = calculatedHeight + 'px';
    }
    for (let i = 1; i < itemekElements.length; i += 2) {
        itemekElements[i].style.backgroundColor = "#00F5FF";
        const calculatedHeight = totalDocumentHeight * 0.19;
        itemekElements[i].style.height = calculatedHeight + 'px';
    }
    for (let i = 1; i < itemekElements.length; i += 3) {
        itemekElements[i].style.backgroundColor = "#38E54D";
        const calculatedHeight = totalDocumentHeight * 0.25;
        itemekElements[i].style.height = calculatedHeight + 'px';
    }
    for (let i = 1; i < itemekElements.length; i += 4) {
        itemekElements[i].style.backgroundColor = "#570A57";
        const calculatedHeight = totalDocumentHeight * 0.3;
        itemekElements[i].style.height = calculatedHeight + 'px';
    }
    for (let i = 1; i < itemekElements.length; i += 5) {
        itemekElements[i].style.backgroundColor = "#F6F54D";
        const calculatedHeight = totalDocumentHeight * 0.2;
        itemekElements[i].style.height = calculatedHeight + 'px';
    }
    for (let i = 1; i < itemekElements.length; i += 6) {
        const calculatedHeight = totalDocumentHeight * 0.1;
    }
    for (let i = 1; i < itemekElements.length; i += 7) {
        const calculatedHeight = totalDocumentHeight * 1.15;
    }
    for (let i = 1; i < itemekElements.length; i += 8) {
        const calculatedHeight = totalDocumentHeight * 2.15;
    }
    for (let i = 1; i < itemekElements.length; i +=17) {
        itemekElements[i].style.backgroundColor = "#00F5FF";
        const calculatedHeight = totalDocumentHeight * 0.2;
        itemekElements[i].style.height = calculatedHeight + 'px';
    }
    for (let i = 1; i < itemekElements.length; i +=9) {
        itemekElements[i].style.backgroundColor = "#43919B";
        const calculatedHeight = totalDocumentHeight * 0.2;
        itemekElements[i].style.height = calculatedHeight + 'px';
    }

    for (let i = 1; i < itemekElements.length; i +=24) {
        itemekElements[i].style.backgroundColor = "#43919B";
        const calculatedHeight = totalDocumentHeight * 0.2;
        itemekElements[i].style.height = calculatedHeight + 'px';
    }
    ScrollReveal().reveal('#itemek', { delay: 500 });

    const dynamicElement = document.getElementById('scroll');

    // window.addEventListener('scroll', () => {
    //     const newHeight = 100 + window.scrollY * 0.5;
    
    //     dynamicElement.style.height = `${newHeight}vh`;
    //     console.log(totalDocumentHeight);  
    // });
};