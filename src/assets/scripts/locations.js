// Import corresponding CSS styles
import "../styles/locations.css";

// Import menu data
import {locationList} from "../data/location-data";

// page title element
const pageTitle = "Locations";

// Find added style sheet and attach an id to it
const stylesheets = document.querySelectorAll("head style");
const pageStylesheet = stylesheets[stylesheets.length-1];
pageStylesheet.id = "locations";

// function to load page
const loadPage = () => {
  // Enable style
  enableStyle();
    
  // Find content Div element
  const contentContainer = document.querySelector("div#content");

  // Create page heading
  contentContainer.appendChild(createHeading(pageTitle));

  // Add contents of menu data to Div element
  contentContainer.appendChild(createLocations(locationList));

}

// createSection: creates document element out of section object imported from locations module
// parameters: {location: String, image: String, address: String, phone: String, hours: String}
// returns: div sectionElement

function createSection(locationSection) {
  // create section container element
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("section");
  sectionElement.setAttribute("data-id", locationSection.location);

  // create child elements for section container
  const sectionHeading = document.createElement("h2");
  sectionHeading.textContent = locationSection.location;
  sectionElement.appendChild(sectionHeading);

  //create container for lcoationn content
  const locationContent = document.createElement("div");
  locationContent.classList.add("content");
  sectionElement.appendChild(locationContent);

  // create child elements for location content
  const sectionImage = document.createElement("img");
  sectionImage.setAttribute("src", locationSection.image);
  sectionImage.setAttribute("alt", locationSection.imageAlt);
  locationContent.appendChild(sectionImage);

  // create container for information elements
  const sectionInfoContainer = document.createElement("div");
  sectionInfoContainer.classList.add("info-container");
  locationContent.appendChild(sectionInfoContainer);

  //create child elements for information container
  const addressContainer = document.createElement("div");
  addressContainer.classList.add("address");
  sectionInfoContainer.appendChild(addressContainer);

  for (const string of locationSection.address){
    const addressElement = document.createElement("p");
    addressElement.textContent = string;
    addressContainer.appendChild(addressElement);
  }

  const phoneContainer = document.createElement("div");
  phoneContainer.classList.add("phone");
  sectionInfoContainer.appendChild(phoneContainer);

  const phoneElement = document.createElement("p");
  phoneElement.textContent = locationSection.phone;
  phoneContainer.appendChild(phoneElement);

  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("hours");
  sectionInfoContainer.appendChild(hoursContainer);
  
  for (const string of locationSection.hours){
    const hoursElement = document.createElement("p");
    hoursElement.textContent = string;
    hoursContainer.appendChild(hoursElement);
  }

  return sectionElement;
}

// createLocations: locations content in page from locations sections list imported from module
// parameters: [Object]
// returns: div locationContentElement

function createLocations(locationList) {
  const locationContentElement = document.createElement("div");
  locationContentElement.classList.add("location-content");
  for (const section of locationList) {
    locationContentElement.appendChild(createSection(section));
  }
  return locationContentElement;
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

// function to return page title
const getTitle = () => {
  return pageTitle;
}

export {loadPage, disableStyle, getTitle};