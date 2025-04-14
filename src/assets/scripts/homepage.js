// Import corresponding CSS styles
import "../styles/homepage.css";

// Import image 
import imageSource from "../img/homepage.jpg";

// Find added style sheet and attach an id to it
const stylesheets = document.querySelectorAll("head style");
const pageStylesheet = stylesheets[stylesheets.length-1];
pageStylesheet.id = "homepage";

// page title element
const pageTitle = "The Burger Joint";

// function to load page
const loadPage = () => {
  // Enable style
  enableStyle();
    
  // Find content Div element
  const contentContainer = document.querySelector("div#content");

  // Make necessary children
  const childrenArray = []; // array that will contain children elements

  const headingContainer = document.createElement("div");
  headingContainer.classList.add("heading-container");
  childrenArray.push(headingContainer);

  const mainHeadingTop = document.createElement("h1");
  mainHeadingTop.classList.add("top");
  mainHeadingTop.textContent = "The";
  headingContainer.appendChild(mainHeadingTop);

  const mainHeadingBottom = document.createElement("h1");
  mainHeadingBottom.classList.add("bottom");
  mainHeadingBottom.textContent = "Burger Joint";
  headingContainer.appendChild(mainHeadingBottom);

  const subHeading1 = document.createElement("h3");
  subHeading1.classList.add("sub-heading-1");
  subHeading1.textContent = "Delicious Burgers.";
  headingContainer.appendChild(subHeading1);

  const subHeading2 = document.createElement("h3");
  subHeading2.classList.add("sub-heading-2");
  subHeading2.textContent = "Cold Beers.";
  headingContainer.appendChild(subHeading2);

  const subHeading3 = document.createElement("h3");
  subHeading3.classList.add("sub-heading-3");
  subHeading3.textContent = "All Night Long.";
  headingContainer.appendChild(subHeading3);

  const image = document.createElement("img");
  image.src = imageSource;
  image.setAttribute("alt","plate with delicious burger and fries and beer on table");
  // childrenArray.push(image);

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

// function to return page title
const getTitle = () => {
  return pageTitle;
}

export {loadPage, disableStyle, getTitle};