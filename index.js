const express = require("express");

const app = express();

app.get("/", (req, res) => res.json("Reporting"));
app.get("/health", (req, res) => res.json("Reporting Health"));
app.listen(80, () => console.log("listening at port 80"));