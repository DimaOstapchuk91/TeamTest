var buttonClicked = false;

function toggleItemsVisibility() {
  var listItems = document.querySelectorAll('.showmore');
  if(listItems){
    if (!buttonClicked) {
      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.display = 'block';
        var imgElement = listItems[i].querySelector('img');
        imgElement.style.height = '223.18px';
        imgElement.style.width = '205.4px';
        console.log(imgElement.style.height);
      }

      document.querySelector('.catalog-button').textContent = 'Show less';
    } else {
      
      for (var i = listItems.length - 2; i < listItems.length; i++) {
        listItems[i].style.display = 'none';
      }
      
      document.querySelector('.catalog-button').textContent = 'Show more';
    }

    buttonClicked = !buttonClicked;
  }

  
}