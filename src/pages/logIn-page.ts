export function renderLogInPage () {
    const pageContent = document.querySelector('#page-content');
    if (pageContent) {
        pageContent.innerHTML = `
            <h1>Login</h1>
            <div>
                <input placeholder="Email"></input>
                <!--Only visible if invalid.<p>Invalid Email</p>-->
                <input placeholder="Password"></input>
                <!--Only visible if invalid.<p>Invalid Password</p>-->
                
                <button>Login</button>
        
                <p>Create account</p>
                <p>Forgotten password?</p>
            </div>
        `;
    };
};