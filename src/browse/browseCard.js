export function renderBrowseCardPage () {
    return document.querySelector("#pageContent").innerHTML = `
    <header> 
        <!--Button which sends the user back to main page.-->
        <button type="button" class="logoBtn">Logo!</button>

        <!--A searchbar that will show relavant responses to what is in the input field.-->
        <input type="text" placeholder="Search Card..." class="searchBar"></input>

        <!--A button that sends the user to another html page for advanced searches.-->
        <button type="button" class="advancedSearchBtn">Advanced Search</button>

        <!--A button that sends the user to another html page for logging in.-->
        <button type="button" class="logInBtn">Login</button>
    </header>

    <!--A funciton that takes in the most recent cards released and creates small boxes for each card containing img, name and price.-->
    <div class="cardBox">
        <img class="cardImg"></img>
        <p class="cardName"></p>
        <p class="cardCost"></p>
    </div>
`;
}