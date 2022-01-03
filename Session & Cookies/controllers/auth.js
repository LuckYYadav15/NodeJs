const cookieParser = require('cookie-parser');

exports.getLogin = (req, res, next) => {
    //console.log(req.get('Cookie').split(';')[1].trim().split('=')[1]);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.isLoggedIn
    });
};
exports.postLogin = (req, res, next) => {
    res.cookie('loggedIn=true');
    //res.setHeader('Set-Cookie', 'loggedIn=true');
    res.redirect('/');
};