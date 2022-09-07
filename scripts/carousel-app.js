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





