import { recentlyViewedCards } from './recentllyViewedCard.ts'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header> 
    <!--Button which sends the user back to main page.-->
    <button type="button" class="logoBtn">Logo!</button>

    <!--A searchbar that will show relavant responses to what is in the input field.-->
    <input type="text" placeholder="Search Card..." class="searchBar"></input>

    <!--A button that sends the user to another html page for advanced searches.-->
    <button type="button" class="advancedSearchBtn">Advanced Search</button>

    <!--A button that sends the user to another html page for logging in.-->
    <button type="button" class="logInBtn">Login</button>
  </header>

  <div class="middleRow">
    <!--A button that sends the user to another html page for exp; cards that are hot on the market.-->
    <button type="button" class="findCardBtn">Find Cards</button>

    <!--A button that sends the user to another html page for their collections.-->
    <button type="button" class="myCollectionBtn">My Collection</button>
  </div>
  
  <!--A slideshow that show the most recent cards the user has viewed, if not logged in it will show recently released sets.-->
  <div id="recentlyViewedCards">
    <div class="slideshow-container">

      <div class="slides fade">
        <div class="numbertext">1 / 3</div>
        <img src="Naturbild1.jpg">
        <div class="text">Card nr 1</div>
      </div>

      <div class="slides fade">
        <div class="numbertext">2 / 3</div>
        <img src="Naturbild2.jpg">
        <div class="text">Card nr 2</div>
      </div>

      <div class="slides fade">
        <div class="numbertext">3 / 3</div>
        <img src="Naturbild3.jpg">
        <div class="text">Card nr 3</div>
      </div>

      <a class="prev">❮</a>
      <a class="next">❯</a>

    </div>

    <div style="text-align:center">
        <span class="dot"></span> 
        <span class="dot"></span> 
        <span class="dot"></span> 
    </div>
  </div>  
`
recentlyViewedCards(document.querySelector<HTMLDivElement>('#recentlyViewedCards')!)

