document.addEventListener('DOMContentLoaded', () => {
    fetch('components/new-prj-in-popular-areas.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('new-prj-in-popular-areas').innerHTML = html;
        });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch("components/global-card.html")
        .then(response => response.text())
        .then(html => {
            const globalCardContainer = document.getElementById("global-card");
            if (globalCardContainer) {
                globalCardContainer.innerHTML = html;
            } else {
                console.error("Elementul #global-card nu a fost găsit.");
            }
        })
        .catch(error => console.error("Error loading global card:", error));
});
