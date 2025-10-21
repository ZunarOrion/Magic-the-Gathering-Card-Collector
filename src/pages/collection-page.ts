import { validateCollectionName } from "../components/validators";

export async function renderCollectionPage () {
    const pageContent = document.querySelector('#page-content');
    if (pageContent) {
        pageContent.innerHTML = `
            <h1 id="collection-title">Collections</h1>
            <form method="post" id="collection-creator" action="">
                <input id="collection-input" type="text"></input>
                <button type="submit" id="create">Create</button>
            </form>
            <div id="collection-box"></div>
            `;
                
            try {
            const collectionResponse = await fetch (
                "/form"
            );
            const collectionPosts = await collectionResponse.json();
            
            const collectionsDiv = document.getElementById("collection-box") as HTMLElement;
            collectionsDiv.innerHTML = collectionPosts.map((data: any) => `
                <div class="collection-item" data-id="${data._id}">
                    <img class="collection-image" src="/images/Magic-Card-Back.jpg"></img>
                    <label class="collection-name">${data.collection}</label>
                    <button class="edit-btn" data-id="${data._id}">Edit</button>
                    <button class="delete-btn" data-id="${data._id}">Delete</button>
                </div>
                `).join("");
    
                collectionEdit();
                collectionDelete();
            } catch (err) {
                console.error("Error fetching collections:", err);
            };
    
        collectionCreate();
    };
};

export function collectionCreate () {
    const mySubmitButton = document.getElementById("create");
    if (mySubmitButton) {
        mySubmitButton.addEventListener("click", async (event) => {
            event.preventDefault();
            const rawInput = (document.getElementById("collection-input") as HTMLInputElement).value;
            const collectionName = validateCollectionName(rawInput);
            if (!collectionName) {
                alert("Invalid collection name.");
                return;
            };

            try {
                const result = await fetch("/form", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({ collection: collectionName })
                });
                const newItem = await result.json();
                console.log("Created:", collectionName ,newItem);
                if (!result.ok) {
                    throw new Error(`POST failed: ${result.status}`);
                };
                await new Promise(resolve => setTimeout(resolve, 100));
                await renderCollectionPage();
            } catch (err) {
                console.log("Error creating collection:", err);
            };
        });
    };
};

export function collectionEdit () {
    const editButton = document.querySelectorAll(".edit-btn");
    if (editButton) {
        let collectionName = document.querySelector<HTMLLabelElement>(".collection-name")?.innerText;
        editButton.forEach((btn) => {
            btn.addEventListener("click", async () => {
                const id = btn.getAttribute("data-id");
                const newName = prompt("Edit collection name:");
                if (newName) {
                    const res = await fetch(`/form/${id}`, {
                        method: "PUT",
                        headers: {
                        "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ collection: newName })
                    });
                    console.log(`${collectionName}'s new name: ${newName}`);
                    if (res.ok) {
                        renderCollectionPage();
                    };
                };
            });
        });
    };
};

export function collectionDelete () {
    const deleteButton = document.querySelectorAll(".delete-btn");
    if (deleteButton) {
        let collectionName = document.querySelector<HTMLLabelElement>(".collection-name")?.innerText;
        deleteButton.forEach((btn) => {
            btn.addEventListener("click", async () => {
                const id = btn.getAttribute("data-id");
                console.log(`Deleted: ${collectionName}`);
                const res = await fetch(`/form/${id}`, {
                    method: "DELETE",
                });
                if (res.ok) {
                    renderCollectionPage();
                }
            });
        });
    };
};
