import logInDb from "./logInDb.js";

export function renderLogInPage () {
    document.querySelector('#pageContent').innerHTML = `
        <h1>Login</h1>
        <div>
            <form id="logInForm">
                <input id="emailInput" placeholder="Email">
                <!--Only visible if invalid.<p>Invalid Email</p>-->
                <input type="password" id="passwordInput" placeholder="Password">
                <!--Only visible if invalid.<p>Invalid Password</p>-->
                
                <!--A button that checkes if the information given is matching any account in the database, if not return invalid Email or Password under inputfields.-->
                <button id="logInBtn">Login</button>
                </form>
            
    
            <!--Sends user to a creat account page.-->
            <p>Create account</p>
            <!--Sends user to a page where they can submit an email for a reset link to be set to.-->
            <p>Forgotten password?</p>
        </div>
    `;

    logInDb();
};