<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.filter-link');
    const petSections = document.querySelectorAll('.pet-type, .pet-gallery');
    const filters = {
        age: 'all-ages',
        color: 'all-colors',
        size: 'all-sizes',
        sortBy: 'default'
    };

    function updateDisplay() {
        petSections.forEach(section => {
            const petItems = section.querySelectorAll('.pet-item');
            let hasVisibleItem = false;

            petItems.forEach(item => {
                const age = item.getAttribute('data-age');
                const color = item.getAttribute('data-color');
                const size = item.getAttribute('data-size');
                const isVisible = (filters.age === 'all-ages' || age === filters.age) &&
                                  (filters.color === 'all-colors' || color === filters.color) &&
                                  (filters.size === 'all-sizes' || size === filters.size);

                if (isVisible) {
                    item.classList.remove('hidden'); // Show matched items
                    hasVisibleItem = true;
                } else {
                    item.classList.add('hidden'); // Hide unmatched items
                }
            });

            if (hasVisibleItem) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        const petItems = document.querySelectorAll('.pet-item');
        
        petItems.forEach(petItem => {
            petItem.addEventListener('click', function () {
                const name = petItem.getAttribute('data-name');
                const age = petItem.getAttribute('data-age');
                const breed = petItem.getAttribute('data-breed');
                const color = petItem.getAttribute('data-color');
                const size = petItem.getAttribute('data-size');
                const gender = petItem.getAttribute('data-gender');
                const health = petItem.getAttribute('data-health');
                const about = petItem.getAttribute('data-about');
                const imageUrl = petItem.querySelector('img').src;

                const params = new URLSearchParams({
                    name, age, breed, color, size, gender, health, about, imageUrl
                }).toString();

                window.location.href = `pet-details.html?${params}`;
            });
        });
    });
    updateDisplay();
});
=======
// adopt.js
>>>>>>> c73dd7cb4136bfd0107fd0a355c52e6daf6992cc

function redirectToDetails(petItem) {
    const name = petItem.getAttribute('data-name');
    const age = petItem.getAttribute('data-age');
    const breed = petItem.getAttribute('data-breed');
    const color = petItem.getAttribute('data-color');
    const size = petItem.getAttribute('data-size');
    const gender = petItem.getAttribute('data-gender');
    const health = petItem.getAttribute('data-health');
    const about = petItem.getAttribute('data-about');
    const imageUrl = petItem.querySelector('img').src;

<<<<<<< HEAD
    const params = new URLSearchParams({
        name, age, breed, color, size, gender, health, about, imageUrl
    }).toString();

    window.location.href = `pet-details.html?${params}`;
}
=======
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
>>>>>>> c73dd7cb4136bfd0107fd0a355c52e6daf6992cc
