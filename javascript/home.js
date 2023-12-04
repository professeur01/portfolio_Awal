//Changement du Curseur______________________
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px;";
});
//___________________FIN_____________________
// Création du Dark mode_____________________
// Get the toggle button
const darkToggle = document.querySelector(".dark_mode_toggle");

darkToggle.addEventListener("click", () => {
  const sectionColor = document.querySelectorAll(".section_color");
  const body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
    for (let i = 0; i < sectionColor.length; i++) {
      const item = sectionColor[i];
      item.style.backgroundColor = "#000000";
    }
  } else if (body.classList.contains("light")) {
    body.classList.add("dark");
    body.classList.remove("light");
    for (let i = 0; i < sectionColor.length; i++) {
      const item = sectionColor[i];
      item.style.backgroundColor = "#f3cb22";
    }
  }
});
// ______________________FIN_____________________________
// Création du menu burger
const toggleLogo = document.querySelector(".toggle-logo");
const logoMenu = document.querySelector(".logo-menu");
const menu = document.querySelector(".menu");
toggleLogo.addEventListener("click", () => {
  menu.classList.toggle("active");
});
/* 
// Get the user's preference from localStorage
const darkMode = localStorage.getItem("dark-mode");
// Check if the user has already chosen a theme
if (darkMode) {
  // If yes, apply it to the root element
  root.classList.add("dark-theme");
}
// Add an event listener to the toggle button
toggle.addEventListener("click", () => {
    // Toggle the dark-theme class on the root element
    root.classList.toggle("dark-theme");
    // Store or remove the user's preference in localStorage
    if (root.classList.contains("dark-theme")) {
    localStorage.setItem("dark-mode", true);
  } else {
    localStorage.removeItem("dark-mode");
  }
}); */
//___________________FIN_____________________
