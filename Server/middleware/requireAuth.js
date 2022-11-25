const authCheck = (req,res,next) => {
    if (!req.user) {
        //if user is not logged in
       res.send("Authentication is required to access this routes")
    }else{
        //if logged in
        next();
    }
}

module.exports = authCheck;