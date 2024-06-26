// adopt.js

document.addEventListener('DOMContentLoaded', () => {
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
});
