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
    })

    // save user and send response
    const user = await newUser.save();
    res.status(200).json(user._id)
  }catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
});


module.exports = router;