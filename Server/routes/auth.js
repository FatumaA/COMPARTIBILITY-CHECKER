const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post("/logout", (req,res) => {
    req.logOut()
    res.json( "User logged out sucessfully")
    console.log(`-------> User Logged out`)
 })


//auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile'],
    prompt: 'select_account'
}));

//callback route for google
router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    res.send(req.user)
    res.redirect('/');
});

module.exports = router;