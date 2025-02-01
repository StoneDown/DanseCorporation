let currentIndex = 0;

function showImage(index) {
    const images = document.querySelector('.carousel-images');
    const totalImages = images.children.length;
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}
//Archivo html para el carrusel de imágenes del inicio de página.
