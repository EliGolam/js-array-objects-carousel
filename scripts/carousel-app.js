// Initial Handshake
console.log('DEBUG - carousel-app.js: OK!');

// Carousel SETTINGS
const SLIDE_TIMER = 5000; // in ms
let activeImgIdx = 0;


// Array of Image objects
const imgCollection = [];
// FOR loop to create an Image Object for each element in imgData
for(let image of imgData) {
    imgCollection.push(new Image(...image));
}
console.log('DEBUG - imgCollection', imgCollection);


// Array of Image objects for Thumbnail
const imgThumbnails = [];
// FOR loop to create an Image Object in imgThumbnail for each element in imgData
for(let i = 0; i < imgData.length; i++) {
    const url = generateImagePath(CAROUSEL_THUMBNAIL_PATH, IMG_FORMAT, i);
    imgThumbnails.push(new Image(imgData[i][0], imgData[i][1], url));
}
console.log('DEBUG - imgThumbnails', imgThumbnails);


// Build Carousel
buildCarousel(imgCollection, imgThumbnails, activeImgIdx);


/* ********************************************************* */
// DOM Elements
const carouselImg = document.querySelectorAll('.ms_carousel-img');
const carouselNavImg = document.querySelectorAll('.ms_carousel-nav-img');
console.log(carouselImg, carouselNavImg);

const prevButton = document.querySelector('.ms_previous-button');
const nextButton = document.querySelector('.ms_next-button');

///////////////////////////////////////////////////////////////
// CAROUSEL BUTTONS 
// Carousel Previous
prevButton.addEventListener('click', () => {
    console.log('DEBUG - prevButton: Clicked');
    moveCarousel(carouselImg, carouselNavImg, 'previous');
});

// Carousel Next
nextButton.addEventListener('click', () => {
    console.log('DEBUG - nextButton: Clicked');
    moveCarousel(carouselImg, carouselNavImg, 'next');
});

// CAROUSEL NAVIGATION
for (let i = 0; i < carouselImg.length; i++) {
    carouselNavImg[i].addEventListener('click', () => {
        console.log('DEBUG - carouselNavImg Click: OK!');

        for (let j = 0; j < carouselNavImg.length; j++) {
            if (j === i) {
                continue;
            }
            carouselImg[j].classList.remove('active');
            carouselNavImg[j].classList.remove('active');
        }

        carouselImg[i].classList.add('active');
        carouselNavImg[i].classList.add('active');
    })
}




