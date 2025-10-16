import { renderCardBox } from "../components/CardBox.ts";

//A function for fetching any card matching whats in the searchbar field if possible into an array from the Scryfall API.
export async function cardSearcher(q: string): Promise<any[]> {
    const url = `https://api.scryfall.com/cards/search?q=${q}`;
    try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            };
            const data = await response.json();
        return data.data;
    } catch (error) {
        console.error((error as Error).message);
        return [];
    };
};

//A function that checks how many objects there are in the array of cards and sends it of to the renderCardBox function.
export async function renderCardSearchResultsPage (data: any[], query: string) {
    const pageContent = document.getElementById("page-content");
    if (pageContent) {

        if (!data) return;

        pageContent.innerHTML = `
        <h1 id="search-card-title">Results from ${query}</h1>

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
