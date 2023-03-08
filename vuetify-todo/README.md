# Project Blog
* What is Vuetify?
* Setting up Vuetify
* Vuetify basics
* Text & Colors
* Button & Icons
* Breakpoints & visibility
* Toolbars
* Navigation
* Themes
* Lits
* Adding routes
* Padding & margin
* Grid system
* Dummy project data
* Chips
* Sorting projects
* Tooltips
* Cards
* Avatar
* Expansion panels
* Menus
* Dialog popups
* Form basics
* Date pickers
* Form validation
* Firestore database
* Adding firestore data
* Button loaders
* Snackbars
* Firestore real time listeners

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Firestore
* one of the service provided by Firebase
* A NoSQL database to store data in 
* Contains collections of documents
* Allows us to update our app in real-time
* Firestore has collections and documents. Documents look very much like JSON data.
* Firestore Database >> Project Collections >> Single Document
* For the application, create a Firestore database and start firestore in test mode
* Create a collection name "projects" and a document {title(string), person(string), status(string - complete), due(string), content(string) }
* Install the firebase module using yarn or npm