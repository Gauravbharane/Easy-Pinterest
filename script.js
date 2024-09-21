const container = document.getElementById('imageContainer');
const imageCount = 29; // Number of images you want to add

for (let i = 1; i <= imageCount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');

    const img = document.createElement('img');
    img.src = `images/image (${i}).png`;
    img.alt = `Image ${i}`;

    box.appendChild(img);
    container.appendChild(box);
}