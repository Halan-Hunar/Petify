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
            section.style.display = 'none'; // Hide all sections first

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
                    item.style.display = 'block'; // Show matched items
                    hasVisibleItem = true;
                } else {
                    item.style.display = 'none'; // Hide unmatched items
                }
            });

           
            if (hasVisibleItem) {
                section.style.display = 'block';
            }
        });
    }

    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

           
            const siblings = this.closest('ul').querySelectorAll('.filter-link');
            siblings.forEach(sibling => sibling.classList.remove('active'));

           
            this.classList.add('active');

            
            const filterType = this.closest('div').classList[0].split('-')[0]; // 'age', 'color', 'size', 'sortBy'
            filters[filterType] = this.textContent.toLowerCase().replace(/ /g, '-');

            updateDisplay();
        });
    });

   
    updateDisplay();
});

document.addEventListener('DOMContentLoaded', () => {
    const petItems = document.querySelectorAll('.pet-item');

    petItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.dataset.name;
            const imgSrc = item.dataset.img;
            const age = item.dataset.age;
            const breed = item.dataset.breed;

            const petDetails = {
                name: name,
                imgSrc: imgSrc,
                age: age,
                breed: breed
            };

            localStorage.setItem('selectedPet', JSON.stringify(petDetails));
            window.location.href = 'pet-details.html';
        });
    });
});
