const revealElements = document.querySelectorAll(".reveal");
const typeText = "Frontend Developer";
let currentIndex = 0;

function handleScrollReveal() {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      el.classList.add("active");
    }
  });
}

function typeEffect() {
  const typeElement = document.querySelector(".type");
  if (!typeElement) return;

  if (currentIndex < typeText.length) {
    typeElement.innerHTML += typeText.charAt(currentIndex);
    currentIndex++;
    setTimeout(typeEffect, 100);
  }
}

const contactForm = document.querySelector(".contact-form");
const successMessage = document.querySelector(".success-message");

function handleContactSubmit(event) {
  event.preventDefault();

  if (!successMessage || !contactForm) {
    return;
  }

  contactForm.reset();
  successMessage.hidden = false;

  setTimeout(() => {
    successMessage.hidden = true;
  }, 4000);
}

window.addEventListener("scroll", handleScrollReveal);
window.addEventListener("load", () => {
  handleScrollReveal();
  typeEffect();

  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }
});