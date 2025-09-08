let myName = ""
const mySubmitButton = document.getElementById("submit") as HTMLSelectElement;
mySubmitButton.addEventListener("click", async (event) => {
    event.preventDefault()
    myName = document.getElementById("myInput")!.value;
    console.log(myName);
    const result = await fetch("http://127.0.0.1:3000/form", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({name: myName})
    });
    console.log(result);
});

