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