import { renderCardBox } from "../components/CardBox";

//A function for fetching 9 random cards into an array from the Scryfall API.
export async function browseCardSearcher(count: number = 9): Promise<any[]> {
    const url = `https://api.scryfall.com/cards/random`;
    const cards = [];
    try {
        for (let i = 0; i < count; i++) {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            };
            const card = await response.json();
            cards.push(card);
        };
        return cards;
    } catch (error) {
        console.error((error as Error).message);
        return [];
    };
};

//A function for slicing the array into 9 pieces to be used in the renderCardBox function.
export async function renderBrowseCardPage (data?: any[]) {
    const pageContent = document.getElementById("page-content");
    if (pageContent) {
        pageContent.innerHTML = `
        <h1 id="browse-card-title">Browse Cards</h1>

        <div id="card-box"></div>
        `;

        try {
            if (data && data.length > 0) {
                renderCardBox(data.slice(0, 9));
            } else {
                const cardBox = document.getElementById("card-box");
                if (cardBox) {
                    cardBox.innerHTML = "<p>No cards were able to be found.</p>"
                }
            };
        } catch (err) {
            console.error("Unexpected error:", err);
        };
    };
};
