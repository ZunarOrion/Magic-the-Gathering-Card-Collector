"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHomePage = renderHomePage;
var recentlyViewedCard_ts_1 = require("./recentlyViewedCard.ts");
var browseCard_ts_1 = require("../browse/browseCard.ts");
function renderHomePage() {
    document.querySelector("#pageContent").innerHTML = "\n        <div class=\"middleRow\">\n            <!--A button that sends the user to another html page for exp; cards that are hot on the market.-->\n            <button type=\"button\" id=\"browseCardBtn\">Browse Cards</button>\n\n            <!--A button that sends the user to another html page for their collections.-->\n            <button type=\"button\" class=\"myCollectionBtn\">My Collection</button>\n        </div>\n\n        <!--A slideshow that show the most recent cards the user has viewed, if not logged in it will show recently released sets.-->\n        <div id=\"recentlyViewedCards\">\n            <div class=\"slideshow-container\">\n\n            <div class=\"slides fade\">\n                <div class=\"numbertext\">1 / 3</div>\n                <img src=\"/mainProject/public/images/Naturbild1.jpg\">\n                <div class=\"text\">Card nr 1</div>\n            </div>\n\n            <div class=\"slides fade\">\n                <div class=\"numbertext\">2 / 3</div>\n                <img src=\"/mainProject/public/images/Naturbild1.jpg\">\n                <div class=\"text\">Card nr 2</div>\n            </div>\n\n            <div class=\"slides fade\">\n                <div class=\"numbertext\">3 / 3</div>\n                <img src=\"/mainProject/public/images/Naturbild1.jpg\">\n                <div class=\"text\">Card nr 3</div>\n            </div>\n\n            <a class=\"prev\">\u276E</a>\n            <a class=\"next\">\u276F</a>\n        </div>\n        <div style=\"text-align:center\">\n            <span class=\"dot\"></span> \n            <span class=\"dot\"></span> \n            <span class=\"dot\"></span> \n        </div>\n        </div>  \n    ";
    var browseCardBtn = document.querySelector("#browseCardBtn");
    console.log('browseCardBtn:', browseCardBtn);
    if (browseCardBtn) {
        console.log('Eventlistener has been added to browse!');
        browseCardBtn === null || browseCardBtn === void 0 ? void 0 : browseCardBtn.addEventListener("click", function () {
            console.log('Browse is being clicked!');
            (0, browseCard_ts_1.renderBrowseCardPage)();
        });
    }
    (0, recentlyViewedCard_ts_1.recentlyViewedCards)(document.querySelector('#recentlyViewedCards'));
}
