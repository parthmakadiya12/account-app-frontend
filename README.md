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


#### Must Do for dockerCompose and docker

- If you want to run project with docker compose then please do this.
- Clone frontend and backend in same folder.
- For example
  - Project
    - account-app-test-frontend
    - account-app-test-backend
- So it should be on same level.
- Run `npm install` and then run `npm run build`
- After a build run `npm run move` or You can manually copy paste the build folder inside backend project.
- That's it. Now go to the backend Project.

#### Run with docker/docker-compose
- clone the project
- run `./docker-run.sh`
- It will take few minutes
- After that you can access it at [http://localhost:1337](http://localhost:1337)
- If yoy get any error while building or anything else see below steps.


#### Docker and Docker-compose: 

- create a file with `docker-run.sh` and put below code inside there:
```
export DOCKERHOST=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)
docker-compose -f docker-compose.yml up
```

resolve permission issue mac :
```
chmod +x docker-run.sh
```

We have created `dockerfile` and `docker-compose.yml` file.
For env variables we have `env.sh` (we got it from below reference article)

Reference to create Docker-compose and dockerfile :
https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/