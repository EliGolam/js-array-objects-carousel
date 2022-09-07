// Initial Handshake
console.log('DEBUG - utilities.js: OK!');

// OBJECTS
class Image {
    constructor(title, description, url) {
        this.title = title;
        this.url = url;
        this.description = description;
    }
}


// FUNCTIONS
function buildCarousel(imgCollection, imgThumbnails, activeIdx) {
    buildCollectionDOM(imgCollection, CAROUSEL_IMG_ID, activeIdx);
    buildCollectionDOM(imgThumbnails, THUMBNAIL_IMG_ID, activeIdx);
}


function buildCollectionDOM(collectionArray, containerDomId, activeIndex) {
    const container = document.getElementById(containerDomId);
    const classDom = containerDomId === CAROUSEL_IMG_ID ? IMG_CLASS_LIST : THUMBNAIL_CLASS_LIST;

    for(let element of collectionArray) {
        const image = document.createElement('img');
        image.src = element.url;
        image.alt = element.title + ': ' + element.description;
        image.classList.add(...classDom);
        if (collectionArray.indexOf(element) === activeIndex) {
            image.classList.add('active');
        }

        container.append(image);
    }
}


function generateImagePath (folderPath, imgFormat, imageIndex) {
    imageIndex++; // Necessary because the images start counting from 01 instead of 00
    const filename = imageIndex < 10 ? '0' + imageIndex : imageIndex;
    const url = folderPath + filename + imgFormat;
    return url;
} 


function generateImagePaths (amountImages, path, imgFormat) {
    const imgPaths = [];

    for(let i = 1; i <= amountImages; i++) {
        const filename = i < 10 ? '0' + i : i;
        const url = path + filename + imgFormat;
        imgPaths.push(url);
    }

    return imgPaths;
}