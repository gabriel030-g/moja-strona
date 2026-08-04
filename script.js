const sections = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


});



sections.forEach(section=>{

observer.observe(section);

});const text = document.querySelector("#typing");


const words = [
    "Początkujący Frontend Developer 🚀",
    "Tworzę strony internetowe 💻",
    "Uczę się JavaScript ⚡",
    "Buduję własne projekty 🔥"
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;



function typingEffect(){


const currentWord = words[wordIndex];


if(!deleting){

    text.textContent =
    currentWord.substring(0,charIndex++);

    
    if(charIndex > currentWord.length){

        deleting = true;

        setTimeout(typingEffect,1500);

        return;

    }


}else{


    text.textContent =
    currentWord.substring(0,charIndex--);


    if(charIndex === 0){

        deleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;

        }

    }


}


setTimeout(
typingEffect,
deleting ? 50 : 100
);


}


typingEffect();