
"use strict";

const translations = {
  pl: {
    skipLink: "Przejdź do treści",
    navAbout: "O mnie",
    navSkills: "Umiejętności",
    navProjects: "Projekty",
    navContact: "Kontakt",
    heroEyebrow: "MOJE PORTFOLIO",
    heroTitle: "Cześć, jestem Gabriel 👋",
    location: "📍 Polska · 💻 Tworzę strony internetowe",
    heroDescription: "Rozwijam swoje umiejętności programistyczne i tworzę własne projekty webowe.",
    heroButton: "Zobacz moje projekty",
    aboutKicker: "KILKA SŁÓW O MNIE",
    aboutTitle: "O mnie",
    aboutText: "Jestem początkującym frontend developerem. Uczę się HTML, CSS oraz JavaScript. Buduję własne projekty i rozwijam swoje umiejętności programistyczne.",
    skillsKicker: "NARZĘDZIA, KTÓRYCH UŻYWAM",
    skillsTitle: "Moje technologie",
    futureSkill: "React (w przyszłości)",
    projectsKicker: "RZECZY, KTÓRE ZBUDOWAŁEM",
    projectsTitle: "Moje projekty",
    projectsIntro: "Kilka projektów, dzięki którym ćwiczę tworzenie stron i aplikacji.",
    portfolioTitle: "🌐 Portfolio Website",
    portfolioDescription: "Moja strona portfolio, stworzona przy użyciu HTML, CSS oraz JavaScript.",
    todoTitle: "✅ To Do App",
    todoDescription: "Aplikacja do zarządzania zadaniami. Projekt wykonany w JavaScript.",
    weatherTitle: "☁️ Weather App",
    weatherDescription: "Aplikacja pogodowa wykorzystująca API.",
    codeButton: "Kod",
    demoButton: "Demo",
    comingSoon: "Wkrótce",
    contactKicker: "POROZMAWIAJMY",
    contactTitle: "Kontakt",
    contactText: "Chcesz zobaczyć mój kod albo śledzić moje kolejne projekty? Znajdziesz mnie na GitHubie.",
    githubProfile: "Odwiedź mój profil GitHub",
    backToTop: "Wróć na górę ↑",
    themeToLight: "Włącz tryb jasny",
    themeToDark: "Włącz tryb ciemny",
    languageLabel: "Change language to English",
    typing: [
      "Początkujący Frontend Developer 🚀",
      "Tworzę strony internetowe 💻",
      "Uczę się JavaScript ⚡",
      "Buduję własne projekty 🔥"
    ]
  },

  en: {
    skipLink: "Skip to content",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    heroEyebrow: "MY PORTFOLIO",
    heroTitle: "Hi, I'm Gabriel 👋",
    location: "📍 Poland · 💻 I build websites",
    heroDescription: "I'm developing my programming skills and building my own web projects.",
    heroButton: "Explore my projects",
    aboutKicker: "A LITTLE ABOUT ME",
    aboutTitle: "About me",
    aboutText: "I'm a beginner frontend developer learning HTML, CSS, and JavaScript. I build personal projects and keep improving my programming skills.",
    skillsKicker: "TOOLS I USE",
    skillsTitle: "My technologies",
    futureSkill: "React (learning later)",
    projectsKicker: "THINGS I'VE BUILT",
    projectsTitle: "My projects",
    projectsIntro: "A few projects I use to practise building websites and applications.",
    portfolioTitle: "🌐 Portfolio Website",
    portfolioDescription: "My portfolio website, built with HTML, CSS, and JavaScript.",
    todoTitle: "✅ To Do App",
    todoDescription: "A task management app built with JavaScript.",
    weatherTitle: "☁️ Weather App",
    weatherDescription: "A weather application that uses an API.",
    codeButton: "Source code",
    demoButton: "Live demo",
    comingSoon: "Coming soon",
    contactKicker: "LET'S CONNECT",
    contactTitle: "Contact",
    contactText: "Want to see my code or follow my upcoming projects? Find me on GitHub.",
    githubProfile: "Visit my GitHub profile",
    backToTop: "Back to top ↑",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    languageLabel: "Zmień język na polski",
    typing: [
      "Beginner Frontend Developer 🚀",
      "I build websites 💻",
      "Learning JavaScript ⚡",
      "Building personal projects 🔥"
    ]
  }
};

