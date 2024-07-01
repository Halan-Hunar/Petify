document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);

    const name = params.get('name');
    const age = params.get('age');
    const breed = params.get('breed');
    const color = params.get('color');
    const size = params.get('size');
    const gender = params.get('gender');
    const health = params.get('health');
    const about = params.get('about');
    const imageUrl = params.get('imageUrl');

    document.querySelector('.section-title').textContent = name;
    document.querySelector('.pet-image img').src = imageUrl;
    document.querySelector('.pet-image img').alt = name;
    document.querySelector('.pet-info').innerHTML = `
        <h3>Pet Details</h3>
        <p><strong>Age:</strong> ${age} years</p>
        <p><strong>Breed:</strong> ${breed}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Color:</strong> ${color}</p>
        <p><strong>Health:</strong> ${health}</p>
        <p><strong>About:</strong> ${about}</p>
        <button class="adopt-button">Adopt ${name}</button>
    `;
});