/**
 * Retirer le header et le footer pendant le loader puis afficher la page index quand le loader est fini
 */
(function () {
    if (
        location.pathname === "/public/" ||
        location.pathname === "/public/index.html"
    ) {
        let header = document.getElementById("header");
        let loader = document.getElementById("logo-loader");
        let text = document.getElementsByClassName("hero-column");
        let footer = document.getElementById("footer");

        header.style.display = "none";
        if (footer) footer.style.display = "none";

        window.setTimeout(function () {
            header.style.display = "flex";
            loader.classList.remove("logo-loader");
            loader.classList.add("logo-loader-hero");
            footer.style.display = "flex";
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "flex";
            }
        }, 2000);
    }
})();

/**
 * Ajouter la classe "active" sur le lien de la page courante
 */
(function () {
    let real_link = document.getElementsByClassName("real_link");
    let comp_link = document.getElementsByClassName("comp_link");
    let exp_link = document.getElementsByClassName("exp_link");
    if (
        location.pathname === "/public/benchkatalog.html" ||
        location.pathname === "/public/etais-la-sauvin.html" ||
        location.pathname === "/public/quizzy.html"
    ) {
        for (var i = 0; i < real_link.length; i++) {
            real_link[i].classList.add("active");
        }
    } else if (location.pathname === "/public/competences.html") {
        for (var i = 0; i < comp_link.length; i++) {
            comp_link[i].classList.add("active");
        }
    } else if (location.pathname === "/public/experiences.html") {
        for (var i = 0; i < exp_link.length; i++) {
            exp_link[i].classList.add("active");
        }
    }
})();
