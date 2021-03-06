// validateUserId()
// validateUserId validates the user id on every request that expects a user id parameter
// if the id parameter is valid, store that user object as req.user
// if the id parameter does not match any user id in the database, cancel
//  the request and respond with status 400 and { message: "invalid user id" }




module.exports = function gate(req, res, next){
    const id = req.headers.id
    if(id != ){
        res.status(400).json({ message: "invalid user id" })
    }
}