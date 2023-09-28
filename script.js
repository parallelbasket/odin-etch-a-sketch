function sketch() {
const PADWIDTH = 720; // pixels
let containerWidth = 16;
const pixelContainer = document.querySelector('.pixel-container');

function setupPad() {        
    for (let i = 0; i < (containerWidth * containerWidth); i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover', updatePixelColor)
        pixelContainer.appendChild(div);
    }
}

function randColor() {
    return Math.floor(Math.random() * 360);
}

function updatePixelColor(e) {
    e.target.style.backgroundColor = `hsl(${randColor()}, 100%, 50%)`;
}

function getWidth() {
    containerWidth = prompt("Update 'Etch-a-Sketch' pixel width:");
    if (containerWidth > 100) {
        alert('Max pixel width is 100');
        getWidth();
    }
}

function removePixels() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.remove();
    });
}

function updatePixelWidth() {
    let pixelSize = PADWIDTH / containerWidth;
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.width = pixelSize.toString() + 'px';
        pixel.style.height = pixelSize.toString() + 'px';
    });
}

function changePadSize() {
    const button = document.querySelector('button');
    button.addEventListener('click', getWidth);
    button.addEventListener('click', removePixels);
    button.addEventListener('click', setupPad);
    button.addEventListener('click', updatePixelWidth);
}

setupPad();
changePadSize();
}
sketch();