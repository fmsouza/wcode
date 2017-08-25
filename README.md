# Wcode

Wcode is a rich code editor which runs inside a browser. It's totally inspired on [Visual Studio Code](https://github.com/Microsoft/vscode), and also uses [Monaco-editor](https://github.com/Microsoft/monaco-editor) as it's core engine for providing a rich experience. It is being developed with Node.js + Express + React.

It was born on a particular necessity of using such software on any kind of platforms, which is not the case of VSCode (only runs in x64 Desktop OSes), by taking inspiration on [this article](https://medium.com/samsung-internet-dev/writing-software-using-a-phone-e71976f1f18d) to produce some alternative kind of software to run in platforms like ChromeOS, Android, Raspberry PI, etc.

![screenshot](./assets/screenshot.png)

## 1. Installation

    $ npm install -g wcode

## 2. Usage

    $ wcode path/to/your/project

> It will run in http://0.0.0.0:9876 and for now this address is not configurable.

## 3. Keyboard shortcuts

* [ctrl + s] or [command + s] -> Save file
* [ctrl + w] -> Close file
* [alt + right] -> View the next file
* [alt + left] -> View the previous file

## 4. Development

    $ git clone https://github.com/fmsouza/wcode.git
    $ cd wcode && npm install

## 5. Running

#### `npm start`

Runs the web application in the address http://localhost:3000, and the server in http://localhost:8080

#### `npm run build`

Produce the production build.

#### `npm test`

Run the tests.

## 6. Contributing

PR's and issue reports are welcome. For further details, please read the terms at [CONTRIBUTING](./CONTRIBUTING.md).

## 7. Support the project

Bitcoin: 3DgNhxV1umz7HCdigvyY18kEsNXW9L4Nx2