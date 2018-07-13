const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const app = express();
app.get("/", (req, res) => res.json("Reporting"));
app.get("/health", (req, res) => res.json("Reporting Health"));

const credPath = process.env.CRED_FOLDER_PATH;
const options = {
  cert: fs.readFileSync(`${credPath}/chained.pem`),
  key: fs.readFileSync(`${credPath}/domain.key`)
};
http.createServer(app).listen(80);
https.createServer(options, app).listen(443);