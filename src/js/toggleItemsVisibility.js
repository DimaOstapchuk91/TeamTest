var buttonClicked = false; 
function toggleItemsVisibility() {
  var listItems = document.querySelectorAll('.catalog-watch-link');
  if (!buttonClicked) {
    // show last 2
    for (var i = listItems.length - 2; i < listItems.length; i++) {
      listItems[i].style.display = 'block';
    }
    //"Show less"
    document.querySelector('.catalog-button').textContent = 'Show less';
  } else {
    // hide last 2
    for (var i = listItems.length - 2; i < listItems.length; i++) {
      listItems[i].style.display = 'none';
    }
    //"Show more"
    document.querySelector('.catalog-button').textContent = 'Show more';
  }
  buttonClicked = !buttonClicked;
}

document.querySelector('.catalog-button').addEventListener('click', toggleItemsVisibility);
