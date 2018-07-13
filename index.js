const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const app = express();
app.get("/", (req, res) => res.json("Reporting"));
app.get("/health", (req, res) => res.json("Reporting Health"));

const credPath = process.env.CRED_FOLDER_PATH;
const options = {
  cert: fs.readFileSync(path.join(credPath, "chained.pem")),
  key: fs.readFileSync(path.join(credPath, "domain.key"))
};
console.log("starting http server");
http.createServer(app).listen(80);
console.log("starting https server");
https.createServer(options, app).listen(443);