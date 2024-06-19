## Phase 2 Project - Climate Action Directory React App 

## Climate Action Directory summary

If you want to get involved in the fight against climate change, but feel overwhelmed about where to start, the Climate Action Directory is for you. 

The web aplication lists organisations actively combating the climate crisis, conveniently categorised for user's ease. 

The web application also provides a list of  simple, everyday actions users can take to help improve the climate crisis on a small scale. 

Users can also add an organisation to the directory by submitting a form with the organisation's details. 

## Project detail 

The Climate Action Directory web application is my response to the Academi Xi Front-End Web Development: Transform course, Phase 2 Project. 

As per the project requirements, the web applications is a React  single page application using create-react-app that accesses data from a json-server. I have deployed my json-server on Render (www.render.com), which is where I am fetching my data from for this project. 

The web application uses more than five components to keep my code well organised, with more than three client-side routes using React Router. 

I am using a json-server to create a RESTful API for my backend and am making both a GET and a POST request to the json server, using a form to make my post request, specifically a controlled form/component.

I have added styling using CSS. 

## Web application data

The data I am using on the web application is on a json-server, which I have deployed on Render. During my QA the data has loaded with no delay or issues, however, if you are not able to see any categories on the Directory page, or any organisations listed when you navigate to a category, please note that this will be due to delays in the data loading and will be an issue with render.com and not the site itself. 

If the issue persists please get in touch with me so I can troubleshoot and fix any issue there might be. 

## Getting started

Please use Chrome as your browser for the best experience. 

The app has only been tested on Chrome and Safari, which are the most commonly used browsers in Australia (source: https://gs.statcounter.com/browser-market-share/all/australia).

## Web application features and functionality

The web application has ten components, each with its own key features and functionality.

**App component**
The App component serves as the main entry point for the application and manages a directory of organisations. It sets up routing to different pages using React Router, fetches and maintains a list of organisations from a server, and provides functionality to add new organisations. The component also includes navigation, a footer, and several key pages: a directory list, a tips page, a contact form, a home page, and a results list filtered by category

**NavBar**
The NavBar component renders a navigation bar that dynamically changes its background based on the scroll position. It also includes a hamburger menu that toggles visibility of the navigation links on smaller screens.

It uses the useState hook to manage the background and menu open state, and useEffect to add and clean up a scroll event listener.

**Home**
The Home component serves as the main landing page of the application. It features a hero section with a title, image, and descriptive text about the Climate Action Directory.

There is also a button that links to the directory list page, which has a keyframe animation applied. 

**DirectoryCard**
The DirectoryCard component displays the details of an organisation. It shows the organisation's name, an image, a description, and a link to its website. This component is used to render individual organisation cards in in the ResultsList component. 

It receives an organisation prop and uses it to populate its content.

**DirectoryList**
The DirectoryList component renders a list of categories derived from the API, which contains the list of organisations. Each category is a clickable link that navigates to the results page for that category.

It uses the useState and useEffect hooks to manage and set unique categories from the provided list of organisations.

**ResultsList**
The ResultsList component fetches a list of organisations from the API and filters them based on the selected category and search query.

It uses useState to manage the list of organisations and search query, and useEffect to fetch data on mount. It also includes a search component for filtering the displayed organisations.

**Search**
The Search component provides a search input field that filters organisations in the ResultsList component.

It takes an onSearch prop, which is a function that gets called with the search query whenever the input changes.

**Tips**
The Tips component displays a list of tips for taking climate action. Each tip includes an image and descriptive text.

The layout alternates images and text, using a reverse class for every other tip to change the order.

**Contact Component**
The Contact component allows users to add a new organisation to the directory by filling out a form. It includes fields for the organisation's name, description, category, image URL, and website URL. 

Upon form submission, the component sends the data to the API endpoint, adding the new organisation to the list, and displays a thank-you message.

**Footer**
The Footer component renders a footer with a left-aligned email link and a right-aligned copyright notice.

It provides a simple way for users to contact via email and displays the copyright information at the bottom of the page.

## Contribution

This is a project web application build, which will be reviewed and graded. Please do not contribute to this project or make any amends to the original files. 

## Acknowledgement

The Home, DirectoryList and Tips components all feature vector files, which I have downloaded from FreePik, https://www.freepik.com/. 