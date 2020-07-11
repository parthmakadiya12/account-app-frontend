### Account Management App

- This app is for an account management for any store. Specifically this project is for frontend application developed with reactjs. For styling we are using antd. However we can use MaterialUi or bootstrap or any other styling library


#### How to start ?
- Clone the project by `git clone XXX`
- Install the dependencies by `npm install` or `yarn`
- then run the backend project. [here](https://github.com/parthmakadiya12/account-app-test-backend)
- Then run `yarn start` or `npm run start`


#### Project structure

- I created this project with create-react-app
- Our entrypoint is `index.js`
- As you navigate to `app.js` you will see routes there. (we have protected routes as well)
- Our first page is login page
- Every page has their own folder at `src > Login` or `src > Dashboard` etc.
- Everything that is related to that project relies in that folder. for ex action reducer etc.
- We have a `src > store` folder that is for rootReducer and redux store configuration.
