/**
 * Retirer le header et le footer pendant le loader puis d'afficher la page index quand le loader est fini
 */
(function () {
    if (
        location.pathname === "/public/" ||
        location.pathname === "/public/index.html"
    ) {
        let header = document.getElementById("header");
        let header_mobile = document.getElementById("header-mobile");
        let loader = document.getElementById("logo-loader");
        let text = document.getElementsByClassName("hero-column");
        let footer = document.getElementById("footer");

        header.style.display = "none";
        header_mobile.style.display = "none";
        if (footer) footer.style.display = "none";

        window.setTimeout(function () {
            header.style.display = "flex";
            header_mobile.style.display = "flex";
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
    let real_link = document.getElementById("real_link");
    let comp_link = document.getElementById("comp_link");
    let exp_link = document.getElementById("exp_link");
    if (
        location.pathname === "/public/benchkatalog.html" ||
        location.pathname === "/public/etais-la-sauvin.html" ||
        location.pathname === "/public/quizzy.html"
    ) {
        real_link.classList.add("active");
    } else if (location.pathname === "/public/competences.html") {
        comp_link.classList.add("active");
    } else if (location.pathname === "/public/experiences.html") {
        exp_link.classList.add("active");
    }
})();
