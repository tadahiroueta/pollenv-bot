# Pollev Bot
***Automatically respond to a Poll Everywhere activity over a period of time***

[Built With](#built-with) · [Features](#features) · [Installation](#installation) · [Usage](#usage)

## Built With
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Selenium](https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white)

## Features

### Automatic Answering
The bot will answer a poll (with the first option) every 60 seconds for 90 minutes.

### "Head-full" Chrome Browser
The program opens a browser for you to log in and access the poll manually.

![Chrome window](./screeshot.png)

## Installation
1. Install [Node.JS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
    > I personally recommend using Node Version Manager (NVM) [(for Windows)](https://github.com/coreybutler/nvm-windows)

2. Clone repository
    ```sh
    git clone https://github.com/tadahiroueta/collegevine-scraper.git
    ```

3. Install dependencies
    ```sh
    npm install
    ```

## Usage
1. Run
    ```sh
    node index
    ```

2. Log in to your pollev.com account on the Chrome window opened

3. Join your poll

    > You have 2 minutes to set this up before the page starts to reload inconveniently