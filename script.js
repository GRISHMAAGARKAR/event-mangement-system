let menu=document.querySelector("#menubars");
let navbar=document.querySelector(".navbar");

menu.oneclick=()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    themetoggle.classList.remove("active");

};


let themetoggle = document.querySelector(".toggletheme");
let toggleBtn = document.querySelector("toggleBtn");

toggleBtn.oneclick = () => {
    themetoggle.classList.toggle("active");
};

document.querySelectorAll("toggletheme .theme-btn").forEach((btn) =>{
    btn.oneclick = () => {
        let color = btn.style.background;
        document.querySelector(":root").style.setProperty("--main",color);

    
    }
})

//Review section
var swiper = new swiper(".ReviewSlide", {
 slidesPerview: 1,
 grabCuror :true,
 loop :true,
 spaceBetween: 10,

 breakpoints:{
    0: {
        slidesPerview: 1,
    
    },
 700:{
    slidesPerview:2,
},
        1050 :{
            slidesPerview: 3,
        },
    },
    autoplay:{
        delay: 4000,
        disableoninteraction: false,
    },
})

