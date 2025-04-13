// Import corresponding CSS styles
import "../styles/menu.css";

// Import menu data
import {menuList} from "../data/menu-data";

// page title element
const pageTitle = "Menu";

// Find added style sheet and attach an id to it
const stylesheets = document.querySelectorAll("head style");
const pageStylesheet = stylesheets[stylesheets.length - 1];
pageStylesheet.id = "menu";

// function to load page
const loadPage = () => {
  // Enable style
  enableStyle();

  // Find content Div element
  const contentContainer = document.querySelector("div#content");

  // Create page heading
  contentContainer.appendChild(createHeading(pageTitle));

  // Add contents of menu data to Div element
  contentContainer.appendChild(createMenu(menuList));

};

// createItem: creates document element out of item object in a menu's section
// parameters: {item: String,Price: Int,Description: Strinf
// returns: div itemElement
function createItem(menuItem) {
  // create container for item
  const itemElement = document.createElement("div");
  itemElement.classList.add("item");

  // create child elements for item container
  const nameElement = document.createElement("p");
  nameElement.classList.add("item");
  nameElement.textContent = `${menuItem.item} | ${menuItem.price}`;
  itemElement.appendChild(nameElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("description");
  descriptionElement.textContent = menuItem.description;
  itemElement.appendChild(descriptionElement);

  return itemElement;
}

// createSection: creates document element out of section object imported from menu module
// parameters: {heading: String, content: [Object], comment: String (optional)}
// returns: div sectionElement

function createSection(menuSection) {
  // create section container element
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("section");
  sectionElement.setAttribute("data-id", menuSection.heading);

  // create child elements for section container
  const sectionHeading = document.createElement("h2");
  sectionHeading.textContent = menuSection.heading;
  sectionElement.appendChild(sectionHeading);

  const sectionContent = document.createElement("div");
  sectionContent.classList.add("section-content");
  // loop to add a section's menu items to the section
  for (const item of menuSection.content) {
    sectionContent.appendChild(createItem(item));
  }
  sectionElement.appendChild(sectionContent);

  // if section comment property exists, add to section
  if (Object.hasOwn(menuSection, "comment")) {
    const sectionComment = document.createElement("p");
    sectionComment.classList.add("comment");
    sectionComment.textContent = menuSection.comment;
    sectionElement.appendChild(sectionComment);
  }

  return sectionElement;
}

// createMenu: menu content in page from menu sections list imported from module
// parameters: [Object]
// returns: div menuContentElement

function createMenu(menuList) {
  const menuContentElement = document.createElement("div");
  menuContentElement.classList.add("menu-content");
  for (const section of menuList) {
    menuContentElement.appendChild(createSection(section));
  }
  return menuContentElement;
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
};

export { loadPage, disableStyle };
