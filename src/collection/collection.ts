document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
    <div class="collectionBox">
        <img class="collectionImg"></img>
        <p class="collectionName"></p>
        <button>Edit</button>
        <button>Delete</button>
    </div>


    <div class="createCollectionWindow">
    <input></input>
    <button>Create</button>
    <button>Canel</button>
    </div>
`