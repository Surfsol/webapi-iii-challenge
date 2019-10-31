// logger logs to the console the following information about each request: request method, request url, and a timestamp
// this middleware runs on every request made to the API
//custom middleware

module.exports=function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}], ${req.method}, ${req.path}`)
  
      next()
  }

