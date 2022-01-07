# Simple Project w/ Parcel

**Version 1.0.0**

![Logo](/public/favicon.ico)


## Description

This was created to be used as a simple project boilerplate for HTML/SASS/JS web projects. It can also be used with vanilla CSS instead of SASS, as well as it can be used with TypeScript instead of JavaScript. By default, TS support for this project is handled using Parcel TSC transformer. Extra configuration required to use official Microsoft TSC. For more info on using typescript with parcel, visit the [Parcel TypeScript docs](https://parceljs.org/languages/typescript/ "Parcel TypeScript documentation website").

# **Installation**

To get started with this project, you'll first need to clone or download this repo. 

## 1. Cloning the repo

To clone this repo run the command `git clone https://github.com/itsjustlogan/simple-project-w-parcel <your project name>` from a location on your machine where you would like to save your project. This will clone the repo to your current location in a folder with the name you specified. 

## 2. Unlink the repo

After cloning the repo to your machine it will still be linked to the remote repo you cloned it from. To change this you'll need to **"cd"** (change directory) into the newly created project folder and run the command `git remote rm origin`. This will remove the link and you can now link it to your own remote repository by running the command `git remote add origin <your repo link>`.

## 3. Installing project dependencies

For this next step you will need to have [NodeJS](https://nodejs.org/en/ "NodeJS Download") installed as we'll be using NPM (node package manager) to install dependencies. Once you have NodeJS installed on your machine, open the project in your favourite code editor and run the command `npm install` in the terminal with no arguments. After that, all the dependencies will be downloaded and installed. You should then see a new node_modules folder.

## 4. Start up a local dev server

Finally, run the command `npm run start` to start working on your project. 
* This starts a server on port 1234 with hot reloading.

# **Useful Information**

## **Create a production-ready build**

To create a production-ready build, run the command `npm run build`.

## **Initializing eslint**

Eslint is already installed as a dependency in this project but has not been initialized. To initialize eslint in the project, run the command `npx eslint --init`. You will be prompted to answer some questions about your project, after which it will then be initialized.

## **SASS Folder Structure**

![SCSS folder structure](https://user-images.githubusercontent.com/31719884/147716739-0a6f2d9f-8843-4128-b973-d123b5f422dd.png)

### **main.scss** 

* This is the file where all the other SCSS files are imported into.

### **"base" folder**

The "base" folder contains the _base.scss file. This file contains the reset and global styles.

### **"components" folder**

* This folder contains all the styles for different parts of your app or website and an _index.scss file. The _index.scss file pulls all your styles together and spits them back out using @forward. All styles present in the components folder need to be added using @forward in the "components/_index.scss" file.

### **"layout" folder**

The "layout" folder contains the _layout.scss, _media-queries.scss, and _index.scss files.

* #### **_layout.scss**

  * Contains all the reusable styles and animations.

* #### **_media-queries.scss**

  * contains all the media queries.

* #### **_index.scss (layout)**

  * Forwards the _layout.scss & _media-queries.scss files.

### **"utils" folder**

The "utils" folder contains the _mixins.scss, _variables.scss, and _index.scss files. These files in this folder are meant to act as helpers which do not output any CSS.

* #### **_mixins.scss**

  * Contains all the mixins.

* #### **_variables.scss**

  * contains all the variables.

* #### **_index.scss (utils)**

  * Forwards the _mixins.scss & _variables.scss files.

## **Using vanilla CSS**

By default this project uses the CSS preprocessor SASS. To configure this project to use vanilla CSS instead, there are two options:

1. Clear reset, all reusable styles, and start with an empty CSS file (quickest)

2. Preserve reset & reusable styles into new CSS file (more steps)

#### Option 1 (fresh start):

* Delete the **base**, **components**, **layout** & **utils** folders
* Rename the **SCSS** folder to **CSS**
* Delete contents of **main.scss** 
* Change the extension of **main.scss** to **main.css**
* Change the link tag in the markup to reflect these changes. It should look like this: **/src/css/main.css**

#### Option 2 (preserve):
* Rename the **SCSS** folder to **CSS**.
* Delete contents of **main.scss**.
* Change the extension of **main.scss** to **main.css**.
* Replace the **@include** statements in **_layout.scss**(located in layout folder) with associated styling from **_mixins.scss**(located in utils folder). 
* Copy contents of **_base.scss**(located in base folder) & **_layout.scss** into **main.css**.
* Delete the **base**, **components**, **layout** & **utils** folders
* Change the link tag in the markup to reflect these changes. It should look like this: **/src/css/main.css**

## Using TypeScript

To start using TypeScript in this project, simply rename the **JS** folder to **TS**, change the extension of **app.js** to **app.ts**, and change the script tag in the markup to reflect these changes.
It should look like this: **/src/TS/app.ts**.

## Contributors

Justin Logan
