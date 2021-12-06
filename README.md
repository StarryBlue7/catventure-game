# Catventures!

Catventure is a browser-based video game where you assemble a team of cats and go on  catventure! 


![Grocery list generation](./assets/images/grocery-list-demo.gif)


## Cloud Data

Kitschy utilizes [Firebase](https://firebase.google.com/) cloud databasing to enable users to cloud save grocery lists for access by others in their households, whether accessing from desktop or mobile.

## Mobile-First UI
This app's layout was designed with viewing on mobile devices in mind, utilizing viewport breakpoints and scaling to produce responsive experiences regardless of screen size.

![Mobile page responsiveness](./assets/images/responsiveness-demo.gif)

## Code Snippets
Here are a few code snippets and basic explanation of the functions they performed. The first snippet is that of our ajax api call. We used this in tandem with our user's input, searchTerm, to retrieve information for up to 20 different recipes matching the input. We then created an empty array which we pushed the results into for future use. 

---
![Ajax api call](https://user-images.githubusercontent.com/89880190/136632774-db33e495-ded0-4ff8-b98d-7d1da6f314f2.png)
---

Next is a bit of code relating to our cloud storage api, Firebase. Firebase was our solution to our problem of "How can we store our user's recipe information without using local storage?" While this is certainly not all you need, this bit of code was our starting point. 

---
![Snippet2](https://user-images.githubusercontent.com/89880190/136632829-3b70d664-a52b-4dad-84c1-50c74c68dac3.png)
---

Next is the portion of code that is resposible for creating the recipe cards that a user will see. This code works in tandem with an event listener, not shown, that will toggle the recipe's ingredients list on or off when a recipe card is clicked. 

---
![Snippet3](https://user-images.githubusercontent.com/89880190/136632883-40645023-f1e9-4747-9d76-bc458bdf74ec.png)
---

Lastly is what we dubbed the "final boss" of this coding project. The major function of this app is to create a grocery list from the various recipes a user has chosen, and add all like ingredients into one total amount. This list can be downloaded and used when at the store so that a user can be sure to get everything they will need to start cooking.

---
![Snippet4](https://user-images.githubusercontent.com/89880190/136632921-620e9529-4ca2-4490-9ce9-f9cef2e2b40b.png)
---
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* IDE to view/edit source code (e.g. Visual Studio Code).
* [Firebase](https://firebase.google.com/) API developer account.
* [Edamam](https://developer.edamam.com/) API key.

### Installing

1. Clone repository.
1. Substitute your Edamam and Firebase API keys and config data.
1. Open [index.html](index.html) in web browser.

### Deployment

1. Upload index.html and assets folder to webhosting site, such as GitHub.
1. If using GitHub, deploy via GitHub Pages.

---
## Deployed Link

* [See Live Site](https://starryblue7.github.io/kitschy-app/)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Built With

* [Firebase](https://firebase.google.com/)
* [jQuery](https://jquery.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Foundation](https://get.foundation/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [GitHub](https://github.com/)

## Authors

|**Emily Dorgan** | **Vince Lee** | **Tyler Yeager** |
|-----------------|---------------|------------------|
| - [Portfolio](https://emdorgan.github.io/portfolio/)| - [Portfolio](https://starryblue7.github.io/portfolio/)| - [Portfolio](https://tylerbyeager.github.io/first-portfolio/) |
| - [Github](https://github.com/emdorgan)| - [Github](https://github.com/StarryBlue7) | - [Github](https://github.com/TylerBYeager) |
| - [LinkedIn](https://www.linkedin.com/in/emily-dorgan/)| - [LinkedIn](https://www.linkedin.com/in/vince-lee/) | - [LinkedIn](https://www.linkedin.com/in/tyler-yeager-1024/)|

## Acknowledgments

* Recipe search API from [Edamam](https://developer.edamam.com/).
* Modal plugin by Kyle Fox: [jQuery Modal](https://jquerymodal.com/).
* Custom font from [Google Fonts](https://fonts.google.com/).
* Icons provided by [FontAwesome](https://fontawesome.com/).

![Kitschy logo](./assets/images/kitschy-logo.png)