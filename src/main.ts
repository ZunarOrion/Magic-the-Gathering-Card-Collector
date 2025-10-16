import { cardSearcher, renderCardSearchResultsPage } from './pages/card-search-results-page.js';
import { renderHomePage } from './pages/home/home-page.js';

const app = document.querySelector('#app');

if (!app) {
  console.error('#app not found in DOM');
} else {
  app.innerHTML = `
    <header> 
      <button type="button" id="logo-btn">Logo!</button>

      <div class="search-container">
        <input type="text" id="card-search-input" placeholder="Search Card..."></input>
        <button type="button" id="card-search-btn">Search</button>
      </div>
        </header>

    <div id="page-content"></div>
  `;

          const logoBtn = document.querySelector("#logo-btn");
          if (logoBtn) {
              logoBtn.addEventListener("click", () => {
                  renderHomePage();
              });
          };
      
          const cardSearchInput = document.querySelector("#card-search-input") as HTMLInputElement;
          const cardSearchbtn = document.querySelector("#card-search-btn") as HTMLButtonElement;
          if (cardSearchbtn && cardSearchInput) {
              cardSearchbtn.addEventListener("click", async () =>{
                  const query = cardSearchInput.value.trim();
                  const searchResult = await cardSearcher(query);
  
                  if (searchResult) {
                      renderCardSearchResultsPage(searchResult, query);
                  };
              });
          };

  renderHomePage();
};
