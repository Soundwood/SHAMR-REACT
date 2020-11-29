# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# SHAMR FLATIRON SPA w/ API BACKEND

## About

SHAMR is meant to be an exercise in 'bad tech' in that this is not expected to be taken entirely seriously. While watching a PBS broadcast, the topic of the 'Chinese Social Credit System' was covered. You can read more about it here. I undertook this project to explore how tech can be used against us and ways in which it might go wrong.

SHAMR can be used to create 'offenders' and associated 'offenses'. These elements are persisted to the backend API and viewable by anyone that visits the site. A user can also enter a twitter user to check if that user follows anyone in the 'offenders' list. 

Have fun and don't take this too seriously.

![Shamer GIF](public/images/SHAMR_SCROLL.gif)

## Installation

Navigate to and clone the backend api repo at [SHAMR API](https://github.com/Soundwood/SHAMR).

Follow the installation instructions but skip: "In the `app` folder open `index.html`"
Please make sure the api backend is runnning on port 3000 or you can change all references to port 3000 in the `Constants.js` file

After cloning and starting the api backend, clone this repo and run the following in the command line:

```
npm install
npm start
```

You will likely be prompted to run the development server on port 3001 as the rails api backend is running on port 3000.

If a browser window is not automatically opened for you, navigate to `http://localhost:3001/`

In the terminal run `control c` to stop the development server.
