var toggle = document.getElementById("darkmode");

function activeDark() {
    document.body.classList.remove("light-mode");
    toggle.checked = true;
    sessionStorage.setItem("mode", "dark");
}

function activeLight() {
    document.body.classList.add("light-mode");
    toggle.checked = false;
    sessionStorage.setItem("mode", "light");
}

(function () {
    if (sessionStorage.getItem("mode") == "light") {
        activeLight();
    } else {
        activeDark();
    }

    toggle.addEventListener("change", function () {
        if (toggle.checked) {
            activeDark();
        } else {
            activeLight();
        }
    });
})();
