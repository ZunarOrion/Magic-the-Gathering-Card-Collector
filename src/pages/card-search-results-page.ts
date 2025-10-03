import { renderCardBox } from "../components/CardBox";

// funktioner 

export async function renderCardSearchResultsPage (data?: any) {
    let cardName = "";
    const pageContent = document.getElementById("#card-box");
    if (pageContent) {
        if (data)
            data.map((Cards: any[]) => (
                renderCardBox(Cards)
            ))
        pageContent.innerHTML = `
        <h1 id="search-card-title">Results from ${cardName}</h1>

        <div id="card-box"></div>
        `;
    };
};
