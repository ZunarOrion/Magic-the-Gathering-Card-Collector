"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_ts_1 = require("./home/home.ts");
require("./style.css");
console.log('Script loaded');
var app = document.querySelector('#app');
console.log('app element:', app);
if (!app) {
    console.error('#app not found in DOM');
}
else {
    document.querySelector('#app').innerHTML = "\n    <header> \n      <!--Button which sends the user back to main page.-->\n      <!--Addeventlistener to buttons-->\n      <button type=\"button\" class=\"logoBtn\">Logo!</button>\n\n      <!--A searchbar that will show relavant responses to what is in the input field.-->\n      <input type=\"text\" placeholder=\"Search Card...\" class=\"searchBar\"></input>\n\n      <!--A button that sends the user to another html page for advanced searches.-->\n      <button type=\"button\" class=\"advancedSearchBtn\">Advanced Search</button>\n\n      <!--A button that sends the user to another html page for logging in.-->\n      <button type=\"button\" class=\"logInBtn\">Login</button>\n      \n    </header>\n\n    <div id=\"pageContent\"></div>\n  ";
    console.log('Layout injected');
    (0, home_ts_1.renderHomePage)();
}
