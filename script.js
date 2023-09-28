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

function updatePixelColor(e) {
    let color = e.target.style.backgroundColor;
    if (color == 'black') {
        e.target.style.backgroundColor = 'white';
    } else {
        e.target.style.backgroundColor = 'black';
    }
}

function removePixels() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.remove();
    });
}

function getWidth() {
    containerWidth = prompt("Update 'Etch-a-Sketch' pixel width:");
    if (containerWidth > 100) {
        alert('Max pixel width is 100');
        getWidth();
    }
}

function updatePixelWidth() {
    let pixelSize = 720 / containerWidth;
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