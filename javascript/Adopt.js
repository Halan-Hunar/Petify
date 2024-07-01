// adopt.js

function redirectToDetails(petItem) {
    const name = petItem.getAttribute('data-name');
    const age = petItem.getAttribute('data-age');
    const breed = petItem.getAttribute('data-breed');
    const color = petItem.getAttribute('data-color');
    const size = petItem.getAttribute('data-size');
    const gender = petItem.getAttribute('data-gender');
    const health = petItem.getAttribute('data-health');
    const about = petItem.getAttribute('data-about');
    const imageUrl = petItem.querySelector('img').src;}

    // adopt.js

const petItems = document.querySelectorAll('.pet-item');

petItems.forEach(petItem => {
  petItem.addEventListener('click', event => {
    if (event.target.classList.contains('pet-link')) {
      const name = petItem.dataset.name;
      const age = petItem.dataset.age;
      const breed = petItem.dataset.breed;
      const color = petItem.dataset.color;
      const size = petItem.dataset.size;
      const image = petItem.dataset.image;

      const queryString = `?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&breed=${encodeURIComponent(breed)}&color=${encodeURIComponent(color)}&size=${encodeURIComponent(size)}&image=${encodeURIComponent(image)}`;
      event.target.href = `pet-details.html${queryString}`;
    }
  });
});
