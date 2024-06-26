document.addEventListener('DOMContentLoaded', () => {
  const petDetails = JSON.parse(localStorage.getItem('selectedPet'));

  if (petDetails) {
      document.querySelector('.section-title').textContent = petDetails.name;
      document.querySelector('.pet-image img').src = petDetails.imgSrc;
      document.querySelector('.pet-image img').alt = petDetails.name;
      document.querySelector('.pet-info').innerHTML = `
          <h3>Pet Details</h3>
          <p><strong>Age:</strong> ${petDetails.age}</p>
          <p><strong>Breed:</strong> ${petDetails.breed}</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Size:</strong> Large</p>
          <p><strong>Color:</strong> Golden</p>
          <p><strong>Health:</strong> Vaccinated, Neutered</p>
          <p><strong>About:</strong> Buddy is a friendly and playful Golden Retriever who loves to be around people. He is looking for a loving home where he can get lots of attention and exercise.</p>
          <button class="adopt-button">Adopt ${petDetails.name}</button>
      `;
  } else {
      // Handle case when no pet details are found
      document.querySelector('.section-title').textContent = 'Pet Not Found';
      document.querySelector('.pet-info').innerHTML = '<p>No pet details available.</p>';
  }
});
