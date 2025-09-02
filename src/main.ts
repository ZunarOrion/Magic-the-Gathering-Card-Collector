import { recentlyViewedCards } from './recentllyViewedCard.ts'
import { findCardBtn } from './findCardBtn.ts'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="topRow"> 
    <button type="button" class="logoBtn">Logo!</button>
    <input type="text" placeholder="Search Card..." class="searchBar"></input>
    <button type="button" class="advancedSearchBtn">Advanced Search</button>
    <button type="button" class="logInBtn">Login</button>
  </div>
  <div class="middleRow">
    <button type="button" class="findCardBtn">Find Cards</button>
    <button type="button" class="myCollectionBtn">My Collection</button>
  </div>
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
findCardBtn(document.querySelector<HTMLButtonElement>('#findCardBtn')!)
