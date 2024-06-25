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
