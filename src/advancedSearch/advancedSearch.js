document.querySelector('#app').innerHTML = `
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
    <h1 class="headline">Advanced Search</h1>

    <!--When filled with anything, looks after cards that match the asked for name. If unsuccessful, send user to noResults page.-->
    <div class="cardName">
        <h2>Card Name</h2>
        <input placeholder="Example:'Swamp'"></input>
        <p>Search for any words that appear in the card name.</p>
    </div>

    <!--When filled with anything, looks after cards that match the asked for text. If unsuccessful, send user to noResults page-->
    <div class="cardText">
        <h2>Card Text</h2>
        <input placeholder="Example:'Flying'"></input>
        <p>Search for any words and that appear in the card text.</p>
    </div>

    <!--When filled with anything, looks after cards that match the asked for type. If unsuccessful, send user to noResults page-->
    <div class="cardType">
        <h2>Types</h2>
        <input placeholder="Example:'LEgendary Artifact Creature'"></input>
        <p>Search for any card type, super type, or subtype.</p>
    </div>

    <!--When hit search for any matching cards with matching information from the inputs above. If fields are empty or couldnt find results, send user to noResults page.-->
    <button>SEARCH</button>
`