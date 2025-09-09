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

    <h1>Login</h1>
    <div>
        <input placeholder="Email"></input>
        <!--Only visible if invalid.--><p>Invalid Email</p>
        <input placeholder="Password"></input>
        <!--Only visible if invalid.--><p>Invalid Password</p>
        
        <!--A button that checkes if the information given is matching any account in the database, if not return invalid Email or Password under inputfields.-->
        <button>Login</button>

        <!--Sends user to a creat account page.-->
        <p>Create account</p>
        <!--Sends user to a page where they can submit an email for a reset link to be set to.-->
        <p>Forgotten password?</p>
    </div>
`