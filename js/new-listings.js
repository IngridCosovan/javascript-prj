function initNewListings() {
    const propertiesContainer = document.getElementById("properties-container");
    const templateCard = document.getElementById("template-card");

    if (!templateCard) {
        return;
    }

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
    const arrowImg = document.getElementById('arrow-img');  // Selectăm imaginea săgeată

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

        arrowImg.classList.add('arrow-up');
    } else {
        for (let i = 4; i < allCards.length; i++) {
            allCards[i].style.display = 'none';
        }

        arrowImg.classList.remove('arrow-up');
    }
}


