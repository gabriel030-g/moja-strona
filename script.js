
"use strict";

const translations = {
  pl: {
    languageLabel:"Wybierz język", skipLink:"Przejdź do treści",
    navAbout:"O mnie", navSkills:"Umiejętności", navProjects:"Projekty", navContact:"Kontakt",
    heroEyebrow:"MOJE PORTFOLIO", heroTitle:"Cześć, jestem Gabriel 👋",
    location:"📍 Polska · 💻 Tworzę strony internetowe",
    heroDescription:"Rozwijam swoje umiejętności programistyczne i tworzę własne projekty webowe.",
    heroButton:"Zobacz moje projekty", aboutKicker:"KILKA SŁÓW O MNIE",
    aboutTitle:"O mnie", aboutText:"Jestem początkującym frontend developerem. Uczę się HTML, CSS oraz JavaScript. Buduję własne projekty i rozwijam swoje umiejętności.",
    skillsKicker:"NARZĘDZIA, KTÓRYCH UŻYWAM", skillsTitle:"Moje technologie", futureSkill:"React (w przyszłości)",
    projectsKicker:"RZECZY, KTÓRE ZBUDOWAŁEM", projectsTitle:"Moje projekty",
    projectsIntro:"Kilka projektów, dzięki którym ćwiczę tworzenie stron i aplikacji.",
    portfolioTitle:"🌐 Portfolio Website", portfolioDescription:"Moja strona portfolio, stworzona przy użyciu HTML, CSS oraz JavaScript.",
    todoTitle:"✅ Aplikacja To Do", todoDescription:"Aplikacja do zarządzania zadaniami, wykonana w JavaScript.",
    weatherTitle:"☁️ Aplikacja pogodowa", weatherDescription:"Aplikacja pogodowa wykorzystująca API.",
    portfolioAlt:"Podgląd strony portfolio", todoAlt:"Podgląd aplikacji do zadań", weatherAlt:"Podgląd aplikacji pogodowej",
    codeButton:"Kod źródłowy", demoButton:"Demo", openProject:"Otwórz projekt", comingSoon:"Wkrótce",
    contactKicker:"POROZMAWIAJMY", contactTitle:"Kontakt",
    contactText:"Chcesz zobaczyć mój kod albo śledzić moje kolejne projekty? Znajdziesz mnie na GitHubie.",
    githubProfile:"Odwiedź mój profil GitHub", backToTop:"Wróć na górę ↑",
    themeToLight:"Włącz tryb jasny", themeToDark:"Włącz tryb ciemny",
    typing:["Początkujący Frontend Developer 🚀","Tworzę strony internetowe 💻","Uczę się JavaScript ⚡","Buduję własne projekty 🔥"]
  },
  en: {
    languageLabel:"Choose language", skipLink:"Skip to content",
    navAbout:"About", navSkills:"Skills", navProjects:"Projects", navContact:"Contact",
    heroEyebrow:"MY PORTFOLIO", heroTitle:"Hi, I'm Gabriel 👋",
    location:"📍 Poland · 💻 I build websites",
    heroDescription:"I'm improving my programming skills and building my own web projects.",
    heroButton:"Explore my projects", aboutKicker:"A LITTLE ABOUT ME",
    aboutTitle:"About me", aboutText:"I'm a beginner frontend developer learning HTML, CSS, and JavaScript. I build personal projects and keep improving my skills.",
    skillsKicker:"TOOLS I USE", skillsTitle:"My technologies", futureSkill:"React (in the future)",
    projectsKicker:"THINGS I'VE BUILT", projectsTitle:"My projects",
    projectsIntro:"A few projects I use to practise building websites and applications.",
    portfolioTitle:"🌐 Portfolio Website", portfolioDescription:"My portfolio website, built with HTML, CSS, and JavaScript.",
    todoTitle:"✅ To Do App", todoDescription:"A task management app built with JavaScript.",
    weatherTitle:"☁️ Weather App", weatherDescription:"A weather application that uses an API.",
    portfolioAlt:"Portfolio website preview", todoAlt:"To-do app preview", weatherAlt:"Weather app preview",
    codeButton:"Source code", demoButton:"Live demo", openProject:"Open project", comingSoon:"Coming soon",
    contactKicker:"LET'S CONNECT", contactTitle:"Contact",
    contactText:"Want to see my code or follow my upcoming projects? Find me on GitHub.",
    githubProfile:"Visit my GitHub profile", backToTop:"Back to top ↑",
    themeToLight:"Switch to light mode", themeToDark:"Switch to dark mode",
    typing:["Beginner Frontend Developer 🚀","I build websites 💻","Learning JavaScript ⚡","Building personal projects 🔥"]
  },
  de: {
    languageLabel:"Sprache auswählen", skipLink:"Zum Inhalt springen",
    navAbout:"Über mich", navSkills:"Fähigkeiten", navProjects:"Projekte", navContact:"Kontakt",
    heroEyebrow:"MEIN PORTFOLIO", heroTitle:"Hallo, ich bin Gabriel 👋",
    location:"📍 Polen · 💻 Ich erstelle Websites",
    heroDescription:"Ich verbessere meine Programmierkenntnisse und entwickle eigene Webprojekte.",
    heroButton:"Meine Projekte ansehen", aboutKicker:"EIN WENIG ÜBER MICH",
    aboutTitle:"Über mich", aboutText:"Ich bin angehender Frontend-Entwickler und lerne HTML, CSS und JavaScript. Ich entwickle eigene Projekte und verbessere meine Fähigkeiten.",
    skillsKicker:"MEINE WERKZEUGE", skillsTitle:"Meine Technologien", futureSkill:"React (zukünftig)",
    projectsKicker:"MEINE ARBEITEN", projectsTitle:"Meine Projekte",
    projectsIntro:"Einige Projekte, mit denen ich das Erstellen von Websites und Apps übe.",
    portfolioTitle:"🌐 Portfolio-Website", portfolioDescription:"Meine Portfolio-Website, erstellt mit HTML, CSS und JavaScript.",
    todoTitle:"✅ Aufgaben-App", todoDescription:"Eine Aufgaben-App, entwickelt mit JavaScript.",
    weatherTitle:"☁️ Wetter-App", weatherDescription:"Eine Wetter-App, die eine API verwendet.",
    portfolioAlt:"Vorschau der Portfolio-Website", todoAlt:"Vorschau der Aufgaben-App", weatherAlt:"Vorschau der Wetter-App",
    codeButton:"Quellcode", demoButton:"Live-Demo", openProject:"Projekt öffnen", comingSoon:"Demnächst",
    contactKicker:"LASS UNS VERNETZEN", contactTitle:"Kontakt",
    contactText:"Möchtest du meinen Code sehen oder meine nächsten Projekte verfolgen? Du findest mich auf GitHub.",
    githubProfile:"Mein GitHub-Profil besuchen", backToTop:"Nach oben ↑",
    themeToLight:"Helles Design aktivieren", themeToDark:"Dunkles Design aktivieren",
    typing:["Angehender Frontend-Entwickler 🚀","Ich erstelle Websites 💻","Ich lerne JavaScript ⚡","Ich entwickle eigene Projekte 🔥"]
  },
  es: {
    languageLabel:"Elegir idioma", skipLink:"Saltar al contenido",
    navAbout:"Sobre mí", navSkills:"Habilidades", navProjects:"Proyectos", navContact:"Contacto",
    heroEyebrow:"MI PORTAFOLIO", heroTitle:"Hola, soy Gabriel 👋",
    location:"📍 Polonia · 💻 Creo sitios web",
    heroDescription:"Estoy mejorando mis habilidades de programación y creando mis propios proyectos web.",
    heroButton:"Ver mis proyectos", aboutKicker:"UN POCO SOBRE MÍ",
    aboutTitle:"Sobre mí", aboutText:"Soy desarrollador frontend principiante y estoy aprendiendo HTML, CSS y JavaScript. Creo proyectos propios y sigo mejorando mis habilidades.",
    skillsKicker:"HERRAMIENTAS QUE USO", skillsTitle:"Mis tecnologías", futureSkill:"React (en el futuro)",
    projectsKicker:"LO QUE HE CREADO", projectsTitle:"Mis proyectos",
    projectsIntro:"Algunos proyectos con los que practico la creación de sitios web y aplicaciones.",
    portfolioTitle:"🌐 Sitio de portafolio", portfolioDescription:"Mi sitio de portafolio, creado con HTML, CSS y JavaScript.",
    todoTitle:"✅ Aplicación de tareas", todoDescription:"Una aplicación para gestionar tareas, desarrollada con JavaScript.",
    weatherTitle:"☁️ Aplicación del tiempo", weatherDescription:"Una aplicación meteorológica que utiliza una API.",
    portfolioAlt:"Vista previa del portafolio", todoAlt:"Vista previa de la aplicación de tareas", weatherAlt:"Vista previa de la aplicación del tiempo",
    codeButton:"Código fuente", demoButton:"Ver demo", openProject:"Abrir proyecto", comingSoon:"Próximamente",
    contactKicker:"CONECTEMOS", contactTitle:"Contacto",
    contactText:"¿Quieres ver mi código o seguir mis próximos proyectos? Puedes encontrarme en GitHub.",
    githubProfile:"Visita mi perfil de GitHub", backToTop:"Volver arriba ↑",
    themeToLight:"Activar modo claro", themeToDark:"Activar modo oscuro",
    typing:["Desarrollador frontend principiante 🚀","Creo sitios web 💻","Aprendo JavaScript ⚡","Creo proyectos propios 🔥"]
  },
  fr: {
    languageLabel:"Choisir la langue", skipLink:"Aller au contenu",
    navAbout:"À propos", navSkills:"Compétences", navProjects:"Projets", navContact:"Contact",
    heroEyebrow:"MON PORTFOLIO", heroTitle:"Salut, je suis Gabriel 👋",
    location:"📍 Pologne · 💻 Je crée des sites web",
    heroDescription:"Je développe mes compétences en programmation et crée mes propres projets web.",
    heroButton:"Voir mes projets", aboutKicker:"QUELQUES MOTS SUR MOI",
    aboutTitle:"À propos de moi", aboutText:"Je suis développeur frontend débutant et j'apprends HTML, CSS et JavaScript. Je crée mes propres projets et améliore mes compétences.",
    skillsKicker:"MES OUTILS", skillsTitle:"Mes technologies", futureSkill:"React (à l'avenir)",
    projectsKicker:"MES RÉALISATIONS", projectsTitle:"Mes projets",
    projectsIntro:"Quelques projets pour pratiquer la création de sites web et d'applications.",
    portfolioTitle:"🌐 Site portfolio", portfolioDescription:"Mon site portfolio, créé avec HTML, CSS et JavaScript.",
    todoTitle:"✅ Application de tâches", todoDescription:"Une application de gestion des tâches développée en JavaScript.",
    weatherTitle:"☁️ Application météo", weatherDescription:"Une application météo utilisant une API.",
    portfolioAlt:"Aperçu du portfolio", todoAlt:"Aperçu de l'application de tâches", weatherAlt:"Aperçu de l'application météo",
    codeButton:"Code source", demoButton:"Démo", openProject:"Ouvrir le projet", comingSoon:"Bientôt disponible",
    contactKicker:"RESTONS EN CONTACT", contactTitle:"Contact",
    contactText:"Vous souhaitez voir mon code ou suivre mes prochains projets ? Retrouvez-moi sur GitHub.",
    githubProfile:"Visiter mon profil GitHub", backToTop:"Retour en haut ↑",
    themeToLight:"Activer le mode clair", themeToDark:"Activer le mode sombre",
    typing:["Développeur frontend débutant 🚀","Je crée des sites web 💻","J'apprends JavaScript ⚡","Je développe mes projets 🔥"]
  }
};

