const diabetesDiet = [
    "Low-carb diet",
    "Fiber-rich foods",
    "Healthy fats",
    // Add more diet options for diabetes
  ];
  
  const hypertensionDiet = [
    "DASH diet",
    "Low-sodium foods",
    "Potassium-rich foods",
    // Add more diet options for hypertension
  ];
  
  const dietContainer = document.getElementById('dietContainer');
  
  function displayDiet(diet) {
    dietContainer.innerHTML = '';
    diet.forEach(item => {
      const dietItem = document.createElement('div');
      dietItem.classList.add('diet');
      dietItem.textContent = item;
      dietContainer.appendChild(dietItem);
    });
  }
  
  document.getElementById('diabetesBtn').addEventListener('click', () => {
    displayDiet(diabetesDiet);
  });
  
  document.getElementById('hypertensionBtn').addEventListener('click', () => {
    displayDiet(hypertensionDiet);
  });
  