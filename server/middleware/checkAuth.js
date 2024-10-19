/*exports.isLoggedIn = function (req, res, next) {
  if(req.user) {
    next();
  } else {
    return res.status(401).send('Access Denied');
  }
};*/

// Ensure user is authenticated
/*app.use((req, res, next) => {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/login');
});*/
//Here is u cant access the dashboard after you log out
//so if(req.user){next();}