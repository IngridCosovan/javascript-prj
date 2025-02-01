function initNewListings() {
    const propertiesContainer = document.getElementById("properties-container");
    const templateCard = document.getElementById("template-card");

    for (let i = 1; i < 8; i++) {
        const clonedCard = templateCard.cloneNode(true);
        propertiesContainer.appendChild(clonedCard);
    }

    templateCard.removeAttribute("id");
}

