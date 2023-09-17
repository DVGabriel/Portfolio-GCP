// toggle icon navbar
let menuIcon = document.getElementById("menu-icon")
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");

})

// scroll sections

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach((sec)=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector('header nav a[href*='+ id +']').classList.add("active");
            });
            // active sections for animatio on scroll
            sec.classList.add("show-animate");
        }
        else{
            sec.classList.remove("show-animate");

        }

    })
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY >100);

    //remove toggle icon and navbar when click navbar links

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

  
}

// submit of email

const btn = document.getElementById("button");
const form = document.getElementById("form")

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_74mglhw';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('message sent successfully');
      form.reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


/* theme Dark

const btnDark = document.querySelector(".theme-dark")
const data = document.querySelectorAll("[data-dark]");

btnDark.addEventListener("click",()=>{

    let moon = "🌙";
    let sun = "🌞"

    if(btnDark.textContent === sun){
       data.forEach((el) => el.classList.add("dark-mode"))
       btnDark.textContent = moon;
    }else{
        data.forEach((el) => el.classList.remove("dark-mode"))
       btnDark.textContent = sun;
    }

})
*/

/* 
const themeDarkButton = document.querySelector(".theme-dark");
const spanWithAnimate = themeDarkButton.querySelector(".animate");

const puntoDeDesplazamiento = 90;

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  if (scrollY >= puntoDeDesplazamiento) {
    themeDarkButton.style.display = 'none';
  } else {
    themeDarkButton.style.display = 'block';
    spanWithAnimate.remove();
  }
});
*/


// language portfolio

const check = document.querySelector(".check");

check.addEventListener("click", language);

function language(){
    let id = check.checked;

    if(id=== true){
        location.href="../index.html";
    }else{
        location.href="./en/index_en.html"
    }
}

const languageClass = document.querySelector(".btn-language");

const puntoDeDesplazamiento = 90;

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  if (scrollY >= puntoDeDesplazamiento) {
    languageClass.style.display = 'none';
  } else {
    languageClass.style.display = 'block';
  }
});

