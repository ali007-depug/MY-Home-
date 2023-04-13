const mybtn = document.querySelector("#btn");

// show scroll button when user scroll down 30px

function scrollF() {
    if (document.documentElement.scrollTop > 30) {
        mybtn.style.cssText = "display:block";
    }
    else
        mybtn.style.cssText = "display:none";
}
// calling above function
window.onscroll = function () {
    scrollF();
}

mybtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})
// End scroll button 

// burger menu
const header = document.querySelector("header")
const links = document.querySelector(".links");
const menu = document.querySelector("#menu");
const ul = document.querySelector("#ul");
const overlay = document.querySelector(".overlay")

menu.addEventListener("click", () => {
    if (header.classList.contains("open")) {
      header.classList.remove("open"); // menu
      // hide menu with slide animation
      ul.classList.remove("show-anim");
      ul.classList.add("hide-anim");

      // hide overlay
      overlay.classList.remove("fade-in");
      overlay.classList.add("fade-out");

    }
    else {
        header.classList.add("open") //show menu
        // show menu with slide animation
        ul.classList.add("show-anim");
        ul.classList.remove("hide-anim")

        // show overlay
        overlay.classList.add("fade-in");
        overlay.classList.remove("fade-out")
        ul.style.cssText = "display:block";
    }
})
