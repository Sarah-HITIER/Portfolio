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
