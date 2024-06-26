function toggleFilterSection(event) {
  event.preventDefault();
  const filterSection = document.getElementById('filter-section');
  if (filterSection.classList.contains('show')) {
    filterSection.classList.remove('show');
    setTimeout(() => filterSection.style.display = 'none', 500); // Wait for the transition to end before hiding
  } else {
    filterSection.style.display = 'block';
    setTimeout(() => filterSection.classList.add('show'), 10); // Trigger the transition
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Get the search link and filter section elements
  const searchLink = document.getElementById('search-link');
  const filterSection = document.getElementById('filter-section');

  // Function to toggle the visibility of the filter section
  function toggleFilterSection(event) {
      event.preventDefault(); // Prevent the default action of the link

      // Toggle the 'visible' class on the filter section
      filterSection.classList.toggle('visible');
  }

  // Attach the event listener to the search link
  searchLink.addEventListener('click', toggleFilterSection);
});