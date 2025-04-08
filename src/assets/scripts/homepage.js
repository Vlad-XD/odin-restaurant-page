// Import corresponding CSS styles
import "../styles/homepage.css";

// Import image 
import imageSource from "../img/homepage.jpg";

// Find added style sheet and attach an id to it
const stylesheets = document.querySelectorAll("head style");
const homepageStylesheet = stylesheets[stylesheets.length-1];
homepageStylesheet.id = "homepage";

// function to load page
const loadPage = () => {
  // Enable style
  enableStyle();
    
  // Find content Div element
  const contentContainer = document.querySelector("div#content");

  // Make necessary children
  const childrenArray = []; // array that will contain children elements

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "The Burger Joint";
  childrenArray.push(mainHeading);

  const subHeading1 = document.createElement("h3.sub-heading-1");
  subHeading1.textContent = "Delicious Burgers.";
  childrenArray.push(subHeading1);

  const subHeading2 = document.createElement("h3.sub-heading-2");
  subHeading2.textContent = "Cold Beers.";
  childrenArray.push(subHeading2);

  const subHeading3 = document.createElement("h3.sub-heading-3");
  subHeading3.textContent = "All Night Long.";
  childrenArray.push(subHeading3);

  const image = document.createElement("img");
  image.src = imageSource;
  image.setAttribute("alt","plate with delicious burger and fries and beer on table");
  childrenArray.push(image);

  // Add children to content Div
  for (const childElement of childrenArray) {
    contentContainer.appendChild(childElement);
  }

}

// function to enable stylesheet
function enableStyle() {
  homepageStylesheet.disabled = false;
}

// function to disable stylesheet
const disableStyle = () => {
  homepageStylesheet.disabled = true;
}

export {loadPage, disableStyle};