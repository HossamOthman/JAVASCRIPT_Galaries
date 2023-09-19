const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imgIndexes = [1,2,3,4,5,6,7,8,9,10];
const selectedIndex = null;

imgIndexes.forEach(i => {
    let image = document.createElement('img');
    if(i < 10){
        image.src = `../img/0${i}.jpg`
    } else {
        image.src = `../img/${i}.jpg`
    }
    image.alt = `Cover of the image number: ${i}`
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        // load the image in div
        if(i < 10){
            selectedImage.src = `../img/0${i}.jpg`
        } else {
            selectedImage.src = `../img/${i}.jpg`
        }
        selectedImage.alt = `Cover of the image number: ${i}`
        // pop up function
        popup.style.transform = 'translateY(0)'
    });

    gallery.appendChild(image);
});

popup.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)';
    popup.src = '';
    popup.alt = '';
});