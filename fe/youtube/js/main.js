document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.content-wrapper');
    const scrollable = document.querySelector('.scrollable');
    const chevronRight = document.querySelector('.chev-right');
    const chevronLeft = document.querySelector('.chev-left');
  
    chevronRight.addEventListener('click', () => {
      scrollable.scrollBy({left: 300, behavior: 'smooth'});
    });
    chevronLeft.addEventListener('click', () => {
        scrollable.scrollBy({left: -300, behavior: 'smooth'});
    });
  
    function checkScroll() {
      if (scrollable.scrollWidth - scrollable.scrollLeft <= scrollContainer.offsetWidth) {
        chevronRight.style.display = 'none';
        chevronLeft.style.display = 'block';
      }
      else {
        chevronRight.style.display = 'block';
        chevronLeft.style.display = 'none';
      }
    }
  
    scrollable.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check on page load
});