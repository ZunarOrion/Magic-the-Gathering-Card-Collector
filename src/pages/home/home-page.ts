import { renderCardSearchResultsPage } from '../card-search-results-page.js';
import { cardSearcher } from './cardSearcher.js';
import { renderAdvancedSearchPage } from '../advancedSearch-page.js';
import { renderLogInPage } from '../logIn-page.js';
import { renderBrowseCardPage } from '../browseCard-page.js';
import { renderCollectionPage } from '../collection-page.js';
import { recentlyViewedCards } from './recentlyViewedCard.js';

export function renderHomePage () {
    const pageContent = document.querySelector("#page-content");
    if (pageContent) {
        pageContent.innerHTML = `
            <div class="middle-row">
                <button type="button" id="browse-card-btn">Browse Cards</button>
    
                <button type="button" id="my-collection-btn">My Collection</button>
            </div>
    
            <div id="recently-viewed-cards">
                <div class="slideshow-container">
    
                <div class="slides fade">
                    <div class="number-text">1 / 3</div>
                    <img src="/images/Placeholder-Naturbild1.jpg">
                    <div class="text">Card nr 1</div>
                </div>
    
                <div class="slides fade">
                    <div class="number-text">2 / 3</div>
                    <img src="/images/Placeholder-Naturbild2.jpg">
                    <div class="text">Card nr 2</div>
                </div>
    
                <div class="slides fade">
                    <div class="number-text">3 / 3</div>
                    <img src="/images/Placeholder-Naturbild3.jpg">
                    <div class="text">Card nr 3</div>
                </div>
    
                <a class="prev">❮</a>
                <a class="next">❯</a>
            </div>
            <div id="dots">
                <span class="dot"></span> 
                <span class="dot"></span> 
                <span class="dot"></span> 
            </div>
            </div>  
        `;
    
        const logoBtn = document.querySelector("#logo-btn");
        if (logoBtn) {
            logoBtn.addEventListener("click", () => {
                renderHomePage();
            });
        };
    
        const cardSearchInput = document.querySelector("#card-search-input") as HTMLInputElement;
        const cardSearchbtn = document.querySelector("#card-search-btn") as HTMLButtonElement;
        if (cardSearchbtn && cardSearchInput) {
            cardSearchbtn.addEventListener("click", async () =>{
                const query = cardSearchInput.value.trim();
                const searchResult = await cardSearcher(query);

                if (searchResult) {
                    renderCardSearchResultsPage(searchResult);
                };
            });
        };

        const advancedSearchBtn = document.querySelector("#advanced-search-btn");
        if (advancedSearchBtn) {
            advancedSearchBtn.addEventListener("click", () => {
                renderAdvancedSearchPage();
            });
        };
    
        const logInBtn = document.querySelector("#login-btn");
        if (logInBtn) {
            logInBtn.addEventListener("click", () => {
                renderLogInPage();
            });
        };
    
        const browseCardBtn = document.querySelector("#browse-card-btn");
        if (browseCardBtn) {
            browseCardBtn.addEventListener("click", () => {
                renderBrowseCardPage();
            });
        };
    
        const myCollectionBtn = document.querySelector("#my-collection-btn");
        if (myCollectionBtn) {
            myCollectionBtn.addEventListener("click", () => {
                renderCollectionPage();
            });
        };
    
        const recentlyViewedCard = document.querySelector("#recently-viewed-cards") as HTMLElement;
        if (recentlyViewedCard) {
            recentlyViewedCards(recentlyViewedCard);
        };
    };
};
