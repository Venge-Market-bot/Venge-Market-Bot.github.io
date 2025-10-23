const smallCursor = document.querySelector('.small');
const bigCursor = document.querySelector('.big');

let mouseX = 0, mouseY = 0;
let bigX = 0, bigY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    smallCursor.style.top = mouseY + 'px';
    smallCursor.style.left = mouseX + 'px';
});

function animate() {
    bigX += (mouseX - bigX) * 0.2;
    bigY += (mouseY - bigY) * 0.2;

    bigCursor.style.top = bigY + 'px';
    bigCursor.style.left = bigX + 'px';

    requestAnimationFrame(animate);
}
animate();

document.addEventListener('mousedown', () => {
    bigCursor.style.transform = 'translate(-50%, -50%) scale(0.7)';

});
document.addEventListener('mouseup', () => {
    bigCursor.style.transform = 'translate(-50%, -50%) scale(1)';

});
