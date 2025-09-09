import { renderHomePage } from './home/home.js'
// import './style.css'

const app = document.querySelector('#app');

if (!app) {
  console.error('#app not found in DOM');
} else {
  document.querySelector('#app').innerHTML = `
    <header> 
      <!--Button which sends the user back to main page.-->
      <!--Addeventlistener to buttons-->
      <button type="button" class="logoBtn">Logo!</button>

      <!--A searchbar that will show relavant responses to what is in the input field.-->
      <input type="text" placeholder="Search Card..." class="searchBar"></input>

      <!--A button that sends the user to another html page for advanced searches.-->
      <button type="button" class="advancedSearchBtn">Advanced Search</button>

      <!--A button that sends the user to another html page for logging in.-->
      <button type="button" class="logInBtn">Login</button>
      
    </header>

    <div id="pageContent"></div>
  `;
  renderHomePage();
}


