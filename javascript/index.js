//function to show the search bar

function toggleFilterSection(event) {
  event.preventDefault();
  const filterSection = document.getElementById('filter-section');
  filterSection.classList.toggle('show')
}