const formLogin = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
    formLogin.classList.toggle("active");
}
const navBar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    navBar.classList.toggle("active");
}

window.onscroll = () => {
    formLogin.classList.remove("active");
    navBar.classList.remove("active");

    if(window.scrollY > 0){
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
}

window.onload = () => {
    

    if(window.scrollY > 0){
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
}