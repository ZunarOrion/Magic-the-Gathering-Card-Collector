import { browseCardSearcher, renderBrowseCardPage } from '../browseCard-page.js';
import { renderCollectionPage } from '../collection-page.js';
import { recentlyViewedCards } from './recentlyViewedCard.js';

export function renderHomePage () {
    const pageContent = document.querySelector("#page-content");
    if (pageContent) {
        pageContent.innerHTML = `
            <div class="middle-row">
                <button type="button" id="browse-card-btn">Browse Cards</button>
    
                <button type="button" id="my-collections-btn">My Collections</button>
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

        //An eventlistener for when navigating into the browse card page
        const browseCardBtn = document.querySelector("#browse-card-btn");
        if (browseCardBtn) {
            browseCardBtn.addEventListener("click", async () => {
                const cards = await browseCardSearcher();
                renderBrowseCardPage(cards);
            });
        };
    
        //An eventlistener for when navigating into the my collections page
        const myCollectionsBtn = document.querySelector("#my-collections-btn");
        if (myCollectionsBtn) {
            myCollectionsBtn.addEventListener("click", () => {
                renderCollectionPage();
            });
        };
    
        //A slideshow presenting a few cards onto the front page.
        const recentlyViewedCard = document.querySelector("#recently-viewed-cards") as HTMLElement;
        if (recentlyViewedCard) {
            recentlyViewedCards(recentlyViewedCard);
        };
    };
};
