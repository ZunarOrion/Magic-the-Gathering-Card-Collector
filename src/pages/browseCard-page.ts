import { renderCardBox } from "../components/CardBox";

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

export async function renderBrowseCardPage (data?: any[]) {
    const pageContent = document.getElementById("#page-content");
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


export function sum(a: number, b: number) {
    return a + b
}
