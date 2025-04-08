// Import corresponding CSS styles
import "../styles/about.css";


// Find added style sheet and attach an id to it
const stylesheets = document.querySelectorAll("head style");
const pageStylesheet = stylesheets[stylesheets.length-1];
pageStylesheet.id = "about";

// function to load page
const loadPage = () => {
  // Enable style
  enableStyle();
    
  // Find content Div element
  const contentContainer = document.querySelector("div#content");

  // Make necessary children
  const childrenArray = []; // array that will contain children elements


  // Add children to content Div
  for (const childElement of childrenArray) {
    contentContainer.appendChild(childElement);
  }

}

// function to enable stylesheet
function enableStyle() {
  pageStylesheet.disabled = false;
}

// function to disable stylesheet
const disableStyle = () => {
  pageStylesheet.disabled = true;
}

export {loadPage, disableStyle};