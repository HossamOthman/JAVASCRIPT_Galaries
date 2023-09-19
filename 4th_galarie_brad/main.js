let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;


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




startSlide();