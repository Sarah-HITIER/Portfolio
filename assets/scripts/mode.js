/**
 * Passage du dark mode au light mode et vice-versa
 */

var toggle = document.getElementById("darkmode");

function activeDark() {
    document.body.classList.remove("light-mode");
    toggle.checked = true;
    sessionStorage.setItem("mode", "dark"); // Enregistrer le mode choisi dans les données de la session de navigation
}

function activeLight() {
    document.body.classList.add("light-mode");
    toggle.checked = false;
    sessionStorage.setItem("mode", "light"); // Enregistrer le mode choisi dans les données de la session de navigation
}

(function () {
    if (sessionStorage.getItem("mode") == "light") {
        // Vérifier le mode choisi dans les données de la session de navigation
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
