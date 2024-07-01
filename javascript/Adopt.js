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

    const params = new URLSearchParams({
        name, age, breed, color, size, gender, health, about, imageUrl
    }).toString();

    window.location.href = `pet-details.html?${params}`;
}