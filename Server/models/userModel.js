const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type:String,
    },
    googleId:{
        type:String,
    },
    email:{
        type:String
    },
    thumbnail:{
        type:String,
    },
    facebookId:{
        type: String,
    },
    githubId:{
        type:String
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;