# Catventure!

![Catventure logo](/screenshots/catventure-logo.png)

Catventure! is a browser-based video game where you assemble a team of fantasy role-playing-game cats and go on a catventure! This videogame is built entirely in React.js with no external game engines. The user can add cats to their team, find treasure and engage in JRPG-style turn-based combat.

![RPG gameplay demo](/screenshots/rpg-demo.gif)

## Deployed Link

-   [See Live Site](https://catventure.herokuapp.com/)

## Technical Details

Catventure! is a full-stack app with a React front end, RESTful API routes using Express.js, a Node.js backend and a MongoDB database.

For this application we built our own server and did not use any external API's. Our server utlizes Mongoose ODM, Bcrypt, Express, and JWT (Json Web Token/JWT Decode). JWT and Bcrypt handle our user authentication and password encryption. All of our data stems from our two models, which are our User model and our Cat model. The cat model is attached to our user model in the form of an array, allowing the user to save their cats and have their game progress/data persist. Since we used React for this project, our routes/controllers are only serving up one html page. The bulk of the work our server is doing is serving up and storing data relating to the user and the user's cats.

## Screenshots

![Full Screen](/screenshots/full-screen.png)
![Mobile UI 1](/screenshots/mobile-ui.png)
![Mobile UI 2](/screenshots/mobile-ui2.png)

---

## Time Gating

One of the signature features of browser-based gamees is the implementation of time-gating mechanics, which enforce that users can only access certain benefits once per a set time interval, whether it's one hour or one day.

![Cat Tavern](/screenshots/tavern.png)

And from a game-balancing standpoint, we did not want our users to be able to consistently refresh the page to either spawn new cats or open infinitely many treasures. That led us to time-gating the user, which you can see on lines 99 & 101. We have an attribute in our user model called "lockoutTavern" in which the first time this function runs, the exact time/date are saved to our database.

![Time gating function code snippet](/screenshots/snippet-lockout-api.png)

Essentially, once the first set of three random cats is spawned into the Tavern page, the user is stuck with those cats for a set amount of hours. We conditionally render 1 of 2 things based on lockout times. We either render a fresh set of cats, or the first set of cats that spawned the first time they entered the Tavern. This function (and the jsx it affects) was a valuable lesson in state management/conditional rendering.

![Time gating check code snippet](/screenshots/snippet-lockout-check.png)

This time-gating method was similarly used to show/hide and allow/prevent opening of treasures on the Cave page.

![Cave](/screenshots/cave.png)

---

## Turn-Based RPG Battles

Inspired by beloved retro-JRPG franchises like Final Fantasy, Catventure! features turn-based battles. As a React app, this requires that the UI and sprite animations are controlled by multiple independent React `useState` hooks, that are passed between the various functions necessary to execute the turn-based battle mechanics.

![Turn-based battle](/screenshots/turn-based-battle.gif)

In order to reduce the quantity of arguments that must be passed, associated `useState` hooks (for sprite animations, UI elements, or sound effects) were consolidated into single objects that could be passed to GUI behaviors that reflected the scripted mechanics occurring within the code.

![Consolidated UI React useStates](/screenshots/ui-useStates.png)

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

-   IDE to view/edit source code (e.g. Visual Studio Code).
-   [Node.js](https://nodejs.org/en/).
-   [MongoDB](https://www.mongodb.com/).

### Installing

1. Clone repository.
1. Navigate to `catventure-game` directory in terminal.
1. `npm install` dependencies.
1. Run locally with `npm run develop`.
1. Open `http://localhost:3000/` in web browser.

### Deployment

1. Generate optimized build with `npm run build`.
1. Upload to webhosting service, such as [Heroku](https://www.heroku.com/).
1. Attach MongoDB hosting service, such as [MongoDB Cloud](https://www.mongodb.com/).

---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://vince-lee.mit-license.org/)

## Built With

-   [React Sprite Animator](https://www.npmjs.com/package/react-sprite-animator)
-   [React useSound](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/)
-   [React](https://reactjs.org/)
-   [React Bootstrap](https://react-bootstrap.github.io/)
-   [Mongoose](https://mongoosejs.com/)
-   [JWT/JWT Decode](https://jwt.io/)
-   [Express](https://expressjs.com/)
-   [Bcrypt](https://www.npmjs.com/package/bcrypt)
-   [GitHub](https://github.com/)
-   [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
-   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Authors

| **Emily Dorgan**                                        | **Vince Lee**                                              | **Derek Banister**                                             |
| ------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| - [Portfolio](https://emdorgan.github.io/portfolio/)    | - [Portfolio](https://starryblue7.github.io/portfolio-iv/) | - [Portfolio](https://tylerbyeager.github.io/first-portfolio/) |
| - [Github](https://github.com/emdorgan)                 | - [Github](https://github.com/StarryBlue7)                 | - [Github](https://github.com/DerekBanister)                   |
| - [LinkedIn](https://www.linkedin.com/in/emily-dorgan/) | - [LinkedIn](https://www.linkedin.com/in/vince-lee/)       | - [LinkedIn](https://www.linkedin.com/in/DerekBanister/)       |

## Acknowledgments

-   Pixel-art backgrounds provided by [Jesse M](https://jesse-m.itch.io/jungle-pack), [Szadi Art](https://szadiart.itch.io/pixel-fantasy-caves), & [Anokolisa](https://anokolisa.itch.io/montain-forest-asset-pack).
-   Pixel-art enemy sprites also provided by [Szadi Art](https://szadiart.itch.io/animated-character-pack).
-   Background music provided by [Fesliyan Studios](https://www.fesliyanstudios.com/).
-   Battle sound effects provided by [Mixkit](https://mixkit.co/).

![Catventure Logo](/screenshots/catventure-icon.png)
