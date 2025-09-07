import { recentlyViewedCards } from './recentlyViewedCard.ts'
import { renderBrowseCardPage } from '../browse/browseCard.ts'

export function renderHomePage () {
    return document.querySelector("#pageContent")!.innerHTML = `
        <div class="middleRow">
            <!--A button that sends the user to another html page for exp; cards that are hot on the market.-->
            <button type="button" id="browseCardBtn">Browse Cards</button>

            <!--A button that sends the user to another html page for their collections.-->
            <button type="button" class="myCollectionBtn">My Collection</button>
        </div>

        <!--A slideshow that show the most recent cards the user has viewed, if not logged in it will show recently released sets.-->
        <div id="recentlyViewedCards">
            <div class="slideshow-container">

            <div class="slides fade">
                <div class="numbertext">1 / 3</div>
                <img src="/images/Naturbild1.jpg">
                <div class="text">Card nr 1</div>
            </div>

            <div class="slides fade">
                <div class="numbertext">2 / 3</div>
                <img src="/images/Naturbild2.jpg">
                <div class="text">Card nr 2</div>
            </div>

            <div class="slides fade">
                <div class="numbertext">3 / 3</div>
                <img src="/images/Naturbild3.jpg">
                <div class="text">Card nr 3</div>
            </div>

            <a class="prev">❮</a>
            <a class="next">❯</a>
        </div>
        <div style="text-align:center">
            <span class="dot"></span> 
            <span class="dot"></span> 
            <span class="dot"></span> 
        </div>
        </div>  
    `;

recentlyViewedCards(document.querySelector<HTMLDivElement>('#recentlyViewedCards')!)

const browseCardBtn = document.querySelector("#browseCardBtn");
console.log('browseCardBtn:', browseCardBtn);
if (browseCardBtn) {
    console.log('Eventlistener has been added to browse!');
    browseCardBtn?.addEventListener("click", () => {
        console.log('Browse is being clicked!');
        renderBrowseCardPage();
    });
}
}

