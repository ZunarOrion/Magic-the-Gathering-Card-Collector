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
    <h1 class="headline">Advanced Search</h1>

    <!--Shows what was put into the inputs from advancedSearch.ts, if empty than show only the p text.-->
    <p>No results from the search (insert what was in the input fields from advancedSearch.ts)</p>

    <!--A button that sends the user to another html page for advanced search.-->
    <button>Adjust Search</button>
`