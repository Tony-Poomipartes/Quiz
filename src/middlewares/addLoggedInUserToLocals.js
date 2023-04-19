const { User } = require("../models");

async function addLoggedInUserToLocals(req, res, next) {
  const userId = req.session.userId;

  const user = await User.findByPk(userId, { attributes: { exclude: ["password" ] }});


  req.app.locals.user = user;

  console.log(req.app === res.app);
  console.log(req.app.locals === res.locals);

  next();
}

module.exports = addLoggedInUserToLocals;
