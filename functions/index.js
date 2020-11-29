const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/qsacco", (req, res) => {
  res.set("Cache-Control", "public, max-age=300 s-maxage=600");
  res.send(`Date is: ${Date.now()}`);
});

exports.app = functions.https.onRequest(app);
