document.addEventListener('DOMContentLoaded', function() {
    const globalCardsContainer = document.getElementById("global-card");

    for (let i = 0; i < 4; i++) {
        fetch("components/global-card.html")
            .then(response => response.text())
            .then(html => {
                const newCard = document.createElement("div");
                newCard.classList.add("global-card");
                newCard.innerHTML = html;
                globalCardsContainer.appendChild(newCard);
            })
            .catch(error => console.error("Error loading global card:", error));
    }
});






