"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderBrowseCardPage = renderBrowseCardPage;
function renderBrowseCardPage() {
    return document.querySelector("#pageContent").innerHTML = "\n    <header> \n        <!--Button which sends the user back to main page.-->\n        <button type=\"button\" class=\"logoBtn\">Logo!</button>\n\n        <!--A searchbar that will show relavant responses to what is in the input field.-->\n        <input type=\"text\" placeholder=\"Search Card...\" class=\"searchBar\"></input>\n\n        <!--A button that sends the user to another html page for advanced searches.-->\n        <button type=\"button\" class=\"advancedSearchBtn\">Advanced Search</button>\n\n        <!--A button that sends the user to another html page for logging in.-->\n        <button type=\"button\" class=\"logInBtn\">Login</button>\n    </header>\n\n    <!--A funciton that takes in the most recent cards released and creates small boxes for each card containing img, name and price.-->\n    <div class=\"cardBox\">\n        <img class=\"cardImg\"></img>\n        <p class=\"cardName\"></p>\n        <p class=\"cardCost\"></p>\n    </div>\n";
}
