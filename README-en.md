![Badge](https://img.shields.io/badge/version-beta-%23E0234E)
![Badge](https://img.shields.io/badge/mobile-working-%23F86001)
![Badge](https://img.shields.io/badge/license-MIT-brightgreen)

<br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/62452619/96209718-a7aa1100-0f46-11eb-8c38-062a575f4249.png" alt="Logo">
  <h3 align="center">Happy App</h3>

  <p align="center">
    This site was created during Next Level Week #3 powered by Rockseat.
    <br />
    <br />
    <a href="README-en.md">🇺🇸English</a>
    ·
    <a href="README.md">🇧🇷Portuguese</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## 🗂 Table of Contents

* [About the Project](#ℹabout-the-project)
  * [Layout](#🔖layout)
  * [Desktop Version](#🖥desktop-version)
  * [Technologies](#💻technologies)
  * [Features](#💡features)
* [Installation](#🏗installation)
  * [Prerequisites](#🚧prerequisites)
  * [Front-end](#💄front-end)
    * [Installing Dependencies](#🚧installing-dependencies)
    * [Setting Application](#🔧setting-application)
    * [Running Application](#▶running-application)
* [License](#📄license)
* [Author](#👩‍💻author)

## ℹAbout The Project
Happy is a website created in Next Level Week #3 powered by Rockeseat. This site connect people who want to visit orphanages.
The application allows orphanages self register, informing opening hours, rules and location. And user can make a appointment to visit children and see the orphanages' location.

## 🖥Desktop Version

<p float="left">
  <img src="https://user-images.githubusercontent.com/62452619/96150090-6f6fe780-0ee0-11eb-8106-7a21337c3f01.png" width="45%" /> 
  <img src="https://user-images.githubusercontent.com/62452619/96150156-80b8f400-0ee0-11eb-8f13-708be460cdde.png" width="45%"/>
</p>

### 🔖Layout
You can acess the project's layout in links below:

* [Desktop](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web/duplicate)

🚨 You need have a [Figma](https://www.figma.com) account to acess the layout.

### 💻Technologies

* [TypeScript](https://www.typescriptlang.org)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com)

### 💡Features
  - [ ] Dark Mode
  - [ ] Mobile Version

## 🏗Installation

This project use [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com), you will need them to build its dependencies.

### 🚧Prerequisites
Clone this project repository:

`$ git clone https://github.com/3salles/Happy.git`

Enter in `Happy` folder:

`$ cd Happy`

🚨 If you don't have git in your machine, you can install it [here](https://git-scm.com/downloads).

## 💄Front-end
### 🚧Installing Dependencies
In Happy folder, open `web` folder:

`$ cd web`

And install dependencies by the following command:

`$ yarn install`

### 🔧Setting Application

To use [Mapbox](https://www.mapbox.com) you must have a Token acess. Create a account and take your token acess. Go to `OrphanagesMap.tsx` and change `REACT_APP_MAPBOX_TOKEN` with you token acess in the following line:

```<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />```

### ▶Running Application

Run the following comand to see the application:

`yarn start`

The application will be avaible in `http://localhost:3000/`.

🚨 Remember to start the backend! See how to do clicking [here](#).


## 📄License

This project uses [MIT](https://github.com/3salles/Happy/blob/main/LICENSE) lincense.

## 👩‍💻Author
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/3salles)](https://github.com/3salles)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/beatriz-salles-b701a31a6)](https://www.linkedin.com/in/beatriz-salles-b701a31a6/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:beatrizsallesss@gmail.com)](mailto:beatrizsallesss@gmail.com)
