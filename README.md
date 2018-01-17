
## Table of Contents

- [Folder Structure](#folder-structure)
- [Supported Browsers](#supported-browsers)
- [Notes ](#notes)
- [Installing](#installing)
- [Decisions & Patterns](#patterns)

## Folder Structure

This should be the structure of the created project:

```
saludador/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
      css/
        App.css
        bootstrap-grid.css
        bootstrap-reboot.css
        bootstrap.css
      fonts/
        ...
      scss/
        App.scss
        ...
    components/
        Auxiliar.js
        HistoricalGreetings.js
        MainContainer.js
        SayHello.js
        VisitorForm.js
    App.js
    App.test.js
    axios-countries.js
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
```

## Supported Browsers

The project has been tested on Edge, Chrome and Mozilla.

## Notes

This project requires the next stack of libraries:
*react (16.2.0)
*react-dom
*react-bootstrap
*axios
*moment

I also download bootstrap (SASS source code), which is automatically compiled to css with Grunt.js.

## Installing

You just have to clone the repo and once you have the /saludador folder, get into it with
and run the command: npm install.
Later, run npm start. 
It should automatically open a new window browser in the https://localhost:3000 url.

cd /saludador
npm install
npm start

## Patterns

The app consist on a big container component (MainCointainer) and three child components:

-VisitorForm: the visitant enter the information (country, name and birthdate) and then submit it.
-SayHello: This is a stateless componente which aim is to say hello to the visitant, and show his age.
-HistoricalGreetings: This a another stateless component. Its main responsability is render all the greetings made during the state. You can receive greetings again once you clicked over the items.
-Auxiliar: just a way to wrap all the content for the render function (HOC).

MainCointainer is in charge of the state.
Components pass data from one to another using handler functions.

During the projects I used some features like: currying functions, arrow functions, updating state without mutation, perfoming forms validation, consuming API, using Keys to render lists items etc.

# saludador
This app aims to say hi to visitants and then register them.

