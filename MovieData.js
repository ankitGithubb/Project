// Select all the image elements
const images = document.querySelectorAll('img');

// Loop through the image elements and set the src attribute
images.forEach(image => {
    const imageName = image.getAttribute('alt').toLowerCase().replace(/ /g, '-');
    const imagePath = `./assets/images/${imageName}.png`;
    console.log(imagePath);
    image.setAttribute('src', imagePath);
});
