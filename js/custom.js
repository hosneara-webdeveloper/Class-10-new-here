window.addEventListener("scroll", (e) => {
    const nav = document.querySelector(".header");
    if (window.pageYOffset > 0) {
        nav.classList.add("menu");

    } else {
        nav.classList.remove("menu");
    }

});