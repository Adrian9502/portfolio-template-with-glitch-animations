export function handleHamburgerIcon() {
  const hamburger = document.querySelector(".hamburger");
  const rightSection = document.querySelector(".right-section");

  hamburger.addEventListener("click", function () {
    hamburger.textContent = hamburger.textContent === "☰" ? "✕" : "☰";
    rightSection.classList.toggle("menu-active");
  });
}

