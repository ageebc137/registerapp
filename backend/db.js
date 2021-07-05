
const mongoose = require('mongoose');

async function connectToDB() {
    mongoose.connect(process.env.DB_HOSTNAME, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("You are now connected to MongoDB!");
    });
}

module.exports = { connectToDB };