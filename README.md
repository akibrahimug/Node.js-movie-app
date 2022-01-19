# Node.js-movie-app
## Simple Node Js App.
This App uses the `HTTPS` Node API to retrive a movie's data from the [https://api.tvmaze.com/](https://api.tvmaze.com/).
The app works in the terminal and uses the `process.argv` to make it possible to type out your movie request directily in the terminal

### Document structure.

The app is divided into Two modules, the `movie.js` module and the `app.js` module

#### The `movie.js` module.

This module has the `printMessage()` function that uses * template literals * to form the body or message of the app.
It also has the request body where the `get` request is handled, the `parse` the data to JSON and the error handling.

#### `app.js` module. 
This includes the `movie.js` import which calls the request body.

 ### How it works. 
 
 1. Open the file path for the app in your prefered text editor or teminal.
 2. In your Terminal type `node app.js` + ` city name`
