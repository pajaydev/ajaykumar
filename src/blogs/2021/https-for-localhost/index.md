---
path: "/blog/2021/https-for-localhost"
date: "2021-02-02"
title: "Setup HTTPS for local development using node.js and express."
---

In this article we are going to test our site locally in https using [mkcert](https://github.com/FiloSottile/mkcert) in node & express app. mkcert is a great tool to automatically generate and install SSL certificates.

Make sure we have <code>node.js</code> installed in our machine. You can download it [here](https://nodejs.org/en/download/)

## 🔧 Installation & Steps

1. Install [Homebrew](https://brew.sh/) (package manager for mac os)

```bash
# only for mac users
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

2. Install [mkcert](https://github.com/FiloSottile/mkcert) to generate all TLS certificates.

**For mac**

```bash
brew install mkcert
brew install nss # if you use Firefox
```

**For windows** :
Follow this [instructions](https://github.com/FiloSottile/mkcert#windows) to install the mkcert.

3. Generate trusted cerificate locally

```bash
$ mkcert -install
# Created a new local CA
$ mkcert [domain name]
# In our case, we will use localhost
$ mkcert localhost
```

Above step will generate couple of files <code>[domainname]-key.pem</code>, <code>[domainname].pem</code>.

4. Create an node app and create server js file.

```bash
npm init
touch server.js
```

5. Install express js

```bash
npm install express
```

6. Copy these files created in step 3 <code>[domainname]-key.pem</code>, <code>[domainname].pem</code> and paste it in this folder.
7. Include this below code in server.js

```js
"use strict"
const https = require("https")
const express = require("express")
const fs = require("fs")
// load the self-signed certificates
const options = {
  key: fs.readFileSync("[domainname]-key.pem"),
  cert: fs.readFileSync("[domainname].pem"),
}
const app = express()
app.get("/", (req, res, next) => {
  res.send("Localhost hosted in https !")
})
https.createServer(options, app).listen(3000)
```

8. Start the server

```bash
node server.js
```

9. Test the application by opening the browser and hitting the URL

```
https://localhost:3000/
```

### 💽 Test output in the browser

<center>
  <i>Output</i>
  <img src="./localhost.png" alt="Test localhost in https"/>
</center>

## 📚 Reference

1. [mkcert official documentation](https://github.com/FiloSottile/mkcert)
2. [How to use local https](https://web.dev/how-to-use-local-https)
