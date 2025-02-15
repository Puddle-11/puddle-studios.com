
const overlay = document.querySelector('.popup-overlay');
const overlayImg = document.getElementById('popup-overlay-img');
const dimmer = document.querySelector('.popup-dimmer');

function toggleOverlay(event, imgSrc) {
    event.stopPropagation(); // Prevent immediate closing
    overlayImg.src = imgSrc; // Change overlay image
    overlay.style.display = 'flex';
    dimmer.style.display = 'block';
}

function closeOverlay() {
    overlay.style.display = 'none';
    dimmer.style.display = 'none';
}