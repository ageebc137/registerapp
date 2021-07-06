const express = require('express');
const User = require('./User.js');
const router = express.Router();

router.get("/all", async (req,res) => {

    try {
        const users = await User.find();
        console.log("User list retrieved");
        res.send(users);
    }catch(err) {
        console.error(err);
        res.sendStatus(400);
    }
   
});

router.post("/add", async (req, res) => {
   
    console.log(req.body);
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        address1: req.body.address1, 
        address2: req.body.address2,
        city: req.body.city, 
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        dateAdded: new Date()
     });

     await user.save((err) => {
         if (err) return res.sendStatus(400);
         console.log("User added");
     });

     res.sendStatus(200);
})

module.exports = router;