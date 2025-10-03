// renderCardBox
export function renderCardBox (cards: any[]) {
    const cardBox = document.getElementById("card-box") as HTMLDivElement;
    cardBox.innerHTML = "";

    if (cards.length === 0) {
        console.log("Could not load any cards.");
    };

    cards.forEach(card => {
        const cardItem = document.createElement("div");

        const cardImg = document.createElement("img");
        cardImg.src = card.image_uris?.normal || "";
        cardImg.alt = card.name;

        const cardName = document.createElement("h3");
        cardName.textContent = card.name;

        const cardPrice = document.createElement("p");
        cardPrice.textContent = card.prices.eur
        ? `€${card.prices.eur}`
        : "Price not available";

        cardItem.appendChild(cardImg);
        cardItem.appendChild(cardName);
        cardItem.appendChild(cardPrice);
    
        cardBox.appendChild(cardItem);
    });
};