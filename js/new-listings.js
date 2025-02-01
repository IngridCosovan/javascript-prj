function initNewListings() {
    const propertiesContainer = document.getElementById("properties-container");
    const templateCard = document.getElementById("template-card");

    for (let i = 1; i < 8; i++) {
        const clonedCard = templateCard.cloneNode(true);
        propertiesContainer.appendChild(clonedCard);
    }

    templateCard.removeAttribute("id");

    const allCards = propertiesContainer.querySelectorAll('.property-card');
    for (let i = 4; i < allCards.length; i++) {
        allCards[i].style.display = 'none';
    }
}

function toggleListings() {
    const propertiesContainer = document.getElementById("properties-container");
    const allCards = propertiesContainer.querySelectorAll('.property-card');
    const arrow = document.getElementById('arrow');

    let visibleCount = 0;
    allCards.forEach(card => {
        if (card.style.display !== 'none') {
            visibleCount++;
        }
    });

    if (visibleCount === 4) {
        for (let i = 4; i < 8; i++) {
            allCards[i].style.display = 'block';
        }
        arrow.innerHTML = '&#8593;';
    } else {
        for (let i = 4; i < allCards.length; i++) {
            allCards[i].style.display = 'none';
        }
        arrow.innerHTML = '&#8595;';
    }
}

document.getElementById("view-listings-btn").addEventListener("click", toggleListings);
window.onload = initNewListings;

