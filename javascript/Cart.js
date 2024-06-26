document.addEventListener("DOMContentLoaded", function() {
  // Get all the remove buttons
  const removeButtons = document.querySelectorAll('.remove-button');

  // Add click event listener to each remove button
  removeButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default button behavior
          // Find the parent row and remove it
          const row = button.closest('.table-row');
          if (row) {
              row.remove();
              updateAdoptionDetails();
          }
      });
  });

  function updateAdoptionDetails() {
      const rows = document.querySelectorAll('.table-row');
      const totalPets = rows.length;

      const totalDogs = Array.from(rows).filter(row => row.querySelector('.pet-breed').innerText.includes('Dog')).length;
      const totalCats = Array.from(rows).filter(row => row.querySelector('.pet-breed').innerText.includes('Cat')).length;
      const totalBirds = Array.from(rows).filter(row => row.querySelector('.pet-breed').innerText.includes('Bird')).length;

      document.querySelector('.adoption-subtotal span:last-child').innerText = totalPets;
      document.querySelector('.adoption-subtotal-types span:nth-of-type(2)').innerText = totalDogs;
      document.querySelector('.adoption-subtotal-types span:nth-of-type(4)').innerText = totalCats;
      document.querySelector('.adoption-subtotal-types span:nth-of-type(6)').innerText = totalBirds;
  }
});