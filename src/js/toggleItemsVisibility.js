var buttonClicked = false;
function toggleItemsVisibility() {
  var listItems = document.querySelectorAll('.catalog-watch-link');
  if (!buttonClicked) {
    // show last 2
    for (var i = listItems.length - 2; i < listItems.length; i++) {
      listItems[i].style.display = 'block';
      // listItems[i].style.padding = '10px 6px';
      var pictureElement = listItems[i].querySelector('picture');
      pictureElement.style.height = '223.18px';
    }
    //"Show less"
    document.querySelector('.catalog-btn').textContent = 'Show less';
  } else {
    // hide last 2
    for (var i = listItems.length - 2; i < listItems.length; i++) {
      listItems[i].style.display = 'none';
    }
    //"Show more"
    document.querySelector('.catalog-btn').textContent = 'Show more';
  }
  buttonClicked = !buttonClicked;
}

document
  .querySelector('.catalog-btn')
  .addEventListener('click', toggleItemsVisibility);
