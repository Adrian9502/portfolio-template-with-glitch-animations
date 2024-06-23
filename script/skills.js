export const skills = [
  {
    img: "../images/techstack/html.png",
    title: "HTML",
  },
  {
    img: "../images/techstack/css.png",
    title: "CSS",
  },
  {
    img: "../images/techstack/js.png",
    title: "JavaScript",
  },
  {
    img: "../images/techstack/react.png",
    title: "React JS",
  },
  {
    img: "../images/techstack/php.png",
    title: "Php",
  },
  {
    img: "../images/techstack/github.png",
    title: "Github",
  },
  {
    img: "../images/techstack/java.png",
    title: "Java",
  },
  {
    img: "../images/techstack/responsive-design.png",
    title: "Responsive Design",
  },
];

export function generateSkillHTML() {
  // get the container where to store generated html
  const skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = "";

  skills.forEach((skill) => {
    const HTML = `
  <div class="my-skills">
    <div class="img-container">
      <img src="${skill.img}" alt="${skill.title}" />
    </div>
    <div class="tech-text">${skill.title}</div>
  </div>
  `;
  //append to the container
    skillsContainer.innerHTML += HTML;
  });
}
