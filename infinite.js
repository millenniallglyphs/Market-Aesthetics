carob('#carotwo');
carob('.carouselbox');

function carob(zip){
  // Read necessary elements from the DOM once
  var box = document.querySelector(zip);
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  // Define the global counter, the items and the 
  // current item 
  var counter = 0;
  var items = box.querySelectorAll('.content li');
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  // navigate through the carousel
  function navigate(direction) {
    // hide the old current list item 
    current.classList.remove('current');
    
    // calculate the new position
    counter = (counter + direction) % amount;
    counter = counter < 0 ? amount - 1 : counter;
    // set new current element 
    // and add CSS class
    current = items[counter];
    current.classList.add('current');
  }
  // add event handlers to buttons
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  // show the first element 
  // (when direction is 0 counter doesn't change)
  navigate(0);
}
