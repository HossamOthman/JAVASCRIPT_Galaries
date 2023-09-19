let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;


// left arrow event listener
arrowLeft.addEventListener('click', () => {
    if(current == 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// right arrow event listener
arrowRight.addEventListener('click', () => {
    if(current == sliderImages.length) {
        current = 0 ;
    }
    slideRight();
});



// clears all images
function reset() {
    sliderImages.forEach(img => {
        img.style.display = 'none';
    })
}

//init slider
function startSlide() {
        reset();
        // display an image
        sliderImages[0].style.display = 'block';
}

// show prev
function slideLeft() {
    reset();
    sliderImages[current -1].style.display = 'block';
    current--;
}

// show next
function slideRight() {
    reset();
    sliderImages[current].style.display = 'block';
    current++;
}

startSlide();