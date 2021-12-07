# Catventure!

Catventure is a browser-based video game where you assemble a team of cats and go on a catventure! This video game is built entirely in React.js with no external game engine used! The user can add cats to their team, find treasure and engage in Turn-Based Combat.

## Deployed Link

* [See Live Site](https://catventure.herokuapp.com/)

## Technical Details

Catventure! is a full-stack app with a React front end, RESTful API routes using Express.js, a Node.js backend and a MongoDB database.

For this application we built our own server and did not use any external API's. Our server utlizes Mongoose ODM, Bcrypt, Express, and JWT(Json Web Token/JWT Decode). JWT and Bcrypt handle our user authentication and password encryption. All of our data stems from our two models, which are our User model and our Cat model. The cat model is attached to our user model in the form of an array, allowing the user to save their cats and have their game progress/data persist. Since we used React for this project, our routes/controllers are only serving up one html page. The bulk of the work our server is doing is serving up and storing data relating to the user and the user's cats.

## Screenshots

![Full Screen](/screenshots/full-screen.png)
![Cat Tavern](/screenshots/tavern.png)
![Cave](/screenshots/cave.png)
![Battle screen 1](/screenshots/battle1.png)
![Battle screen 2](/screenshots/battle2.png)
![Mobile UI 1](/screenshots/mobile-ui.png)
![Mobile UI 2](/screenshots/mobile-ui2.png)

## Code Snippet

---
![code snippet](/screenshots/snippit-tough-bug.png)
---
There is always problems in life that you come across and at face value they seem trivial, only to reveal they are 4 headed monsters that you imagine living below your bed. This function happened to be one of the monsters. Essentially, we did not want our users to be able to consistently refresh the page to either spawn new cats or open many treasures. That led us to time-gating our players, which you can see on lines 99 & 101. We have an attribute in our user model called "lockoutTavern" in which the first time this function runs, the exact time/date are saved to our database. Essentially, once the first set(3) of random cats spawn into the tavern, the user is stuck with those cats for a set amount of hours. We conditionally render 1 of 2 things based on lockout times. We either render a fresh set of cats, or the first set of cats that spawned the first time they entered the tavern. Long story short, this function (and the jsx it effects) was a valuable lesson in state management/conditional rendering.

---
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* IDE to view/edit source code (e.g. Visual Studio Code).
* Node.JS/MongoDB Installed.

### Installing

1. Clone repository.
1. Run NPM Install in the root directory to install necessary packages
1. Type NPM Run Build in the root directory, then NPM Run Develop. The application will then run and open a new browser window.

---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Built With

* [GitHub](https://github.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [React](https://reactjs.org/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Mongoose](https://mongoosejs.com/)
* [JWT/JWT Decode](https://jwt.io/)
* [Express](https://expressjs.com/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [React Sprite Animator](https://www.npmjs.com/package/react-sprite-animator)

## Authors

|**Emily Dorgan** | **Vince Lee** | **Derek Banister** |
|-----------------|---------------|------------------|
| - [Portfolio](https://emdorgan.github.io/portfolio/)| - [Portfolio](https://starryblue7.github.io/portfolio/)| - [Portfolio](https://tylerbyeager.github.io/first-portfolio/) |
| - [Github](https://github.com/emdorgan)| - [Github](https://github.com/StarryBlue7) | - [Github](https://github.com/DerekBanister) |
| - [LinkedIn](https://www.linkedin.com/in/emily-dorgan/)| - [LinkedIn](https://www.linkedin.com/in/vince-lee/) | - [LinkedIn](https://www.linkedin.com/in/DerekBanister/)|

## Acknowledgments

* [The "Cute Legends Heroes" art asset package](https://9e0.itch.io/cute-legends-cat-heroes)

![Catventure Logo](/screenshots/catventures-icon.png)