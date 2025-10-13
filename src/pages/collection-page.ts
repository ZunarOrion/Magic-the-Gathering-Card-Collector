export async function renderCollectionPage () {
    const pageContent = document.querySelector('#page-content');
    if (pageContent) {
        pageContent.innerHTML = `
            <h1 id="collection-Header">Collections</h1>
            <form method="post" id="collection-creator" action="">
                <input id="collection-input" type="text"></input>
                <button type="submit" id="create">Create</button>
            </form>
            <div id="collection-box"></div>
            `;
                
            try {
            const collectionResponse = await fetch (
                "https://magic-the-gathering-card-collector.onrender.com/form"
            );
            const collectionPosts = await collectionResponse.json();
            
            const collectionsDiv = document.getElementById("collection-box") as HTMLElement;
            collectionsDiv.innerHTML = collectionPosts.map((post: any) => `
                <div class="collection-item" data-id="${post._id}">
                    <label class="collection-name">${post.collection}</label>
                    <button class="edit-btn" data-id="${post._id}">Edit</button>
                    <button class=delete-btn data-id="${post._id}">Delete</button>
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
    let collectionName = "";
    const mySubmitButton = document.getElementById("create");
    if (mySubmitButton) {
        mySubmitButton.addEventListener("click", async (event) => {
            event.preventDefault();
            collectionName = (document.getElementById("collection-input") as HTMLInputElement).value
            try {
                const result = await fetch("https://magic-the-gathering-card-collector.onrender.com/form", {
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
                    const res = await fetch(`https://magic-the-gathering-card-collector.onrender.com/form/${id}`, {
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
                const res = await fetch(`https://magic-the-gathering-card-collector.onrender.com/form/${id}`, {
                    method: "DELETE",
                });
                if (res.ok) {
                    renderCollectionPage();
                }
            });
        });
    };
};