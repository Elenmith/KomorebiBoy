// //  Powiększanie kart oraz napisu z linkiem

// document.addEventListener("DOMContentLoaded", function () {
//   const cards = document.querySelectorAll(".track img");
//   const texts = document.querySelectorAll(".card-text");
//   const overlay = document.createElement("div");
//   overlay.className = "overlay";
//   document.body.appendChild(overlay);

//   cards.forEach((card) => {
//     card.addEventListener("click", function () {
//       // Usuń aktywne klasy ze wszystkich kart i tekstów
//       cards.forEach((c) => c.classList.remove("active"));
//       texts.forEach((t) => t.classList.remove("active"));

//       // Dodaj aktywną klasę do klikniętej karty
//       this.classList.add("active");

//       // Dodaj aktywną klasę do odpowiedniego tekstu
//       const cardType = this.classList[0].replace("card", "");
//       document
//         .querySelector(`.card-text[data-card="${cardType}"]`)
//         .classList.add("active");

//       // Dodaj aktywną klasę do overlay
//       overlay.classList.add("active");
//     });
//   });

//   // Obsługa kliknięcia na overlay, aby zamknąć podgląd
//   overlay.addEventListener("click", function () {
//     // Usuń aktywne klasy ze wszystkich kart i tekstów
//     cards.forEach((c) => c.classList.remove("active"));
//     texts.forEach((t) => t.classList.remove("active"));

//     // Usuń aktywną klasę z overlay
//     overlay.classList.remove("active");
//   });
// });

// document.querySelectorAll(".track img").forEach((image) => {
//   image.onclick = () => {
//     document.querySelector(".popup-image").style.display = "block";
//     document.querySelector(".popup-image img").src = image.getAttribute("src");
//   };
// });

// document.querySelector(".popup-image span").onclick = () => {
//   document.querySelector(".popup-image").style.display = "none";
// };

// document.querySelector(".popup-image").onclick = (e) => {
//   if (e.target.tagName !== "IMG") {
//     document.querySelector(".popup-image").style.display = "none";
//   }
// };

// Ładowanie contentu na stronie HOME

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".intro h1, .intro p, .button1, .lookformore, .github, .text-section, .track img, .image-section img"
  );
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animate");
    }, index * 200); // Opóźnienie każdego elementu o 200ms
  });
});

// Pojawianie się elementów wraz ze scrollem strony

window.addEventListener("scroll", function () {
  // Pobieramy pozycję od góry okna przeglądarki
  let elementPosition = document
    .querySelector(".container2")
    .getBoundingClientRect().top;

  // Określamy wysokość okna przeglądarki
  let windowHeight = window.innerHeight;

  // Jeśli element jest widoczny w oknie, dodajemy mu klasę visible
  if (elementPosition < windowHeight) {
    document.querySelector(".container2").classList.add("visible");
  }
});