const $ = (selector) => document.querySelector(selector);
const themeButton = $("#theme-toggle");
const languageSelect = $("#language-toggle");
const typing = $("#typing");
const year = $("#year");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function readStorage(key) {
  try { return localStorage.getItem(key); }
  catch { return null; }
}

function writeStorage(key, value) {
  try { localStorage.setItem(key, value); }
  catch { /* Strona nadal działa bez pamięci lokalnej. */ }
}

let currentLanguage = readStorage("gabriel-language");
if (!translations[currentLanguage]) currentLanguage = "pl";

let typingTimer = null;
let textIndex = 0;
let charIndex = 0;
let deleting = false;

function updateThemeButton() {
  if (!themeButton) return;
  const light = document.body.classList.contains("light");
  const label = translations[currentLanguage][light ? "themeToDark" : "themeToLight"];
  themeButton.textContent = light ? "🌙" : "☀️";
  themeButton.setAttribute("aria-label", label);
  themeButton.title = label;
}

function applyTheme(theme) {
  const light = theme === "light";
  document.body.classList.toggle("light", light);
  writeStorage("gabriel-theme", light ? "light" : "dark");
  updateThemeButton();
}

function typeEffect() {
  if (!typing || reducedMotion.matches) return;

  const texts = translations[currentLanguage].typing;
  const text = texts[textIndex];

  if (!deleting) {
    charIndex = Math.min(charIndex + 1, text.length);
    typing.textContent = text.slice(0, charIndex);

    if (charIndex >= text.length) {
      deleting = true;
      typingTimer = window.setTimeout(typeEffect, 1300);
      return;
    }
  } else {
    charIndex = Math.max(charIndex - 1, 0);
    typing.textContent = text.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  typingTimer = window.setTimeout(typeEffect, deleting ? 38 : 75);
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "pl";
  const dict = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  writeStorage("gabriel-language", currentLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dict[element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = dict[element.dataset.i18nAlt];
    if (typeof value === "string") element.alt = value;
  });

  if (languageSelect) {
    languageSelect.value = currentLanguage;
    languageSelect.setAttribute("aria-label", dict.languageLabel);
    languageSelect.title = dict.languageLabel;
  }

  if (typing) {
    if (typingTimer !== null) window.clearTimeout(typingTimer);
    typingTimer = null;
    textIndex = 0;
    charIndex = 0;
    deleting = false;

    if (reducedMotion.matches) {
      typing.textContent = dict.typing[0];
    } else {
      typing.textContent = "";
      typeEffect();
    }
  }

  updateThemeButton();
}

if (themeButton) {
  themeButton.addEventListener("click", () => {
    applyTheme(document.body.classList.contains("light") ? "dark" : "light");
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    applyLanguage(languageSelect.value);
  });
}

if (year) year.textContent = String(new Date().getFullYear());

if (!reducedMotion.matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("js-motion");

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

const savedTheme = readStorage("gabriel-theme");
const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;

applyTheme(savedTheme || (systemLight ? "light" : "dark"));
applyLanguage(currentLanguage);
