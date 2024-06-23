const contacts = [
  {
    link: "https://www.facebook.com/profile.php?id=100082782967903",
    image: "../images/other contact/facebook.png",
    name: "John Adrian Bonto",
  },
  {
    link: "https://www.instagram.com/john.adrian.bon/",
    image: "../images/other contact/instagram.png",
    name: "john.adrian.bon",
  },
  {
    link: "https://twitter.com/AdrianBont94057",
    image: "../images/other contact/twitter.png",
    name: "@AdrianBont94057",
  },
  {
    link: "https://www.linkedin.com/in/john-adrian-bonto-a65704283/",
    image: "../images/other contact/linkedin.png",
    name: "John Adrian Bonto",
  },
  {
    link: "https://mail.google.com/mail/u/?authuser=bontojohnadrian@gmail.com",
    image: "../images/other contact/gmail.png  ",
    name: "bontojohnadrian@gmail.com",
  },
];


export function generateContactsHTML() {
  // get the container where to store generated html
  const contactsContainer = document.querySelector(".js-other-contact");
  contactsContainer.innerHTML = "";

  contacts.forEach((contact) => {
    const HTML = `
    <div class="other-contact-wrapper">
    <a href="${contact.link}">
      <div class="contact-image"><img src="${contact.image}" alt=""></div>
    </a>
    <div class="contact-name">${contact.name}</div>
  </div>
  `;
  //append to the container
  contactsContainer.innerHTML += HTML;
  });
}

