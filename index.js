const express = require("express");
const http = require("http");
const https = require("https");
const httpProxy = require("http-proxy");
const fs = require("fs");
const path = require("path");

const app = express();
const proxy = httpProxy.createServer({});

app.all("*", (req, res) => {
  const port = req.query.port || 3000;
  proxy.web(req, res, { target: `localhost:${port}`})
});

const credPath = process.env.CRED_FOLDER_PATH;
const options = {
  cert: fs.readFileSync(path.join(credPath, "chained.pem")),
  key: fs.readFileSync(path.join(credPath, "domain.key"))
};
console.log("starting http server");
http.createServer(app).listen(3000);
console.log("starting https server");
https.createServer(options, app).listen(443);