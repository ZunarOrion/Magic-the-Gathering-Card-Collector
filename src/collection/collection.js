import collectionCreate from "./collectionCreate.js";
import collectionDelete from "./collectionDelete.js";
import collectionEdit from "./collectionEdit.js";

export async function renderCollectionPage () {
    document.querySelector('#pageContent').innerHTML = `
        <h1 id="collection-Header">Collections</h1>
        <form method="post" id="collectionCreator" action="">
            <input id="collectionInput" type="text"></input>
            <button type="submit" id="create">Create</button>
        </form>
        <div id="collectionBox"></div>
        `;

        try {
        const collectionResponse = await fetch (
            "http://127.0.0.1:3000/form"
        );
        const collectionPosts = await collectionResponse.json();
        
        const collectionsDiv = document.getElementById("collectionBox");
        collectionsDiv.innerHTML = collectionPosts.map((post) => `
            <div id="collectionItem" data-id="${post._id}">
                <label id="collectionName">${post.collection}</label>
                <button class="edit-btn" data-id="${post._id}">Edit</button>
                <button class=delete-btn data-id="${post._id}">Delete</button>
            </div>
            `).join("");

        } catch (err) {
            console.error("Error fetching collections:", err);
        };

        collectionCreate();
        collectionDelete();
        collectionEdit();
};