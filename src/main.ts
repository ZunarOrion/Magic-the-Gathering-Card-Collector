import { renderHomePage } from './pages/home/home-page.js';

const app = document.querySelector('#app');

if (!app) {
  console.error('#app not found in DOM');
} else {
  app.innerHTML = `
    <header> 
      <button type="button" id="logo-btn">Logo!</button>

      <input type="text" placeholder="Search Card..." class="search-bar"></input>
      <button type="button" id="card-search-btn">Search</button>

      <button type="button" id="advanced-search-btn">Advanced Search</button>

      <button type="button" id="login-btn">Login</button>
      
    </header>

    <div id="page-content"></div>
  `;
  renderHomePage();
};


