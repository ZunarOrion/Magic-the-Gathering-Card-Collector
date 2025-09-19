export function renderBrowseCardPage () {
    document.querySelector("#pageContent").innerHTML = `
    <!--A funciton that takes in the most recent cards released and creates small boxes for each card containing img, name and price.-->
    <div class="cardBox">
        <img class="cardImg"></img>
        <p class="cardName">Use your imagination and visualise a bunch of cards here :)</p>
        <p class="cardCost"></p>
    </div>
`;
};
// https://scryfall.com/docs/api