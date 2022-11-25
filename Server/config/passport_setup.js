const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const User = require('../models/userModel');

//serialize user
passport.serializeUser((user,done) => {
    done(null, user._id);
 });
 
 
    
 
 passport.deserializeUser((id,done) => {
     User.findById(id).then((user) => {
         done(null, user)
     })
 })

passport.use(new GoogleStrategy( {
    //options for strategy
    callbackURL:"https://compatibility.onrender.com/auth/google/redirect",
    clientID:process.env.clientID,
    clientSecret:process.env.clientSecret
}, function(accessToken,refreshToken,profile,done){
    console.log('callback function fired!');
    console.log(profile);

    //check if user exists
    User.findOne({googleId:profile.id}).then((currentUser) => {
        if (currentUser) {
            console.log("user is:", currentUser);
            done(null,currentUser);
        }else{
            //create new user, if it does not exists
            new User({
                username:profile.displayName,
                googleId:profile.id,
                thumbnail:profile.photos.at(0).value
            }).save().then((newUser) => {
                console.log(newUser);
                done(null, newUser);
            })
        }
    })
} ) );