const themeButton = document.querySelector("#theme-toggle");
const languageButton = document.querySelector("#language-toggle");
const typing = document.querySelector("#typing");
const year = document.querySelector("#year");

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

// Bezpieczny dostęp do localStorage.
// Jeśli przeglądarka blokuje zapis, strona nadal będzie działać.
function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Nie przerywamy działania strony.
  }
}

let currentLanguage = readStorage("gabriel-language");

if (!translations[currentLanguage]) {
  currentLanguage = "pl";
}

let typingTimer = null;
let textIndex = 0;
let charIndex = 0;
let deleting = false;

function updateThemeButton() {
  const isLight = document.body.classList.contains("light");

  themeButton.textContent = isLight ? "🌙" : "☀️";

  const label = translations[currentLanguage][
    isLight ? "themeToDark" : "themeToLight"
  ];

  themeButton.setAttribute("aria-label", label);
  themeButton.title = label;
}

function applyTheme(theme) {
  const isLight = theme === "light";

  document.body.classList.toggle("light", isLight);

  writeStorage(
    "gabriel-theme",
    isLight ? "light" : "dark"
  );

  updateThemeButton();
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "pl";

  document.documentElement.lang = currentLanguage;

  writeStorage("gabriel-language", currentLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translations[currentLanguage][key];

    if (typeof translatedText === "string") {
      element.textContent = translatedText;
    }
  });

  languageButton.textContent =
    currentLanguage === "pl" ? "EN" : "PL";

  languageButton.setAttribute(
    "aria-label",
    translations[currentLanguage].languageLabel
  );

  languageButton.title =
    translations[currentLanguage].languageLabel;

  // Po zmianie języka rozpoczynamy animację od początku.
  if (typingTimer !== null) {
    window.clearTimeout(typingTimer);
  }

  textIndex = 0;
  charIndex = 0;
  deleting = false;

  if (reducedMotion.matches) {
    typing.textContent = translations[currentLanguage].typing[0];
  } else {
    typing.textContent = "";
    typeEffect();
  }

  updateThemeButton();
}

function typeEffect() {
  if (!typing || reducedMotion.matches) {
    return;
  }

  const texts = translations[currentLanguage].typing;
  const currentText = texts[textIndex];

  if (!deleting) {
    charIndex = Math.min(charIndex + 1, currentText.length);
    typing.textContent = currentText.slice(0, charIndex);

    if (charIndex >= currentText.length) {
      deleting = true;
      typingTimer = window.setTimeout(typeEffect, 1300);
      return;
    }
  } else {
    charIndex = Math.max(charIndex - 1, 0);
    typing.textContent = currentText.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  typingTimer = window.setTimeout(
    typeEffect,
    deleting ? 38 : 75
  );
}

// Przełączanie motywu.
themeButton.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("light")
    ? "dark"
    : "light";

  applyTheme(nextTheme);
});

// Przełączanie PL / EN.
languageButton.addEventListener("click", () => {
  applyLanguage(currentLanguage === "pl" ? "en" : "pl");
});

// Aktualny rok w stopce.
if (year) {
  year.textContent = String(new Date().getFullYear());
}

// Animacje uruchamiamy tylko wtedy, gdy obsługuje je przeglądarka
// i użytkownik nie wybrał ograniczenia ruchu.
if (
  !reducedMotion.matches &&
  "IntersectionObserver" in window
) {
  document.documentElement.classList.add("js-motion");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });
}

// Przy pierwszej wizycie respektujemy ustawienie systemowe.
// Później stosujemy zapamiętany wybór użytkownika.
const savedTheme = readStorage("gabriel-theme");

const initialTheme =
  savedTheme ||
  (
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  );

applyTheme(initialTheme);
applyLanguage(currentLanguage);
