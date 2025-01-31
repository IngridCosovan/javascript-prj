
    // Crearea unui singur card HTML
    const cardHTML = `
        <div class="property-card">
            <img src="/src/img/room.png" alt="Property Image"/>
            <div class="property-info">
                <p>Clementi | Condominium</p>
                <h4>The Menti</h4>
                <h3>S$1,600,000.00</h3>
                <div class="icons-container">
                    <div class="bed icon"><img alt="Bed Icon" src="/src/img/bed.svg"><span>3</span></div>
                    <div class="bath icon"><img alt="Bath Icon" src="/src/img/bath.svg"><span>2</span></div>
                    <div class="ruler icon"><img alt="Ruler Icon" src="/src/img/ruler.svg"><span>1,119 sqft</span></div>
                </div>
            </div>
        </div>
    `;

    const container = document.getElementById("cards-container");
    // Repetarea cardului de 8 ori
    for (let i = 0; i < 8; i++) {
        container.innerHTML += cardHTML; // Adaugă fiecare card în container
    }
