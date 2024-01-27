// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password

    
}

module.exports = adminMiddleware;