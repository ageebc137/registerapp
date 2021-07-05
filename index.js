require('dotenv').config();
const express = require('express');
const db = require('./backend/db');
const app = express();
const PORT = process.env.PORT || 3000;

db.connectToDB();

app.listen(PORT, () => console.log("You are now listening on", PORT));