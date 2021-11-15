(function () {
    let loader = document.getElementById("logo-loader");
    window.setTimeout(function () {
        console.log(loader);
        loader.classList.remove("logo-loader");
        loader.classList.add("logo-loader-hero");
    }, 2000);
})();
