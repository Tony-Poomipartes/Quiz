function isLoggedIn(req, res, next) {
  const isConnected = !! req.session.userId;
  if (isConnected) {
    return next();
  }

  res.status(401).redirect("/login");
}

module.exports = isLoggedIn;
