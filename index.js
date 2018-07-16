const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const app = express();
app.get("/", (req, res) => res.json(`Reporting from ${process.env.SERVER_ID}`));
app.get("/health", (req, res) => res.json(`Reporting Health ${process.env.SERVER_ID}`));

console.log("starting http server");
http.createServer(app).listen(80);