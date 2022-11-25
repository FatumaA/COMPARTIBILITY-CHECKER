const express = require('express');
const passport = require('passport');
const router = express.Router();



router.get('/logout', function(req, res, next) {
    //handle with passport
    req.logout(function(err) {
      if (err) { return next(err); }
      res.status(200).json("Logged out sucessfully")
    });
  });


//auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile', 'email'],
    prompt: 'select_account'
}));

//callback route for google
router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router;