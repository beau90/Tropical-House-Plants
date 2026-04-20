function submitOrder() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const zip = document.getElementById("zip").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorDisplay = document.getElementById("errorDisplay");	
  
  errorDisplay.textContent = "";
  errorDisplay.style.color = "black";
  
  const errors = []

  if (!name) errors.push("Please Enter a Name.");
  if (!address) errors.push("Entering an Address is required.");
  if (!city) errors.push("Entering a City is required.");
  if (!state) errors.push("Entering a State is required.");
  if (!zip) errors.push("Entering a Zip Code is required.");
  if (!phone) errors.push("Entering a Phone Number is required.");
  if (!email) errors.push("Entering an Email is required.");
    
  const digitPattern = /\d/;  
  if (digitPattern.test(name)) errors.push("Numbers not Valid in Name.");
  if (digitPattern.test(city)) errors.push("Numbers not Valid in City.");  
    
  const phonePattern = /^(\d{3}-?\d{3}-?\d{4}|\d{10})$/;
  if (!phonePattern.test(phone)) errors.push("Please Enter a 9-digit Phone Number.");
    
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) errors.push("Please Enter a Valid Email.");   

  const selectedPlants = document.querySelectorAll('input[name="plant"]:checked');
  if (selectedPlants.length === 0) errors.push("Selecting at least ONE plant is required!");
  
  if (errors.length > 0) {
	  errorDisplay.innerHTML = errors.join("<br>");
  }
  else {
	  errorDisplay.innerHTML = `${name}! Your order has been placed, THANK YOU!`;
  }
  errorDisplay.style.fontWeight = "bold";
  errorDisplay.style.color = "black";
  
}

const checkboxes = document.querySelectorAll('input[name="plant"]');
const liveTotalDisplay = document.getElementById("liveTotalDisplay");

checkboxes.forEach(box => {
  box.addEventListener("change", updateLiveTotal);
});

function updateLiveTotal() {
  let total = 0;
  checkboxes.forEach(box => {
    if (box.checked) {
      const price = parseFloat(box.value);
      if (!isNaN(price)) {
        total += price;
      }
    }
  });
  liveTotalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}



