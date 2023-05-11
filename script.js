const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);


function fixNav() {
  console.log(window.scrollY);
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}


// To remove active nav after hero area
// window.addEventListener('scroll', undoNav);
// function undoNav() {
//   if (window.scrollY > 900) {
//     nav.classList.remove('active')
//   }
// }
  

// window.scrollY = Location of window hight
// nav.offsetHeight = Always stay at '70' in this case