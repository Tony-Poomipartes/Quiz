const { Router } = require("express");
const router = Router();

const {
  mainController,
  tagController,
  levelController,
  quizController,
  userAuthController
} = require("./controllers");

const isLoggedIn = require("./middlewares/isLoggedIn");

function isAdmin(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).redirect("/login");
  }

  const user = req.app.locals.user;

  if (user.role !== "admin") {
    return res.status(404).render("404");
  }

  next();
}


router.get("/", mainController.renderHomePage);

router.get("/profile", isLoggedIn, mainController.renderUserProfilePage);

router.get("/tags", tagController.renderAllTagsPage);

router.get("/levels", isAdmin, levelController.renderLevelsPage);
router.post("/levels", isAdmin, levelController.handleCreateLevelForm);

router.get("/quiz/:id", quizController.renderQuizPage);

router.get("/login", userAuthController.renderLoginPage);
router.post("/login", userAuthController.handleLoginForm);

router.get("/signup", userAuthController.renderSignupPage);
router.post("/signup", userAuthController.handleSignupForm);

router.get("/logout", isLoggedIn, userAuthController.logoutAndRedirect);

module.exports = router;
