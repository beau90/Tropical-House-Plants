
/* 3-8e

Case Projects:
Individual Case Project #3

Plan and add a feature to one of the web pages in your personal site that incorporates content or functionality created by a series of if, if else, and/or else if statements, or by a switch statement. View and test your page in one or more browsers as appropriate to ensure it works as you expect. */

function recommendPlant() {
  const light = document.getElementById("light").value;
  const suggestion = document.getElementById("suggestion");

  if (light === "low") {
    suggestion.textContent = "A ZZ Plant or Snake Plant would thrive in low light!";
  } else if (light === "medium") {
    suggestion.textContent = "Peace Lily or Calathea would thrive in medium light!";
  } else if (light === "high") {
    suggestion.textContent = "Bird of Paradise or Fiddle Leaf Fig would thrive in High Light!";
  } else {
    suggestion.textContent = "";
  }
}