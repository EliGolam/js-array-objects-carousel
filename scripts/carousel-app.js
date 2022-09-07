// Initial Handshake
console.log('DEBUG - carousel-app.js: OK!');

// Carousel SETTINGS
const SLIDE_TIMER = 5000; // in ms


// Array of Image objects
const imgCollection = [];

// FOR loop to create an Image Object for each element in imgData
for(let image of imgData) {
    imgCollection.push(new Image(...image));
}
console.log('DEBUG - imgCollection', imgCollection);


// Global DOM elements
const carouselImages = document.getElementById('carousel-images');
const carouselNavImages = document.getElementById('carousel-nav-images');


