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