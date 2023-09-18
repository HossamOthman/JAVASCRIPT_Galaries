const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.7;

// set opacity to first img
imgs[0].style.opacity = opacity



imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // reset the thumbs opacity
    imgs.forEach(img => img.style.opacity = 1 );

    //change source for the current img
    current.src = e.target.src

    // add fade in class
    current.classList.add('fade-in');

    // remove fade in class
    setTimeout(() => current.classList.remove('fade-in'), 300 );


    //change the opacity
    e.target.style.opacity = opacity;
}