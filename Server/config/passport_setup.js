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
    callbackURL:process.env.callBack_URL,
    clientID:process.env.clientID,
    clientSecret:process.env.clientSecret,
    Proxy:true
}, async(accessToken,refreshToken,profile,done) =>{


    //check if user exists
    User.findOne({googleId:profile.id}).then((currentUser) => {
        if (currentUser) {
           return done(null,currentUser);
        }else{
            //create new user, if it does not exists
            new User({
                username:profile.displayName,
                googleId:profile.id,
                email:profile._json.email,
                thumbnail:profile.photos.at(0).value
            }).save().then((newUser) => {
                done(null, newUser);
            }).catch(error => {
                console.log(error);
            })
        }
    });
} ) );