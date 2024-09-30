// _assets/js/checkbox.js

document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Cargar estado de checkboxes del localStorage
  checkboxes.forEach(checkbox => {
    const id = checkbox.id;
    checkbox.checked = localStorage.getItem(id) === 'true';

    checkbox.addEventListener('change', function() {
      localStorage.setItem(id, this.checked);
    });
  });
});

