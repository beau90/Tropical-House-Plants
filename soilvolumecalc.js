function calculateSoil() {
  const diameter = parseFloat(document.getElementById("diameter").value);
  const depth = parseFloat(document.getElementById("depth").value);

  if (isNaN(diameter) || isNaN(depth)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers.";
    return;
  }

  const radius = diameter / 2;
  const volumeCubicInches = Math.PI * Math.pow(radius, 2) * depth;
  const volumeQuarts = volumeCubicInches / 57.75;

  document.getElementById("result").innerHTML =
    `Estimated soil needed: <strong>${volumeQuarts.toFixed(2)} quarts</strong>`;
}