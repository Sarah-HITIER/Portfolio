(function () {
    let loader = document.getElementById("logo-loader");
    let text = document.getElementsByClassName("hero-column");
    window.setTimeout(function () {
        loader.classList.remove("logo-loader");
        loader.classList.add("logo-loader-hero");
        for(var i=0 ; i<text.length ; i++) {
            text[i].style.display = "flex";
        }
    }, 2000);
})();
