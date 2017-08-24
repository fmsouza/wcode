# Monaco Web IDE

Monaco Web IDE is a rich code editor which runs inside a browser. It's totally inspired on [Visual Studio Code](https://github.com/Microsoft/vscode), and also uses [Monaco-editor](https://github.com/Microsoft/monaco-editor) as it's core engine for providing a rich experience. It is being developed with Node.js + Express + React.

It was born on a particular necessity of using such software on any kind of platforms, which is not the case of VSCode (only runs in x64 Desktop OSes), by taking inspiration on [this article](https://medium.com/samsung-internet-dev/writing-software-using-a-phone-e71976f1f18d) to produce some alternative kind of software to run in platforms like Android, Raspberry PI, etc.

![screenshot](./assets/screenshot.png)

## 1. Installation

```bash
$ npm install -g wcode
```

## 2. Usage

```bash
$ wcode path/to/your/project
```

## 3. Development

```bash
$ git clone https://github.com/fmsouza/monaco-web-ide
$ cd monaco-web-ide && npm install
```

## 4. Running

#### `npm start`

Runs the web application in the server address http://localhost:3000

#### `npm run build`

Produce the production build.

#### `npm test`

Run the tests.

## 5. Contributing

PR's and issue reports are welcome.

## 6. Support the project

Bitcoin: 3DgNhxV1umz7HCdigvyY18kEsNXW9L4Nx2