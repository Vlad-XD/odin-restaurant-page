// Import CSS styles
import "./assets/styles/common-styles.css";
import * as homepage from "./assets/scripts/homepage.js";

// currentPage variable will hold curretnly active page.
let currentPage = homepage;

// Find content Div element
const contentContainer = document.querySelector("div#content");

// Make array of objects connecting button to corresponding page objects


// Add event listeners to array

//TODO:DELETE AFTER TESTING
const testBtn = document.querySelector("button.home");
testBtn.addEventListener("click", ()=> {
  clearContent();
});

// Initial state: we want to start in our homepage
currentPage.loadPage();

// clearContent: clears contents of content Div
// Parameters: N/A
// Return: N/A
function clearContent() {
  while(contentContainer.firstChild){
    contentContainer.removeChild(contentContainer.lastChild);
  }
}

// unloadPage: clears contents of current page and disables style
// Parameters: object page
// Return: N/A
function unloadPage(page) {
  clearContent();
  page.disableStyle();
}

// loadPage: clears contents of current page and loads new page
// Parameters: object page
// Return: N/A
function loadPage(page) {
  unloadPage(currentPage);
  page.loadPage()
  currentPage = page;
}

