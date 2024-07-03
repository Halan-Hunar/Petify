
    function proceedToAdoption() {
        const pets = JSON.parse(localStorage.getItem('pets')) || [];
        const petIds = pets.map(pet => pet.id).join(',');
        const adopterName = document.getElementById('adopter-name').value;
        const adopterAddress = document.getElementById('adopter-address').value;

        // Check if adopter's name and address are provided
        if (!adopterName || !adopterAddress) {
            alert('Please enter your name and address.');
            return;
        }

        // Redirect to adopt-form.html with parameters
        window.location.href = `adopt-form.html?pet_ids=${petIds}&name=${encodeURIComponent(adopterName)}&address=${encodeURIComponent(adopterAddress)}`;
    }

