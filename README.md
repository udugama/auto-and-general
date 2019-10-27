# prasad Udugama's <udugama@gmail.com> Auto and General test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Testing the Application

* Make sure the host computer has `node version 10` or greater.
* Run `npm install -g yarn` to install yarn package manager.
* Run `yarn install` to install all the dependancies
* Run `yarn start` to start the dev server for the app and will open up a application in the default browser.
* Type search word ie : 'thunderbolt' and the app will list the page 1 for the search.
* You may scroll between pages with the navigation buttons and the app will update the content area with appropriate list.
* Content list area on the app is scrollable and by clicking the title will open up the story on a new browser tab.
* Please refer following note about inconsistancy that may course in the api.

Note: During testing I discoverd inconsistant behavior from the api. For example if search word is 'prasad' then the first page will be returned with 7 pages and if click next button few times and try moving farward you will get a different total number of pages to the initial amount. This is happening due to the incorrect nbpages value the api return during some of the searches.

example get request: page 1 => https://hn.algolia.com/api/v1/search?query=prasad&tags=story&page=1
page 5 => https://hn.algolia.com/api/v1/search?query=prasad&tags=story&page=5

## Running Test Suite

* Make sure all the dependancies installed by running `yarn install`.
* Run `yarn test` to start test suite.
* Press `a` to select to runn all the tests from the menue.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
