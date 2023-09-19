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
        // pop up function
    });

    gallery.appendChild(image);
});
