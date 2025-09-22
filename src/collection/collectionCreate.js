import { renderCollectionPage } from "./collection.js";

export default function () {
    let collectionName = "";
    const mySubmitButton = document.getElementById("create");
    mySubmitButton.addEventListener("click", async (event) => {
        event.preventDefault();
        collectionName = document.getElementById("collectionInput").value
        try {
        console.log(collectionName);
        const result = await fetch("http://127.0.0.1:3000/form", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ collection: collectionName })
        });
        const newItem = await result.json();
        console.log("Created:", newItem);
        if (!result.ok) {
            throw new Error(`POST failed: ${result.status}`);
        }
        await new Promise(resolve => setTimeout(resolve, 100));
        await renderCollectionPage();
    } catch (err) {
        console.log("Error creating collection:", err);
    }
});
};