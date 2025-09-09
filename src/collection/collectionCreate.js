export default function () {
    let collectionName = ""
    const mySubmitButton = document.getElementById("create");
    console.log(mySubmitButton)
    mySubmitButton.addEventListener("click", async (event) => {
        event.preventDefault();
        collectionName = document.getElementById("collectionInput").value
        console.log(collectionName);
        const result = await fetch("http://127.0.0.1:3000/form", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({Collection: collectionName})
        });
        console.log(result);
    });
}

