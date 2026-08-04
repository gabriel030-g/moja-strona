// =========================
// ANIMACJA SEKCJI SCROLL
// =========================

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});


sections.forEach(section => {

    observer.observe(section);

});




// =========================
// ZMIENIAJĄCY SIĘ TEKST
// =========================


const typing = document.querySelector("#typing");


const texts = [

    "Początkujący Frontend Developer 🚀",

    "Tworzę strony internetowe 💻",

    "Uczę się JavaScript ⚡",

    "Buduję własne projekty 🔥"

];


let textIndex = 0;
let charIndex = 0;
let deleting = false;



function typeEffect(){


    let current = texts[textIndex];


    if(!deleting){

        typing.textContent =
        current.substring(0,charIndex);

        charIndex++;


        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }


    } else {


        typing.textContent =
        current.substring(0,charIndex);


        charIndex--;


        if(charIndex === 0){

            deleting = false;

            textIndex++;


            if(textIndex >= texts.length){

                textIndex = 0;

            }

        }

    }


    setTimeout(typeEffect,80);

}


typeEffect();
// =========================
// TRYB JASNY / CIEMNY
// =========================


const themeButton = document.querySelector("#theme-toggle");


themeButton.addEventListener("click", ()=>{


    document.body.classList.toggle("light");


    if(document.body.classList.contains("light")){

        themeButton.textContent="🌙";

    } else {

        themeButton.textContent="☀️";

    }


});
// =========================
// ANIMACJA PROJEKTÓW
// =========================


const projects = document.querySelectorAll(".project-card");


const projectObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{

    threshold:0.2

});



projects.forEach(project=>{

    projectObserver.observe(project);

});