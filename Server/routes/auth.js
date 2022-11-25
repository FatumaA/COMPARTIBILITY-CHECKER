const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post("/logout", (req,res) => {
    req.logOut()
    console.log(`-------> User Logged out`)
 })

//auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile'],
    prompt: 'select_account'
}));

//callback route for google
router.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    console.log(req.user);
});

module.exports = router;