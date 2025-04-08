// Import CSS styles
import "./assets/styles/common-styles.css";
import * as homepage from "./assets/scripts/homepage.js";
import * as menu from "./assets/scripts/menu.js";
import * as about from "./assets/scripts/about.js";
import * as locations from "./assets/scripts/locations.js";

// currentPage variable will hold curretnly active page.
let currentPage = menu;

// Find content Div element
const contentContainer = document.querySelector("div#content");

// Find elements used to switch between pages
const logo = document.querySelector("div.logo");
const menuBtn = document.querySelector("button.menu");
const aboutBtn = document.querySelector("button.about");
const locationsBtn = document.querySelector("button.locations");

// Make array of objects relating an element to a corresponding page object
const pageBtns = [
  {element: logo, page: homepage},
  {element: menuBtn, page: menu},
  {element: aboutBtn, page: about},
  {element: locationsBtn, page: locations}
]

// Add event listeners to array
linkPages(pageBtns);

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

// linkPages: takes a list of objects relating an element and a page module
//            and adds an event listener to load page when element is clicked
// Parameters: [{element, object}] pageBtnList
// Return: N/A
function linkPages(pageBtnList) {
  for (const button of pageBtnList) {
    button.element.addEventListener("click", () => {
      loadPage(button.page);
    })
  }
}
