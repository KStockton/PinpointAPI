const router = require('express').Router();
const Users = require('../models/Users');
const bcrypt = require('bcrypt');

// register

router.post('/register', async(req, res) => {
  try {
    //generate  new password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // create user
    const newUser = new Users({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save user and send response
    const user = await newUser.save();
    res.status(200).json({id: user._id})
  }catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login

router.post('/login', async(req, res) => {
  try {
    //find user 
    const user = await Users.findOne({username: req.body.username});
    !user && res.status(400).json("Wrong username or password");

    // validate password
    const validPassword = await bcrypt.compare(req.body.password,user.password);
      !validPassword && res.status(400).json('Wrong username or password');

      res.status(200).json({id: user._id, username: user.username});

  }catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;