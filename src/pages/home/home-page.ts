import { renderAdvancedSearchPage } from '../advancedSearch-page.js';
import { renderLogInPage } from '../logIn-page.js';
import { renderBrowseCardPage } from '../browseCard-page.js';
import { renderCollectionPage } from '../collection-page.js';
import { recentlyViewedCards } from './recentlyViewedCard.js';
import { cardSearcher } from './cardSearcher.js';

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
    
    const cardSearchbtn = document.querySelector("card-search-btn");
        if (cardSearchbtn) {
            cardSearchbtn.addEventListener("click", async () => {
                // hämta data
                const searchResult = await cardSearcher(data);
                // rendera sida med data eller ingen data
                // await data 
                // const content = data ? data : ingen data 
                // card search page (content)
                // const data = await cardSearcher();
                // renderCardSearchResultsPage(data);
                // vid klick sök på kort sen rendrera om kortet hittades eller ej
                // datan som behövs är cards
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
    } else {
        console.log("not found.")
    }
    
    
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
