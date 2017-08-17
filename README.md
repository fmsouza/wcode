# Monaco Web IDE (alpha)

Monaco Web IDE is a rich code editor which runs inside a browser. It's totally inspired on [Visual Studio Code](https://github.com/Microsoft/vscode), and also uses [Monaco-editor](https://github.com/Microsoft/monaco-editor) as it's core engine for providing a rich experience. It is being developed with Node.js + Express + React.

It was born on a particular necessity of using such software on any kind of platforms, which is not the case of VSCode (only runs in x64 Desktop OSes), by taking inspiration on [this article](https://medium.com/samsung-internet-dev/writing-software-using-a-phone-e71976f1f18d) to produce some alternative kind of software to run in platforms like Android, Raspberry PI, etc.

Currently it still in _alpha stage_, so expect lots and lots of bugs. It is not ready for use it. It's still more like a _proof of concept_, actually.

![screenshot](./assets/screenshot.png)

## 1. Installation

```bash
$ git clone https://github.com/fmsouza/monaco-web-ide
$ cd monaco-web-ide && npm install
```

## 2. Running

#### `npm run server`

Runs the Express server in http://localhost:8080, which works as a bridge between the web application and the Operating System to allow you to modify your files.

#### `npm start`

Runs the web application in the server address http://localhost:3000

## 3. Contributing

All PR's are welcome.

## 4. Donate

Bitcoin: 3DgNhxV1umz7HCdigvyY18kEsNXW9L4Nx2

Paypal: 
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1">
</form>
