# Wcode

## UNMAINTAINED (alternatively, try [code-server](https://github.com/cdr/code-server))

Wcode is a rich code editor which runs inside a browser. It's totally inspired on [Visual Studio Code](https://github.com/Microsoft/vscode), and also uses [Monaco-editor](https://github.com/Microsoft/monaco-editor) as it's core engine for providing a rich experience. It is being developed with Node.js + Express + React.

It was born on a particular necessity of using such software on any kind of platforms, which is not the case of VSCode (only runs in x64 Desktop OSes), by taking inspiration on [this article](https://medium.com/samsung-internet-dev/writing-software-using-a-phone-e71976f1f18d) to produce some alternative kind of software to run in platforms like ChromeOS, Android, Raspberry PI, etc.

![screenshot](./assets/screenshot.png)

## 1. Installation

    $ npm install -g wcode

## 2. Usage

    $ wcode [options] [<directory>=.]

    Options:
    -h, --help          Show help
    -a, --addr          Set the editor listening address [default: 127.0.0.1]
    -p, --port          Set the editor listening port number [default: 9876]
    --headless          Prevent local browser from open
    --ssl <keys-path>   Configures SSL encrpytion
    -v, --version       Show current version

    Examples:
    wcode                                       Open the project in the editor on current working directory
    wcode /path/to/project                      Open the project in the editor on default port
    wcode -p 8080 /path/to/project              Open the project in the editor on port 8080
    wcode --ssl path/to/keys /path/to/project   Open the project with SSL in the editor on default port

## 3. Keyboard shortcuts

<table>
  <tr>
    <td><b>Combination</b></td>
    <td><b>Action</b></td>
  </tr>
  <tr>
    <td>[ctrl + s] or [command + s]</td>
    <td>Save file</td>
  </tr>
  <tr>
    <td>[ctrl + w]</td>
    <td>Close file</td>
  </tr>
  <tr>
    <td>[alt + right]</td>
    <td>View the next file</td>
  </tr>
  <tr>
    <td>[alt + left]</td>
    <td>View the previous file</td>
  </tr>
</table>

## 4. Development

    $ git clone https://github.com/fmsouza/wcode.git
    $ cd wcode && npm install

## 5. Running

#### `npm start`

Runs the application in the address http://localhost:9876.
Wait a few seconds and the web application will be built and ready for using in the browser.

#### `npm run build`

Produce the production build.

#### `npm test`

Run the tests.

## 6. Contributing

PR's and issue reports are welcome. For further details, please read the terms at [CONTRIBUTING](./CONTRIBUTING.md).
