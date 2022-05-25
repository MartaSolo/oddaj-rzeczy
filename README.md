# oddaj-rzeczy

## Project description:

Oddaj-rzeczy (give away your stuff) is a responsive React application. It's aim is to connect users who want to give away stuff they don't use anymore with the organizations, fundations and local collections that help children, single mother, homeless or disabled.
The user can register, browse list of organizations and fill the form choosing types of stuff to give away, target group and so on.

If you want to test the app without registering you can login using these credentials:
login: test@gmail.com,
password: testtest.

The app uses:

1. Firebase Authentication for user registration, login and logout.
2. Firebase Firestore for fetching data about organizations, fundations, local collections and sending form data filled by the user.
3. API provided by Coders Lab to send contact form.

## Used technologies:

HTML5, CSS3, Sass, JavaScript (ES6), React v18, React Router v6, React Router Hash Link, Context API, Firebase v9 (Authentication, Firestore).

## View Demo:

https://places-app-ms.netlify.app/

## Instalation:

To run the app in the development mode please provide your Firebase web app configuration.
Put it into variables in .env file (look at .env_sample file).

1. You have to have node.js installed.
2. Download the project files.
3. Open the console in the project folder.
4. Command `npm install` installs all the dependencies.
5. Command `npm start` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Preview

![Places-app](https://github.com/MartaSolo/places-app/blob/master/places-app.gif)
