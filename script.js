const PADWIDTH = 720; // pixels

function padSetup() {
    let containerWidth = 16;
    const pixelContainer = document.querySelector('.pixel-container');
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

padSetup();