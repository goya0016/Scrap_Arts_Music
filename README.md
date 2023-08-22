# Scrap-Arts-Music

<h1 align="center">Scrap Arts Music <a href="https://rapidapi.com" target="_blank"> <img src="https://rapidapi.com/blog/wp-content/uploads/2017/01/octocat.gif" alt="Github" width="120" height="90"/> </a> </h1>

<table border="1" align="center">
  <tr>
        <th>Team Member</th>
        <th>Role</th>
      </tr>
      <tr>
        <td><h3 align="center">Camilo Camacho</h3></td>
        <td><h3 align="center">Team Lead</h3></td>
      </tr>
      <tr>
        <td><h3 align="center">Michael Tan </h3></td>
        <td><h3 align="center">Develop Team Lead</h3></td>
      </tr>
      <tr>
        <td><h3 align="center">Mariana Garnica </h3></td>
        <td><h3 align="center">Design Team Lead</h3></td>
      </tr>
      <tr>
        <td><h3 align="center">Katelyn Patrick </h3></td>
        <td><h3 align="center">Developer</h3></td>
      </tr>
        <tr>
        <td><h3 align="center">Smith Belandya </h3></td>
        <td><h3 align="center">Developer</h3></td>
      </tr>
        <tr>
        <td><h3 align="center">Nipun Goyal </h3></td>
        <td><h3 align="center">Developer</h3></td>
      </tr>
<table>

<hr>

<p align="center"> 🔭 We are currently working on <b>PWA</b> To Scrap Arts Music.</p>
<p align="center"> ⚡ Fun fact: We ❤️ Coffee </p>

<hr>

<!-- TABLE OF CONTENTS ->
## Table of Contents

* [About the Project](#about-the-project)


<!-- ABOUT THE PROJECT -->

## About The Project

This is a progressive web application designed for Scrap Arts Music(SAM). It is used to showcase SAM's work and information about themselves.

### This PWA Is Built With

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/docs)

<!-- Features list -->

## Features

- [] User Login
- [] 16 Instrument
- [] Instrument Interaction
- [] Redirect to SAM Store
- [] Event's Page
- [] Loop's Page
- [] Instruments's Page
- [] Profile Page

<!-- Technology Used -->

## Technology Used

- [Material UI](https://material-ui.com/)
- [Google Firebase](https://firebase.google.com/)
- [React-share](https://github.com/nygardk/react-share#readme)
- [useSound](https://github.com/joshwcomeau/use-sound#readme)
- [react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard)
- [react-materialize-css](https://materializecss.com/)
- [react-audio-player](https://www.npmjs.com/package/react-audio-player)
- [react-slideshow-image](https://www.npmjs.com/package/react-slideshow-image)

<!-- Getting Started -->

## Getting Started

### Installing Yarn

This project is built using Yarn(https://classic.yarnpkg.com/en/docs/install/#mac-stable)

To check if you have yarn installed type in.

```
yarn --version
```

Yarn is an alternative to npm and can be installed using the command below.

```
sudo npm i -g yarn
```

### Getting your Firebase credentials.

You will need to install the following programs prior to the installation of this application.

Create a Firebase project at the [link](https://firebase.google.com/).

![img](https://i.imgur.com/V2L5jrG.png)

Be sure to create a web app in order to get the correct SDK for your application.

![img](https://i.imgur.com/AfJcqyo.png)

In your project settings grab your Firebase SDK and create a .env file at root of the project when cloned.

![img](https://i.imgur.com/vbD13XT.png)

For our project you will be using these credentials in your env file.

```


## Adding data to your database.

1. If you are using the provided credentials above, please head to the installtion. If you are uploading your own data follow the steps below.

2. Create your JSON Data. You can get the data we used for the application here at our repo(https://github.com/Scrap-Arts-Music/DATA_JSON)

3. Log into your firebase console and go into project settings. Click on the Service account and generate a new Node.js private key and save it where your JSON is located.

![img](https://i.imgur.com/IrG10n9.png)

4. We will now upload our JSON data to our firebase by running the command below in your terminal.

5. import will be the name of your private key, and upload will be the name for the data your are uploading.

```
npx -p node-firestore-import-export firestore-import -a import.json -b upload.json
```

## Installation

1. Clone the repo

```sh
git clone https://github.com/Scrap-Arts-Music/Scrap-Arts-Music.git
```

2. Once you have cloned the repo you will need to go into the dev branch for testing. Type this command to get the dev branch onto your computer.

```
Git fetch origin
Git checkout -b dev origin/dev
```

3.  Now that you have set up your environment, we must install the packages used in the project.

```sh
yarn install
```

3. Create ENV at the root of your project.

```sh
touch .env
```

This will create an .env file which you will have to add your Firebase SDK into the variables.

The file should look something like below:

```
REACT_APP_API_KEY = APIKEY
REACT_APP_AUTH_DOMAIN = DOMAIN
REACT_APP_DATABASE_URL = DATABASEURL
REACT_APP_PROJECT_ID = PROJECTID
REACT_APP_STORAGE_BUCKET = STORAGEBUCKET
REACT_APP_MESSAGING_SENDERID = MESSAGINGSENDERID
REACT_APP_APP_ID = APPID
REACT_APP_MEASUREMENT_ID = MEASUREMENTID
```

The credentials we are using are above located in the Getting your Firebase credentials.

4. Now that you have all the your dev branch forked and env file created we can run the project locally on our device with and run it on localhost:3000

```sh
yarn start
```

5. To build on production please run the following commands which will run on application on localhost:5000

```
yarn build
```
6. after your build has finished, cd into the build folder and run the following command.
```
npx serve
```


## Creating an Instrument

<br/>
1. Create Instrument Folder
<br/>
<br/>
   create the instrument folder using the instrument name inside the src/components/instruments.
<br/>
<br/>

```
src/components/instruments/instrument_name
```

<br/>
2. Create the JS and CSS files inside the folder
<br/>
<br/>

```
instrument_name.js
instrument_name.css
```

<br/>
3. Import the file inside of DisplaySingleInstrument.js
<br/>
<br/>

```
import instrument_name from ./instrument_name/instrument_name";
```

<br/>
4. Add your imported instrument to the components variable object using the same name as the instrument.
<br/>
<br/>

```
let components = {
  instrument_name: instrument_name
}
```

<br/>
<br/>

# Hosting

1. Visit https://www.netlify.com/ and create and account.

2. Create a new site using Git.

![image](https://i.imgur.com/2eu8tQO.png)

3. Select your GitHub and link it to netlify

![image](https://i.imgur.com/o5oIq9I.png)

4. Select your repo that you would like to deploy.

![image](https://i.imgur.com/RPFoGI2.png)

5. Scroll down and click on show advance. Here we will add our enviroment fields to link to our database.

![image](https://i.imgur.com/X1aSukC.png)

6. Add your enviroment variable to this by clicking new variable.

![image](https://i.imgur.com/X8v1U0Q.png)

7. When you have entered all your enviroment variables, click deploy and you are done!

![image](https://i.imgur.com/FJou1b8.png)

<!-- Contact -->

# Contact

**Project Lead:** [Camilo Camach](mailto:cama0047@algonquinlive.com)

**Design Lead:** [Mariana Garnica](mailto:garn0080@algonquinlive.com)

**Technical Lead:** [Michael Tan](mailto:tan00060@algonquinlive.com)

**Developer:** [Katelyn Patrick](mailto:patr0142@algonquinlive.com)

**Developer:** [Smith Beladiya](mailto:smit1888@algonquinlive.com)

**Developer:** [Nipun Goyal](mailto:goya0016@algonquinlive.com)
