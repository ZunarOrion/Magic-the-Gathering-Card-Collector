import { renderCardBox } from "../components/CardBox.ts";

export async function cardSearcher(q: string) {
    const url = `https://api.scryfall.com/cards/search?q=${q}`;
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

export async function renderCardSearchResultsPage (data?: any[]) {
    let cardName = "";
    const pageContent = document.getElementById("#page-content");
    if (pageContent) {

        if (!data) return;

        pageContent.innerHTML = `
        <h1 id="search-card-title">Results from ${cardName}</h1>

        <div id="card-box"></div>
        `;

        if (data && data.length > 0) {
            renderCardBox(data);
        } else {
            const cardBox = document.getElementById("card-box");
            if (cardBox) {
                cardBox.innerHTML = "<p>No results found.</p>";
            };
        };
    };
};
