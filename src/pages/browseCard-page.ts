import { renderCardBox } from "../components/CardBox";

// https://scryfall.com/docs/api
export async function browseCardSearcher() {
    const url = `https://api.scryfall.com/cards/random`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        };

        const result = await response.json();
        console.log(result.data.length);
        return result.data;
    } catch (error) {
        console.error((error as Error).message);
        return null;
    };
};

export async function renderBrowseCardPage () {
    const pageContent = document.getElementById("#page-content");
    if (pageContent) {
        pageContent.innerHTML = `
        <h1 id="browse-card-title">Browse Cards</h1>

        <div id="card-box"></div>
        `;

        try {
            const cards = await browseCardSearcher();
            if ( cards && cards.length > 0) {
                renderCardBox(cards.slice(0, 9));
            } else {
                console.warn("No cards found.");
            };
        } catch (err) {
            console.error("Unexpected error:", err);
        };
    };
};
