const dropdown = document.getElementById("drp");
const drop_menu = document.getElementById("drop-menu");

dropdown.addEventListener('click', () => {
    const children = Array.from(drop_menu.children);
    const idSet = new Set();
    const special = children.filter(child => {
        if (!idSet.has(child.id)) {
            idSet.add(child.id);
            return true;
        }
        return false;
    });
    
    while (drop_menu.firstChild) {
        drop_menu.removeChild(drop_menu.firstChild);
    }

    special.forEach(child => {
        drop_menu.appendChild(child);
    });
});
