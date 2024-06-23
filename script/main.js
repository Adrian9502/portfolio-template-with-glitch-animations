import { handleHamburgerIcon } from "./header.js";
import { generateSkillHTML } from "./skills.js";
import { binaryAnimation } from "./binaryAnimation.js";
import { generateContactsHTML } from "./other-contact.js";
import { setupIntersectionObserver } from "./animation..js";
import { customCursor } from "./cursor.js";
document.addEventListener("DOMContentLoaded", function () {
  customCursor();
  handleHamburgerIcon();
  generateSkillHTML();
  binaryAnimation();
  generateContactsHTML();
  setupIntersectionObserver('.introduction-container');
  setupIntersectionObserver('.about-me-and-skills-container');
  setupIntersectionObserver('.project-container');
  setupIntersectionObserver('.experience-container');
  setupIntersectionObserver('.contact-container');
  setupIntersectionObserver('header');

});

