// For every menu item - on click - open the exact document
const divs = document.querySelector(".grid-menu");

function openDocument(e) {
  if (e.target !== e.currentTarget) {
    let clickedItem = e.target.querySelector("a");

    location.reload();
    location.href = clickedItem;
  }
  e.stopPropagation();
}

    divs.addEventListener("click", openDocument, false);

