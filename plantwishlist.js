  const form = document.getElementById('plantForm');
  const listBox = document.getElementById('listBox');

  form.addEventListener('change', () => {
    const selectedPlants = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);
    listBox.value = selectedPlants.join('\n');
  });


