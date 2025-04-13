// Import corresponding CSS styles
import "../styles/about.css";

// Import image
import aboutImageSrc from "../img/aboutImage.jpg";
const aboutImageAlt = "Picture of Lalo and Ed";

// page title element
const pageTitle = "About";

// description text for about section
const aboutTextContent = "From a very early age, Lalo and Ed knew knew they were passionate about two things: beer and burgers. Tired of countless hungry nights in the middle of a daunting Vegas bar crawl, they decided to make a bar where you can sit down, have some cold beer, some delicious food and have a good time all night long. Expertly crafted burgers are the staple of this joint, made from fresh ingredients deliberately picked out in-house to accentuate the depth of flavors contained within the burgers. And if all that right there just went over your head, you're in luck, we have just the thing for you: Cold beer. All night long. With 1/2 off happy hour specials from 12am to 3am to keep the party going without breaking your wallet. So what are you waiting for? Come join Lalo and Ed at the Burger Joint tonight!";

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

  // Create page heading
  contentContainer.appendChild(createHeading(pageTitle));

  // Create page content container
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-content");
  contentContainer.appendChild(aboutContainer);

  //Create children for content container
  const aboutImage = document.createElement("img");
  aboutImage.setAttribute("src",aboutImageSrc);
  aboutImage.setAttribute("alt",aboutImageAlt);
  aboutContainer.appendChild(aboutImage);

  const aboutText = document.createElement("p");
  aboutText.textContent = aboutTextContent;
  aboutContainer.appendChild(aboutText);

}

// createHeading: creates heading element for page from passed heading text
// parameters: String pageTitle
// returns: div pageHeadingContainer

function createHeading(pageTitle) {
  const pageHeadingContainer = document.createElement("div");
  pageHeadingContainer.classList.add("page-heading");
  const pageHeading = document.createElement("h1");
  pageHeading.textContent = pageTitle;
  pageHeadingContainer.appendChild(pageHeading);
  return pageHeadingContainer;
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