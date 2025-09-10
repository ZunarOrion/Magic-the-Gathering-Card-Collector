import collectionCreate from "./collectionCreate.js"

export function renderCollectionPage () {
    console.log("rendered collection page")
    document.querySelector('#pageContent').innerHTML = `
        <!--A function that creates boxes with information on to the page.-->
        <h1>Collections</h1>

        <!--A form input that sends new data into the db.-->
        <form id="collectionCreator" action="">
            <input id="collectionInput" type="text"></input>
            <button type="submit" id="create">Create</button>
        </form>

        <!--Image that show last card added to the collection.-->
        <!--<div id="collectionBox">
            <img id="collectionImg"></img>
            <p id="collectionName"></p>
            <button>Edit</button>
            <button>Delete</button>
        </div>-->
        `;

        collectionCreate();
};