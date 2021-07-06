require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const db = require('./backend/db');
const userRouter = require('./backend/userRouter');
const app = express();

const PORT = process.env.PORT || 5000;

db.connectToDB();

app.use(express.json());
app.use(cors())

app.use("/db", userRouter);
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req,res) => res.sendFile(path.join(__dirname), './client/build'));

app.listen(PORT, () => console.log("You are now listening on", PORT));