// For every menu item - on click - open the exact document
let divs = document.querySelector('#container');
divs.addEventListener("click", openDocument, false);

function openDocument(e) {
    if (e.target !== e.currentTarget) {

        let clickedItem = e.target.querySelector('a');
    
        location.reload();location.href = clickedItem;
    }
    e.stopPropagation();
}
