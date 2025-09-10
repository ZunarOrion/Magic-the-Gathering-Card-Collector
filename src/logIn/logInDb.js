export default function () {
    const logInButton = document.getElementById("logInForm");
    console.log(logInButton);
    logInButton.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("emailInput").value
        console.log("Email", email);
        const password = document.getElementById("passwordInput").value
        console.log("Password", password);
        const result = await fetch("http://127.0.0.1:3000/form", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(
                {userEmail: email},
                {userPassword: password}
            )
        });
        console.log("Result", result);
    });
};

