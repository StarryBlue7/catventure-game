# Catventures!

Catventure is a browser-based video game where you assemble a team of cats and go on a catventure! 

![]()

## Our Data
For this application we built our own server and did not use any external API's. Our server utlizes Mongoose/MongoDB, Bcrypt, Express, and JWT(Json Web Token/JWT Decode). JWT and Bcrypt handle our user authentication and password encryption. All of our data stems from our two models, which are our User model and our Cat model. The cat model is attached to our user model in the form of an array, allowing the user to save their cats and have their game progress/data persist. Since we used React for this project, our routes/controllers are only serving up one html page. The bulk of the work our server is doing is serving up and storing data relating to the user and the user's cats.

![]()

## Code Snippets
Here are a few code snippets that stand out from our project and a basic explanation of the functionality they served. 

---
![Update Cat](lines 79-105 userController.js)
---
This portion of code allows users to progress in our project. We decided to use an experience system where if a cat has more than 20 experience, we will increment the cat's level. First we create a new body, essentially copying the body sent back from the client. The switch case you see in this function allows us to increment the cat's hitpoints along with the level up, allowing for diversity in stats for each class of cat(Mage, Warrior, Rogue). After we update the cats experience and level we make a query to our database and send the user model the new body we created to update the user's cats array.

---
![](Battle code snippet?)
---
Vince do your thing on the battle, or I choose another snippet. Or what I have is enough. Up to you. Idk why I am even typing this but im 4 hrs in on this plane flight and just watched the new Fast and the Furious and honestly it wasnt half bad. Next im going to watch jungle cruise then good place cuz you reccomended it. ok rant over.

---
![Cat Cards](Lines 57-78 CatCard.js)
---
This is the return statement for our Cat Card component. User Data is being handed to every component and page that is rendered and by prop drilling we send all the data from the user's cat's array to this component. We then render out the users cats party and all the attributes/stat that each cat has. 

---
![Add Tavern Cats](Lines 92-124 Tavern.js)
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
## Deployed Link

* [See Live Site](https://catventure.herokuapp.com/)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Built With

* [GitHub](https://github.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [React]()
* [React Bootstrap]()
* [Mongoose]()
* [JWT/JWT Decode]()
* [Express]()
* [Bcrypt]()
* [React Sprite Animator]()
* [Nodemon]()

## Authors

|**Emily Dorgan** | **Vince Lee** | **Derek Banister** |
|-----------------|---------------|------------------|
| - [Portfolio](https://emdorgan.github.io/portfolio/)| - [Portfolio](https://starryblue7.github.io/portfolio/)| - [Portfolio](https://tylerbyeager.github.io/first-portfolio/) |
| - [Github](https://github.com/emdorgan)| - [Github](https://github.com/StarryBlue7) | - [Github](https://github.com/DerekBanister) |
| - [LinkedIn](https://www.linkedin.com/in/emily-dorgan/)| - [LinkedIn](https://www.linkedin.com/in/vince-lee/) | - [LinkedIn](https://www.linkedin.com/in/DerekBanister/)|

## Acknowledgments

* Emily for being patient with Derek's insane APM
* Vince for loving OSRS
* Emily's backend dev friend who told her not to do a game
* Powder
* (meme'ing btw I just dont know what to put here)

![Catventure Logo]()