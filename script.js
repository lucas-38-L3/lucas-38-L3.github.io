"use strict";

// Année courante dans le pied de page
document.querySelectorAll("[data-year], #year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Menu mobile
const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
    menuButton.innerHTML = `${isOpen ? "Fermer" : "Menu"} <span>${isOpen ? "−" : "+"}</span>`;
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Ouvrir le menu");
      menuButton.innerHTML = 'Menu <span>+</span>';
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.getElementById("typed-name");

  if (!nameElement) return;

  const fullName = "Lucas Favier ;)";
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion) {
    nameElement.textContent = fullName;
    return;
  }

  nameElement.textContent = "";
  let index = 0;

  function typeNextCharacter() {
    if (index < fullName.length) {
      nameElement.textContent += fullName.charAt(index);
      index++;
      setTimeout(typeNextCharacter, 110);
    }
  }

  setTimeout(typeNextCharacter, 300);
});

