export function renderCollectionPage () {
    document.querySelector('#pageContent').innerHTML = `
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
        <!--A function that creates boxes with information on to the page.-->
        <h1>Collections</h1>

        <!--A button that opens a small window (createCollectionWindow) to write in an input, create collection or canel.-->
        <button class="createCollectionBtn">Create a Collection</button>

        <!--Image that show last card added to the collection.-->
        <div id="collectionBox">
            <img id="collectionImg"></img>
            <p id="collectionName"></p>
            <button>Edit</button>
            <button>Delete</button>
        </div>

        <!--A form input that sends new data into the db.-->
        <form id="collectionCreator">
            <input id="collectionInput" type="text"></input>
            <button id="create">Create</button>
            <button id="abort">Canel</button>
        </form>
`
}