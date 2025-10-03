export function renderAdvancedSearchPage () {
    const pageContent = document.querySelector('#page-content');
    if (pageContent) {
        pageContent.innerHTML = `
            <h1 class="headline">Advanced Search</h1>
        
            <div class="card-name">
                <h2>Card Name</h2>
                <input placeholder="Example:'Swamp'"></input>
                <p>Search for any words that appear in the card name.</p>
            </div>
        
            <div class="card-text">
                <h2>Card Text</h2>
                <input placeholder="Example:'Flying'"></input>
                <p>Search for any words and that appear in the card text.</p>
            </div>
        
            <div class="card-type">
                <h2>Types</h2>
                <input placeholder="Example:'LEgendary Artifact Creature'"></input>
                <p>Search for any card type, super type, or subtype.</p>
            </div>
        
            <button>SEARCH</button>
        `;
    };
};